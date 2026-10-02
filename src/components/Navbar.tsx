import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-200/50 py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Single text element wordmark (Display face, no subtitle or tag pills) */}
        <a
          href="#"
          className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 hover:text-teal-900 transition-colors whitespace-nowrap shrink-0"
        >
          Dr. Rafael Mendes
        </a>

        {/* Zone 2: 5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#sobre"
            className="hover:text-slate-950 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-700 hover:after:w-full after:transition-all"
          >
            Sobre
          </a>
          <a
            href="#especialidades"
            className="hover:text-slate-950 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-700 hover:after:w-full after:transition-all"
          >
            Especialidades
          </a>
          <a
            href="#tecnologia"
            className="hover:text-slate-950 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-700 hover:after:w-full after:transition-all"
          >
            Tecnologia
          </a>
          <a
            href="#resultados"
            className="hover:text-slate-950 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-700 hover:after:w-full after:transition-all"
          >
            Resultados
          </a>
          <a
            href="#contato"
            className="hover:text-slate-950 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-700 hover:after:w-full after:transition-all"
          >
            Localização
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <a
            href="tel:+5521999990000"
            className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-teal-800 transition-colors px-3 py-2"
          >
            <PhoneCall className="w-3.5 h-3.5 text-teal-700" />
            <span>(21) 3200-8000</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-300 shrink-0" />
            <span>
              <span className="hidden sm:inline">Agendar Consulta</span>
              <span className="sm:hidden">Agendar</span>
            </span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors shrink-0"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          <a
            href="#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1.5 hover:text-teal-800"
          >
            Sobre o Dr. Rafael
          </a>
          <a
            href="#especialidades"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1.5 hover:text-teal-800"
          >
            Especialidades Clínicas
          </a>
          <a
            href="#tecnologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1.5 hover:text-teal-800"
          >
            Tecnologia & Conforto
          </a>
          <a
            href="#resultados"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1.5 hover:text-teal-800"
          >
            Casos & Resultados
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1.5 hover:text-teal-800"
          >
            Unidades & Contato
          </a>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-white bg-teal-800 rounded-lg"
            >
              Agendar Avaliação Inicial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
