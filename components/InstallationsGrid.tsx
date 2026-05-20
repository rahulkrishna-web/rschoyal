"use client";

import Image from "next/image";
import { MapPin, Settings, Cpu } from "lucide-react";

export default function InstallationsGrid() {
  const installations = [
    {
      title: "60 TPD Atta Plant",
      desc: "Indore, India · 8 Wonder Mills",
      tag: "Domestic Plant",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Centralised Control Room",
      desc: "Ahmedabad, India · 100 TPD plant",
      tag: "Control Room",
      img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Wholegrain Flour Facility",
      desc: "Lagos, Nigeria · 40 TPD plant",
      tag: "International",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Wonder Mill — Close-Up",
      desc: "High-precision digital grinding stone casing",
      tag: "Equipment",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "HMI in Operation",
      desc: "Tablet-mounted operator dashboard at work",
      tag: "Interface",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Miller Lite Panel Install",
      desc: "Modular control electrical cabinet layout",
      tag: "Automation",
      img: "https://images.unsplash.com/photo-1590986424791-2355385d0442?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 section-bg-cream">
      
      {/* Background Soft Glow */}
      <div className="absolute top-[40%] right-[15%] w-[30%] aspect-square bg-brand-cyan/3 rounded-full blur-[110px] pointer-events-none select-none"></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-indigo tracking-widest uppercase block">
            Real Installations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Wonder Mill in the field
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            See how modern flour mills around the world are scaling operations, reducing energy overhead, and automating control rooms with Wonder Mill.
          </p>
        </div>

        {/* Installations Grid (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {installations.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel p-4 rounded-3xl transition-all duration-300 shadow-md shadow-black/[0.04] hover:shadow-lg hover:shadow-black/[0.08] hover:-translate-y-0.5 group flex flex-col"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-5">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay Badge */}
                <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-slate-700 shadow-xs border border-slate-200/50">
                  {item.tag}
                </span>
              </div>

              {/* Title & Info */}
              <div className="px-2 pb-2 space-y-2">
                <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-brand-indigo transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-2 text-slate-500">
                  <MapPin className="h-4 w-4 text-brand-indigo/60 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium leading-tight">
                    {item.desc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
