import React from 'react';
import { Microscope, Cpu, ShieldCheck, Sparkles, Tv, VolumeX, Eye } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const TechnologyExperience: React.FC = () => {
  return (
    <section id="tecnologia" className="py-20 lg:py-28 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
                Tecnologia & Experiência Sem Medo
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
                Consultório projetado para transformar ansiedade em tranquilidade.
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Investimos nos equipamentos mais avançados do mundo para que a sua experiência no dentista seja rápida, previsível e absolutamente livre de dores.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200/70 flex items-center justify-center text-teal-800 shrink-0">
                  <Cpu className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-slate-900">
                    Scanner Intraoral 3D de Alta Resolução
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Diga adeus àquelas moldagens desconfortáveis de massinha que causam ânsia. Uma ponteira ótica captura em segundos imagens 3D coloridas de cada dente com precisão de microns.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200/70 flex items-center justify-center text-teal-800 shrink-0">
                  <Sparkles className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-slate-900">
                    Anestesia Computadorizada Indolor
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Sistema eletrônico que administra o anestésico de forma milimétrica e controlada pela pressão tecidual. Você não sente a clássica pressão ou ardência da agulha.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200/70 flex items-center justify-center text-teal-800 shrink-0">
                  <Tv className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-slate-900">
                    Planejamento Digital do Sorriso (DSD)
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Você participa ativamente da construção do seu novo sorriso. Antes de encostar em qualquer dente, realizamos um ensaio visual para aprovar proporções faciais e simetria.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200/70 flex items-center justify-center text-teal-800 shrink-0">
                  <VolumeX className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-slate-900">
                    Conforto Sensorial & Spa Odontológico
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Fones com cancelamento de ruído, óculos de conforto, playlist personalizada à sua escolha e ambiente aromatizado para relaxamento completo durante a consulta.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Column: Luxury reception / Clinic environment */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                alt="Recepção moderna e elegante da clínica Dr. Rafael Mendes"
                className="w-full h-[400px] object-cover"
                fallbackTitle="Recepção da Clínica"
                fallbackSubtitle="Ambiente acolhedor e privativo no Rio de Janeiro"
              />
            </div>

            {/* Clinic features strip */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-center justify-around text-center">
              <div>
                <p className="font-display font-bold text-slate-900 text-sm">Consultório Privativo</p>
                <p className="text-[11px] text-slate-500">Sem salas compartilhadas</p>
              </div>
              <div className="h-6 w-px bg-slate-200" />
              <div>
                <p className="font-display font-bold text-slate-900 text-sm">Esterilização Classe B</p>
                <p className="text-[11px] text-slate-500">Biossegurança padrão hospitalar</p>
              </div>
              <div className="h-6 w-px bg-slate-200" />
              <div>
                <p className="font-display font-bold text-slate-900 text-sm">Estacionamento com Valet</p>
                <p className="text-[11px] text-slate-500">Comodidade no local</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
