'use client';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-gradient-to-b from-slate-900 to-blue-900 p-8 rounded-2xl shadow-2xl border border-white/10 z-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4 text-white/90">
          <p className="text-lg leading-relaxed">
            Soy un Ingeniero Mecatrónico apasionado por la innovación y el desarrollo tecnológico. 
            Mi experiencia se centra en la automatización de procesos y el diseño de sistemas mecatrónicos 
            que combinan mecánica, electrónica y programación para crear soluciones eficientes y sostenibles.
          </p>
          <p className="text-lg leading-relaxed">
            Me especializo en el desarrollo de sistemas de control y automatización, 
            trabajando con tecnologías de vanguardia para optimizar procesos industriales 
            y crear soluciones innovadoras que impulsen el progreso tecnológico.
          </p>
        </div>
      </div>
    </>
  );
} 