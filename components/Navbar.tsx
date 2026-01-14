"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { dict, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="relative h-10 w-32 md:h-12 md:w-40">
          <Image 
            src="/logo-white.svg" 
            alt="Sabrina Tantric Massage" 
            fill
            className="object-contain"
            priority
          />
        </Link>
        
        <div className="flex items-center gap-4 md:gap-6">
          {/* Language Selector */}
          <div className="flex items-center gap-3 bg-white/10 rounded-full px-3 py-1 border border-white/5 backdrop-blur-sm">
            <button 
              onClick={() => setLanguage('en')}
              className={`text-2xl hover:scale-110 transition-transform ${language === 'en' ? 'opacity-100 grayscale-0 scale-110' : 'opacity-50 grayscale hover:opacity-100 hover:grayscale-0'}`}
              aria-label="English"
              title="English"
            >
              🇺🇸
            </button>
            <div className="w-px h-4 bg-white/20"></div>
            <button 
              onClick={() => setLanguage('pt')}
              className={`text-2xl hover:scale-110 transition-transform ${language === 'pt' ? 'opacity-100 grayscale-0 scale-110' : 'opacity-50 grayscale hover:opacity-100 hover:grayscale-0'}`}
              aria-label="Português"
              title="Português"
            >
              🇧🇷
            </button>
          </div>

          <button 
            onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-semibold py-2 px-6 rounded-full transition-colors duration-300 text-sm md:text-base cursor-pointer hidden md:block"
          >
            {dict.navbar.bookNow}
          </button>
        </div>
      </div>
    </nav>
  );
}
