import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
    ...options,
  });

  return { ref, isInView };
}

export function useScrollProgress() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-10% 0px -10% 0px',
  });

  return { ref, isInView };
}
