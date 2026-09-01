'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StudioFeatures from '@/components/StudioFeatures';
import PodcastSetups from '@/components/PodcastSetups';
import VisualProof from '@/components/VisualProof';
import PodcastWork from '@/components/PodcastWork';
import WhatYouCanCreate from '@/components/WhatYouCanCreate';
import WhyChoose from '@/components/WhyChoose';
import CustomShoot from '@/components/CustomShoot';
import EditingSupport from '@/components/EditingSupport';
import OtherServices from '@/components/OtherServices';
import GoogleReviews from '@/components/GoogleReviews';
import FinalCTA from '@/components/FinalCTA';
import StudioLocation from '@/components/StudioLocation';
import InternalLinks from '@/components/InternalLinks';
import Footer from '@/components/Footer';
import LeadModal from '@/components/LeadModal';
import WhatsAppSticky from '@/components/WhatsAppSticky';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('Podcast Production');
  const [selectedService, setSelectedService] = useState('');

  const handleOpenModal = (inquiry?: string, service?: string) => {
    if (inquiry) setInquiryType(inquiry);
    if (service) setSelectedService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService('');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Sections Content */}
      <main id="bringer-main" style={{ flex: '1 0 auto' }}>
        {/* 1. Hero Section with Live Studio Viewfinder */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. Studio Infrastructure & Features (Interactive Filterable 14 Amenities) */}
        <StudioFeatures />

        {/* 3. Podcast Setups (10 Bento Cards with Inline Gallery Expander) */}
        <PodcastSetups onOpenModal={handleOpenModal} />

        {/* 4. Visual Proof Contact Sheet (15 Frames with High-Res Viewer) */}
        <VisualProof />

        {/* 5. Podcast Work / Showreel Slider with Inline YouTube Player */}
        <PodcastWork />

        {/* 6. What You Can Create Here (8 Production Formats) */}
        <WhatYouCanCreate />

        {/* 7. Why Choose ARCC (7 Value Points) */}
        <WhyChoose />

        {/* 8. Need a Custom Setup (6 Bespoke Adaptations) */}
        <CustomShoot onOpenModal={handleOpenModal} />

        {/* 9. Podcast Editing Support (6 Post-Production Services) */}
        <EditingSupport />

        {/* 10. We Also Support Complementary Services */}
        <OtherServices onOpenModal={(srv) => handleOpenModal('Production Enquiry', srv)} />

        {/* 11. Google Reviews (4.9/5 Badge & Testimonials Carousel) */}
        <GoogleReviews />

        {/* 12. Final High-Impact CTA Banner */}
        <FinalCTA onOpenModal={handleOpenModal} />

        {/* 13. Studio Location & Google Maps Embed */}
        <StudioLocation onOpenModal={handleOpenModal} />

        {/* 14. Internal Resource Links */}
        <InternalLinks onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Capture Modal Popup */}
      <LeadModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultInquiry={inquiryType}
        defaultService={selectedService}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppSticky />
    </div>
  );
}
