'use client';

import { useState } from 'react';
import Image from "next/image";
import Header from '@/components/Header';
import TitlesPricing from '@/components/TitlesPricing';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <section className="container mx-auto px-6 py-12">
            <div className="bg-gradient-to-b from-slate-800/50 to-blue-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Sobre Mí
              </h2>
              <div className="space-y-6 text-white/90">
                <p className="text-2xl leading-relaxed">
                Ingeniero mecatrónico y tecnólogo en automatización industrial con una sólida trayectoria en el diseño, control y optimización de procesos automáticos. Mi especialización incluye sistemas de control, programación de PLCs y HMIs, donde he demostrado un alto nivel de competencia.
Desde 2024 desempeño el rol de coordinador de mantenimiento, donde superviso indicadores de desempeño, gestiono y desarrollo el talento del personal, planifico mantenimientos preventivos y correctivos, e implemento mejoras en los procesos de mantenimiento. Esta experiencia me ha permitido liderar equipos y contribuir significativamente a la eficiencia operativa de la organización.
Complemento mis habilidades técnicas con una sólida experiencia en análisis estructural, lo que me permite comprender integralmente los aspectos mecánicos y funcionales de los sistemas que desarrollo. Estoy comprometido con la innovación y la búsqueda de soluciones efectivas ante desafíos complejos en el ámbito industrial.
                </p>
              </div>
            </div>
          </section>
          
        );

      case 'experience':
        return (
          <section className="container mx-auto px-6 py-12">
            <div className="bg-gradient-to-b from-slate-800/50 to-blue-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Experiencia Profesional
              </h2>
              <div className="space-y-8 text-white/90">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-xl font-semibold mb-2">Coordinador De Mantenimiento</h3>
                  <p className="text-blue-300 mb-2">EQUIPOS DE PROTECCIÓN INDIVIDUAL S.A.S</p>
                  <p className="text-white/70 mb-4">2024 - Presente</p>
                    <ul className="list-disc list-inside space-y-2">
                    <li>Supervisar y monitorear indicadores de desempeño del área de mantenimiento, asegurando la mejora continua en la eficiencia operativa.</li>
                    <li>Gestionar y desarrollar el talento del personal a cargo, implementando planes de capacitación y fortaleciendo las competencias del equipo.</li>
                    <li>Planificar y ejecutar mantenimientos preventivos y correctivos en los sistemas de la empresa, optimizando los recursos y garantizando la disponibilidad de los equipos.</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-xl font-semibold mb-2">Asistente de diseño y desarollo</h3>
                  <p className="text-blue-300 mb-2">EQUIPOS DE PROTECCIÓN INDIVIDUAL S.A.S</p>
                  <p className="text-white/70 mb-4">Enero 2021 – Diciembre 2022</p>
                    <ul className="list-disc list-inside space-y-2">
                    <li>Realizar modelado y diseño en 3D de componentes y prototipos, impulsando la innovación y contribuyendo a la mejora continua de productos.</li>
                    <li>Desarrollar diseños electrónicos que cumplan con altos estándares de calidad y funcionalidad, garantizando la efectividad de los sistemas de protección.</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-xl font-semibold mb-2">Auxiliar de mantenimiento</h3>
                  <p className="text-blue-300 mb-2">EQUIPOS DE PROTECCION INDIVIDUAL S.A.S</p>
                  <p className="text-white/70 mb-4"> Junio 2017 – Diciembre 2017</p>
                    <ul className="list-disc list-inside space-y-2">
                    <li>Ejecutar el mantenimiento de moldes por inyección, utilizando fresadora y torno CNC para garantizar su óptimo funcionamiento y durabilidad.</li>
                    
                  </ul>
                </div>
              </div>
            </div>
            
          </section>
          
        );

      case 'education':
        return <TitlesPricing />;

      case 'skills':
        return (
          <section className="container mx-auto px-6 py-12">
            <div className="bg-gradient-to-b from-slate-800/50 to-blue-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Habilidades
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Técnicas</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Automatización</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Control de Sistemas</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case 'contact':
        return (
          <section className="container mx-auto px-6 py-12">
            <div className="bg-gradient-to-b from-slate-800/50 to-blue-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Contacto
              </h2>
              <div className="space-y-4 text-white/90">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>correo@ejemplo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+123 456 7890</span>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900">
      <Header onSectionChange={setActiveSection} />
      <div className="pt-40">
        {renderSection()}
      </div>
    </main>
  );
}
