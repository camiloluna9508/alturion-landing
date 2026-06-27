import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionBadge from '../ui/SectionBadge';
import { pillars } from '../../data/services';
import { certifications } from '../../data/projects';
import { Shield, CheckCircle, Leaf, BadgeCheck } from 'lucide-react';

const ICONS = [Shield, CheckCircle, Leaf];
const COLORS = ['#00D4FF', '#F59E0B', '#34D399'];

export default function Commitment() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="compromiso" className="bg-abyssal pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionBadge number="5" label="Compromiso" />

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ice-white mb-6"
        >
          Tres pilares,{' '}
          <span className="text-electric-cyan">un solo propósito</span>
        </motion.h2>
        <p className="text-steel-gray max-w-2xl mb-12 sm:mb-16 leading-relaxed text-[15px]">
          Ejecutamos cada proyecto con precisión técnica, control y trazabilidad en cada etapa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {pillars.map((pillar, index) => {
            const Icon = ICONS[index];
            const color = COLORS[index];

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-8 bg-carbon-glass rounded-2xl border border-blueprint hover:border-electric-cyan/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: color + '20' }}>
                    <Icon size={18} style={{ color }} />
                  </span>
                  <h3 className="text-lg font-medium text-ice-white">{pillar.title}</h3>
                </div>
                <ul className="space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[14px] text-steel-gray">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 bg-slate-depth rounded-2xl border border-blueprint"
        >
          <div className="flex items-center gap-2 mb-4">
            <BadgeCheck size={16} className="text-electric-cyan" />
            <span className="font-mono text-[10px] text-steel-gray/50 tracking-widest">
              CERTIFICACIONES Y MARCOS NORMATIVOS
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-3 py-1.5 rounded-full border border-blueprint text-[11px] font-mono text-steel-gray/70 hover:border-electric-cyan/30 hover:text-electric-cyan transition-colors duration-200"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 text-steel-gray italic text-[17px] sm:text-[19px] max-w-3xl border-l-2 border-electric-cyan pl-6 leading-relaxed"
        >
          "Más que entregar soluciones, construimos relaciones basadas en
          confianza, seguridad y responsabilidad con el entorno."
        </motion.blockquote>
      </div>
    </section>
  );
}
