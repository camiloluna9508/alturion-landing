import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Clock } from 'lucide-react';
import TextRoll from '../ui/TextRoll';

const NAV_ITEMS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString('es-CO', {
        timeZone: 'America/Bogota',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTime(now);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="flex items-center gap-1.5 text-[13px] text-steel-gray">
      <Clock size={14} />
      {time} Colombia
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-3">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-abyssal/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center justify-between border border-blueprint/50">
            <div className="flex items-center gap-6">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-electric-cyan rounded-full flex items-center justify-center shrink-0">
                <span className="text-abyssal text-[11px] font-bold tracking-tight">AL</span>
              </a>

              <div className="hidden md:flex items-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-[14px] text-steel-gray hover:text-ice-white transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <span className="text-[13px] text-steel-gray hidden lg:block">
                Proyectos activos Q1 2026
              </span>
              <LiveClock />
              <a
                href="#contacto"
                className="group bg-electric-cyan text-abyssal text-[13px] font-medium rounded-full pl-5 pr-2 py-2 flex items-center gap-2"
              >
                <TextRoll text="Hablemos" />
                <span className="w-6 h-6 bg-abyssal rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <ArrowRight size={12} className="text-electric-cyan" />
                </span>
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="md:hidden bg-electric-cyan text-abyssal rounded-full w-9 h-9 flex items-center justify-center"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden" id="mobile-menu" role="dialog" aria-label="Menú de navegación">
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" onClick={() => setOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-slate-depth rounded-t-2xl mx-3 mb-3 p-6 transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] border border-blueprint">
            <div className="flex items-center gap-2 mb-6">
              <LiveClock />
            </div>
            <div className="flex flex-col gap-4 mb-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[28px] font-medium text-ice-white hover:text-electric-cyan transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="group w-full bg-electric-cyan text-abyssal text-[14px] font-medium rounded-full pl-5 pr-3 py-3 flex items-center justify-center gap-2"
            >
              Iniciar proyecto
              <span className="w-7 h-7 bg-abyssal rounded-full flex items-center justify-center">
                <ArrowRight size={14} className="text-electric-cyan" />
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
