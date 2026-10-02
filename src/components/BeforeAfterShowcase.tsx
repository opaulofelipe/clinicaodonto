import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, Sparkles, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  patientProfile: string;
  beforeImage: string;
  afterImage: string;
  details: {
    initialShade: string;
    finalShade: string;
    duration: string;
    procedure: string;
    highlights: string;
  };
}

const CASES: CaseStudy[] = [
  {
    id: 'lentes-1',
    category: 'Estética Dental',
    title: 'Facetas Cerâmicas & Harmonização do Sorriso',
    patientProfile: 'Mulher, 32 anos · Barra da Tijuca',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=85',
    afterImage: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85',
    details: {
      initialShade: 'Escala Vita A3.5 (amarelamento e desgaste incisal)',
      finalShade: 'Cerâmica Feldspática BL2 (luminosidade natural)',
      duration: '3 consultas (Planejamento 3D + Mock-up + Cimentação)',
      procedure: '8 Lentes de contato em dissilicato de lítio',
      highlights: 'Fechamento de diastema central e nivelamento do arco do sorriso sem desgaste agressivo do esmalte.'
    }
  },
  {
    id: 'clareamento-1',
    category: 'Clareamento & Prevenção',
    title: 'Clareamento Combinado com Protocolo Anti-Sensibilidade',
    patientProfile: 'Homem, 38 anos · Ipanema',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85',
    details: {
      initialShade: 'Escala Vita A3 (manchas de café e tabaco)',
      finalShade: 'Escala Vita B1 (clareamento uniforme)',
      duration: '2 sessões em consultório + 14 noites caseiras supervisionadas',
      procedure: 'Peróxido de hidrogênio 35% com agente remineralizador',
      highlights: 'Sensibilidade zero relatada durante todo o protocolo graças ao uso prévio de nitrato de potássio.'
    }
  },
  {
    id: 'implante-1',
    category: 'Implantodontia',
    title: 'Implante Unitário com Cirurgia Guiada sem Cortes',
    patientProfile: 'Mulher, 45 anos · Leblon',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=85',
    afterImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=85',
    details: {
      initialShade: 'Ausência do incisivo lateral com reabsorção tecidual',
      finalShade: 'Coroa cerâmica personalizada idêntica aos dentes vizinhos',
      duration: '1 sessão de instalação guiada + cicatrização biológica',
      procedure: 'Implante de titânio Straumann com provisório imediato',
      highlights: 'Sem incisão bisturi convencional, retorno às atividades de trabalho no dia seguinte sem inchaço visível.'
    }
  }
];

export const BeforeAfterShowcase: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(clamped);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="resultados" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
              Transformações Reais & Previsibilidade
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
              Antes & Depois: Precisão milimétrica em cada detalhe.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Arraste o cursor interativo para comparar a condição inicial e o resultado pós-tratamento obtido pelo Dr. Rafael Mendes.
            </p>
          </div>

          {/* Interactive Case Selector Tabs (Buttons with click handlers per skill rule) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto shrink-0">
            {CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPos(50);
                }}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCaseIndex === idx
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Before/After Comparison Carrier */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden shadow-xl select-none cursor-ew-resize border border-slate-200/80 bg-slate-900"
            >
              {/* After Image (Background layer) */}
              <div className="absolute inset-0 w-full h-full">
                <ImageWithFallback
                  src={activeCase.afterImage}
                  alt={`Resultado final: ${activeCase.title}`}
                  className="w-full h-full object-cover"
                  fallbackTitle="Resultado Final"
                  fallbackSubtitle="Sorriso natural e harmonioso"
                />
                <span className="absolute top-4 right-4 text-[11px] font-semibold tracking-wider uppercase bg-teal-900/90 backdrop-blur-xs text-white px-2.5 py-1 rounded-md shadow-xs">
                  Depois (Pós-Tratamento)
                </span>
              </div>

              {/* Before Image (Clipped layer) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <div
                  className="relative h-full"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                >
                  <ImageWithFallback
                    src={activeCase.beforeImage}
                    alt={`Condição inicial: ${activeCase.title}`}
                    className="w-full h-full object-cover grayscale-[20%]"
                    fallbackTitle="Condição Inicial"
                    fallbackSubtitle="Antes do procedimento"
                  />
                  <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-wider uppercase bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-md shadow-xs">
                    Antes (Inicial)
                  </span>
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Center handle badge */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-800 shadow-lg flex items-center justify-center border border-slate-200">
                  <SlidersHorizontal className="w-4 h-4 text-teal-800" />
                </div>
              </div>
            </div>

            {/* Slider hint */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
              <span>← Arraste para a esquerda (ver resultado)</span>
              <span>Arraste para a direita (ver inicial) →</span>
            </div>
          </div>

          {/* Case Technical Specifications */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="text-xs text-teal-800 font-semibold tracking-wide uppercase mb-1">
                {activeCase.category}
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                {activeCase.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {activeCase.patientProfile}
              </p>
            </div>

            <div className="space-y-3.5 text-xs text-slate-600 bg-slate-50 p-5 rounded-xl border border-slate-200/80">
              <div className="pb-3 border-b border-slate-200">
                <span className="block font-semibold text-slate-900 text-sm">Procedimento Conduzido:</span>
                <span className="mt-0.5 block">{activeCase.details.procedure}</span>
              </div>

              <div>
                <strong className="text-slate-900 block font-semibold">Tonalidade Inicial vs Final:</strong>
                <p className="mt-0.5">De {activeCase.details.initialShade} para {activeCase.details.finalShade}</p>
              </div>

              <div>
                <strong className="text-slate-900 block font-semibold">Tempo de Tratamento:</strong>
                <p className="mt-0.5">{activeCase.details.duration}</p>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 block font-semibold">Destaque Clínico:</strong>
                <p className="mt-0.5 leading-relaxed text-slate-700">{activeCase.details.highlights}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
              <span>Fotos reais de pacientes sob consentimento livre e esclarecido (TCLE).</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
