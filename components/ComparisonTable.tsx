"use client";

import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  const rows = [
    {
      metric: "Output per hour",
      wonder: "500 kg",
      standard: "350 kg",
    },
    {
      metric: "Units consumed for 500 kg output",
      wonder: "~23",
      standard: "~33",
    },
    {
      metric: "Power saving",
      wonder: "Up to 30%",
      standard: "—",
    },
    {
      metric: "Gear drive",
      wonder: true,
      standard: false,
    },
    {
      metric: "Flour temperature control",
      wonder: true,
      standard: false,
    },
    {
      metric: "Stone engaging control",
      wonder: true,
      standard: false,
    },
    {
      metric: "Data logging & MIS",
      wonder: true,
      standard: false,
    },
    {
      metric: "Ethernet & Wi-Fi connectivity",
      wonder: true,
      standard: false,
    },
  ];

  return (
    <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 section-bg-tertiary">
      
      {/* Background Soft Glow */}
      <div className="absolute top-[20%] left-[20%] w-[35%] aspect-square bg-brand-indigo/5 rounded-full blur-[120px] pointer-events-none select-none"></div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold text-brand-indigo tracking-widest uppercase block">
            Wonder Mill vs Standard Chakki
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
            The numbers that show up on your monthly bill
          </h2>
          <p className="text-[#3e4d46] text-sm sm:text-base leading-relaxed">
            A side-by-side at the same 25 HP power input.
          </p>
        </div>

        {/* Clean Glassmorphic Table Container */}
        <div className="glass-panel rounded-3xl overflow-hidden shadow-xl shadow-[#1c2722]/5">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#1c2722]/6 bg-slate-50/30 backdrop-blur-xs">
                  <th className="py-5 px-6 text-xs font-bold text-[#3e4d46]/70 uppercase tracking-wider w-[40%]">
                    Performance & Specs
                  </th>
                  <th className="py-5 px-6 text-center text-xs font-extrabold text-white uppercase tracking-wider w-[30%] bg-gradient-to-r from-brand-primary to-brand-secondary">
                    Wonder Mill
                  </th>
                  <th className="py-5 px-6 text-center text-xs font-bold text-[#3e4d46]/70 uppercase tracking-wider w-[30%]">
                    Standard Chakki
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1c2722]/6">
                {rows.map((row, idx) => (
                  <tr 
                    key={idx}
                    className="hover:bg-slate-50/40 transition-colors duration-200"
                  >
                    {/* Metric Name */}
                    <td className="py-4.5 px-6 text-sm font-semibold text-[#1c2722]">
                      {row.metric}
                    </td>

                    {/* Wonder Mill Column (Highlighted with button gradient) */}
                    <td className="py-4.5 px-6 text-center bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium">
                      {typeof row.wonder === "boolean" ? (
                        <div className="flex justify-center">
                          <span className="w-6 h-6 rounded-full bg-white text-brand-primary flex items-center justify-center shadow-xs">
                            <Check className="h-3.5 w-3.5 stroke-[3.5]" />
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm font-extrabold text-white">
                          {row.wonder}
                        </span>
                      )}
                    </td>

                    {/* Standard Chakki Column */}
                    <td className="py-4.5 px-6 text-center text-[#3e4d46]">
                      {typeof row.standard === "boolean" ? (
                        <div className="flex justify-center">
                          <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                            <X className="h-3.5 w-3.5 stroke-[2.5]" />
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm">
                          {row.standard}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer text note */}
        <p className="text-center text-[#3e4d46]/80 text-xs leading-relaxed max-w-2xl mx-auto">
          For a 30 TPD plant, the unit-per-output difference can repay the upgrade in a single billing cycle on most tariff slabs.
        </p>

      </div>
    </section>
  );
}
