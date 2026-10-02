import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, RotateCcw, Calendar, MessageCircle } from 'lucide-react';

interface SmileAssessmentProps {
  onScheduleWithResult: (treatmentName: string, notes: string) => void;
}

export const SmileAssessment: React.FC<SmileAssessmentProps> = ({ onScheduleWithResult }) => {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [selectedSensibility, setSelectedSensibility] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const goals = [
    {
      id: 'implantes',
      title: 'Implantes & Dentes Ausentes',
      subtitle: 'Desejo repor dentes perdidos e voltar a mastigar com total firmeza e segurança.'
    },
    {
      id: 'lentes',
      title: 'Lentes de Contato & Facetas',
      subtitle: 'Quero harmonizar forma, tamanho, alinhamento e tom do sorriso com cerâmicas.'
    },
    {
      id: 'clareamento',
      title: 'Clareamento Dental Profissional',
      subtitle: 'Quero clarear dentes amarelados com protocolo seguro e sem sensibilidade.'
    },
    {
      id: 'reabilitacao',
      title: 'Bruxismo & Reabilitação Completa',
      subtitle: 'Sinto cansaço muscular na face, desgastes excessivos ou dores ao acordar.'
    },
    {
      id: 'prevencao',
      title: 'Check-up Preventivo & Limpeza',
      subtitle: 'Prevenção regular com ultrassom, diagnóstico 3D e manutenção da saúde gengival.'
    }
  ];

  const sensibilities = [
    {
      id: 'ansiedade',
      label: 'Tenho bastante receio de dor ou ansiedade no dentista',
      desc: 'Recomendamos sedação consciente ou anestesia computadorizada Morpheus.'
    },
    {
      id: 'sensibilidade',
      label: 'Tenho dentes sensíveis a frio, doces ou ar',
      desc: 'Protocolo especial com aplicação prévia de agentes dessensibilizantes de nitrato de potássio.'
    },
    {
      id: 'tranquilo',
      label: 'Sou tranquilo(a) com procedimentos odontológicos',
      desc: 'Fluxo convencional otimizado com agilidade e alta precisão digital.'
    }
  ];

  const locations = [
    { id: 'barra', label: 'Unidade Barra da Tijuca', desc: 'Av. das Américas · Amplo estacionamento e fácil acesso' },
    { id: 'ipanema', label: 'Unidade Ipanema', desc: 'Visconde de Pirajá · Próximo ao metrô Nossa Sra. da Paz' }
  ];

  const handleReset = () => {
    setStep(1);
    setSelectedGoal('');
    setSelectedSensibility('');
    setSelectedLocation('');
  };

  const getRecommendedProtocol = () => {
    switch (selectedGoal) {
      case 'implantes':
        return {
          title: 'Protocolo de Implantodontia Guiada por Computador',
          description: 'Recomendamos uma tomografia 3D inicial para planejamento virtual sem incisões traumáticas. Procedimento rápido, previsível e com retorno acelerado à rotina.',
          nextActionText: 'Agendar Avaliação para Implantes'
        };
      case 'lentes':
        return {
          title: 'Planejamento Digital Estético & Teste Mock-up em Boca',
          description: 'Antes de qualquer intervenção, faremos o escaneamento 3D das suas arcadas e um ensaio estético (mock-up) para você ver e aprovar seu novo sorriso no espelho.',
          nextActionText: 'Agendar Simulação de Lentes'
        };
      case 'clareamento':
        return {
          title: 'Protocolo Dual Clareador com Barreira Protetora',
          description: 'Combinação de clareamento fotoativado em consultório com moldeiras personalizadas para estabilização de tom, com protocolo anti-sensibilidade exclusivo.',
          nextActionText: 'Agendar Clareamento Supervisionado'
        };
      case 'reabilitacao':
        return {
          title: 'Avaliação Oclusal e Reabilitação Funcional',
          description: 'Mapeamento biomecânico das articulações temporomandibulares (ATM) e planejamento para recuperar a dimensão vertical e proteger dentes contra desgaste.',
          nextActionText: 'Agendar Avaliação de Reabilitação'
        };
      default:
        return {
          title: 'Check-up Digital com Câmera Intraoral',
          description: 'Avaliação completa da saúde bucal, fotos intraorais em alta resolução e profilaxia suave com ultrassom piezoelétrico.',
          nextActionText: 'Agendar Check-up Preventivo'
        };
    }
  };

  const result = getRecommendedProtocol();

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            Orientação Personalizada
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Descubra o plano ideal para as suas necessidades.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Responda 3 perguntas rápidas para receber uma indicação preliminar e facilitar seu atendimento.
          </p>
        </div>

        {/* Multi-step Box */}
        <div className="rounded-2xl border border-slate-200 bg-[#FAFAFC] p-6 sm:p-10 shadow-xs">
          {/* Progress bar */}
          <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-teal-900 uppercase">
                {step <= 3 ? `Etapa ${step} de 3` : 'Recomendação Clínica Pronta'}
              </span>
            </div>
            {step > 1 && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            )}
          </div>

          {/* Step 1: Goal */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                1. Qual é o seu principal objetivo com o Dr. Rafael Mendes?
              </h3>
              <div className="grid gap-3">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => {
                      setSelectedGoal(g.id);
                      setStep(2);
                    }}
                    className={`p-4 rounded-xl text-left border transition-all flex items-start justify-between cursor-pointer ${
                      selectedGoal === g.id
                        ? 'border-teal-700 bg-teal-50/50 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60'
                    }`}
                  >
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                        {g.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">{g.subtitle}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Sensibility */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                2. Como você descreve sua relação com tratamentos odontológicos?
              </h3>
              <div className="grid gap-3">
                {sensibilities.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedSensibility(s.id);
                      setStep(3);
                    }}
                    className={`p-4 rounded-xl text-left border transition-all flex items-start justify-between cursor-pointer ${
                      selectedSensibility === s.id
                        ? 'border-teal-700 bg-teal-50/50 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60'
                    }`}
                  >
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                        {s.label}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">{s.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </button>
                ))}
              </div>
              <div className="pt-2 flex justify-start">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-600 hover:text-slate-900 underline"
                >
                  ← Voltar para etapa 1
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Location */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                3. Qual unidade no Rio de Janeiro é mais conveniente para você?
              </h3>
              <div className="grid gap-3">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => {
                      setSelectedLocation(loc.id);
                      setStep(4);
                    }}
                    className={`p-4 rounded-xl text-left border transition-all flex items-start justify-between cursor-pointer ${
                      selectedLocation === loc.id
                        ? 'border-teal-700 bg-teal-50/50 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60'
                    }`}
                  >
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                        {loc.label}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">{loc.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </button>
                ))}
              </div>
              <div className="pt-2 flex justify-start">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-slate-600 hover:text-slate-900 underline"
                >
                  ← Voltar para etapa 2
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Final Recommendation */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in">
              <div className="p-6 rounded-xl bg-white border border-teal-200 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-teal-700" />
                  <span>Resultado da Simulação Preliminar</span>
                </div>
                <h4 className="font-display text-2xl font-bold text-slate-900 mb-2">
                  {result.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {result.description}
                </p>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-500">
                  <span>
                    <strong>Unidade de preferência:</strong>{' '}
                    {selectedLocation === 'barra' ? 'Barra da Tijuca' : 'Ipanema'}
                  </span>
                  <span>·</span>
                  <span>
                    <strong>Condição relatada:</strong>{' '}
                    {selectedSensibility === 'ansiedade'
                      ? 'Requer protocolo humanizado anti-ansiedade'
                      : selectedSensibility === 'sensibilidade'
                      ? 'Requer protocolo dessensibilizante'
                      : 'Procedimento padrão'}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800"
                >
                  Fazer nova simulação
                </button>
                <button
                  onClick={() => {
                    const notes = `Diagnóstico preliminar: Objetivo [${selectedGoal}], Sensibilidade [${selectedSensibility}], Unidade [${selectedLocation}]`;
                    onScheduleWithResult(result.title, notes);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-teal-900 hover:bg-teal-950 rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>{result.nextActionText}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
