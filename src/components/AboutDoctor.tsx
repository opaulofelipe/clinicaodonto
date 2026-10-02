import React from 'react';
import { Award, Heart, CheckCircle2, GraduationCap, Microscope, ShieldCheck } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface AboutDoctorProps {
  onOpenBooking: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: Doctor in consultation with patient */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85"
                  alt="Dr. Rafael Mendes realizando consulta humanizada"
                  className="w-full h-[480px] object-cover"
                  fallbackTitle="Consulta Humanizada"
                  fallbackSubtitle="Planejamento digital individualizado"
                />
              </div>

              {/* Quote card below image */}
              <div className="mt-5 p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <p className="text-sm italic text-slate-700 leading-relaxed font-serif">
                  &ldquo;A odontologia moderna não se limita a dentes perfeitos. Nosso compromisso é restaurar a autoconfiança de cada pessoa através de uma escuta atenta, sem julgamentos e com máximo conforto.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-sans">
                  <span className="font-semibold text-slate-900">Dr. Rafael Mendes</span>
                  <span>Cirurgião-Dentista · CRO-RJ 00000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                Biografia & Filosofia Clínica
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
                Dedicação ao detalhe, respeito ao paciente e rigor científico.
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              Graduado em Odontologia pela renomada <strong className="text-slate-900 font-semibold">Universidade Federal do Rio de Janeiro (UFRJ)</strong>, o Dr. Rafael Mendes consolidou sua carreira unindo o rigor acadêmico das especializações em <strong className="text-slate-900 font-semibold">Implantodontia</strong> e <strong className="text-slate-900 font-semibold">Estética Dental</strong> a um olhar acolhedor e empático.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Ao longo de mais de uma década de prática clínica no Rio de Janeiro, desenvolveu uma abordagem onde cada tratamento se inicia com uma avaliação minuciosa do perfil facial, hábitos, saúde bucal e expectativas emocionais. Não trabalhamos com padrões pré-fabricados: cada intervenção é desenhada sob medida.
            </p>

            {/* The 4 Humanized Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <GraduationCap className="w-5 h-5 text-teal-700" />
                  <h3 className="font-semibold text-sm text-slate-900 font-display">Excelência Acadêmica UFRJ</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Formação sólida pela principal universidade federal do país, com atualização constante em congressos internacionais.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <Heart className="w-5 h-5 text-teal-700" />
                  <h3 className="font-semibold text-sm text-slate-900 font-display">Atendimento Humanizado</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tempo estendido de consulta para diálogo aberto e protocolos específicos para pacientes com odontofobia ou ansiedade.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <Microscope className="w-5 h-5 text-teal-700" />
                  <h3 className="font-semibold text-sm text-slate-900 font-display">Planejamento Digital 3D</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Simulação virtual prévia do sorriso e cirurgia guiada por tomografia computadorizada para máxima precisão e segurança.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <ShieldCheck className="w-5 h-5 text-teal-700" />
                  <h3 className="font-semibold text-sm text-slate-900 font-display">Materiais de Última Geração</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trabalho exclusivo com implantes de titânio biocompatíveis de primeira linha e cerâmicas odontológicas alemãs e suíças.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-900 hover:text-white bg-slate-100 hover:bg-teal-900 rounded-lg transition-colors cursor-pointer"
              >
                <span>Conhecer o Dr. Rafael em consulta</span>
                <CheckCircle2 className="w-4 h-4 text-teal-600 group-hover:text-teal-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
