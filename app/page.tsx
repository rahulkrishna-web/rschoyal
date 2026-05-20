"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Check, ArrowRight, Zap, Award, ShieldCheck, Clock, Users, FileText, Cloud, X } from "lucide-react";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import MetricsSection from "@/components/MetricsSection";
import ControlRoomFeatures from "@/components/ControlRoomFeatures";
import HMISection from "@/components/HMISection";
import ComparisonTable from "@/components/ComparisonTable";
import InstallationsGrid from "@/components/InstallationsGrid";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SkinControlPanel from "@/components/SkinControlPanel";

interface GlowCardProps {
  children: React.ReactNode;
}

function GlowCard({ children }: GlowCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-brand-primary to-brand-secondary text-white border border-white/10 shadow-md shadow-black/[0.08] hover:shadow-lg hover:shadow-black/[0.12] transition-all duration-300"
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show floating CTA when the lead section is completely off screen
        setShowFloatingCTA(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    // Focus the first input field
    setTimeout(() => {
      const nameInput = formRef.current?.querySelector("input");
      if (nameInput) nameInput.focus();
    }, 800);
  };


  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lower power bill, every month",
      description: "Up to 30% fewer units per 500 kg of output. For most plants, the savings repay the upgrade in a single billing cycle.",
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Recipe-based milling, every batch",
      description: "Pre-set recipes for every flour grade you sell - one tap recalls the same colour, texture and yield, shift after shift.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Less unplanned downtime",
      description: "Real-time alarms catch issues before they cost you a shift. Single-mill isolation means a fault never trips your whole plant.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Run more plant, with fewer people",
      description: "One operator can supervise multiple mills from a tablet. Role-based logins keep ownership clear across shifts.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Audit-ready data, on tap",
      description: "Every shift's running hours, energy and output logged automatically - ready when buyers, auditors or your bank ask.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "An investment that grows with you",
      description: "Cloud-ready, modular and patented - scale from one Wonder Mill to a fully digital 100 TPD plant without ripping anything out.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-[#1c2722] font-sans relative overflow-hidden">
      
      {/* Background Glowing Blobs (Glassmorphism Effect) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none select-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square bg-brand-secondary/5 rounded-full blur-[150px] pointer-events-none select-none"></div>
      <div className="absolute top-[40%] right-[30%] w-[30%] aspect-square bg-brand-tertiary/5 rounded-full blur-[100px] pointer-events-none select-none"></div>

      {/* Navigation Header */}
      <Header onRequestCallback={() => setIsModalOpen(true)} />

      {/* --- Main Lead Section - Aurora Slow Light Motion --- */}
      <main ref={heroRef} className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-12 lg:py-20 relative z-10 lead-gradient">
        {/* Aurora Glowing Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-25%] left-[-15%] w-[65%] aspect-square rounded-full bg-brand-primary/18 blur-[120px] animate-aurora-slow-1"></div>
          <div className="absolute bottom-[-30%] right-[-15%] w-[70%] aspect-square rounded-full bg-brand-secondary/22 blur-[140px] animate-aurora-slow-2"></div>
          <div className="absolute top-[15%] left-[25%] w-[50%] aspect-square rounded-full bg-brand-tertiary/25 blur-[100px] animate-aurora-slow-3"></div>
        </div>
        
        {/* Soft frosted glass blending overlay */}
        <div className="absolute inset-0 bg-white/25 backdrop-blur-2xl pointer-events-none z-0"></div>
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center relative z-10">
          
          {/* Left Column: Hero Text, Description, Badges */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                <span className="text-gradient block">The world&apos;s smartest</span>
                <span className="text-gradient-accent block my-1">digital stone mill</span>
                <span className="text-gradient block">recipe-driven, 30% less power.</span>
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-[#3e4d46] leading-relaxed max-w-3xl">
              Wonder Mill is a patented, IoT-enabled digital stone mill - known as a
              chakki in India - built for flour plants from 20 TPD onwards. Replace
              your standard chakkis with recipe-based milling, run the entire plant
              from your phone, and cut your power bill from day one.
            </p>

            {/* Trust Badges (3-column, icon on top, text below) */}
            <div className="max-w-md w-full grid grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="h-12 w-12 text-brand-primary mb-2" />
                <span className="text-[#3e4d46] text-xs font-semibold leading-normal">Patented design</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-brand-primary mb-2 animate-pulse" />
                <span className="text-[#3e4d46] text-xs font-semibold leading-normal">30% power saving</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-brand-primary mb-2" />
                <span className="text-[#3e4d46] text-xs font-semibold leading-normal">CE - ISO certified</span>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form Card */}
          <div ref={formRef} className="lg:col-span-5 lg:sticky lg:top-28">
            <LeadForm />
          </div>

        </div>
      </main>

      {/* Why Wonder Mill Section - cream bg (default) */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10 section-bg-cream">
        <div className="w-full space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase">
              Why Wonder Mill
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              What changes for your business on day one
            </h2>
            <p className="text-[#3e4d46] text-sm sm:text-base leading-relaxed">
              Built for owners who care about margin, uptime and being able to scale without hiring more operators.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <GlowCard key={idx}>
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-6 group-hover:scale-105 group-hover:bg-white group-hover:text-brand-primary transition-all duration-300 shadow-xs">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </GlowCard>
            ))}
          </div>

        </div>
      </section>

      {/* Metrics Section - tinted tertiary bg */}
      <MetricsSection />

      {/* Control Room Features Section - secondary mist bg */}
      <ControlRoomFeatures />

      {/* HMI Section - cream bg */}
      <HMISection />

      {/* Comparison Table Section - tertiary bg */}
      <ComparisonTable />

      {/* Installations Section - cream bg */}
      <InstallationsGrid />

      {/* Testimonials Section - secondary mist */}
      <Testimonials />

      {/* FAQ Section - cream bg */}
      <FAQSection />

      {/* End CTA & Footer Section */}
      <CTASection onRequestCallback={() => setIsModalOpen(true)} />

      {/* Floating Bottom CTA Button */}
      <div
        className="fixed bottom-6 left-1/2 z-40 transition-all duration-500 ease-out flex items-center justify-center group"
        style={{
          transform: `translateX(-50%) translateY(${showFloatingCTA ? "0px" : "100px"}) scale(${showFloatingCTA ? 1 : 0.9})`,
          opacity: showFloatingCTA ? 1 : 0,
          pointerEvents: showFloatingCTA ? "auto" : "none",
        }}
      >
        <div className="relative rounded-full p-[2px] animate-shimmer shadow-xl group-hover:shadow-2xl group-hover:shadow-black/20 group-hover:scale-105 transition-all duration-300">
          {/* Main CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3.5 px-6 sm:px-8 rounded-full flex items-center gap-2 cursor-pointer whitespace-nowrap text-sm sm:text-base w-full h-full"
          >
            <span>Request a Callback</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Popup Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c2722]/65 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md animate-scale-in">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 transition-colors shadow-xs cursor-pointer border border-slate-200/40"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
            <LeadForm className="shadow-black/75 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10" />
          </div>
        </div>
      )}

      {/* Design Skin Control Panel widget */}
      <SkinControlPanel />

    </div>
  );
}
