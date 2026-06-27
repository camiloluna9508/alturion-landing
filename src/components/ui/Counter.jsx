import { useEffect, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Counter({ value, prefix = '', suffix = '', label }) {
  const { ref, isInView } = useScrollReveal();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-3xl md:text-4xl font-bold text-electric-cyan">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-steel-gray mt-2">{label}</div>
    </div>
  );
}
