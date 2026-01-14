"use client";
import React from 'react';
import { FaSms } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function SMSFloat() {
  const { dict } = useLanguage();
  const phoneNumber = "+16176554053";
  const message = dict.smsFloat.message;
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`sms:${phoneNumber}?&body=${encodedMessage}`}
      className="fixed bottom-6 right-6 z-50 bg-brand-gold text-brand-dark p-4 rounded-full shadow-lg hover:bg-brand-gold-hover transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Send SMS"
    >
      <FaSms className="text-3xl" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
        {dict.smsFloat.hoverText}
      </span>
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-brand-gold opacity-20 animate-ping"></span>
    </a>
  );
}
