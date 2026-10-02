import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown, Check, ShieldCheck, Car } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'A colocação de implantes dentários dói ou causa inchaço?',
    answer: 'Com a cirurgia guiada por computador utilizada pelo Dr. Rafael Mendes, o procedimento é milimétrico e virtualmente indolor. Como não há necessidade de cortes extensos de bisturi nem descolamento gengival, o pós-operatório é extremamente suave, na maioria das vezes sem inchaço aparente e com analgesia oral comum.'
  },
  {
    question: 'As lentes de contato e facetas de porcelana mancham com vinho ou café?',
    answer: 'Não. As peças são confeccionadas em porcelana odontológica pura (cerâmica vítrea / dissilicato de lítio), um material vitrificado que não possui porosidade. Ao contrário da resina composta comum, as cerâmicas não sofrem alteração de cor, amarelamento ou manchas ao longo dos anos.'
  },
  {
    question: 'O clareamento dental supervisionado desgasta ou enfraquece o esmalte?',
    answer: 'Não. Nosso protocolo utiliza géis clareadores com pH rigorosamente neutro e ativos remineralizadores de esmalte. O oxigênio liberado age apenas quebrando as moléculas de pigmento orgânico que escurecem o dente, mantendo a integridade mineral e a dureza natural do esmalte intactas.'
  },
  {
    question: 'A clínica atende convênios ou planos odontológicos?',
    answer: 'Trabalhamos no modelo de atendimento particular exclusivo para garantir consultas com tempo estendido (60 a 90 minutos) e uso irrestrito dos melhores biomateriais internacionais. Fornecemos nota fiscal completa, laudos fotográficos e relatórios detalhados para que você solicite o reembolso junto ao seu plano de saúde com máxima facilidade.'
  },
  {
    question: 'Tenho muita ansiedade e medo de dentista. Como vocês podem me ajudar?',
    answer: 'O acolhimento de pacientes odontofóbicos é um dos grandes pilares do Dr. Rafael Mendes. Oferecemos consulta inicial de escuta sem nenhum procedimento agressivo, anestesia computadorizada indolor (Morpheus), fones antirruído com playlist relaxante e, quando necessário, realizamos o atendimento com sedação consciente medicamentosa ou acompanhamento de médico anestesiologista.'
  }
];

export const LocationAndFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            Unidades no Rio de Janeiro & Dúvidas Frequentes
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Estrutura premium em dois pontos nobres da cidade.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Consulte horários e conheça nossas instalações privativas na Barra da Tijuca e em Ipanema.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Locations & Contact Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Barra da Tijuca Unit */}
            <div className="p-6 rounded-2xl bg-[#FAFAFC] border border-slate-200/90 hover:border-teal-700/50 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  Unidade 01
                </span>
                <span className="text-xs text-slate-500 font-medium">Zona Oeste</span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                Barra da Tijuca — Le Monde Office
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Av. das Américas, 3.500 — Edifício Toronto, Sala 312 · Barra da Tijuca, Rio de Janeiro - RJ
              </p>

              <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-teal-700" />
                  <span>Estacionamento privativo com serviço de valet no local</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-700" />
                  <span>Segunda a Sexta: 08:30 às 19:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>(21) 3200-8000 · WhatsApp: (21) 99999-0000</span>
                </div>
              </div>
            </div>

            {/* Ipanema Unit */}
            <div className="p-6 rounded-2xl bg-[#FAFAFC] border border-slate-200/90 hover:border-teal-700/50 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  Unidade 02
                </span>
                <span className="text-xs text-slate-500 font-medium">Zona Sul</span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                Ipanema — Top Center Medical
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Rua Visconde de Pirajá, 550 — Sala 608 · Ipanema, Rio de Janeiro - RJ (A 150m do Metrô N. Sra. da Paz)
              </p>

              <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-teal-700" />
                  <span>Metrô Linha 4 (Estação N. Sra. da Paz - Saída Joana Angélica)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-700" />
                  <span>Segunda a Sexta: 09:00 às 18:30</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>(21) 2512-9000 · WhatsApp: (21) 99999-0000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="font-display text-lg font-bold text-slate-900 mb-4">
              Perguntas Frequentes
            </h3>

            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/90 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-white hover:bg-slate-50/80 transition-colors cursor-pointer"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-teal-800' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
