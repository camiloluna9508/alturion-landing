import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { CONTACT } from '../../data/contact';

export default function Footer() {
  return (
    <footer className="bg-abyssal border-t border-blueprint">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          <div>
            <div className="w-10 h-10 bg-electric-cyan rounded-full flex items-center justify-center mb-4">
              <span className="text-abyssal text-[11px] font-bold tracking-tight">AL</span>
            </div>
            <p className="text-steel-gray text-[14px] leading-relaxed">
              Ingeniería que conecta. Construimos lo que mueve el país.
            </p>
            <p className="text-steel-gray/40 text-[11px] mt-2 font-mono tracking-wider">
              TECNOLOGÍA | TELECOMUNICACIONES | ENERGÍA | INFRAESTRUCTURA
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[12px] text-electric-cyan mb-4 tracking-wider">CONTACTO</h4>
            <ul className="space-y-3 text-[14px] text-steel-gray">
              <li className="flex items-center gap-2">
                <MapPin size={13} className="text-electric-cyan shrink-0" />
                {CONTACT.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-electric-cyan shrink-0" />
                {CONTACT.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-electric-cyan shrink-0" />
                {CONTACT.email}
              </li>
              <li className="flex items-center gap-2">
                <Globe size={13} className="text-electric-cyan shrink-0" />
                {CONTACT.website}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[12px] text-electric-cyan mb-4 tracking-wider">VERTICALES</h4>
            <ul className="space-y-2 text-[14px] text-steel-gray">
              <li>Infraestructura</li>
              <li>Energía</li>
              <li>Telecomunicaciones</li>
              <li>Tecnología</li>
              <li className="text-steel-gray/40">Servicios Profesionales</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-blueprint flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-steel-gray/40 font-mono">
            &copy; 2026 ALTURION. Todos los derechos reservados.
          </p>
          <p className="text-[12px] text-steel-gray/20 font-mono">
            Ingeniería integral de nueva generación
          </p>
        </div>
      </div>
    </footer>
  );
}
