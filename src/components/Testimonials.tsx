import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  neighborhood: string;
  treatment: string;
  quote: string;
  timeframe: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carolina Bittencourt',
    role: 'Arquiteta',
    neighborhood: 'Ipanema',
    treatment: 'Lentes de Contato em Porcelana',
    timeframe: 'Há 8 meses',
    quote: 'Eu tinha um receio enorme de ficar com aquele sorriso artificial e esbranquiçado que vemos por aí. O Dr. Rafael ouviu com paciência cada detalhe do que eu queria e fizemos um teste prévio que me deu 100% de confiança. O resultado ficou tão natural que as pessoas só dizem que estou mais radiante, sem saber exatamente o que mudou.'
  },
  {
    name: 'Eduardo Maranhão',
    role: 'Engenheiro Civil',
    neighborhood: 'Barra da Tijuca',
    treatment: 'Implante Dentário com Cirurgia Guiada',
    timeframe: 'Há 1 ano',
    quote: 'Adiei o implante por quase 4 anos por pavor de cirurgia e dores. O Dr. Rafael me explicou a cirurgia guiada por computador, sem cortes nem pontos traumáticos. Fiz na sexta à tarde e na segunda já estava no escritório trabalhando normalmente, sem inchaço e sem tomar analgésicos fortes. Profissionalismo e empatia raros.'
  },
  {
    name: 'Mariana Vasconcellos',
    role: 'Advogada',
    neighborhood: 'Leblon',
    treatment: 'Reabilitação Oral & Tratamento de DTM',
    timeframe: 'Há 5 meses',
    quote: 'Sofria com fortes dores de cabeça ao acordar decorrentes de bruxismo severo e desgastes nos dentes posteriores. O Dr. Rafael fez um mapeamento oclusal detalhado que mudou minha qualidade de sono e restaurou a altura dos meus dentes com cerâmicas milimétricas. Um atendimento realmente humanizado do início ao fim.'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            Depoimentos & Experiências Reais
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            A satisfação e a tranquilidade de quem já confiou em nossas mãos.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Histórias reais de pacientes atendidos nas unidades da Barra da Tijuca e Ipanema.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200/90 p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Clean unboxed treatment tag */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                  <span className="font-semibold text-teal-900">{t.treatment}</span>
                  <span>{t.timeframe}</span>
                </div>

                {/* Patient Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-serif">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-sm">
                      {t.name}
                    </h3>
                    <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <span>{t.role}</span>
                      <span aria-hidden="true">·</span>
                      <span>{t.neighborhood}, RJ</span>
                    </div>
                  </div>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet clinical certification marker */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-teal-700" />
          <span>Avaliações espontâneas registradas em prontuário e autorizadas pelos respectivos pacientes.</span>
        </div>
      </div>
    </section>
  );
};
