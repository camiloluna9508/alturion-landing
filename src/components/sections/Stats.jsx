import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Counter from '../ui/Counter';
import { stats } from '../../data/projects';

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <Counter
              key={stat.label}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
