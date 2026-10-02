import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, Clock, Check } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F5F7FA] via-white to-white">
      {/* Subtle architectural backdrop grid */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#0f766e 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & Authority */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-teal-800 tracking-wide">
              <span>Dr. Rafael Mendes</span>
              <span aria-hidden="true">·</span>
              <span>Cirurgião-Dentista</span>
              <span aria-hidden="true">·</span>
              <span>CRO-RJ 00000</span>
              <span aria-hidden="true">·</span>
              <span>Graduação UFRJ</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.12] tracking-tight text-balance">
              Odontologia de alta precisão com atendimento humanizado no Rio de Janeiro.
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-balance">
              Especialista em Implantodontia e Estética Dental pela Universidade Federal do Rio de Janeiro (UFRJ). Planejamento digital individualizado, cirurgia guiada sem dor e reabilitação estética preservando a harmonia natural do seu sorriso.
            </p>

            {/* Action Zone */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-teal-900 hover:bg-teal-950 rounded-xl transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-teal-300" />
                <span>Agendar Avaliação Personalizada</span>
              </button>

              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors"
              >
                <span>Conhecer Tratamentos</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Adjacent Trust Pillars with clean unboxed layout */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tabular-nums">
                  14+
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Anos de experiência clínica & cirúrgica
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tabular-nums">
                  3.200+
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Sorrisos reabilitados e transformados
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tabular-nums">
                  100%
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fluxo digital 3D e cirurgia guiada
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame with single-level elevation */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85"
                  alt="Dr. Rafael Mendes no consultório odontológico"
                  className="w-full h-[460px] object-cover object-top"
                  fallbackTitle="Dr. Rafael Mendes"
                  fallbackSubtitle="Cirurgião-Dentista | CRO-RJ 00000 · UFRJ"
                />

                {/* Subtle bottom info bar on image */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-display">Dr. Rafael Mendes</h3>
                    <p className="text-xs text-slate-500">Implantodontia & Estética Dental · UFRJ</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md">
                    <Check className="w-3.5 h-3.5 text-teal-600" />
                    <span>Agenda Aberta</span>
                  </div>
                </div>
              </div>

              {/* Verification credential bar placed cleanly in flow without overlapping */}
              <div className="mt-3.5 flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-800 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">UFRJ & Especialização</p>
                  <p className="text-[11px] text-slate-500">Planejamento 3D Individualizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
