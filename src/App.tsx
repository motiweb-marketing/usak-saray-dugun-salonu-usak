import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import ReservationForm from "./components/ReservationForm";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";

export default function App() {
  return (
    <div className="relative min-h-screen bg-champagne-50/10 text-slate-800 selection:bg-champagne-200 selection:text-champagne-900 overflow-x-hidden">
      
      {/* 1. Header (fixed and sticky top navigation) */}
      <Header />

      <main>
        {/* 2. Hero Section (with capacities & quick triggers) */}
        <Hero />

        {/* 3. About Section (our stories & customized details) */}
        <About />

        {/* 4. Services Section (with dynamic client tabs) */}
        <Services />

        {/* 5. Packages Section (pricing types & options limits) */}
        <Packages />

        {/* 6. Process Section (how booking & organizing flow behaves) */}
        <Process />

        {/* 7. WhyUs Section (6 core trust indicators) */}
        <WhyUs />

        {/* 8. ReservationForm Section (interactive WhatsApp redirector form) */}
        <ReservationForm />

        {/* 9. Gallery Section (filtered assets & zoomable popups) */}
        <Gallery />

        {/* 10. Testimonials Section ( Ankara couples review ) */}
        <Testimonials />

        {/* 11. Contact Section (working hours info & directions GPS map) */}
        <Contact />
      </main>

      {/* 12. Footer Section (brand labels & local SEO subtexts) */}
      <Footer />

      {/* 13. MobileBottomNav Section (visible only on handheld monitors) */}
      <MobileBottomNav />

    </div>
  );
}
