"use client";

import HMIDashboardMockup from "./HMIDashboardMockup";
import { Layers, ShieldCheck, Smartphone } from "lucide-react";

export default function HMISection() {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 section-bg-cream">
      
      {/* Background glowing blob */}
      <div className="absolute top-[50%] right-[-10%] w-[45%] aspect-square bg-brand-cyan/5 rounded-full blur-[130px] pointer-events-none select-none"></div>
      
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto relative z-10">
        
        {/* Left Column: Copy & Text Content */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-bold text-brand-indigo tracking-widest uppercase block">
            The Wonder Mill HMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Your whole plant, on one screen.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The on-panel touchscreen and matching mobile app give operators one
            consistent interface for plant operations, recipes, alarms, calibration
            and data logging. No SCADA training required - most operators are
            productive on day one.
          </p>

          {/* Value Adds List */}
          <div className="space-y-4 pt-4 border-t border-slate-200/80">
            <div className="flex items-center space-x-3 text-slate-700">
              <div className="w-8 h-8 rounded-lg bg-brand-indigo/5 border border-brand-indigo/10 flex items-center justify-center text-brand-indigo">
                <Smartphone className="h-4.5 w-4.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold">Available on iOS, Android & touchscreen panels</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-700">
              <div className="w-8 h-8 rounded-lg bg-brand-indigo/5 border border-brand-indigo/10 flex items-center justify-center text-brand-indigo">
                <Layers className="h-4.5 w-4.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold">One-tap recipe recall and speed presets</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-700">
              <div className="w-8 h-8 rounded-lg bg-brand-indigo/5 border border-brand-indigo/10 flex items-center justify-center text-brand-indigo">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold">Real-time status diagnostics & sensor logging</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive HMI Mockup Screen */}
        <div className="lg:col-span-7 flex justify-center items-center">
          <HMIDashboardMockup />
        </div>

      </div>
    </section>
  );
}
