"use client";
import React, { useEffect, useRef } from 'react';
import { FaSpa, FaHeart, FaLeaf } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaSpa className="text-4xl text-brand-gold" />,
    title: "Tantric Massage",
    description: "A meditative and sensual massage that awakens your energy flow, promoting deep connection with your body and spirit."
  },
  {
    icon: <FaLeaf className="text-4xl text-brand-gold" />,
    title: "Deep Relaxation",
    description: "Release chronic tension and stress. Allow your mind to quiet and your body to surrender to profound peace."
  },
  {
    icon: <FaHeart className="text-4xl text-brand-gold" />,
    title: "Energy Healing",
    description: "Balance your chakras and restore vitality. Experience a holistic approach to wellness that nurtures your entire being."
  }
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current.filter(Boolean), 
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-brand-gray relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Discover a sanctuary where ancient techniques meet modern wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-brand-dark p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="mb-6 w-16 h-16 bg-brand-gray rounded-full flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
