"use client";

import { Monitor, LineChart, BellRing, Database, Layers, Settings, Check } from "lucide-react";

export default function ControlRoomFeatures() {
  const features = [
    {
      icon: <Monitor className="h-6 w-6 text-brand-indigo" />,
      title: "Operate & control anywhere",
      points: [
        "Mobile, tablet & desktop operation",
        "Remote diagnostics & monitoring",
        "Role-based logins (Operator / Supervisor / Admin)",
      ],
      accent: "from-brand-indigo to-brand-violet",
    },
    {
      icon: <LineChart className="h-6 w-6 text-brand-violet" />,
      title: "Energy & performance monitoring",
      points: [
        "Live energy consumption tracking",
        "On-time mill running data",
        "Load-based power optimisation",
      ],
      accent: "from-brand-violet to-brand-cyan",
    },
    {
      icon: <BellRing className="h-6 w-6 text-brand-cyan" />,
      title: "Safety & alerts",
      points: [
        "Alarms for all critical conditions",
        "Three-step logic: alarm → remedy → shutdown",
        "Single-mill isolation, no full plant trip",
      ],
      accent: "from-brand-cyan to-brand-indigo",
    },
    {
      icon: <Database className="h-6 w-6 text-brand-indigo" />,
      title: "Data, MIS & cloud",
      points: [
        "Logging of running hours, energy & output",
        "Flour temperature trend analysis",
        "Cloud-ready architecture for MIS",
      ],
      accent: "from-brand-indigo to-brand-cyan",
    },
    {
      icon: <Layers className="h-6 w-6 text-brand-violet" />,
      title: "Recipe-based milling",
      points: [
        "Pre-set recipes for every flour grade you produce",
        "One-tap recall — same yield & texture, every batch",
        "Eliminates operator-to-operator variance",
      ],
      accent: "from-brand-violet to-brand-indigo",
    },
    {
      icon: <Settings className="h-6 w-6 text-brand-cyan" />,
      title: "Automation & calibration",
      points: [
        "Timer-based automatic operation",
        "Calibration support for every mill",
        "Auto-adjustment for stone wear",
      ],
      accent: "from-brand-cyan to-brand-violet",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 section-bg-secondary">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-[30%] left-[25%] w-[40%] aspect-square bg-brand-violet/3 rounded-full blur-[100px] pointer-events-none select-none"></div>
      
      <div className="w-full space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-indigo tracking-widest uppercase">
            Smart Digital Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Everything a modern flour mill control room needs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From manual override to full automation — Wonder Mill grows with your plant.
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="glass-panel p-8 rounded-3xl transition-all duration-300 shadow-md shadow-black/[0.04] hover:shadow-lg hover:shadow-black/[0.08] hover:-translate-y-0.5 flex flex-col group relative overflow-hidden"
            >
              {/* Icon Container with glowing base */}
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-5 tracking-tight">
                {feature.title}
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-3.5 mt-auto">
                {feature.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="flex items-start text-sm text-slate-600 leading-normal">
                    <span className="mr-2.5 mt-1 text-brand-indigo flex-shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
