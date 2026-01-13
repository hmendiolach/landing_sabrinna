"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
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
        
        <button 
          onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-semibold py-2 px-6 rounded-full transition-colors duration-300 text-sm md:text-base cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}
