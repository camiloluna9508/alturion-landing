import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionBadge from '../ui/SectionBadge';
import { projects } from '../../data/projects';

const FILTERS = ['todos', 'infraestructura', 'energia', 'telecomunicaciones', 'tecnologia'];

const PROJECT_IMAGES = {
  'bogota-aeropuerto': 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&q=80',
  'cctv-caribe': 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80',
  'subestacion-bogota': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
  'medellin-lpr': 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80',
  'invias-nacional': 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80',
  'dali-tunel': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  'escuelas-5g': 'https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80',
  'via-medellin-mar': 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&q=80',
  'solar-flotante': 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
};

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[329/246] rounded-2xl overflow-hidden bg-slate-depth">
        <img
          src={PROJECT_IMAGES[project.id] || ''}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyssal/60 via-transparent to-transparent" />

        <div className="absolute top-3 right-3 flex gap-1.5">
          {project.verticals.slice(0, 2).map((v) => (
            <span key={v} className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-abyssal/60 backdrop-blur-sm text-ice-white/80">
              {v}
            </span>
          ))}
        </div>

        <div className="absolute bottom-4 left-4">
          <div className="bg-electric-cyan h-9 w-9 rounded-full group-hover:w-[148px] transition-all duration-300 ease-in-out flex items-center overflow-hidden px-2.5">
            <span className="text-[13px] font-medium text-abyssal opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 whitespace-nowrap mr-2">
              Ver proyecto
            </span>
            <ArrowRight size={14} className="text-abyssal shrink-0 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
        </div>

        {project.metrics.length > 0 && (
          <div className="absolute bottom-4 right-4 flex gap-3">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="text-right">
                <div className="font-mono text-sm font-bold text-ice-white">{m.value}</div>
                <div className="text-[9px] text-ice-white/60">{m.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 text-[12px] text-steel-gray/60 font-mono mt-4">
        <Calendar size={11} />
        <span>{project.year}</span>
        <span>·</span>
        <MapPin size={11} />
        <span>{project.location}</span>
      </div>
      <h3 className="text-[14px] sm:text-[15px] font-semibold text-ice-white mt-1 group-hover:text-electric-cyan transition-colors">
        {project.title}
      </h3>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('todos');
  const { ref, isInView } = useScrollReveal();

  const filtered =
    filter === 'todos'
      ? projects
      : projects.filter((p) => p.verticals.includes(filter));

  return (
    <section id="proyectos" className="bg-slate-depth pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionBadge number="4" label="Proyectos destacados" />

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ice-white mb-10 sm:mb-14 lg:mb-16"
        >
          Nuestros proyectos
        </motion.h2>

        <div className="flex flex-wrap gap-2 mb-10 sm:mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                filter === f
                  ? 'bg-electric-cyan text-abyssal'
                  : 'bg-carbon-glass text-steel-gray border border-blueprint hover:border-electric-cyan/30 hover:text-ice-white'
              }`}
            >
              {f === 'todos' ? 'Todos' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
