/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutDoctor } from './components/AboutDoctor';
import { Specialties } from './components/Specialties';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { TechnologyExperience } from './components/TechnologyExperience';
import { SmileAssessment } from './components/SmileAssessment';
import { Testimonials } from './components/Testimonials';
import { LocationAndFaq } from './components/LocationAndFaq';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [bookingNotes, setBookingNotes] = useState<string>('');

  const handleOpenBooking = (service?: string) => {
    setSelectedService(service || 'Avaliação Inicial Completa');
    setBookingNotes('');
    setIsBookingOpen(true);
  };

  const handleScheduleWithResult = (service: string, notes: string) => {
    setSelectedService(service);
    setBookingNotes(notes);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Doctor Trajectory, Credentials (UFRJ) & Humanized Care */}
        <AboutDoctor onOpenBooking={() => handleOpenBooking()} />

        {/* Specialties Bento Grid & Protocol Details */}
        <Specialties onOpenBooking={handleOpenBooking} />

        {/* Interactive Draggable Before & After Showcase */}
        <BeforeAfterShowcase />

        {/* 3D Technology & Anxiety-Free Clinic Atmosphere */}
        <TechnologyExperience />

        {/* Interactive 3-Step Smile Simulation Tool */}
        <SmileAssessment onScheduleWithResult={handleScheduleWithResult} />

        {/* Attributable Patient Testimonials (Rio de Janeiro) */}
        <Testimonials />

        {/* Rio de Janeiro Clinic Locations & Medical FAQs */}
        <LocationAndFaq />
      </main>

      {/* Quiet & Certified Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Consultation Scheduling Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
        initialNotes={bookingNotes}
      />

      {/* Discreet Concierge WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
}
