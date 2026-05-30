"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  Zap,
  Award,
  ShieldCheck,
  Clock,
  Users,
  X,
  Phone,
  Mail,
  Plus,
  Minus,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";

interface GlowCardProps {
  children: React.ReactNode;
}

function GlowCard({ children }: GlowCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-brand-primary to-brand-secondary text-white border border-white/10 shadow-md shadow-black/[0.08] hover:shadow-lg hover:shadow-black/[0.12] transition-all duration-300">
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function StoneDresserPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const carouselImages = [
    "/images/eminent_group.webp",
    "/images/zams_milling.webp",
    "/images/qatar.webp",
    "/images/atta_plant_150tpd.webp",
    "/images/wondermill_internal.webp",
    "/images/annapurna.webp",
    "/images/other_3.webp",
    "/images/other_20221110_1.webp",
    "/images/other_img_9476.webp",
    "/images/other_20221110_2.webp",
    "/images/other_a1.webp",
    "/images/other_img_9479.webp",
    "/images/other_img_9616.webp",
    "/images/other_20221110_3.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsModalOpen(true);
    }
  };

  const faqs = [
    {
      question: "Does it support all emery stone sizes?",
      answer: "Yes, the machine is designed to dress emery stones from 20 inches (500 mm) up to 48 inches (1200 mm) in diameter. It has pre-configured settings for standard 20\", 24\", 30\", and 48\" stones.",
    },
    {
      question: "How long does a tool/cutter change take?",
      answer: "Less than a minute. Changing the carbide cutting tool requires loosening a single mounting bolt, sliding out the worn tip, inserting a new one, and tightening. There is no complex recalibration needed.",
    },
    {
      question: "Do I need special power requirements?",
      answer: "The machine operates on standard 3-Phase 415 V, 50 Hz power. It comes complete with its own dedicated electric control panel, plug, and cabling.",
    },
    {
      question: "Is skilled labour required to operate the dresser?",
      answer: "No. The Choyal Stone Dresser is specifically designed to eliminate the need for traditional, highly skilled stone-dressers. Once set up, any standard mill operator can run it after a 30-minute training session.",
    },
    {
      question: "What is the warranty and support?",
      answer: "The machine comes with a standard 12-month manufacturer warranty. RS Choyal provides complete installation, training, and ongoing availability of spares and replacement carbide tools.",
    },
    {
      question: "How does the optional stone-lifting crane work?",
      answer: "We offer an optional integrated motorised crane & chain hoist that mounts directly onto the dresser frame. This allows a single operator to lift, flip, and mount heavy grinding stones onto the machine without requiring manual labor or external fork trucks.",
    },
    {
      question: "Can it be shipped worldwide?",
      answer: "Yes. We export to over 40+ countries. The machine is shipped in an export-worthy wooden crate, complete with standard spares, a toolkit, and operational manuals.",
    },
  ];

  const comparisonRows = [
    {
      metric: "Time per groove",
      dresser: "3–4 minutes",
      manual: "30–45 minutes",
      isAdvantage: true,
    },
    {
      metric: "Operator skill needed",
      dresser: "Any trained operator",
      manual: "Specialist stone-dresser",
      isAdvantage: true,
    },
    {
      metric: "Groove consistency",
      dresser: "Machine-controlled",
      manual: "Varies stone-to-stone",
      isAdvantage: true,
    },
    {
      metric: "Taper accuracy",
      dresser: "Factory-set, maintained automatically",
      manual: "Operator's judgement",
      isAdvantage: true,
    },
    {
      metric: "Operator safety",
      dresser: "Emergency stop, low vibration, thermal protection",
      manual: "Manual exposure, fatigue, dust",
      isAdvantage: true,
    },
    {
      metric: "Dust handling",
      dresser: "Optional blower / duct collection",
      manual: "Ambient dust on the shop floor",
      isAdvantage: true,
    },
    {
      metric: "Stone-lifting",
      dresser: "Optional motorised crane & hoist",
      manual: "Manual handling",
      isAdvantage: true,
    },
  ];

  const testimonials = [
    {
      name: "RS",
      role: "Owner",
      location: "Flour Mill",
      initials: "RS",
      color: "bg-emerald-600",
      quote: "We used to lose half a shift every time a stone needed dressing. With Choyal's machine, our regular operator handles it in twenty minutes — and the grooves are cleaner than what our specialist used to deliver.",
    },
    {
      name: "PK",
      role: "Plant Head",
      location: "Flour Mill",
      initials: "PK",
      color: "bg-indigo-600",
      quote: "The pneumatic holding system and the crane add-on were worth every rupee. Our team is safer, the floor is cleaner with the dust collector, and the machine has paid for itself in eight months.",
    },
    {
      name: "AS",
      role: "MD",
      location: "Family Flour Mill",
      initials: "AS",
      color: "bg-violet-600",
      quote: "We dress 48\" stones — the biggest size. Choyal's machine handled them without any modification. Installation was a day, training was an afternoon. Highly recommended.",
    },
    {
      name: "Manoj Mishra",
      role: "Maintenance Lead",
      location: "Raipur, India",
      initials: "MM",
      color: "bg-blue-600",
      quote: "Finding skilled labor for manual stone dressing was becoming a bottleneck. This machine runs on simple push-buttons. Now anyone on the floor can dress a stone with perfect accuracy.",
    },
    {
      name: "Rajesh Sharma",
      role: "Owner",
      location: "Indore, India",
      initials: "RS",
      color: "bg-amber-600",
      quote: "We have 4 sets of 30\" emery stones. Hand dressing took hours of chipping and a lot of dust. With Choyal's automatic dresser and dust collector, the job is clean, fast, and completely standardized.",
    },
    {
      name: "Pankaj Khanna",
      role: "Operations Head",
      location: "Ahmedabad, India",
      initials: "PK",
      color: "bg-rose-600",
      quote: "The consistent depth of the dressed grooves has directly improved our flour quality. There's less heating during grinding, and the yield per stone has increased by 15%.",
    },
    {
      name: "Anil Shah",
      role: "MD",
      location: "Nagpur, India",
      initials: "AS",
      color: "bg-cyan-600",
      quote: "We opted for the motorized crane and hoist package. Moving these heavy stones was a huge injury risk for our team. The hoist makes it effortless, and the dressing takes under 5 minutes.",
    },
    {
      name: "Vikram Patel",
      role: "Mill Manager",
      location: "Mehsana, India",
      initials: "VP",
      color: "bg-teal-600",
      quote: "Manual chiseling used to wear out the stone faces unevenly, leading to premature replacement. The mechanical feed on the dresser keeps the stone face perfectly flat, doubling the lifetime of our emery stones.",
    },
    {
      name: "Devendra Singh",
      role: "Plant Director",
      location: "Ludhiana, India",
      initials: "DS",
      color: "bg-purple-600",
      quote: "We run a high-capacity mill and downtime is extremely expensive. This machine cuts stone dressing time from 4 hours to just 20 minutes total. It is the most reliable tool in our maintenance shop.",
    },
    {
      name: "Sanjay Gupta",
      role: "Partner",
      location: "Kanpur, India",
      initials: "SG",
      color: "bg-fuchsia-600",
      quote: "The carbide-tipped cutters are incredibly durable. We've dressed over 150 stones and haven't needed to replace the tip yet. A highly economical and robust piece of equipment.",
    },
    {
      name: "Gopal K.",
      role: "Technical Advisor",
      location: "Hyderabad, India",
      initials: "GK",
      color: "bg-orange-600",
      quote: "Perfect control over groove width and taper. Since installing this machine, our grinding consistency has risen, and our customers have noticed the difference in the flour fineness.",
    },
  ];

  return (
    <main className="min-h-screen w-full relative overflow-x-hidden bg-brand-bg select-text">
      
      {/* Background Glowing Blobs (Glassmorphism Effect) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none select-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square bg-brand-secondary/5 rounded-full blur-[150px] pointer-events-none select-none"></div>
      <div className="absolute top-[40%] right-[30%] w-[30%] aspect-square bg-brand-tertiary/5 rounded-full blur-[100px] pointer-events-none select-none"></div>

      {/* Custom Branding Header */}
      <Header
        brandName="Emery Stone"
        brandHighlight="Dresser"
        brandSub="BY CHOYAL GRINDING SOLUTION"
        logoChar="C"
        onRequestCallback={scrollToForm}
      />

      {/* --- Main Lead Section - Aurora Slow Light Motion & Image Carousel --- */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-12 lg:py-20 relative z-10 lead-gradient">
        {/* Background Image Carousel (Below/behind the overlay) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {carouselImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt="Stone Dresser Installation Background"
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover object-center scale-105"
              />
            </div>
          ))}
        </div>

        {/* Aurora Glowing Elements blending with the carousel background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-25%] left-[-15%] w-[65%] aspect-square rounded-full bg-brand-primary/10 blur-[120px] animate-aurora-slow-1"></div>
          <div className="absolute bottom-[-30%] right-[-15%] w-[70%] aspect-square rounded-full bg-brand-secondary/12 blur-[140px] animate-aurora-slow-2"></div>
          <div className="absolute top-[15%] left-[25%] w-[50%] aspect-square rounded-full bg-brand-tertiary/12 blur-[100px] animate-aurora-slow-3"></div>
        </div>
        
        {/* Soft blending overlay - brand primary green gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/95 via-brand-primary/65 to-brand-primary/30 pointer-events-none z-0"></div>
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center relative z-10">
          
          {/* Left Column: Hero Text, Description, Badges */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* RS Choyal Group & Choyal Logos */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 flex-wrap">
              <div className="inline-flex bg-white px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-md border border-white/10">
                <img 
                  src="/rschoyal-logo.svg" 
                  alt="RS Choyal Group Logo" 
                  className="h-[26px] sm:h-[45px] w-auto object-contain"
                />
              </div>
              <div className="inline-flex bg-white px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-md border border-white/10">
                <img 
                  src="/choyal-logo.png" 
                  alt="Choyal Logo" 
                  className="h-[26px] sm:h-[45px] w-auto object-contain"
                />
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                <span className="text-white block">Re-groove emery stones</span>
                <span className="text-white block my-1">in 3–4 minutes</span>
                <span className="text-white block">without skilled labour.</span>
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
              Choyal&apos;s patented Emery Stone Dresser turns a slow, skilled, manual job into a plug-and-play operation. One operator dresses a 20&quot;, 24&quot;, 30&quot; or 48&quot; stone with machine-perfect grooves - every time. Built for flour mills that can&apos;t afford the downtime.
            </p>

            {/* Trust Badges */}
            <div className="max-w-md w-full grid grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="h-12 w-12 text-white mb-2" />
                <span className="text-slate-300 text-xs font-semibold leading-normal">Patented design</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-white mb-2 animate-pulse" />
                <span className="text-slate-300 text-xs font-semibold leading-normal">3–4 minutes</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-white mb-2" />
                <span className="text-slate-300 text-xs font-semibold leading-normal">Plug &amp; play</span>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form Card */}
          <div ref={formRef} className="lg:col-span-5 lg:sticky lg:top-28">
            <LeadForm mode="stone-dresser" />
          </div>

        </div>
      </section>

      {/* Benefits / Outcomes Section */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 section-bg-cream">
        <div className="w-full space-y-16">
          
          {/* Header Block */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase block">
              Why mill owners switch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              What changes the day this machine arrives at your mill
            </h2>
            <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
              Built for owners tired of losing whole shifts to manual stone dressing.
            </p>
          </div>

          {/* Grid of 6 Outcome Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            <GlowCard>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                Hours of work, done in minutes
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Each groove is dressed in just 3–4 minutes. A full stone that used to take a half-shift is back in production before lunch.
              </p>
            </GlowCard>

            <GlowCard>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                Free up your skilled labour
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                No specialist stone-dresser needed. Any trained operator can run the machine — your senior fitters stay focused on the mill itself.
              </p>
            </GlowCard>

            <GlowCard>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                Consistent grooves, every stone
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Machine-controlled taper, depth and width. No more operator-to-operator variance and no more "this stone won't run right" complaints.
              </p>
            </GlowCard>

            <GlowCard>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                Less downtime, more output
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Faster dressing means fewer hours offline per stone, per month. For a busy plant, that adds up to weeks of extra production per year.
              </p>
            </GlowCard>

            <GlowCard>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                Safer for your operators
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Emergency stop, thermal overload protection, low-vibration frame and noise-reducing operation — the safest way to dress a stone today.
              </p>
            </GlowCard>

            <GlowCard>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                Pays back faster than manual dressing
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Carbide-tipped cutters last for thousands of strokes, the motor is energy-efficient, and maintenance is minimal. Most plants recover the cost within a year.
              </p>
            </GlowCard>

          </div>

        </div>
      </section>

      {/* Trust Stats Strip */}
      <section className="bg-gradient-to-br from-brand-primary to-[#0d1f17] text-white py-14 relative z-10 border-y border-white/10">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-tertiary">3–4 min</div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold tracking-wide mt-2">Per groove dressed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-tertiary">4 sizes</div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold tracking-wide mt-2">20", 24", 30" & 48" stones</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-tertiary">1 person</div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold tracking-wide mt-2">No skilled stone-dresser needed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-tertiary">3-Phase</div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold tracking-wide mt-2">415 V / 50 Hz • Plug & play</div>
          </div>
        </div>
      </section>

      {/* Bento Features Grid */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 bg-white">
        <div className="w-full space-y-16">
          
          {/* Header Block */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase block">
              Engineered for daily mill use
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Everything you'd want in a serious stone-dressing machine
            </h2>
            <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
              Each feature was added because a real mill operator asked for it.
            </p>
          </div>

          {/* Grid Layout of Bento Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Box 1 */}
            <div className="glass-panel p-8 rounded-3xl border border-[#1c2722]/8 shadow-xs hover:border-[#1c2722]/15 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/8 flex items-center justify-center mb-2">
                <Zap className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Precise feeding system
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Groove width: 50, 75 or 100 mm in a single stroke</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Operator-adjustable depth</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Factory-set taper maintained automatically</span>
                </li>
              </ul>
            </div>

            {/* Box 2 */}
            <div className="glass-panel p-8 rounded-3xl border border-[#1c2722]/8 shadow-xs hover:border-[#1c2722]/15 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/8 flex items-center justify-center mb-2">
                <Award className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Carbide-tipped cutters
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Long-lasting cutting tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Quick & easy tool change system</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Built-in tool tray for operator convenience</span>
                </li>
              </ul>
            </div>

            {/* Box 3 */}
            <div className="glass-panel p-8 rounded-3xl border border-[#1c2722]/8 shadow-xs hover:border-[#1c2722]/15 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/8 flex items-center justify-center mb-2">
                <ShieldCheck className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Heavy-duty frame
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Compact, space-saving design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Lockable wheels for shop-floor mobility</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Epoxy & powder-coated paint finish</span>
                </li>
              </ul>
            </div>

            {/* Box 4 */}
            <div className="glass-panel p-8 rounded-3xl border border-[#1c2722]/8 shadow-xs hover:border-[#1c2722]/15 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/8 flex items-center justify-center mb-2">
                <ShieldCheck className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Safety & motor protection
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Emergency stop button</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Thermal overload motor protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Low-vibration, noise-reducing design</span>
                </li>
              </ul>
            </div>

            {/* Box 5 */}
            <div className="glass-panel p-8 rounded-3xl border border-[#1c2722]/8 shadow-xs hover:border-[#1c2722]/15 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/8 flex items-center justify-center mb-2">
                <ArrowRight className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Stone-holding & lifting options
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Manual or pneumatic stone-holding system</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Optional motorised crane & hoist for stone lifting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Optional dust blower / duct collection system</span>
                </li>
              </ul>
            </div>

            {/* Box 6 */}
            <div className="glass-panel p-8 rounded-3xl border border-[#1c2722]/8 shadow-xs hover:border-[#1c2722]/15 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/8 flex items-center justify-center mb-2">
                <Zap className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Plug-and-play operation
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>3-Phase 415 V / 50 Hz compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Supplied with custom electrical control panel</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Ergonomic, user-friendly control interface</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Cutting Head Close-up banner block */}
          <div className="glass-panel p-8 sm:p-12 md:p-14 rounded-3xl border border-[#1c2722]/8 shadow-xl shadow-black/[0.03] mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-brand-primary tracking-widest uppercase block">
                  The cutting head
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Carbide-tipped, machine-fed, ready in under a minute.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  The cutting head is the heart of the machine. Tool changes are quick — a single bolt, no recalibration. Combined with the precise feeding system, the operator simply sets depth, selects width, and presses start.
                </p>
              </div>
              <div className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
                <Image
                  src="/images/stone_dresser_cutter.png"
                  alt="Cutter head close up details"
                  width={1200}
                  height={750}
                  className="w-full h-auto object-cover aspect-[16/10]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 section-bg-tertiary">
        <div className="max-w-5xl mx-auto space-y-16 relative z-10">
          
          {/* Header Block */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase block">
              Choyal Stone Dresser vs Manual Dressing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              Compare the specs side-by-side
            </h2>
            <p className="text-[#3e4d46] text-sm sm:text-base leading-relaxed">
              Why manual dressing is costing you more than just operator salary.
            </p>
          </div>

          {/* Clean Glassmorphic Table Container */}
          <div className="glass-panel rounded-3xl overflow-hidden shadow-xl shadow-[#1c2722]/5">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#1c2722]/6 bg-slate-50/30 backdrop-blur-xs">
                    <th className="py-5 px-6 text-xs font-bold text-[#3e4d46]/70 uppercase tracking-wider w-[40%]">
                      Performance & Specs
                    </th>
                    <th className="py-5 px-6 text-center text-xs font-extrabold text-white uppercase tracking-wider w-[30%] bg-gradient-to-r from-brand-primary to-brand-secondary">
                      Choyal Stone Dresser
                    </th>
                    <th className="py-5 px-6 text-center text-xs font-bold text-[#3e4d46]/70 uppercase tracking-wider w-[30%]">
                      Manual Dressing
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1c2722]/6 bg-white/20">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition-colors duration-200">
                      {/* Metric Name */}
                      <td className="py-4.5 px-6 text-sm font-semibold text-[#1c2722]">
                        {row.metric}
                      </td>

                      {/* Choyal Stone Dresser Column */}
                      <td className="py-4.5 px-6 text-center bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold text-sm">
                        {row.dresser}
                      </td>

                      {/* Manual Dressing Column */}
                      <td className="py-4.5 px-6 text-center text-[#3e4d46] text-sm font-medium">
                        {row.manual}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-[#3e4d46]/80 text-xs leading-relaxed max-w-2xl mx-auto">
            The specifications listed above represent standard comparative configurations. Optional systems such as pneumatic holding clamps, motorised hoists, and blower/collector units are available upon request. To configure the exact layout for your mill size, please contact us.
          </p>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 lg:py-28 relative z-10 section-bg-secondary overflow-hidden">
        <div className="w-full space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase block">
              Customer Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              What mill owners say after upgrading
            </h2>
            <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
              Read how flour mills around the world improved safety, reduced downtime, and eliminated manual dressing reliance.
            </p>
          </div>

          {/* Scrolling Testimonials Area - Single Continuous Row */}
          <div className="marquee-container w-full overflow-hidden flex relative mask-gradient">
            
            {/* Card list: Set 1 */}
            <div className="animate-marquee flex gap-6 flex-shrink-0">
              {testimonials.map((item, idx) => (
                <div 
                  key={idx}
                  className="w-[380px] p-6 rounded-2xl glass-panel flex flex-col justify-between space-y-5 shadow-md shadow-black/[0.04] border border-[#1c2722]/8 flex-shrink-0 bg-white/60"
                >
                  <div className="space-y-3">
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed italic font-medium">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-3.5 pt-2 border-t border-[#1c2722]/6">
                    <div className={`w-9 h-9 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold font-mono shadow-xs`}>
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-none">
                        {item.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-1">
                        {item.role}, {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Card list: Set 2 (Identical for seamless infinite scroll) */}
            <div className="animate-marquee flex gap-6 flex-shrink-0 pl-6">
              {testimonials.map((item, idx) => (
                <div 
                  key={`dup-${idx}`}
                  className="w-[380px] p-6 rounded-2xl glass-panel flex flex-col justify-between space-y-5 shadow-md shadow-black/[0.04] border border-[#1c2722]/8 flex-shrink-0 bg-white/60"
                >
                  <div className="space-y-3">
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed italic font-medium">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-3.5 pt-2 border-t border-[#1c2722]/6">
                    <div className={`w-9 h-9 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold font-mono shadow-xs`}>
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-none">
                        {item.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-1">
                        {item.role}, {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 lg:py-28 relative z-10 section-bg-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest uppercase block">
              Frequently Asked
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Answers to the questions buyers usually ask
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "glass-panel border-[#1c2722]/15 shadow-md shadow-black/[0.04] bg-white"
                      : "bg-white/60 border-[#1c2722]/8 hover:border-[#1c2722]/15 hover:bg-white/90 shadow-2xs"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left space-x-4 focus:outline-hidden cursor-pointer"
                  >
                    <span className={`text-base font-semibold leading-relaxed transition-colors duration-200 ${
                      isOpen ? "text-brand-primary font-bold" : "text-[#1c2722]"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-full transition-all duration-200 flex-shrink-0 ${
                      isOpen ? "bg-brand-primary/10 text-brand-primary" : "bg-[#1c2722]/5 text-[#3e4d46]"
                    }`}>
                      {isOpen ? (
                        <Minus className="h-4 w-4 transition-transform duration-300 rotate-180" />
                      ) : (
                        <Plus className="h-4 w-4 transition-transform duration-300" />
                      )}
                    </div>
                  </button>

                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-sm sm:text-base text-[#3e4d46] leading-relaxed border-t border-[#1c2722]/6 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA & Footer Section */}
      <CTASection mode="stone-dresser" onRequestCallback={scrollToForm} />

      {/* Floating Callback button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-brand-indigo to-brand-violet hover:from-brand-indigo-hover hover:to-brand-violet text-white font-bold py-3.5 px-6 rounded-2xl shadow-[0_8px_25px_rgba(79,70,229,0.35)] hover:shadow-[0_10px_30px_rgba(79,70,229,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center space-x-2 text-sm cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          <span>Request Callback</span>
        </button>
      </div>

      {/* Popup Modal Lead Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <LeadForm mode="stone-dresser" className="shadow-none border-none bg-white p-6 sm:p-8" />
          </div>
        </div>
      )}

    </main>
  );
}
