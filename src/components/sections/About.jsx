import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionBadge from '../ui/SectionBadge';
import TextRoll from '../ui/TextRoll';

export default function About() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="nosotros" className="bg-slate-depth pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionBadge number="1" label="Quiénes somos" />

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ice-white mb-12 sm:mb-16 lg:mb-28"
        >
          Una nueva generación de ingeniería,
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          entregando{' '}
          <span className="text-electric-cyan">resultados reales</span> en
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          infraestructura y más allá.
        </motion.h2>

        <div className="lg:hidden flex flex-col gap-8">
          <div>
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-steel-gray mb-6">
              A través de ingeniería de precisión, soluciones integrales e
              innovación constante, ayudamos a Colombia a construir la
              infraestructura que necesita para el futuro. Desde la fibra óptica
              hasta la planta solar, desde el poste hasta el dato.
            </p>
            <a
              href="#servicios"
              className="group inline-flex items-center gap-2 bg-electric-cyan hover:bg-electric-cyan/90 text-abyssal text-[13px] sm:text-[14px] font-medium rounded-full pl-5 pr-2 py-2 transition-colors duration-300"
            >
              <TextRoll text="Conocer verticales" />
              <span className="w-7 h-7 bg-abyssal rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowRight size={14} className="text-electric-cyan" />
              </span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="sm:w-[45%]">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                alt="Equipo de ingeniería"
                loading="lazy"
              className="w-full aspect-[438/346] object-cover rounded-xl sm:rounded-2xl"
              />
            </div>
            <div className="sm:w-[55%]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Infraestructura vial"
                loading="lazy"
              className="w-full aspect-[900/600] object-cover rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8">
          <div className="self-end">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
              alt="Equipo de ingeniería"
              loading="lazy"
              className="w-full aspect-[438/346] object-cover rounded-2xl"
            />
          </div>
          <div className="self-start flex flex-col items-end">
            <p className="text-[16px] xl:text-[18px] leading-[1.65] font-medium text-steel-gray whitespace-nowrap mb-6">
              Soluciones integrales de ingeniería
              <br />
              con cobertura nacional en más de
              <br />
              16 departamentos de Colombia.
              <br />
              Diseñamos. Construimos. Integramos.
            </p>
            <a
              href="#servicios"
              className="group inline-flex items-center gap-2 bg-electric-cyan hover:bg-electric-cyan/90 text-abyssal text-[14px] font-medium rounded-full pl-6 pr-2 py-2 transition-colors duration-300"
            >
              <TextRoll text="Conocer verticales" />
              <span className="w-8 h-8 bg-abyssal rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowRight size={14} className="text-electric-cyan" />
              </span>
            </a>
          </div>
          <div className="self-end">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Infraestructura vial"
              loading="lazy"
              className="w-full aspect-[3/2] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
