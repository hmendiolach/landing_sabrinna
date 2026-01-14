"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from 'react-icons/fa';

export default function BookingForm() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const router = useRouter();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('user_name') as HTMLInputElement).value;
    const city = (form.elements.namedItem('user_city') as HTMLInputElement).value;
    const date = startDate ? startDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'a future date';
    const time = startDate ? startDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : 'any time';
    
    // Construct SMS message in English as requested
    // "Hi Sabrina, my name is [Name], I would like to book a massage session for [Date] at [Time] in [City]."
    const message = `Hi Sabrina, my name is ${name}. I would like to book a massage session for ${date} at ${time} in ${city}.`;
    
    // Open SMS app
    window.location.href = `sms:+16176554053?&body=${encodeURIComponent(message)}`;

    // Redirect to Thank You page after a short delay
    setTimeout(() => {
      router.push('/thank-you');
    }, 1000);
  };

  return (
    <section id="booking-form" className="py-20 bg-brand-dark relative border-t border-white/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Book Your Session</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          <p className="mt-4 text-gray-300">
            Fill out the form below to request your appointment via SMS.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-brand-gray p-8 md:p-12 rounded-2xl shadow-2xl border border-white/5">
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
              <label className="text-sm font-medium text-gray-400 mb-2">City</label>
              <select 
                name="user_city" 
                required 
                className="bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none"
              >
                <option value="Lowell">Lowell</option>
                <option value="Stoneham">Stoneham</option>
                <option value="Saugus">Saugus</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col mb-8">
            <label className="text-sm font-medium text-gray-400 mb-2">Preferred Date & Time</label>
            <div className="relative">
              <DatePicker 
                selected={startDate} 
                onChange={(date: Date | null) => setStartDate(date)} 
                className="w-full bg-brand-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                wrapperClassName="w-full"
                dateFormat="MMMM d, yyyy h:mm aa"
                showTimeSelect
                minTime={new Date(new Date().setHours(9, 0, 0))}
                maxTime={new Date(new Date().setHours(23, 0, 0))}
              />
              <FaCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-dark py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(198,168,124,0.3)]"
          >
            Send Booking Request (SMS)
          </button>
          
          <p className="mt-4 text-center text-sm text-gray-500">
            Clicking this button will open your messaging app with a pre-filled text.
          </p>
        </form>
      </div>
    </section>
  );
}
