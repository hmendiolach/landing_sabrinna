"use client";
import React, { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';
import { FaCalendarAlt } from 'react-icons/fa';

export default function BookingForm() {
  const form = useRef<HTMLFormElement>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs.sendForm(
        'service_c9g79gq',
        'template_66r33s9',
        form.current,
        'user_4X4X4X4X4X4X4X4X4X4X4' // Nota: Necesitas reemplazar esto con tu Public Key real de EmailJS
      )
      .then((result) => {
          setLoading(false);
          setStatus('success');
          if(form.current) form.current.reset();
      }, (error) => {
          setLoading(false);
          setStatus('error');
          console.error(error.text);
      });
    }
  };

  return (
    <section id="booking-form" className="py-20 bg-brand-dark relative border-t border-white/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Book Your Session</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          <p className="mt-4 text-gray-300">
            Fill out the form below to request your exclusive appointment.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="bg-brand-gray p-8 md:p-12 rounded-2xl shadow-2xl border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                className="bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-400 mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="user_phone" 
                required 
                className="bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                className="bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-400 mb-2">Preferred Date</label>
              <div className="relative">
                <DatePicker 
                  selected={startDate} 
                  onChange={(date: Date | null) => setStartDate(date)} 
                  className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                  wrapperClassName="w-full"
                  name="booking_date"
                  dateFormat="MMMM d, yyyy"
                />
                <FaCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-8">
            <label className="text-sm font-medium text-gray-400 mb-2">Message (Optional)</label>
            <textarea 
              name="message" 
              rows={4}
              className="bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
              placeholder="Any specific requests or questions?"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-[1.02] ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-brand-gold hover:bg-brand-gold-hover text-brand-dark'}`}
          >
            {loading ? 'Sending...' : 'Confirm Booking Request'}
          </button>

          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-500/20 text-green-400 rounded-lg text-center border border-green-500/30">
              Request sent successfully! We will contact you shortly.
            </div>
          )}
          
          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-500/20 text-red-400 rounded-lg text-center border border-red-500/30">
              Something went wrong. Please try again or contact us via WhatsApp.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
