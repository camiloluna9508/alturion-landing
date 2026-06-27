import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as d3 from 'd3';
import { MapPin, Calendar, ArrowRight, X } from 'lucide-react';
import colombiaGeo from '../../data/colombia.geo.json';
import { departmentProjects } from '../../data/departmentProjects';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionBadge from '../ui/SectionBadge';
import TextRoll from '../ui/TextRoll';

function ProjectPanel({ department, data, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.3 }}
      className="absolute top-0 right-0 w-full sm:w-[380px] h-full bg-carbon-glass/95 backdrop-blur-md border-l border-blueprint overflow-y-auto z-30 rounded-r-2xl"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-electric-cyan" />
            <h3 className="text-lg font-medium text-ice-white">{data.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-depth border border-blueprint flex items-center justify-center text-steel-gray hover:text-ice-white hover:border-electric-cyan/30 transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        {data.coord && (
          <p className="text-[10px] font-mono text-steel-gray/40 mb-2">{data.coord}</p>
        )}
        <p className="text-[12px] font-mono text-electric-cyan tracking-wider mb-4">
          {data.projects.length} PROYECTO{data.projects.length > 1 ? 'S' : ''} EJECUTADO{data.projects.length > 1 ? 'S' : ''}
        </p>

        <div className="space-y-4">
          {data.projects.map((project, i) => (
            <div key={i} className="bg-slate-depth rounded-xl border border-blueprint overflow-hidden">
              {project.image && (
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-depth via-transparent to-transparent" />
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-abyssal/70 backdrop-blur-sm rounded-full px-2 py-0.5">
                    <Calendar size={10} className="text-electric-cyan" />
                    <span className="text-[10px] font-mono text-ice-white/80">{project.year}</span>
                  </div>
                </div>
              )}
              <div className="p-4">
                <h4 className="text-[14px] font-medium text-ice-white mb-2">{project.title}</h4>
                <p className="text-[12px] text-steel-gray leading-relaxed">{project.metrics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MapSVG({ onDepartmentClick, hoveredDept, setHoveredDept, selectedDept, onRendered }) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    const projection = d3.geoMercator().fitSize(
      [width * 0.85, height * 0.9],
      colombiaGeo
    );
    const center = projection.translate();
    projection.translate([center[0] + width * 0.05, center[1] + height * 0.03]);

    const path = d3.geoPath().projection(projection);

    const g = svg.append('g');

    g.selectAll('path')
      .data(colombiaGeo.features)
      .join('path')
      .attr('d', path)
      .attr('fill', (d) => {
        const name = d.properties.DPTO_CNMBR;
        const hasProjects = departmentProjects[name];
        if (selectedDept === name) return '#00D4FF';
        if (hasProjects) return '#0F2035';
        return '#0A1628';
      })
      .attr('stroke', (d) => {
        const name = d.properties.DPTO_CNMBR;
        if (selectedDept === name) return '#00D4FF';
        if (departmentProjects[name]) return '#1A3A5C';
        return '#0F1D2F';
      })
      .attr('stroke-width', (d) => {
        const name = d.properties.DPTO_CNMBR;
        return selectedDept === name ? 2 : 0.8;
      })
      .attr('cursor', (d) => departmentProjects[d.properties.DPTO_CNMBR] ? 'pointer' : 'default')
      .on('mouseenter', function (event, d) {
        const name = d.properties.DPTO_CNMBR;
        setHoveredDept(name);
        if (departmentProjects[name] && selectedDept !== name) {
          d3.select(this)
            .transition()
            .duration(200)
            .attr('fill', '#1A3A5C')
            .attr('stroke', '#00D4FF')
            .attr('stroke-width', 1.5);
        }
      })
      .on('mouseleave', function (event, d) {
        const name = d.properties.DPTO_CNMBR;
        setHoveredDept(null);
        if (selectedDept !== name) {
          d3.select(this)
            .transition()
            .duration(200)
            .attr('fill', departmentProjects[name] ? '#0F2035' : '#0A1628')
            .attr('stroke', departmentProjects[name] ? '#1A3A5C' : '#0F1D2F')
            .attr('stroke-width', 0.8);
        }
      })
      .on('click', function (event, d) {
        const name = d.properties.DPTO_CNMBR;
        if (departmentProjects[name]) {
          onDepartmentClick(name);
        }
      });

    onRendered();
  }, [selectedDept]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <svg ref={svgRef} className="w-full h-full" role="img" aria-label="Mapa interactivo de proyectos de Alturion en Colombia" />
    </div>
  );
}

export default function ColombiaMap() {
  const [selectedDept, setSelectedDept] = useState(null);
  const [hoveredDept, setHoveredDept] = useState(null);
  const [svgRendered, setSvgRendered] = useState(false);
  const { ref, isInView } = useScrollReveal();

  const activeDeptData = selectedDept ? departmentProjects[selectedDept] : null;
  const hoveredData = hoveredDept ? departmentProjects[hoveredDept] : null;

  return (
    <section className="bg-carbon-glass pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionBadge number="3" label="Cobertura nacional" />

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ice-white mb-4"
        >
          Mapa de proyectos
        </motion.h2>
        <p className="text-steel-gray text-[15px] mb-10 sm:mb-14 max-w-2xl">
          Selecciona un departamento destacado para ver los proyectos ejecutados en la zona.
        </p>

        <div className="relative bg-slate-depth rounded-2xl border border-blueprint overflow-hidden" style={{ height: 'clamp(400px, 60vh, 700px)' }}>
          <div
            className="absolute inset-0 flex items-center justify-center bg-slate-depth z-10 transition-opacity duration-500"
            style={{ opacity: svgRendered ? 0 : 1, pointerEvents: svgRendered ? 'none' : 'auto' }}
          >
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-blueprint border-t-electric-cyan rounded-full animate-spin mx-auto mb-3" />
              <p className="text-steel-gray text-sm font-mono">Cargando mapa...</p>
            </div>
          </div>

          <MapSVG
            onDepartmentClick={(name) => setSelectedDept(selectedDept === name ? null : name)}
            hoveredDept={hoveredDept}
            setHoveredDept={setHoveredDept}
            selectedDept={selectedDept}
            onRendered={() => setSvgRendered(true)}
          />

          <AnimatePresence>
            {hoveredDept && !selectedDept && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-4 left-4 bg-carbon-glass/90 backdrop-blur-sm rounded-xl border border-blueprint px-4 py-3 z-20 pointer-events-none"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-electric-cyan" />
                  <span className="text-[14px] font-medium text-ice-white">
                    {hoveredData ? hoveredData.name : hoveredDept}
                  </span>
                </div>
                {hoveredData ? (
                  <>
                    {hoveredData.coord && (
                      <p className="text-[10px] text-steel-gray/40 font-mono mt-1">{hoveredData.coord}</p>
                    )}
                    <p className="text-[11px] text-electric-cyan font-mono mt-0.5">
                      {hoveredData.projects.length} proyecto{hoveredData.projects.length > 1 ? 's' : ''} — Click para ver
                    </p>
                  </>
                ) : (
                  <p className="text-[11px] text-steel-gray/60 font-mono mt-1">Sin proyectos registrados</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {activeDeptData && (
              <ProjectPanel
                department={selectedDept}
                data={activeDeptData}
                onClose={() => setSelectedDept(null)}
              />
            )}
          </AnimatePresence>

          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#0F2035] border border-[#1A3A5C]" />
              <span className="text-[11px] text-steel-gray">Con proyectos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#0A1628] border border-[#0F1D2F]" />
              <span className="text-[11px] text-steel-gray/50">Sin datos</span>
            </div>
          </div>
        </div>

        <div className="sr-only">
          <h3>Departamentos con proyectos:</h3>
          <ul>
            {Object.entries(departmentProjects).map(([key, data]) => (
              <li key={key}>
                <button onClick={() => setSelectedDept(key)}>
                  {data.name}: {data.projects.length} proyecto{data.projects.length > 1 ? 's' : ''}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-steel-gray text-[14px]">
            <span className="text-electric-cyan font-mono font-bold">16+</span> departamentos con cobertura operativa ·{' '}
            <span className="text-signal-amber font-mono font-bold">40+</span> proyectos ejecutados
          </p>
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 bg-electric-cyan hover:bg-electric-cyan/90 text-abyssal text-[14px] font-medium rounded-full pl-6 pr-2 py-2 transition-colors duration-300"
          >
            <TextRoll text="Ver todos los proyectos" />
            <span className="w-7 h-7 bg-abyssal rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
              <ArrowRight size={14} className="text-electric-cyan" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
