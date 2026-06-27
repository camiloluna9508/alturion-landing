import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SectionBadge({ number, label }) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-6 sm:mb-8"
    >
      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-electric-cyan text-abyssal text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
        {number}
      </span>
      <span className="text-[12px] sm:text-[13px] font-medium border border-blueprint rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-steel-gray">
        {label}
      </span>
    </motion.div>
  );
}
