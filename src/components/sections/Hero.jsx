import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TextRoll from '../ui/TextRoll';

function ShaderBackground() {
  const [ShaderComponents, setShaderComponents] = useState(null);

  useEffect(() => {
    import('shaders/react')
      .then((mod) => setShaderComponents(mod))
      .catch(() => setShaderComponents(null));
  }, []);

  if (!ShaderComponents) {
    return <div className="absolute inset-0 bg-gradient-to-br from-abyssal via-slate-depth to-abyssal" />;
  }

  const { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } = ShaderComponents;

  return (
    <Shader style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Swirl colorA="#0A1628" colorB="#020B18" detail={1.7} />
      <ChromaFlow
        baseColor="#020B18"
        downColor="#00D4FF"
        leftColor="#00D4FF"
        rightColor="#F59E0B"
        upColor="#00D4FF"
        momentum={13}
        radius={3.5}
      />
      <FlutedGlass
        aberration={0.61}
        angle={31}
        frequency={8}
        highlight={0.12}
        highlightSoftness={0}
        lightAngle={-90}
        refraction={4}
        shape="rounded"
        softness={1}
        speed={0.15}
      />
      <FilmGrain strength={0.05} />
    </Shader>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-abyssal overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ width: '100%', height: '100%' }}>
        <ShaderBackground />
      </div>

      <div className="flex-1" />

      <div className="relative z-20 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[13px] sm:text-[14px] text-steel-gray tracking-wide mb-5 sm:mb-8 font-mono"
        >
          ALTURION — Ingeniería Integral
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ice-white"
        >
          Construimos la infraestructura
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          que conecta la{' '}
          <span className="text-electric-cyan">energía</span> con
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          el <span className="text-signal-amber">dato</span>, la obra física
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          con la{' '}
          <span className="text-electric-cyan">inteligencia digital</span>.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start gap-4 sm:gap-5"
        >
          <a
            href="#contacto"
            className="group bg-electric-cyan hover:bg-electric-cyan/90 text-abyssal text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 flex items-center gap-2 transition-colors duration-300"
          >
            <TextRoll text="Iniciar proyecto" />
            <span className="w-7 h-7 sm:w-8 sm:h-8 bg-abyssal rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
              <ArrowRight size={14} className="text-electric-cyan" />
            </span>
          </a>

          <a
            href="#servicios"
            className="group border border-blueprint hover:border-electric-cyan/40 text-ice-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 flex items-center gap-2 transition-colors duration-300"
          >
            <TextRoll text="Nuestras verticales" />
            <span className="w-7 h-7 sm:w-8 sm:h-8 bg-blueprint/30 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
              <ArrowRight size={14} className="text-electric-cyan" />
            </span>
          </a>

          <div className="flex items-center gap-3 px-4 py-2 bg-carbon-glass/60 backdrop-blur-sm rounded-full border border-blueprint/50">
            <span className="font-mono text-[13px] sm:text-[14px] font-medium text-ice-white">
              17+ años
            </span>
            <span className="text-[11px] bg-electric-cyan text-abyssal px-2 py-0.5 rounded font-medium">
              Colombia
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
