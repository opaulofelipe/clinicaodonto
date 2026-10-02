import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Shield, Clock, Check, X, Calendar } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface Specialty {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  indications: string[];
  duration: string;
  benefits: string[];
  anesthesiaType: string;
}

const SPECIALTIES: Specialty[] = [
  {
    id: 'implantes',
    number: '01',
    title: 'Implantodontia & Cirurgia Guiada',
    tagline: 'Recuperação definitiva da mastigação e harmonia dental com implantes de titânio suíço.',
    description: 'Planejamento cirúrgico 100% virtual por meio de tomografia 3D e confecção de guias computadorizados. O procedimento é realizado com microincisões milimétricas, sem necessidade de cortes amplos na gengiva, proporcionando pós-operatório confortável, sem inchaço significativo e com possibilidade de carga imediata.',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=85',
    indications: ['Perda unitária ou múltipla de dentes', 'Instabilidade de próteses móveis', 'Perda óssea em processo inicial', 'Desejo de mastigar com total firmeza'],
    duration: '1 a 3 sessões cirúrgicas guiadas',
    benefits: ['Fixação óssea duradoura', 'Estética idêntica ao dente natural', 'Preservação da estrutura óssea facial', 'Retorno rápido à rotina diária'],
    anesthesiaType: 'Anestesia computadorizada indolor com opção de sedação consciente'
  },
  {
    id: 'lentes-facetas',
    number: '02',
    title: 'Lentes de Contato Dental & Facetas em Porcelana',
    tagline: 'Transformação estética personalizada preservando ao máximo a estrutura dental original.',
    description: 'Lâminas ultrafinas de cerâmica pura (dissilicato de lítio / porcelana feldspática) confeccionadas para corrigir cor, formato, tamanho e pequenos desvios de alinhamento. Todo caso é pré-visualizado através do mock-up em boca, permitindo ao paciente aprovar o novo sorriso antes de qualquer desgaste.',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85',
    indications: ['Dentes escurecidos ou manchados resistentes a clareamento', 'Fechamento de diastemas (espaços)', 'Dentes desgastados, fraturados ou desiguais', 'Harmonização do arco do sorriso'],
    duration: '2 a 4 consultas de planejamento e cimentação',
    benefits: ['Brilho e translucidez naturais', 'Estabilidade de cor permanente (não mancha com café ou vinho)', 'Espessura ultrafina de 0.2 a 0.5 mm', 'Aprovação estética prévia em boca'],
    anesthesiaType: 'Mínima ou desnecessária com preparo ultraconservador'
  },
  {
    id: 'reabilitacao-oral',
    number: '03',
    title: 'Reabilitação Oral Funcional',
    tagline: 'Integração de funções mastigatórias, fonéticas e estéticas em casos de alta complexidade.',
    description: 'Abordagem multidisciplinar indicada para pacientes que sofreram perda de dimensão vertical, desgaste severo por bruxismo ou colapso da mordida. O Dr. Rafael Mendes reequilibra as articulações temporomandibulares (ATM), músculos da face e dentes, devolvendo saúde mastigatória e alívio de tensões orofaciais.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85',
    indications: ['Desgaste severo por bruxismo ou apertamento', 'Dores na mandíbula e dores de cabeça tensionais', 'Perda múltipla de dentes e colapso de mordida', 'Dificuldade para mastigar certos alimentos'],
    duration: 'Planejamento por etapas personalizadas',
    benefits: ['Rejuvenescimento do terço inferior da face', 'Alívio de tensões e estalos articulares', 'Mastigação eficiente e sem esforço', 'Prevenção de fraturas dentais futuras'],
    anesthesiaType: 'Conforto farmacológico e sedação quando indicado'
  },
  {
    id: 'clareamento',
    number: '04',
    title: 'Clareamento Dental Supervisionado',
    tagline: 'Protocolos combinados com segurança biológica e proteção contra sensibilidade.',
    description: 'Combinação estratégica do clareamento em consultório sob isolamento absoluto e ativação controlada com moldeiras personalizadas para continuidade domiciliar. O protocolo inclui agentes dessensibilizantes e remineralizadores de esmalte, garantindo dentes luminosos sem dor ou choque térmico.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=85',
    indications: ['Amarelamento natural por envelhecimento', 'Pigmentação por café, chá, vinho ou tabaco', 'Desejo de luminosidade antes de eventos especiais', 'Pré-requisito antes de facetas'],
    duration: '2 sessões em consultório + acompanhamento',
    benefits: ['Até 6 a 8 tons de clareamento natural', 'Fórmula de pH neutro protetora do esmalte', 'Gel dessensibilizante com nitrato de potássio', 'Resultado uniforme e seguro'],
    anesthesiaType: 'Procedimento não invasivo, sem anestesia'
  },
  {
    id: 'prevencao-periodontia',
    number: '05',
    title: 'Odontologia Preventiva & Saúde Periodontal',
    tagline: 'Manutenção rigorosa com tecnologia de ultrassom e câmera intraoral.',
    description: 'Check-up preventivo digital de alta definição com mapeamento fotográfico de cada dente, remoção de biofilme e tártaro por ultrassom piezoelétrico suave e polimento coronário. Foco em manter seus dentes e implantes sadios por toda a vida, evitando tratamentos invasivos de emergência.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85',
    indications: ['Sangramento gengival ao escovar ou passar fio dental', 'Mau hálito recorrente', 'Manutenção semestral preventiva', 'Acompanhamento preventivo de implantes'],
    duration: 'Consulta de 60 a 75 minutos',
    benefits: ['Prevenção de cáries e periodontite', 'Preservação dos tecidos de suporte', 'Diagnóstico precoce de microtrincas', 'Sensação imediata de frescor e polimento'],
    anesthesiaType: 'Não invasivo com jato suave e raspagem piezoelétrica'
  }
];

interface SpecialtiesProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onOpenBooking }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            Especialidades & Atuação
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Soluções completas com o equilíbrio entre ciência médica e arte estética.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed text-balance">
            Da prevenção primária às mais complexas reabilitações sobre implantes, todos os tratamentos contam com planejamento digital 3D e execução direta pelo Dr. Rafael Mendes.
          </p>
        </div>

        {/* Bento Grid with Asymmetric Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec, index) => {
            const isWide = index === 0 || index === 1;
            return (
              <div
                key={spec.id}
                onClick={() => setSelectedSpecialty(spec)}
                className={`group relative rounded-2xl bg-white border border-slate-200/90 hover:border-teal-700/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Card Header: Editorial Number + Arrow */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-2xl font-bold text-teal-900/60 group-hover:text-teal-800 transition-colors tabular-nums">
                      {spec.number}.
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-teal-50 border border-slate-200/80 group-hover:border-teal-200 flex items-center justify-center text-slate-500 group-hover:text-teal-800 transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-950 transition-colors">
                    {spec.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium mb-3">
                    {spec.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {spec.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-teal-800 font-semibold group-hover:underline">
                    Ver protocolo clínico
                  </span>
                  <span className="text-slate-500 font-mono">
                    {spec.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action bar below specialties */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-teal-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-lg font-bold text-white">Não sabe qual procedimento é o mais indicado para você?</h4>
            <p className="text-xs sm:text-sm text-slate-300">Realizamos uma avaliação clínica detalhada com radiografia e escaneamento digital no primeiro encontro.</p>
          </div>
          <button
            onClick={() => onOpenBooking('Avaliação Inicial Completa')}
            className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-teal-300 hover:bg-teal-200 rounded-xl transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Agendar Avaliação Diagnóstica
          </button>
        </div>
      </div>

      {/* Specialty Detail Modal */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedSpecialty(null)}
              className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold text-teal-800 tracking-wider uppercase mb-1">
              Protocolo Especializado {selectedSpecialty.number}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              {selectedSpecialty.title}
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {selectedSpecialty.description}
            </p>

            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                  Indicações Principais
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedSpecialty.indications.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                  Benefícios para o Paciente
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedSpecialty.benefits.map((ben, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-600">
                <p><strong className="text-slate-900 font-semibold">Tempo médio estimado:</strong> {selectedSpecialty.duration}</p>
                <p><strong className="text-slate-900 font-semibold">Controle do desconforto:</strong> {selectedSpecialty.anesthesiaType}</p>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedSpecialty(null)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Voltar
              </button>
              <button
                onClick={() => {
                  const title = selectedSpecialty.title;
                  setSelectedSpecialty(null);
                  onOpenBooking(title);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-900 hover:bg-teal-950 rounded-lg transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Agendar Avaliação para este tratamento</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
