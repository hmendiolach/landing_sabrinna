import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-brand-dark flex flex-col">
      <Navbar />
      
      <section className="flex-grow flex items-center justify-center py-32 px-6">
        <div className="max-w-2xl w-full bg-brand-gray p-8 md:p-12 rounded-2xl shadow-2xl border border-white/5 text-center relative overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-dark via-brand-gold to-brand-dark"></div>
          
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/30">
              <FaCheckCircle className="text-5xl text-green-500" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Almost There!
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Your messaging app should have opened with your booking details. 
            <br />
            <span className="text-brand-gold font-semibold">Please remember to hit "Send"</span> to finalize your request.
          </p>
          
          <div className="bg-brand-dark/50 p-6 rounded-lg border border-white/5 mb-8">
            <p className="text-sm text-gray-400">
              We will review your request and get back to you shortly to confirm your appointment.
            </p>
          </div>

          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors duration-300 font-medium"
          >
            <FaArrowLeft /> Return to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
