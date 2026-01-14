import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { dict } = useLanguage();

  return (
    <footer className="bg-brand-dark py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <Link href="/" className="relative h-12 w-40 mx-auto block mb-8">
          <Image 
            src="/logo-white.svg" 
            alt="Sabrina Tantric Massage" 
            fill
            className="object-contain"
          />
        </Link>
        
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          {dict.footer.description}
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-brand-gold transition-colors text-2xl"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://wa.me/16176554053" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-brand-gold transition-colors text-2xl"
          >
            <FaWhatsapp />
          </a>
        </div>
        
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sabrina Tantric Massage. {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
