import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Responsible Professional */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="font-display text-2xl font-bold text-white tracking-tight block">
              Dr. Rafael Mendes
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Clínica odontológica de alta precisão no Rio de Janeiro. Graduação em Odontologia pela Universidade Federal do Rio de Janeiro (UFRJ), com foco em implantodontia guiada, reabilitação oral e odontologia estética humanizada.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p><strong className="text-slate-300">Responsável Técnico:</strong> Dr. Rafael Mendes</p>
              <p><strong className="text-slate-300">Inscrição no Conselho:</strong> CRO-RJ 00000</p>
              <p><strong className="text-slate-300">Formação Acadêmica:</strong> UFRJ (Faculdade de Odontologia)</p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre o Dr. Rafael</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Especialidades Clínicas</a></li>
              <li><a href="#tecnologia" className="hover:text-white transition-colors">Tecnologia & Conforto</a></li>
              <li><a href="#resultados" className="hover:text-white transition-colors">Antes & Depois</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Localização e FAQ</a></li>
            </ul>
          </div>

          {/* Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Tratamentos
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#especialidades" className="hover:text-white transition-colors">Implantes Guiados 3D</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Lentes de Contato Dental</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Facetas em Porcelana</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Reabilitação Oral & DTM</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Clareamento Supervisionado</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Check-up Digital Preventivo</a></li>
            </ul>
          </div>

          {/* Units in Rio */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Unidades Rio de Janeiro
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-slate-300 font-medium">Barra da Tijuca</p>
                <p className="text-slate-500">Av. das Américas, 3.500 (Le Monde)</p>
                <p className="text-slate-500">(21) 3200-8000</p>
              </div>
              <div>
                <p className="text-slate-300 font-medium">Ipanema</p>
                <p className="text-slate-500">R. Visconde de Pirajá, 550 (Top Center)</p>
                <p className="text-slate-500">(21) 2512-9000</p>
              </div>
              <button
                onClick={onOpenBooking}
                className="mt-2 text-xs text-teal-400 hover:text-teal-300 font-semibold underline block"
              >
                Solicitar agendamento online →
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Copyright and Ethical Medical Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Rafael Mendes. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-slate-500 text-[11px] text-center md:text-right">
            <span>Em conformidade com as resoluções do Conselho Federal de Odontologia (CFO).</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
