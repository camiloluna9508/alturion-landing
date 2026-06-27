import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Counter from '../ui/Counter';
import { stats, certifications } from '../../data/projects';

export default function Stats() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="bg-abyssal py-20 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-electric-cyan leading-none">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
              {stat.unit && (
                <span className="font-mono text-[11px] text-signal-amber tracking-wider mt-1 block">
                  {stat.unit}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-blueprint/40 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="font-mono text-[10px] text-steel-gray/40 tracking-widest">
              ESTÁNDARES DE OPERACIÓN
            </span>
            {certifications.map((cert) => (
              <span
                key={cert}
                className="font-mono text-[11px] text-steel-gray/50 tracking-wider"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
