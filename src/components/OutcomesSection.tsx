import { motion } from "framer-motion";
import { CheckCircle2, Trophy } from "lucide-react";
import DotGrid from "./DotGrid/DotGrid";

export default function OutcomesSection({ theme = "dark" }: { theme?: "dark" | "light" | string }) {
  const isDark = theme === "dark" || theme === "default" || theme === "home";

  const outcomes = [
    "Live personal portfolio website",
    "Functional mobile app installed on your device",
    "Working AI agent performing tasks",
    "Structured product-building framework",
    "Certification as an AI Product Builder"
  ];

  return (
    <section id="outcomes" className={`relative w-full transition-colors duration-1000 px-6 py-24 lg:py-32 font-sans overflow-hidden border-b ${isDark ? "bg-[#030712] text-white border-white/5" : "bg-white text-slate-900 border-slate-200"}`}>
      {/* Interactive Dot Grid Pattern - Standardized Visibility */}
      <div className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-1000 opacity-80">
          <DotGrid 
              baseColor={isDark ? "#1e293b" : "#e2e8f0"}
              activeColor="#8c52ff"
              dotSize={3}
              gap={30}
          />
      </div>
      {/* Subtle Background Elements */}
      <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-[#8c52ff]/5 rounded-full blur-[80px] pointer-events-none transition-opacity ${!isDark && "opacity-40"}`} />

      <div className="relative z-10 mx-auto max-w-[1300px]">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[11px] font-semibold uppercase tracking-widest shadow-sm transition-colors ${isDark ? "border-white/10 bg-white/5 text-white/70" : "border-slate-200 bg-slate-50 text-slate-400"}`}>
              <Trophy className="w-4 h-4" /> Tangible Outcomes
            </div>
            <h2 className={`mb-6 text-[34px] sm:text-[50px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.05] tracking-tighter transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>
              What You <br className="hidden lg:block" /> <span className="text-home-gradient">Walk Away With</span>
            </h2>
            <p className={`text-[18px] sm:text-[20px] leading-relaxed font-medium mb-10 transition-colors ${isDark ? "text-white/60" : "text-slate-500"}`}>
              You don’t just get knowledge. You leave with concrete proof of your capability, ready to show recruiters and clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-8 sm:p-12 rounded-2xl border shadow-xl relative overflow-hidden group backdrop-blur-sm transition-colors ${isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200 shadow-slate-100"}`}
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-home-gradient" />

            <ul className="flex flex-col gap-6 relative z-10">
              {outcomes.map((outcome, idx) => (
                <li key={idx} className="flex gap-4 items-start group/item">
                  <CheckCircle2 className="w-7 h-7 mt-0.5 shrink-0 transition-transform duration-300 group-hover/item:scale-110 text-[#ff5757]" />
                  <span className={`text-[17px] sm:text-[20px] font-semibold tracking-tight leading-snug transition-colors ${isDark ? "text-white/80 group-hover/item:text-white" : "text-slate-700 group-hover/item:text-slate-900"}`}>
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
