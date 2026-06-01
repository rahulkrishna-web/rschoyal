import Link from "next/link";

interface HeaderProps {
  onRequestCallback?: () => void;
  brandName?: string;
  brandHighlight?: string;
  brandSub?: string;
  logoChar?: string;
  logoSrc?: string;
}

export default function Header({
  onRequestCallback,
  brandName = "Wonder",
  brandHighlight = "Mill",
  brandSub = "BY RS CHOYAL GROUP",
  logoChar = "W",
  logoSrc,
}: HeaderProps) {
  return (
    <header className="w-full py-4 sticky top-0 z-50 bg-brand-bg/60 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {logoSrc ? (
            <img 
              src={logoSrc} 
              alt={`${brandName}${brandHighlight}`} 
              className="h-10 w-auto object-contain" 
            />
          ) : (
            <>
              <div className="w-10 h-10 bg-gradient-to-br from-brand-indigo to-brand-violet rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-[0_4px_12px_rgba(79,70,229,0.3)] group-hover:shadow-[0_4px_20px_rgba(79,70,229,0.4)] transition-all duration-300">
                {logoChar}
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                  {brandName}
                  {brandHighlight && (
                    <span className="text-brand-indigo font-black">{brandHighlight}</span>
                  )}
                </span>
                <span className="text-[9px] font-bold text-slate-500 tracking-[0.2em] leading-none mt-1.5 uppercase">
                  {brandSub}
                </span>
              </div>
            </>
          )}
        </Link>

        {/* Action Button */}
        <button
          onClick={onRequestCallback}
          className="bg-gradient-to-r from-brand-indigo to-brand-violet hover:from-brand-indigo-hover hover:to-brand-violet text-white font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm cursor-pointer"
        >
          Request a Callback
        </button>
      </div>
    </header>
  );
}
