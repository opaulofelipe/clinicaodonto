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
    title: 'Lentes de Contato & Harmonização do Sorriso',
    patientProfile: 'Mulher, 32 anos · Barra da Tijuca',
    beforeImage: '/cases/lentes-antes.png',
    afterImage: '/cases/lentes-depois.png',
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
    beforeImage: '/cases/clareamento-antes.png',
    afterImage: '/cases/clareamento-depois.png',
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
    beforeImage: '/cases/implante-antes.png',
    afterImage: '/cases/implante-depois.png',
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

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, Math.round(percentage)));
    setSliderPos(clamped);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
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
              Arraste o cursor interativo ou toque na imagem para comparar a condição inicial e o resultado pós-tratamento obtido pelo Dr. Rafael Mendes.
            </p>
          </div>

          {/* Interactive Case Selector Tabs */}
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
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
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
            {/* Draggable container with touch-none for flawless mobile and desktop dragging */}
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden shadow-xl select-none cursor-ew-resize border border-slate-200/90 bg-slate-900 touch-none"
              style={{ touchAction: 'none' }}
            >
              {/* After Image (Background layer) */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
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
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <div
                  className="relative h-full"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                >
                  <ImageWithFallback
                    src={activeCase.beforeImage}
                    alt={`Condição inicial: ${activeCase.title}`}
                    className="w-full h-full object-cover"
                    fallbackTitle="Condição Inicial"
                    fallbackSubtitle="Antes do procedimento"
                  />
                  <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-wider uppercase bg-slate-900/85 backdrop-blur-xs text-white px-2.5 py-1 rounded-md shadow-xs">
                    Antes (Inicial)
                  </span>
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Center handle badge (touch target >= 44px) */}
                <div className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border-2 border-teal-800 transition-transform ${isDragging ? 'scale-110 shadow-2xl ring-4 ring-teal-600/30' : ''}`}>
                  <div className="flex items-center gap-1 text-teal-900">
                    <span className="text-[10px] font-bold">◀</span>
                    <SlidersHorizontal className="w-4 h-4 text-teal-800 shrink-0" />
                    <span className="text-[10px] font-bold">▶</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick-Access Slider Range Control & Quick View Buttons */}
            <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Antes</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-800"
                  aria-label="Controle de visualização Antes e Depois"
                />
                <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Depois</span>
              </div>

              {/* Quick Jump Buttons */}
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-200/60 text-xs">
                <span className="text-slate-500 hidden sm:inline">Visualização rápida:</span>
                <div className="flex items-center gap-1.5 w-full sm:w-auto justify-between sm:justify-end">
                  <button
                    onClick={() => setSliderPos(100)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                      sliderPos === 100
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    100% Antes
                  </button>
                  <button
                    onClick={() => setSliderPos(50)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                      sliderPos === 50
                        ? 'bg-teal-900 text-white border-teal-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    50% Dividido
                  </button>
                  <button
                    onClick={() => setSliderPos(0)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                      sliderPos === 0
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    100% Depois
                  </button>
                </div>
              </div>
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
