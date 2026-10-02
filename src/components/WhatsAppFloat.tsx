import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const text = encodeURIComponent('Olá! Gostaria de tirar dúvidas sobre os tratamentos do Dr. Rafael Mendes no Rio de Janeiro.');
    window.open(`https://wa.me/5521999990000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-lg text-xs text-slate-700 animate-in fade-in slide-in-from-right-2">
          <span>Dúvidas? Fale direto no WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <button
        onClick={handleClick}
        className="w-13 h-13 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 cursor-pointer"
        aria-label="Abrir WhatsApp da Clínica Dr. Rafael Mendes"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-none" />
      </button>
    </div>
  );
};
