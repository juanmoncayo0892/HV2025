'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  onSectionChange: (section: string | null) => void;
}

export default function Header({ onSectionChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (section: string) => {
    setIsMenuOpen(false);
    onSectionChange(section);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-md bg-opacity-95 shadow-xl z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group p-3 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          <div className="flex flex-col items-center space-y-3">
            <div className="relative group">
              <div className="w-20 h-20 relative rounded-full overflow-hidden p-1 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src="/Image/Motor.jpg"
                    alt="Juan Manuel Moncayo"
                    width={72}
                    height={72}
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-green-300 to-green-600"></div>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Juan Manuel Moncayo Donoso
              </h1>
              <p className="text-blue-300 text-sm font-medium tracking-wide">
                Ingeniero Mecatrónico
              </p>
            </div>
          </div>

          <div className="w-12"></div>
        </div>

        {/* Mobile menu with enhanced design */}
        <div className={`absolute top-full left-0 w-full bg-gradient-to-b from-slate-900/95 to-blue-900/95 backdrop-blur-md shadow-2xl border-b border-white/10 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <nav className="container mx-auto px-6 py-6">
            <ul className="space-y-1">
              {[
                { 
                  section: 'about',
                  text: "Sobre mí", 
                  icon: (
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )
                },
                { 
                  section: 'experience',
                  text: "Experiencia", 
                  icon: (
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
                    </svg>
                  )
                },
                { 
                  section: 'education',
                  text: "Educación", 
                  icon: (
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  )
                },
                { 
                  section: 'skills',
                  text: "Habilidades", 
                  icon: (
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                { 
                  section: 'contact',
                  text: "Contacto", 
                  icon: (
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <li key={item.section} className={`transform transition-all duration-300 delay-[${index * 50}ms]`}>
                  <button 
                    onClick={() => handleMenuClick(item.section)}
                    className="group flex items-center space-x-3 py-3 px-4 text-white hover:text-blue-300 hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20 backdrop-blur-sm w-full"
                  >
                    <div className="text-current">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                    <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}