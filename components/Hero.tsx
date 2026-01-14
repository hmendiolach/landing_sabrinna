"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { dict } = useLanguage();
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // Reset animations when language changes or component mounts
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Kill any existing tweens to prevent conflict on re-render
    gsap.killTweensOf([titleRef.current, textRef.current, btnRef.current]);

    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    )
    .fromTo(textRef.current, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(btnRef.current, 
      { y: 20, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6 },
      "-=0.3"
    );
  }, [dict]); // Re-run animation when language changes

  return (
    <section ref={heroRef} className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Tantric Massage Atmosphere" 
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white leading-tight">
          {dict.hero.titlePart1} <span className="text-brand-gold">Senses</span> <br/>
          {dict.hero.titlePart2} <span className="text-brand-gold">Energy</span>
        </h1>
        
        <p ref={textRef} className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          {dict.hero.subtitle}
        </p>
        
        <div ref={btnRef}>
          <button 
            onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(198,168,124,0.4)] cursor-pointer"
          >
            {dict.hero.cta}
          </button>
          <p className="mt-4 text-sm text-gray-400">{dict.hero.badges}</p>
        </div>
      </div>
    </section>
  );
}
