import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6 relative h-12 w-40 mx-auto opacity-80">
          <Image 
            src="/logo-white.svg" 
            alt="Sabrina Tantric Massage" 
            fill
            className="object-contain"
          />
        </div>
        
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Professional Tantric Massage & Wellness services in Massachusetts. 
          Dedicated to your relaxation and personal growth.
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors">Terms of Service</a>
          <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors">Contact</a>
        </div>
        
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Sabrina Tantric Massage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
