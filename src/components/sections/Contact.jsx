import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionBadge from '../ui/SectionBadge';
import TextRoll from '../ui/TextRoll';
import { CONTACT } from '../../data/contact';

export default function Contact() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="contacto" className="bg-slate-depth pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionBadge number="6" label="Contacto" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ice-white mb-6">
              Hablemos de su{' '}
              <span className="text-electric-cyan">próximo proyecto</span>
            </h2>
            <p className="text-steel-gray mb-10 leading-relaxed text-[15px]">
              Estamos preparados para operar a la escala y con el estándar que
              las exigencias del mercado demandan.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: MapPin, label: 'Dirección', value: CONTACT.address },
                { icon: Phone, label: 'Teléfono', value: CONTACT.phone },
                { icon: Mail, label: 'Correo', value: CONTACT.email },
                { icon: Globe, label: 'Web', value: CONTACT.website },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-electric-cyan" />
                  </div>
                  <div>
                    <p className="text-[12px] text-steel-gray/60 font-mono">{label}</p>
                    <p className="text-[14px] text-ice-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`mailto:${CONTACT.email}`}
              className="group inline-flex items-center gap-2 bg-electric-cyan hover:bg-electric-cyan/90 text-abyssal text-[14px] font-medium rounded-full pl-6 pr-2 py-2.5 transition-colors duration-300"
            >
              <TextRoll text="Enviar correo directo" />
              <span className="w-8 h-8 bg-abyssal rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowRight size={14} className="text-electric-cyan" />
              </span>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
            className="p-6 sm:p-8 bg-carbon-glass rounded-2xl border border-blueprint space-y-5"
          >
            <div>
              <label className="block text-[12px] text-steel-gray/60 font-mono mb-2">Nombre / Empresa</label>
              <input
                type="text"
                className="w-full bg-slate-depth border border-blueprint rounded-xl px-4 py-3 text-[14px] text-ice-white placeholder-steel-gray/40 focus:outline-none focus:border-electric-cyan/50 transition-colors"
                placeholder="Su nombre o razón social"
              />
            </div>
            <div>
              <label className="block text-[12px] text-steel-gray/60 font-mono mb-2">Correo electrónico</label>
              <input
                type="email"
                className="w-full bg-slate-depth border border-blueprint rounded-xl px-4 py-3 text-[14px] text-ice-white placeholder-steel-gray/40 focus:outline-none focus:border-electric-cyan/50 transition-colors"
                placeholder="correo@empresa.com"
              />
            </div>
            <div>
              <label className="block text-[12px] text-steel-gray/60 font-mono mb-2">Tipo de proyecto</label>
              <select className="w-full bg-slate-depth border border-blueprint rounded-xl px-4 py-3 text-[14px] text-steel-gray focus:outline-none focus:border-electric-cyan/50 transition-colors">
                <option value="">Seleccione una vertical</option>
                <option value="infraestructura">Infraestructura</option>
                <option value="energia">Energía</option>
                <option value="telecomunicaciones">Telecomunicaciones</option>
                <option value="tecnologia">Tecnología</option>
                <option value="integral">Proyecto integral</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] text-steel-gray/60 font-mono mb-2">Mensaje</label>
              <textarea
                rows={4}
                className="w-full bg-slate-depth border border-blueprint rounded-xl px-4 py-3 text-[14px] text-ice-white placeholder-steel-gray/40 focus:outline-none focus:border-electric-cyan/50 transition-colors resize-none"
                placeholder="Cuéntenos sobre su proyecto..."
              />
            </div>
            <button
              type="submit"
              className="group w-full bg-electric-cyan text-abyssal text-[14px] font-medium rounded-full pl-6 pr-3 py-3 flex items-center justify-center gap-2 hover:bg-electric-cyan/90 transition-colors duration-300"
            >
              <TextRoll text="Enviar consulta" />
              <span className="w-7 h-7 bg-abyssal rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowRight size={14} className="text-electric-cyan" />
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
