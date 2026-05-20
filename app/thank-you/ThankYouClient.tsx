"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ThankYouClient() {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#819A91", "#A7C1A8", "#D1D8BE", "#ffffff"],
    });
  }, []);

  return (
    <main className="min-h-screen bg-brand-bg flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-secondary/10 blur-3xl pointer-events-none" />
      
      <div className="relative rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center justify-center text-center max-w-lg w-full border border-brand-primary/15 bg-white/60 backdrop-blur-xl z-10 animate-scale-in">
        <div className="absolute -top-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-[10px] sm:text-xs font-extrabold tracking-wider px-4 py-1.5 rounded-full shadow-md">
          REQUEST RECEIVED
        </div>
        <div className="w-20 h-20 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-6 animate-pulse">
          <CheckCircle2 className="h-10 w-10 text-brand-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Thank You!</h1>
        <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
          A Wonder Mill plant consultant will review your requirement and contact you within 24 hours.
        </p>
        <Link
          href="/"
          className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3.5 px-8 rounded-full shadow-xl hover:shadow-2xl hover:shadow-black/20 transition-all flex items-center gap-2 w-full justify-center sm:w-auto hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
