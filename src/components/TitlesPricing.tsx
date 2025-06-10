'use client';

import { useState } from 'react';

interface TitlesPricingProps {
  language?: string;
}

export default function TitlesPricing({ language = 'es' }: TitlesPricingProps) {
  const translations = {
    es: {
      title: "Educación",
      degree: "Ingeniería Mecatrónica",
      institution: "Universidad Autónoma de Occidente",
      period: "2018 - 2023",
      description: "Formación en sistemas de control, automatización industrial y desarrollo de soluciones tecnológicas integradas.",
      technologist: "Tecnología en Automatización Industrial",
      institution2: "Servicio Nacional de Aprendizaje (SENA)",
      period2: "2015 - 2017",
      description2: "Especialización en sistemas de control y automatización de procesos industriales."
    },
    en: {
      title: "Education",
      degree: "Mechatronics Engineering",
      institution: "Universidad Autónoma de Occidente",
      period: "2018 - 2023",
      description: "Training in control systems, industrial automation, and development of integrated technological solutions.",
      technologist: "Industrial Automation Technology",
      institution2: "Servicio Nacional de Aprendizaje (SENA)",
      period2: "2015 - 2017",
      description2: "Specialization in control systems and industrial process automation."
    }
  };

  const t = translations[language as keyof typeof translations];

  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  
  const handlePdfClick = (pdfUrl: string) => {
    setSelectedPdf(pdfUrl);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
          {t.title}
        </h2>
        <p className="text-white/70 text-lg">
          Conoce mi formación académica y profesional
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Título Principal */}
        <div className="bg-gradient-to-b from-slate-800/50 to-blue-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{t.degree}</h3>
            <div className="text-xl font-semibold text-blue-300 mb-2">{t.institution}</div>
            <p className="text-white/70">{t.period}</p>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-white/90">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {t.description}
            </li>
          </ul>
          <div className="flex justify-center">
            <button 
              onClick={() => handlePdfClick('/pdfs/titulo-principal.pdf')}
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Ver Titulo</span>
            </button>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="bg-gradient-to-b from-blue-800/50 to-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-blue-500/50 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform scale-105">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{t.technologist}</h3>
            <div className="text-xl font-semibold text-blue-300 mb-2">{t.institution2}</div>
            <p className="text-white/70">{t.period2}</p>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-white/90">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {t.description2}
            </li>
          </ul>
          <div className="flex justify-center">
            <button 
              onClick={() => handlePdfClick('/pdfs/certificaciones.pdf')}
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Ver Titulo</span>
            </button>
          </div>
        </div>

        {/* Cursos y Especializaciones */}
        <div className="bg-gradient-to-b from-slate-800/50 to-blue-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 flex flex-col h-full">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Bachillerato</h3>
            <div className="text-xl font-semibold text-blue-300 mb-2">Inem Jorge Isaacs</div>
            <p className="text-white/70">2009</p>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-white/90">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Academico ciencias
            </li>
          </ul>
          <div className="flex justify-center mt-auto">
            <button 
              onClick={() => handlePdfClick('/pdfs/especializaciones.pdf')}
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Ver Titulo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal para mostrar el PDF */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-11/12 h-5/6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Documento PDF</h3>
              <button 
                onClick={() => setSelectedPdf(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <iframe 
              src={selectedPdf}
              className="w-full h-full rounded-lg"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </div>
  );
} 