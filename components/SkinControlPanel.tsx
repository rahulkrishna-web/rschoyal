"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check, X, Sliders, RefreshCw } from "lucide-react";

interface ColorPreset {
  name: string;
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    tertiary: string;
    bg: string;
    foreground: string;
    muted: string;
    card: string;
    border: string;
  };
}

const PRESETS: ColorPreset[] = [
  {
    name: "Classic Wonder Mill (Default)",
    colors: {
      primary: "#015435",
      primaryHover: "#015435",
      secondary: "#33ac7f",
      tertiary: "#faa831",
      bg: "#F9F6F0",
      foreground: "#3C2317",
      muted: "#7A5E53",
      card: "rgba(255, 255, 255, 0.9)",
      border: "rgba(60, 35, 23, 0.08)"
    }
  },
  {
    name: "Midnight Forest (Dark)",
    colors: {
      primary: "#A7C1A8",
      primaryHover: "#D1D8BE",
      secondary: "#819A91",
      tertiary: "#E4E7D5",
      bg: "#121A16",
      foreground: "#EEEFE0",
      muted: "#A7C1A8",
      card: "rgba(28, 39, 34, 0.5)",
      border: "rgba(255, 255, 255, 0.08)"
    }
  },
  {
    name: "Royal Navy & Gold (Dark)",
    colors: {
      primary: "#D4AF37",
      primaryHover: "#AA8A1E",
      secondary: "#1E3A8A",
      tertiary: "#F3E8FF",
      bg: "#0F172A",
      foreground: "#F8FAFC",
      muted: "#94A3B8",
      card: "rgba(30, 41, 59, 0.7)",
      border: "rgba(255, 255, 255, 0.06)"
    }
  },
  {
    name: "Warm Terracotta (Earthy)",
    colors: {
      primary: "#C97A63",
      primaryHover: "#AA5F4A",
      secondary: "#E2AA88",
      tertiary: "#F2E2C9",
      bg: "#F9F6F0",
      foreground: "#3C2317",
      muted: "#7A5E53",
      card: "rgba(255, 255, 255, 0.9)",
      border: "rgba(60, 35, 23, 0.08)"
    }
  }
];

export default function SkinControlPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Position state for dragging (translation offsets)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Color states
  const [primary, setPrimary] = useState("#015435");
  const [primaryHover, setPrimaryHover] = useState("#015435");
  const [secondary, setSecondary] = useState("#33ac7f");
  const [tertiary, setTertiary] = useState("#faa831");
  const [bg, setBg] = useState("#F9F6F0");
  const [foreground, setForeground] = useState("#3C2317");
  const [muted, setMuted] = useState("#7A5E53");
  const [card, setCard] = useState("rgba(255, 255, 255, 0.9)");
  const [border, setBorder] = useState("rgba(60, 35, 23, 0.08)");

  // Toggle open state on Ctrl + 9
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "9") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Dragging event listeners
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  // Sync colors to document root style
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--brand-primary", primary);
    root.style.setProperty("--brand-primary-hover", primaryHover);
    root.style.setProperty("--brand-secondary", secondary);
    root.style.setProperty("--brand-tertiary", tertiary);
    root.style.setProperty("--brand-bg", bg);
    root.style.setProperty("--brand-foreground", foreground);
    root.style.setProperty("--brand-muted", muted);
    root.style.setProperty("--brand-card", card);
    root.style.setProperty("--brand-border", border);

    // Update browser theme color dynamically
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.setAttribute("name", "theme-color");
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute("content", primary);
  }, [primary, primaryHover, secondary, tertiary, bg, foreground, muted, card, border]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Only allow left click
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("input")) return;

    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const loadPreset = (preset: ColorPreset) => {
    setPrimary(preset.colors.primary);
    setPrimaryHover(preset.colors.primaryHover);
    setSecondary(preset.colors.secondary);
    setTertiary(preset.colors.tertiary);
    setBg(preset.colors.bg);
    setForeground(preset.colors.foreground);
    setMuted(preset.colors.muted);
    setCard(preset.colors.card);
    setBorder(preset.colors.border);
  };

  const getColorsJson = () => {
    return JSON.stringify(
      {
        "brand-primary": primary,
        "brand-primary-hover": primaryHover,
        "brand-secondary": secondary,
        "brand-tertiary": tertiary,
        "brand-bg": bg,
        "brand-foreground": foreground,
        "brand-muted": muted,
        "brand-card": card,
        "brand-border": border,
      },
      null,
      2
    );
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getColorsJson());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  if (!isOpen) return null; // No default button widget, fully secret shortcut trigger

  return (
    <div 
      className="fixed w-96 max-h-[85vh] bg-[#1c2722] text-white rounded-3xl border border-white/10 shadow-2xl p-6 overflow-y-auto z-50 flex flex-col space-y-5"
      style={{
        right: "16px",
        bottom: "16px",
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isDragging ? "none" : "transform 0.1s ease-out"
      }}
    >
      {/* Header (Draggable handle) */}
      <div 
        onMouseDown={handleMouseDown}
        className="flex items-center justify-between border-b border-white/10 pb-3 cursor-grab active:cursor-grabbing select-none"
      >
        <div className="flex items-center gap-2 pointer-events-none">
          <Sliders className="h-5 w-5 text-brand-secondary" />
          <h3 className="font-bold text-base tracking-tight">Skin Customizer</h3>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors relative z-10"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Presets */}
      <div className="space-y-2.5">
        <span className="text-xs font-semibold text-white/60 uppercase tracking-wider block">
          Preset Skins
        </span>
        <div className="grid grid-cols-2 gap-2">
          {PRESETS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => loadPreset(preset)}
              className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-left text-xs font-medium transition-all duration-200"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Manual Controls */}
      <div className="space-y-3.5 border-t border-white/10 pt-4">
        <span className="text-xs font-semibold text-white/60 uppercase tracking-wider block">
          Custom Colors
        </span>
        <div className="space-y-3 max-h-[25vh] overflow-y-auto pr-1">
          {/* Brand Primary */}
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-white/80">Primary Color</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={primary}
                onChange={(e) => setPrimary(e.target.value)}
                className="w-20 px-2 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono text-center focus:outline-hidden"
              />
              <input
                type="color"
                value={primary}
                onChange={(e) => setPrimary(e.target.value)}
                className="w-6 h-6 rounded-md cursor-pointer border-none bg-transparent"
              />
            </div>
          </div>

          {/* Primary Hover */}
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-white/80">Primary Hover</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={primaryHover}
                onChange={(e) => setPrimaryHover(e.target.value)}
                className="w-20 px-2 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono text-center focus:outline-hidden"
              />
              <input
                type="color"
                value={primaryHover}
                onChange={(e) => setPrimaryHover(e.target.value)}
                className="w-6 h-6 rounded-md cursor-pointer border-none bg-transparent"
              />
            </div>
          </div>

          {/* Brand Secondary */}
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-white/80">Secondary Color</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={secondary}
                onChange={(e) => setSecondary(e.target.value)}
                className="w-20 px-2 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono text-center focus:outline-hidden"
              />
              <input
                type="color"
                value={secondary}
                onChange={(e) => setSecondary(e.target.value)}
                className="w-6 h-6 rounded-md cursor-pointer border-none bg-transparent"
              />
            </div>
          </div>

          {/* Brand Tertiary */}
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-white/80">Tertiary Color</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={tertiary}
                onChange={(e) => setTertiary(e.target.value)}
                className="w-20 px-2 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono text-center focus:outline-hidden"
              />
              <input
                type="color"
                value={tertiary}
                onChange={(e) => setTertiary(e.target.value)}
                className="w-6 h-6 rounded-md cursor-pointer border-none bg-transparent"
              />
            </div>
          </div>

          {/* Brand BG */}
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-white/80">Page Background</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={bg}
                onChange={(e) => setBg(e.target.value)}
                className="w-20 px-2 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono text-center focus:outline-hidden"
              />
              <input
                type="color"
                value={bg}
                onChange={(e) => setBg(e.target.value)}
                className="w-6 h-6 rounded-md cursor-pointer border-none bg-transparent"
              />
            </div>
          </div>

          {/* Foreground */}
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-white/80">Primary Text</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={foreground}
                onChange={(e) => setForeground(e.target.value)}
                className="w-20 px-2 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono text-center focus:outline-hidden"
              />
              <input
                type="color"
                value={foreground}
                onChange={(e) => setForeground(e.target.value)}
                className="w-6 h-6 rounded-md cursor-pointer border-none bg-transparent"
              />
            </div>
          </div>

          {/* Muted Text */}
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-white/80">Muted Text</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={muted}
                onChange={(e) => setMuted(e.target.value)}
                className="w-20 px-2 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono text-center focus:outline-hidden"
              />
              <input
                type="color"
                value={muted}
                onChange={(e) => setMuted(e.target.value)}
                className="w-6 h-6 rounded-md cursor-pointer border-none bg-transparent"
              />
            </div>
          </div>

          {/* Card BG CSS input */}
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-white/80">Card Background (CSS)</label>
            <input
              type="text"
              value={card}
              onChange={(e) => setCard(e.target.value)}
              className="w-32 px-2 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono text-right focus:outline-hidden"
            />
          </div>

          {/* Card Border CSS input */}
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-white/80">Card Border (CSS)</label>
            <input
              type="text"
              value={border}
              onChange={(e) => setBorder(e.target.value)}
              className="w-32 px-2 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono text-right focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      {/* JSON Output & Copy */}
      <div className="space-y-2 border-t border-white/10 pt-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
            Configuration JSON
          </span>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-semibold text-brand-secondary transition-all"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy JSON</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-3 bg-black/30 rounded-xl text-[10px] font-mono overflow-auto max-h-[15vh] border border-white/5 text-white/90">
          {getColorsJson()}
        </pre>
      </div>

      {/* Reset */}
      <button
        onClick={() => loadPreset(PRESETS[0])}
        className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
      >
        <RefreshCw className="h-3.5 w-3.5" />
        <span>Reset to Default Colors</span>
      </button>
    </div>
  );
}
