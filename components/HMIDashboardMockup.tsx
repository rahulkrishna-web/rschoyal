"use client";

import { useState, useEffect } from "react";
import { Play, Square, Settings, ShieldAlert, CheckCircle2, Flame, Zap } from "lucide-react";

export default function HMIDashboardMockup() {
  const [isRunning, setIsRunning] = useState(true);
  const [rpm, setRpm] = useState(280);
  const [temp, setTemp] = useState(45);
  const [ampere, setAmpere] = useState(34.2);
  const [feedSpeed, setFeedSpeed] = useState(13.4);
  const [recipe, setRecipe] = useState("Premium Atta (Fine)");

  // Simulate minor status fluctuations if running
  useEffect(() => {
    if (!isRunning) {
      setRpm(0);
      setAmpere(0);
      setFeedSpeed(0);
      return;
    }

    setRpm(280);
    setAmpere(34.2);
    setFeedSpeed(13.4);

    const interval = setInterval(() => {
      setTemp((t) => Math.min(60, Math.max(35, t + (Math.random() - 0.5) * 2)));
      setAmpere((a) => Math.min(45, Math.max(25, a + (Math.random() - 0.5) * 0.8)));
      setFeedSpeed((f) => Math.min(18, Math.max(8, f + (Math.random() - 0.5) * 0.2)));
    }, 2000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="w-full max-w-[650px] aspect-auto sm:aspect-[16/10] bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden border border-slate-800">
      
      {/* Device Bezel & Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
          <span className="text-xs font-mono tracking-wider text-slate-400">WONDER_MILL_HMI_V2.5</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide flex items-center gap-1 ${
            isRunning ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isRunning ? "bg-emerald-400" : "bg-rose-400"}`}></span>
            {isRunning ? "Running" : "Offline"}
          </span>
          <Settings className="h-4 w-4 text-slate-400 hover:text-slate-200 cursor-pointer" />
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:h-[calc(100%-80px)] h-auto">
        
        {/* Left Column: Feed speed & Control */}
        <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Mill 1 Feed speed</h4>
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide border ${
                isRunning 
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                  : "bg-rose-500/10 text-rose-400 border-rose-500/20"
              }`}>
                {isRunning ? "On" : "Off"}
              </span>
            </div>
            <div className="relative flex flex-col items-center justify-center py-2">
              {/* Circular Dial Visual */}
              <div className="w-24 h-24 rounded-full border-4 border-slate-800 flex flex-col items-center justify-center relative">
                <div 
                  className="absolute inset-0 rounded-full border-4 border-t-brand-indigo border-r-brand-cyan border-b-transparent border-l-transparent transition-transform duration-1000"
                  style={{ transform: `rotate(${isRunning ? rpm : 0}deg)` }}
                ></div>
                <span className="text-xl font-black">{isRunning ? rpm : 0}</span>
                <span className="text-[10px] text-slate-400 uppercase font-mono">RPM</span>
              </div>

              {/* Feed speed value container */}
              <div className="mt-4 px-5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-center min-w-[90px] shadow-sm">
                <span className="text-lg font-black text-slate-100 block">
                  {isRunning ? feedSpeed.toFixed(1) : "0.0"}
                </span>
              </div>
            </div>
          </div>

          {/* Start/Stop Button Controls */}
          <div className="space-y-2">
            <button 
              onClick={() => setIsRunning(true)}
              disabled={isRunning}
              className={`w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                isRunning ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer active:scale-[0.98]"
              }`}
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              On Mill
            </button>
            <button 
              onClick={() => setIsRunning(false)}
              disabled={!isRunning}
              className={`w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                !isRunning ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-rose-600 hover:bg-rose-500 text-white cursor-pointer active:scale-[0.98]"
              }`}
            >
              <Square className="h-3.5 w-3.5 fill-current" />
              Stop Mill
            </button>
          </div>
        </div>

        {/* Center Column: Live Recipe Selection & Temp */}
        <div className="space-y-4 flex flex-col">
          {/* Recipe Select Widget */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 flex-1 flex flex-col justify-between gap-3">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Recipe Profile</h4>
              <div className="space-y-2">
                {["Premium Atta (Fine)", "Suji/Rawa (Medium)", "Whole Wheat (Coarse)"].map((r) => (
                  <button
                    key={r}
                    onClick={() => isRunning && setRecipe(r)}
                    disabled={!isRunning}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all ${
                      recipe === r 
                        ? "bg-brand-indigo/20 text-brand-indigo border border-brand-indigo/30 font-semibold" 
                        : "bg-slate-900/50 hover:bg-slate-800/50 text-slate-300 border border-slate-800/50"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-[10px] text-slate-500 italic mt-2">
              Select recipe to auto-adjust speed & feed.
            </div>
          </div>

          {/* Temperature widget */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 h-24 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Temp</span>
              <span className="text-2xl font-black text-slate-100 mt-1 block">
                {isRunning ? Math.round(temp) : "0"}°C
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
              <Flame className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Right Column: Energy & System Alerts */}
        <div className="space-y-4 flex flex-col">
          {/* Live Energy Consumption */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 flex-1 flex flex-col justify-between gap-3">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Ampere Load</h4>
              <div className="flex items-baseline space-x-1.5 mt-2">
                <span className="text-3xl font-black tracking-tight text-gradient-accent">
                  {isRunning ? ampere.toFixed(1) : "0.0"}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase">A</span>
              </div>
              
              {/* Progress bar visual (green-yellow-orange gradient) */}
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-4">
                <div 
                  className="bg-gradient-to-r from-emerald-500 via-yellow-500 to-orange-500 h-full transition-all duration-500" 
                  style={{ width: `${isRunning ? (ampere / 50) * 100 : 0}%` }}
                ></div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/5 px-2 py-1 rounded-md border border-emerald-500/10">
              <Zap className="h-3 w-3" />
              <span>Saving 30% vs traditional motor</span>
            </div>
          </div>

          {/* Alarm Status Indicator */}
          <div className={`border rounded-2xl p-4 h-24 flex items-center justify-between transition-all ${
            isRunning 
              ? "bg-slate-950/40 border-slate-800/80 text-slate-100" 
              : "bg-rose-950/10 border-rose-950/20 text-rose-400"
          }`}>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Diagnostics</span>
              <span className={`text-sm font-bold mt-1 block ${isRunning ? "text-emerald-400" : "text-rose-400"}`}>
                {isRunning ? "All systems normal" : "System Stop Active"}
              </span>
            </div>
            {isRunning ? (
              <CheckCircle2 className="h-7 w-7 text-emerald-500" />
            ) : (
              <ShieldAlert className="h-7 w-7 text-rose-500" />
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
