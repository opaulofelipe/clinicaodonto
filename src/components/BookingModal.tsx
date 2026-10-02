import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageCircle, MapPin, User, Phone, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialNotes?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialNotes = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('barra');
  const [selectedService, setSelectedService] = useState(initialService || 'Avaliação Inicial Completa');
  const [preferredPeriod, setPreferredPeriod] = useState('manha');
  const [notes, setNotes] = useState(initialNotes || '');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
    if (initialNotes) {
      setNotes(initialNotes);
    }
  }, [initialService, initialNotes]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!fullName.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Informe um telefone/WhatsApp válido com DDD.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const unitName = selectedUnit === 'barra' ? 'Barra da Tijuca' : 'Ipanema';
    const periodName = preferredPeriod === 'manha' ? 'Manhã (08h às 12h)' : 'Tarde (13h às 18h30)';
    const text = `Olá, equipe do Dr. Rafael Mendes!\n\nGostaria de solicitar um agendamento:\n- Nome: ${fullName}\n- Procedimento de interesse: ${selectedService}\n- Unidade preferida: ${unitName}\n- Período de preferência: ${periodName}${notes ? `\n- Observações: ${notes}` : ''}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5521999990000?text=${encoded}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-xs font-bold text-teal-800 tracking-wider uppercase mb-1">
              Agendamento de Consulta
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
              Solicitar Avaliação Individualizada
            </h3>
            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              Com o Dr. Rafael Mendes (UFRJ · CRO-RJ 00000). Nossa equipe entrará em contato em poucos minutos via WhatsApp para confirmar seu horário ideal.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Full Name */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Seu Nome Completo *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex: Carlos Eduardo Silveira"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-700/30 ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  <User className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                </div>
                {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  WhatsApp com DDD *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(21) 98765-4321"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-700/30 ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                </div>
                {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
              </div>

              {/* Unit Selector */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Unidade de Preferência no Rio
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedUnit('barra')}
                    className={`py-2 px-3 rounded-lg border text-left flex items-center justify-between cursor-pointer ${
                      selectedUnit === 'barra'
                        ? 'border-teal-700 bg-teal-50/70 text-slate-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>Barra da Tijuca</span>
                    <MapPin className="w-3.5 h-3.5 text-teal-700" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedUnit('ipanema')}
                    className={`py-2 px-3 rounded-lg border text-left flex items-center justify-between cursor-pointer ${
                      selectedUnit === 'ipanema'
                        ? 'border-teal-700 bg-teal-50/70 text-slate-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>Ipanema</span>
                    <MapPin className="w-3.5 h-3.5 text-teal-700" />
                  </button>
                </div>
              </div>

              {/* Treatment Type */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Procedimento de Interesse
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-700/30 bg-white"
                >
                  <option value="Avaliação Inicial Completa">Avaliação Inicial Completa (Check-up 3D)</option>
                  <option value="Implantodontia & Cirurgia Guiada">Implantodontia & Cirurgia Guiada</option>
                  <option value="Lentes de Contato Dental & Facetas">Lentes de Contato Dental & Facetas</option>
                  <option value="Reabilitação Oral & DTM">Reabilitação Oral & Bruxismo / DTM</option>
                  <option value="Clareamento Dental Supervisionado">Clareamento Dental Supervisionado</option>
                  <option value="Odontologia Preventiva & Periodontia">Odontologia Preventiva & Periodontia</option>
                </select>
              </div>

              {/* Preferred Period */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Melhor Período para Consulta
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredPeriod('manha')}
                    className={`py-2 px-3 rounded-lg border text-center cursor-pointer ${
                      preferredPeriod === 'manha'
                        ? 'border-teal-700 bg-teal-50/70 text-slate-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Manhã (08h às 12h)
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferredPeriod('tarde')}
                    className={`py-2 px-3 rounded-lg border text-center cursor-pointer ${
                      preferredPeriod === 'tarde'
                        ? 'border-teal-700 bg-teal-50/70 text-slate-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Tarde (13h às 19h)
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Observações ou sintomas (opcional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="Ex: Tenho receio de dor / Quero melhorar meu sorriso para casamento..."
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-700/30 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-white bg-teal-900 hover:bg-teal-950 rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  Enviar Solicitação de Horário
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 pt-1">
                Seus dados estão protegidos sob sigilo médico odontológico (LGPD).
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 text-teal-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Solicitação Recebida com Sucesso!
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Obrigado, <strong className="text-slate-900">{fullName}</strong>. O Dr. Rafael Mendes e sua equipe de concierge entrarão em contato no WhatsApp informado para confirmar o melhor horário na Unidade {selectedUnit === 'barra' ? 'Barra da Tijuca' : 'Ipanema'}.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-1">
              <p><strong>Procedimento:</strong> {selectedService}</p>
              <p><strong>Período solicitado:</strong> {preferredPeriod === 'manha' ? 'Manhã' : 'Tarde'}</p>
              <p><strong>Telefone:</strong> {phone}</p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleOpenWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirmar Agora pelo WhatsApp</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
