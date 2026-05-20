"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Owner — 60 TPD Atta Plant",
      location: "Indore, India",
      initials: "RS",
      color: "bg-emerald-600",
      quote: "After we replaced our old chakkis with Wonder Mill, our electricity bill dropped almost a third in the very first month. The recipe feature alone saves us so many quality complaints.",
    },
    {
      name: "Pankaj Khanna",
      role: "Operations Head — Flour Mill",
      location: "Ahmedabad, India",
      initials: "PK",
      color: "bg-indigo-600",
      quote: "We monitor four mills from one tablet now. Maintenance team gets the alarm before there's any production loss. Would recommend to any plant above 30 TPD.",
    },
    {
      name: "Anil Shah",
      role: "MD — Family Flour Mill",
      location: "Nagpur, India",
      initials: "AS",
      color: "bg-violet-600",
      quote: "Installation was quick and the team trained our operators in two days. The cloud reports help us track every shift's output. A real upgrade for our family business.",
    },
    {
      name: "Vikram Reddy",
      role: "Plant Manager",
      location: "Hyderabad, India",
      initials: "VR",
      color: "bg-cyan-600",
      quote: "The digital stone engaging control is amazing. We no longer rely on operator intuition to set the grinding gap. The consistency of flour is identical across shifts.",
    },
    {
      name: "Gurbaksh Singh",
      role: "Director — Food Processing",
      location: "Ludhiana, India",
      initials: "GS",
      color: "bg-amber-600",
      quote: "Wonder Mill's automatic temperature control keeps flour cool during high-speed grinding. This preserves gluten quality and has brought back our institutional buyers.",
    },
    {
      name: "Suresh Mehta",
      role: "Chief Engineer",
      location: "Pune, India",
      initials: "SM",
      color: "bg-teal-600",
      quote: "Reduced downtime has been the biggest gain. Standard chakkis needed hours of maintenance, but these modular units let us service one mill without stopping the plant.",
    },
    {
      name: "Amit Patel",
      role: "Operations Director",
      location: "Rajkot, India",
      initials: "AP",
      color: "bg-rose-600",
      quote: "We went from manual oversight to automated auditing logs. We can now show our corporate bakery clients exact energy and quality telemetry for every batch.",
    },
    {
      name: "Ramanathan K.",
      role: "Managing Director",
      location: "Coimbatore, India",
      initials: "RK",
      color: "bg-sky-600",
      quote: "The power savings of up to 30% are real. Our return on investment was achieved in less than 12 months. Incredible engineering and software interface.",
    },
    {
      name: "Vijay Shekhawat",
      role: "Owner — Shekhawat Mills",
      location: "Jaipur, India",
      initials: "VS",
      color: "bg-orange-600",
      quote: "Being able to check plant telemetry from my phone while traveling has changed my life. I don't need to call the control room ten times a day.",
    },
    {
      name: "Devendra Gowda",
      role: "Shift Supervisor",
      location: "Bengaluru, India",
      initials: "DG",
      color: "bg-emerald-700",
      quote: "Our operators love the tablet interface. They were hesitant at first, but it is so intuitive that they refuse to go back to mechanical wheels now.",
    },
    {
      name: "Sanjay Banerjee",
      role: "Director — Quality Assurance",
      location: "Haldia, India",
      initials: "SB",
      color: "bg-blue-600",
      quote: "No full plant trips anymore. If one mill requires stone redressing, we isolate it digitally and keep the other 7 running. Our efficiency is at an all-time high.",
    },
    {
      name: "Manoj Mishra",
      role: "Maintenance Lead",
      location: "Raipur, India",
      initials: "MM",
      color: "bg-purple-600",
      quote: "We get automated WhatsApp and SMS alerts for any overload conditions. This prevention mechanism has saved us from critical breakdowns twice this quarter.",
    },
  ];

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
            Mill owners who upgraded — and never looked back
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hear directly from flour mill owners and operators about how Wonder Mill transformed their daily operations, consistency, and profitability.
          </p>
        </div>

        {/* Scrolling Testimonials Area - Single Continuous Row */}
        <div className="marquee-container w-full overflow-hidden flex relative mask-gradient">
          
          {/* Card list: Set 1 */}
          <div className="animate-marquee flex gap-6 flex-shrink-0">
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
          <div className="animate-marquee flex gap-6 flex-shrink-0 pl-6">
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
