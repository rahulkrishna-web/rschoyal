"use client";

import { Phone, CheckCircle2 } from "lucide-react";

interface CTASectionProps {
  onRequestCallback?: () => void;
  mode?: "wondermill" | "stone-dresser";
}

export default function CTASection({
  onRequestCallback,
  mode = "wondermill",
}: CTASectionProps) {
  const isStoneDresser = mode === "stone-dresser";

  const phoneNum = isStoneDresser ? "+91 8003 198 247" : "+91 92402 89259";
  const phoneTel = isStoneDresser ? "tel:+918003198247" : "tel:+919240289259";
  const emailAddr = isStoneDresser ? "info@choyal.com" : "info@rschoyalgroup.com";

  const bullets = isStoneDresser
    ? [
        "Free configuration & ROI estimate",
        'All four stone sizes supported (20" - 48")',
        "Worldwide installation & AMC support",
        "Callback within one working day",
      ]
    : [
        "Free plant sizing & ROI estimate",
        "Custom configuration for your TPD",
        "Worldwide installation & AMC support",
        "Callback within one working day",
      ];

  return (
    <section className="w-full relative z-10">
      
      {/* Background Decorative Blob for CTA Area */}
      <div className="absolute top-[20%] left-[10%] w-[35%] aspect-square bg-brand-indigo/4 rounded-full blur-[120px] pointer-events-none select-none"></div>

      {/* Upper CTA Block (Light Theme Gradient & Glassmorphism Card) */}
      <div className="w-full py-16 sm:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 section-bg-tertiary">
        <div className="w-full mx-auto">
          
          <div className="glass-panel p-8 sm:p-12 md:p-16 rounded-3xl border border-[#1c2722]/8 shadow-xl shadow-black/[0.05] relative overflow-hidden">
            
            {/* Glowing background inside card */}
            <div className="absolute -top-[50%] -right-[20%] w-[60%] aspect-square bg-brand-cyan/8 rounded-full blur-[100px] pointer-events-none select-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
              
              {/* Left Column: Headline, Subtitle, Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-brand-indigo tracking-widest uppercase block">
                    Get Started Today
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                    {isStoneDresser ? (
                      <>
                        <span className="text-gradient block">Ready to stop losing</span>
                        <span className="text-gradient-accent block my-1">shifts to stone dressing?</span>
                      </>
                    ) : (
                      <>
                        <span className="text-gradient block">Ready to digitise</span>
                        <span className="text-gradient-accent block my-1">your flour mill?</span>
                      </>
                    )}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                    {isStoneDresser
                      ? "Talk to a Choyal engineer for a free spec review and a quote tailored to your mill."
                      : "Talk to a Wonder Mill engineer for a free plant assessment and a custom quote."}
                  </p>
                </div>

                {/* Bullets with green icons in 2x2 grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start space-x-3 text-slate-700 text-sm sm:text-base font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: CTA Actions */}
              <div className="lg:col-span-5 flex flex-col space-y-4 w-full md:max-w-md ml-auto">
                
                {/* Primary Callback button */}
                <button
                  onClick={onRequestCallback}
                  className="w-full bg-gradient-to-r from-brand-indigo to-brand-violet hover:from-brand-indigo-hover hover:to-brand-violet text-white font-bold py-4.5 px-8 rounded-2xl shadow-[0_8px_20px_rgba(79,70,229,0.25)] hover:shadow-[0_10px_25px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center text-sm sm:text-base cursor-pointer"
                >
                  Request a Callback
                </button>

                {/* Secondary Phone call button */}
                <a
                  href={phoneTel}
                  className="w-full border border-slate-200 hover:border-brand-indigo/35 hover:bg-slate-50/50 text-slate-800 font-bold py-4.5 px-8 rounded-2xl flex items-center justify-center space-x-2.5 transition-all duration-150 text-center text-sm sm:text-base cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-brand-indigo flex-shrink-0" />
                  <span>Call {phoneNum}</span>
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Lower Footer Block (Light Slate/Gray with Glassmorphism) */}
      <footer className="w-full pt-16 pb-32 px-6 sm:px-12 lg:px-16 xl:px-24 section-bg-primary-mist">
        <div className="w-full mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            
            {/* Left Box: Company Details */}
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-3.5 flex-wrap">
                <div className="inline-flex bg-white px-4 py-2.5 rounded-xl shadow-xs border border-slate-200/60">
                  <img 
                    src="/rschoyal-logo.svg" 
                    alt="RS Choyal Group Logo" 
                    className="h-[40px] w-auto object-contain"
                  />
                </div>
                <div className="inline-flex bg-white px-4 py-2.5 rounded-xl shadow-xs border border-slate-200/60">
                  <img 
                    src="/choyal-logo.png" 
                    alt="Choyal Logo" 
                    className="h-[40px] w-auto object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xs font-bold text-slate-900 tracking-widest uppercase pt-2">
                {isStoneDresser ? "Choyal Grinding Solution Pvt Ltd" : "RS Choyal Group"}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                {isStoneDresser ? (
                  <>
                    Regd. & City Office: Choyal Tower, 1180/28, Adarsh Nagar,<br />
                    Nasirabad Road, Ajmer – 305 002, Rajasthan, India<br />
                    <span className="text-xs text-slate-400 block mt-1">
                      Works: Arjunpura – Khalsa, Dist. Ajmer – 305 206
                    </span>
                  </>
                ) : (
                  <>
                    Choyal Tower, 1180/28, Shalimar Colony,<br />
                    Adarsh Nagar, Ajmer – 305 008, Rajasthan, India
                  </>
                )}
              </p>
            </div>

            {/* Right Box: Contact channels */}
            <div className="space-y-4 md:ml-auto md:w-fit text-left">
              <h3 className="text-xs font-bold text-slate-900 tracking-widest uppercase">
                Talk to us
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a href={phoneTel} className="text-brand-indigo hover:text-brand-indigo-hover font-bold transition-colors">
                    {phoneNum}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${emailAddr}`} className="text-slate-600 hover:text-slate-900 transition-colors">
                    {emailAddr}
                  </a>
                </li>
                <li>
                  {isStoneDresser ? (
                    <div className="flex flex-col space-y-1">
                      <a 
                        href="https://www.choyal.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        www.choyal.com
                      </a>
                      <a 
                        href="https://www.rschoyalgroup.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        rschoyalgroup.com
                      </a>
                    </div>
                  ) : (
                    <a 
                      href="https://www.rschoyalgroup.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      www.rschoyalgroup.com
                    </a>
                  )}
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="border-t border-slate-200/80 py-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-slate-400 text-center sm:text-left">
            <p>
              {isStoneDresser ? (
                <span>
                  © {new Date().getFullYear()} Choyal Grinding Solution Pvt Ltd · CIN U28299RJ2025PTC101719 · Part of RS Choyal Group
                </span>
              ) : (
                <span>
                  © {new Date().getFullYear()} RS Choyal Group. All rights reserved.
                </span>
              )}
            </p>
            <p className="italic">
              {isStoneDresser ? (
                <span>
                  Emery Stone Dresser is a patented design of Choyal Grinding Solution.
                </span>
              ) : (
                <span>
                  Wonder Mill® and Wonder Miller® are registered trademarks.
                </span>
              )}
            </p>
          </div>

        </div>
      </footer>

    </section>
  );
}
