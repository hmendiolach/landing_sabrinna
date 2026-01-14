"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import SMSFloat from '@/components/SMSFloat';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <BookingForm />
      {/* Optional: Add Testimonials or About section here if needed */}
      <Footer />
      <SMSFloat />
    </main>
  );
}
