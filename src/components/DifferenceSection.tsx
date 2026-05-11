import { motion } from "framer-motion";
import { Zap, Layers, Briefcase } from "lucide-react";
import DotGrid from "./DotGrid/DotGrid";

export default function DifferenceSection({ theme = "dark" }: { theme?: "dark" | "light" | string }) {
    const isDark = theme === "dark" || theme === "default" || theme === "home";

    const items = [
        {
            icon: Zap,
            title: "Build Before You Feel Ready",
            desc: "Deploy from Week 1.",
        },
        {
            icon: Layers,
            title: "Integrated Skill Stack",
            desc: "Web, App, AI together.",
        },
        {
            icon: Briefcase,
            title: "Portfolio That Speaks for You",
            desc: "No hesitation in interviews.",
        },
    ];

    return (
        <section id="difference" className={`relative w-full transition-colors duration-1000 px-6 py-24 lg:py-32 font-sans overflow-hidden border-b ${isDark ? "bg-transparent text-white border-white/5" : "bg-white text-slate-900 border-slate-200"}`}>
      {/* Interactive Dot Grid Pattern - Standardized Visibility */}
      <div className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-1000 opacity-80">
          <DotGrid 
              baseColor={isDark ? "#1e293b" : "#e2e8f0"}
              activeColor="#8c52ff"
              dotSize={3}
              gap={30}
          />
      </div>
      {/* Background Ambient Glows */}
      <div className={`absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#8c52ff]/10 blur-[100px] rounded-full pointer-events-none transition-opacity ${!isDark && "opacity-40"}`} />
      <div className={`absolute bottom-1/2 right-1/4 w-[300px] h-[300px] bg-[#ff5757]/10 blur-[100px] rounded-full pointer-events-none transition-opacity ${!isDark && "opacity-40"}`} />

      <div className="relative z-10 mx-auto max-w-[1300px]">

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-6 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] shadow-sm transition-colors ${isDark ? "border-white/10 bg-white/5 text-white/70" : "border-slate-200 bg-slate-50 text-slate-400"}`}>
            The GradSkills Advantage
          </div>
          <h2 className={`mb-8 text-[42px] sm:text-[60px] lg:text-[56px] xl:text-[64px] font-bold leading-[1.05] tracking-tight transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>
            Courses Teach Syntax.<br className="hidden lg:block" />
            <span className="text-home-gradient">We Teach Product Delivery.</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-[1200px] mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-10 rounded-3xl border flex flex-col items-center text-center shadow-2xl transition-all duration-700 group backdrop-blur-xl hover:-translate-y-2 ${isDark ? "bg-white/[0.03] border-white/10 hover:border-white/20" : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
              
              <div className="relative w-20 h-20 rounded-3xl mb-8 flex items-center justify-center transition-all duration-500 bg-home-gradient shadow-[0_10px_30px_rgba(140,82,255,0.3)] group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(140,82,255,0.5)]">
                <item.icon className="w-9 h-9 text-white" />
              </div>

              <h3 className={`relative text-[22px] lg:text-[24px] font-bold mb-4 tracking-tight transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>{item.title}</h3>
              <p className={`relative text-[16px] font-medium leading-relaxed transition-colors ${isDark ? "text-white/70 group-hover:text-white/70" : "text-slate-500 group-hover:text-slate-700"}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
}
