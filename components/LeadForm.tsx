"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LeadForm({
  className = "",
  mode = "wondermill",
}: {
  className?: string;
  mode?: "wondermill" | "stone-dresser";
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    requirement: "",
    currentTpd: "",
    country: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const requirements =
    mode === "stone-dresser"
      ? [
          { value: "", label: "Select stone size" },
          { value: "500mm", label: '500 mm (20")' },
          { value: "600mm", label: '600 mm (24")' },
          { value: "750mm", label: '750 mm (30")' },
          { value: "1200mm", label: '1200 mm (48")' },
          { value: "multiple", label: "Multiple sizes / unsure" },
          { value: "other", label: "Spares / service / other" },
        ]
      : [
          { value: "", label: "Select your requirement" },
          { value: "upgrade_chakki", label: "Upgrade current chakki to Wondermill" },
          { value: "new_plant_setup", label: "New plant setup" },
        ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-()]/g, "");
      if (!/^\+?[0-9]{7,15}$/.test(cleanPhone)) {
        newErrors.phone = "Please enter a valid phone number (e.g. +91 98765 43210)";
      }
    }
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.requirement) newErrors.requirement = "Please select a requirement";
    
    if (mode === "stone-dresser" && !formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Get the page URL where this request was generated
    const sourceUrl = typeof window !== "undefined" ? window.location.href : "";

    const reqLabel = requirements.find((r) => r.value === formData.requirement)?.label || formData.requirement;
    
    // Construct COMMENTS field: include the selected requirement, optional fields (TPD, country), and the page URL
    const commentsArray = [];
    if (reqLabel) {
      commentsArray.push(`Requirement: ${reqLabel}`);
    }
    if (formData.currentTpd) {
      commentsArray.push(`Current TPD: ${formData.currentTpd}`);
    }
    if (formData.city) {
      commentsArray.push(`City: ${formData.city}`);
    }
    if (formData.country) {
      commentsArray.push(`Country: ${formData.country}`);
    }
    if (sourceUrl) {
      commentsArray.push(`Source URL: ${sourceUrl}`);
    }
    const comments = commentsArray.join("\n");

    // Request structure as per user's webhook specifications
    // Webhook URL: https://choyal.bitrix24.in/rest/5336/bp1hm7p0vsp58f9f/crm.lead.add.json
    const payload = {
      fields: {
        TITLE: `Website Lead rschoyalgroup.com: ${formData.name}`,
        NAME: formData.name,
        EMAIL: formData.email
          ? [
              {
                VALUE: formData.email,
                VALUE_TYPE: "WORK",
              },
            ]
          : [],
        PHONE: [
          {
            VALUE: formData.phone,
            VALUE_TYPE: "WORK",
          },
        ],
        ADDRESS_CITY: formData.city,
        UF_CRM_1752059035074: formData.city,
        UF_CRM_1759314918705: formData.city,
        ADDRESS_COUNTRY: formData.country || "",
        UF_CRM_1752059070902: formData.country || "",
        COMMENTS: comments,
        SOURCE_ID: "UC_A2JQD7",
        UF_CRM_1780393121846: "482",
      },
    };

    try {
      const response = await fetch(
        "https://choyal.bitrix24.in/rest/5336/bp1hm7p0vsp58f9f/crm.lead.add.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        let leadId = "";
        try {
          const responseData = await response.json();
          leadId = responseData.result || "";
        } catch (err) {
          console.error("Failed to parse Bitrix response:", err);
        }

        // Trigger WhatsApp confirmation message
        try {
          const whatsbitApiUrl = process.env.NEXT_PUBLIC_WHATSBIT_API_URL || "https://whatsbit.vercel.app";
          const isStoneDresser = mode === "stone-dresser";
          const templateSid = isStoneDresser
            ? (process.env.NEXT_PUBLIC_TWILIO_STONE_DRESSER_TEMPLATE_SID || "HX68dfb84bba8143c63d42fb9d3a3a9af6")
            : (process.env.NEXT_PUBLIC_TWILIO_WONDERMILL_TEMPLATE_SID || "HXd796d76e1249f498e8767897e53ee385");

          const textMessage = isStoneDresser
            ? `Hello,\n\nThank you for connecting with RS Choyal Group. \n\nPlease let us know how we can assist you today?`
            : `Hello ${formData.name},\n\nThank you for contacting RS Choyal. We have received your request regarding Wondermill, digital stone mill.\n\nOne of our Wonder Mill experts will call you back within one working day at this number to discuss your requirements.\n\n👉 Please reply with "OK" or "Yes" if you would like us to share our PDF catalogues directly in this chat meanwhile.`;

          await fetch(`${whatsbitApiUrl}/api/chat/send`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contactId: formData.phone,
              text: textMessage,
              useTemplate: true,
              templateSid: templateSid,
              senderName: "System",
              contentVariables: isStoneDresser
                ? {}
                : {
                    "1": formData.name
                  }
            }),
          });
        } catch (waError) {
          console.error("Error triggering WhatsApp confirmation:", waError);
        }

        router.push("/thank-you?success=true");
      } else {
        console.error("Failed to submit lead to Bitrix:", response.statusText);
        // Redirect anyway to ensure user experience isn't broken by webhook/network failures
        router.push("/thank-you?success=true");
      }
    } catch (error) {
      console.error("Error submitting lead to Bitrix:", error);
      router.push("/thank-you?success=true");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className={`relative glass-panel rounded-3xl p-8 shadow-2xl ${className || "shadow-slate-900/10"} transition-all duration-300`}>
      {/* Overlapping top badge */}
      <div className="absolute -top-3.5 left-8 animate-shimmer text-white text-[10px] font-extrabold tracking-widest px-3.5 py-1.5 rounded-lg shadow-md select-none uppercase">
        FREE CONSULTATION
      </div>

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          {mode === "stone-dresser" ? "Talk to a Choyal engineer" : "Talk to a Wonder Mill expert"}
        </h3>
        <p className="text-sm sm:text-base text-slate-500 mt-2 leading-relaxed">
          {mode === "stone-dresser"
            ? "Share your details — we'll call back within one working day with a quote & spec sheet."
            : "Share your details - we'll call back within one working day with plant sizing & pricing."}
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

        {mode === "stone-dresser" ? (
          <>
            {/* Phone & Country (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-1.5">
                  Phone (with country code) <span className="text-brand-indigo">*</span>
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

            {/* Email Field */}
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
          </>
        ) : (
          <>
            {/* Phone & Email Fields (Grid) */}
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
            </div>

            {/* City & Current TPD Fields (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              <div>
                <label className="block text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-1.5">
                  Your Current TPD <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 50 TPD or None"
                  value={formData.currentTpd}
                  onChange={(e) => setFormData({ ...formData, currentTpd: e.target.value })}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white transition-all duration-200 outline-none focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/10"
                />
              </div>
            </div>
          </>
        )}

        {/* Requirement Field */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 tracking-wider uppercase mb-1.5">
            {mode === "stone-dresser" ? "Stone size you need to dress" : "Requirement"} <span className="text-brand-indigo">*</span>
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
