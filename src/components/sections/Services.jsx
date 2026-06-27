import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionBadge from '../ui/SectionBadge';
import { verticals, professionalServices } from '../../data/services';

const VERTICAL_IMAGES = [
  'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=600&q=80',
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
];

function VerticalCard({ vertical, index, image }) {
  const { ref, isInView } = useScrollReveal();
  const Icon = vertical.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[329/246] rounded-t-2xl overflow-hidden">
        <img
          src={image}
          alt={vertical.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-glass via-carbon-glass/40 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="font-mono text-5xl font-bold text-ice-white/20">{vertical.number}</span>
          <Icon size={20} style={{ color: vertical.color }} />
        </div>

        <div className="absolute bottom-4 left-4">
          <div className="bg-carbon-glass/80 backdrop-blur-sm rounded-full h-9 w-9 group-hover:w-[140px] transition-all duration-300 ease-in-out flex items-center overflow-hidden px-2.5">
            <span className="text-[13px] font-medium text-ice-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 whitespace-nowrap mr-2">
              Ver más
            </span>
            <ArrowRight size={14} className="text-electric-cyan shrink-0 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <div className="p-6 bg-carbon-glass rounded-b-2xl border border-t-0 border-blueprint group-hover:border-electric-cyan/20 transition-colors duration-300">
        <h3 className="text-xl font-semibold mb-3">{vertical.title}</h3>
        <p className="text-steel-gray text-sm leading-relaxed mb-4">{vertical.description}</p>

        {vertical.specs && (
          <div className="border-t border-blueprint/50 pt-4 mt-4">
            <p className="font-mono text-[10px] text-steel-gray/40 tracking-widest mb-3">
              ━━ ESPECIFICACIONES
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {vertical.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between items-baseline gap-1">
                  <span className="font-mono text-[10px] text-steel-gray/50 truncate">{spec.label}</span>
                  <span className="font-mono text-[11px] text-electric-cyan font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="servicios" className="bg-carbon-glass pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionBadge number="2" label="Verticales de servicio" />

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ice-white mb-10 sm:mb-14 lg:mb-16"
        >
          Nuestras verticales
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 mb-16">
          {verticals.map((v, i) => (
            <VerticalCard key={v.id} vertical={v} index={i} image={VERTICAL_IMAGES[i]} />
          ))}
        </div>

        <div className="p-6 sm:p-8 bg-slate-depth rounded-2xl border border-blueprint">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 rounded-full bg-signal-amber text-abyssal text-[11px] font-semibold flex items-center justify-center">+</span>
            <span className="text-[12px] sm:text-[13px] font-medium border border-blueprint rounded-full px-3 py-1 text-steel-gray">
              Capa transversal
            </span>
          </div>
          <h3 className="text-xl font-medium text-ice-white mb-2">Servicios Profesionales</h3>
          <p className="text-steel-gray text-sm mb-8 max-w-2xl leading-relaxed">
            Acompañamos el ciclo completo con capacidad técnica propia para diseñar, supervisar y auditar bajo estándares ISO y normativa colombiana vigente.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="flex items-start gap-3">
                  <Icon size={20} className="text-signal-amber shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-ice-white mb-1">{service.title}</h4>
                    <p className="text-xs text-steel-gray">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
