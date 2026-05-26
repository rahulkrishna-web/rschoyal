import { Phone, Mail } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="w-full bg-brand-bg/60 backdrop-blur-md border-b border-white/5 py-2 text-xs text-slate-400 font-medium">
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Contact info */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a
            href="tel:+919240289259"
            className="flex items-center gap-1.5 hover:text-brand-indigo transition-colors duration-200"
          >
            <Phone className="h-3.5 w-3.5 text-brand-indigo" />
            <span>+91 92402 89259</span>
          </a>
          <a
            href="mailto:info@rschoyalgroup.com"
            className="flex items-center gap-1.5 hover:text-brand-indigo transition-colors duration-200"
          >
            <Mail className="h-3.5 w-3.5 text-brand-indigo" />
            <span>info@rschoyalgroup.com</span>
          </a>
        </div>

        {/* Support announcement */}
        <div className="text-center tracking-wide text-slate-400">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-cyan/70 mr-2 animate-pulse"></span>
          Free site survey • Worldwide installation & support
        </div>
      </div>
    </div>
  );
}
