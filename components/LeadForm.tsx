"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function LeadForm({ className = "" }: { className?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "",
    city: "",
    email: "",
    requirement: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const requirements = [
    { value: "", label: "Select your requirement" },
    { value: "setup_flour_plant", label: "Set up a new flour plant (20+ TPD)" },
    { value: "upgrade_chakki", label: "Upgrade standard chakkis to Wonder Mill" },
    { value: "iot_automation", label: "IoT Automation & remote plant control" },
    { value: "pricing_demo", label: "Request price quotation & machine demo" },
    { value: "other", label: "Other inquiries" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.requirement) newErrors.requirement = "Please select a requirement";
    
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className={`relative glass-panel rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center text-center min-h-[520px] transition-all duration-500 border border-brand-indigo/15 ${className || "shadow-slate-900/10"}`}>
        <div className="absolute -top-3.5 left-8 bg-gradient-to-r from-brand-indigo to-brand-violet text-white text-[10px] font-extrabold tracking-wider px-3.5 py-1.5 rounded-lg shadow-md">
          REQUEST RECEIVED
        </div>
        <div className="w-16 h-16 rounded-full bg-brand-indigo/5 border border-brand-indigo/20 flex items-center justify-center mb-6 animate-pulse">
          <CheckCircle2 className="h-10 w-10 text-brand-indigo" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Callback Scheduled</h3>
        <p className="text-slate-600 text-sm max-w-xs leading-relaxed">
          Thanks for reaching out! A Wonder Mill plant consultant will review your requirement and contact you within 24 hours.
        </p>
        <button
          onClick={() => {
            setFormData({ name: "", phone: "", country: "", city: "", email: "", requirement: "" });
            setIsSuccess(false);
          }}
          className="mt-8 text-xs font-bold text-brand-indigo hover:text-brand-indigo-hover tracking-wider uppercase transition-colors duration-200"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className={`relative glass-panel rounded-3xl p-8 shadow-2xl ${className || "shadow-slate-900/10"} transition-all duration-300`}>
      {/* Overlapping top badge */}
      <div className="absolute -top-3.5 left-8 animate-shimmer text-white text-[10px] font-extrabold tracking-widest px-3.5 py-1.5 rounded-lg shadow-md select-none uppercase">
        FREE CONSULTATION
      </div>

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Talk to a Wonder Mill expert
        </h3>
        <p className="text-sm sm:text-base text-slate-500 mt-2 leading-relaxed">
          Share your details — we&apos;ll call back within one working day with plant sizing & pricing.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-1.5">
            Name <span className="text-brand-indigo">*</span>
          </label>
          <input
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full text-sm px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none ${
              errors.name
                ? "border-red-500/50 focus:ring-2 focus:ring-red-500/10"
                : "border-slate-200 focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/10"
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Phone & Country Fields (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-1.5">
              Phone <span className="text-brand-indigo">*</span>
            </label>
            <input
              type="tel"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full text-sm px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none ${
                errors.phone
                  ? "border-red-500/50 focus:ring-2 focus:ring-red-500/10"
                  : "border-slate-200 focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/10"
              }`}
            />
            {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-1.5">
              Country <span className="text-brand-indigo">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. India"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className={`w-full text-sm px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none ${
                errors.country
                  ? "border-red-500/50 focus:ring-2 focus:ring-red-500/10"
                  : "border-slate-200 focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/10"
              }`}
            />
            {errors.country && <p className="text-[11px] text-red-500 mt-1">{errors.country}</p>}
          </div>
        </div>

        {/* City Field */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-1.5">
            City <span className="text-brand-indigo">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Indore / Lagos / Dubai"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className={`w-full text-sm px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none ${
              errors.city
                ? "border-red-500/50 focus:ring-2 focus:ring-red-500/10"
                : "border-slate-200 focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/10"
            }`}
          />
          {errors.city && <p className="text-[11px] text-red-500 mt-1">{errors.city}</p>}
        </div>

        {/* Email Field (Optional) */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-1.5">
            Email <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full text-sm px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none ${
              errors.email
                ? "border-red-500/50 focus:ring-2 focus:ring-red-500/10"
                : "border-slate-200 focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/10"
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Requirement Field */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-1.5">
            Requirement <span className="text-brand-indigo">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.requirement}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
              className={`w-full text-sm px-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none appearance-none cursor-pointer ${
                errors.requirement
                  ? "border-red-500/50 focus:ring-2 focus:ring-red-500/10"
                  : "border-slate-200 focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/10"
              }`}
            >
              {requirements.map((req) => (
                <option key={req.value} value={req.value} className="bg-white text-slate-900">
                  {req.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          {errors.requirement && <p className="text-[11px] text-red-500 mt-1">{errors.requirement}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 bg-gradient-to-r from-brand-indigo to-brand-violet hover:from-brand-indigo-hover hover:to-brand-violet text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/15 transition-all duration-350 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
        >
          {isSubmitting ? (
            <span>Scheduling...</span>
          ) : (
            <>
              <span>Request a Callback</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        {/* Terms Note */}
        <p className="text-xs text-slate-500 text-center mt-3 leading-relaxed">
          By submitting, you agree to be contacted by our team. No spam.
        </p>
      </form>
    </div>
  );
}
