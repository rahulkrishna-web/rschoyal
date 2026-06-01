"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
  const baseTestimonials = [
    {
      name: "Raghav Rathi",
      role: "Director",
      location: "Rathi Agro Foods",
      initials: "RR",
      color: "bg-emerald-600",
      quote: "Wonder Mill cut our atta losses during power cuts and helped us maintain consistent flour quality. Beyond the technology itself, the Choyal team's problem-solving approach and after-sales support set them apart from every other supplier we've worked with. They've earned our trust completely.",
    },
    {
      name: "Darshan Vaid",
      role: "Director",
      location: "Vatsalya Agro",
      initials: "DV",
      color: "bg-indigo-600",
      quote: "We needed grinding consistency that wouldn't compromise on atta softness and Wonder Mill delivered exactly that. Power consumption stays balanced even at full production, maintenance is minimal, and the automation makes daily operation effortless. A genuinely dependable solution for any commercial atta business.",
    },
    {
      name: "Himanshu Singh",
      role: "Director",
      location: "Heathfuller Flour Foods",
      initials: "HS",
      color: "bg-violet-600",
      quote: "The heat control and hydraulic pressure system keep our atta consistently fresh and uniform, batch after batch. One-touch start makes operation incredibly easy, and the automatic shutdown during any fault has saved us from real damage more than once. Reliable, safe, and remarkably easy to run.",
    },
    {
      name: "Narendra Singh",
      role: "Founder",
      location: "Satyam Industries",
      initials: "NS",
      color: "bg-cyan-600",
      quote: "Wonder Mill helped us scale from 10 to 60 TPD without scaling our team to match. We now consistently produce up to 550 kg per hour, and the automation means even lightly-trained operators can run the machines. My customers get the same flour quality every batch and that's what matters most.",
    },
  ];

  // Programmatically duplicate the list to ensure the marquee has enough elements to loop seamlessly on wider screens
  const testimonials = [...baseTestimonials, ...baseTestimonials];

  const renderStars = () => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );

  return (
    <section className="w-full py-20 lg:py-28 relative z-10 section-bg-secondary overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[40%] aspect-square bg-brand-violet/3 rounded-full blur-[120px] pointer-events-none select-none"></div>

      <div className="w-full space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto px-6">
          <span className="text-xs font-bold text-brand-indigo tracking-widest uppercase block">
            Customer Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Mill owners who upgraded - and never looked back
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hear directly from flour mill owners and operators about how Wonder Mill transformed their daily operations, consistency, and profitability.
          </p>
        </div>

        {/* Scrolling Testimonials Area - Single Continuous Row */}
        <div className="marquee-container w-full overflow-hidden flex relative mask-gradient">
          
          {/* Card list: Set 1 */}
          <div className="animate-marquee flex gap-6 flex-shrink-0 pr-6">
            {testimonials.map((item, idx) => (
              <div 
                key={idx}
                className="w-[380px] p-6 rounded-2xl glass-panel flex flex-col justify-between space-y-5 shadow-md shadow-black/[0.04] border border-[#1c2722]/8 flex-shrink-0"
              >
                <div className="space-y-3">
                  {renderStars()}
                  <p className="text-sm text-slate-700 leading-relaxed italic">
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
          <div className="animate-marquee flex gap-6 flex-shrink-0 pr-6">
            {testimonials.map((item, idx) => (
              <div 
                key={`dup-${idx}`}
                className="w-[380px] p-6 rounded-2xl glass-panel flex flex-col justify-between space-y-5 shadow-md shadow-black/[0.04] border border-[#1c2722]/8 flex-shrink-0"
              >
                <div className="space-y-3">
                  {renderStars()}
                  <p className="text-sm text-slate-700 leading-relaxed italic">
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
  );
}
