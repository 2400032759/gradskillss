import { useScroll, useTransform } from "framer-motion";
import { Code2, Rocket, ArrowRight, XCircle, CheckCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import DotGrid from "./DotGrid/DotGrid";
import { ApplicationFormModal } from "./ApplicationFormModal";

export default function GapSection({ theme = "dark" }: { theme?: "dark" | "light" | string }) {
  const isDark = theme === "dark" || theme === "default" || theme === "home";
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax offsets for mobile
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section 
      id="gap" 
      ref={containerRef}
      className={`relative w-full transition-colors duration-1000 ${isDark ? "bg-transparent text-white" : "bg-white text-slate-900"} px-6 py-24 lg:py-32 font-sans overflow-hidden border-b ${isDark ? "border-white/5" : "border-slate-200"}`}
    >
      {/* Background Ambient Glows */}
      <div className={`absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#ff5757]/10 blur-[120px] rounded-full pointer-events-none transition-opacity ${!isDark && "opacity-40"}`} />
      <div className={`absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#8c52ff]/10 blur-[120px] rounded-full pointer-events-none transition-opacity ${!isDark && "opacity-40"}`} />

      {/* Interactive Dot Grid Pattern - Standardized Visibility */}
      <div className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-1000 opacity-80">
          <DotGrid 
              baseColor={isDark ? "#1e293b" : "#e2e8f0"}
              activeColor="#8c52ff"
              dotSize={3}
              gap={30}
          />
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px]">
        {/* Aggressive Heading */}
        <div className="mb-24 max-w-4xl mx-auto text-center">
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-6 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] shadow-sm transition-colors ${isDark ? "border-white/10 bg-white/5 text-white/50" : "border-slate-200 bg-slate-50 text-slate-400"}`}>
            The Industry Problem
          </div>
          <h2 className={`mb-8 text-[42px] sm:text-[60px] lg:text-[56px] xl:text-[64px] font-bold leading-[1.05] tracking-tight transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>
            Colleges Teach Theory.<br className="hidden lg:block" />
            <span className="text-home-gradient">Industries Need Builders.</span>
          </h2>
          <p className={`mx-auto max-w-4xl text-[18px] sm:text-[22px] leading-relaxed font-medium transition-colors ${isDark ? "text-white/50" : "text-slate-500"}`}>
            Degrees prove attendance. Products prove competence. <br className="hidden lg:block" />
            We build the proof.
          </p>
        </div>

        {/* Comparison Dashboard */}
        <div className="relative grid lg:grid-cols-2 gap-12 w-full max-w-[1150px] mx-auto items-stretch">
          
          {/* VS Badge (Desktop) */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex w-16 h-16 rounded-full border items-center justify-center shadow-2xl overflow-hidden group transition-colors ${isDark ? "bg-[#030712] border-white/10" : "bg-white border-slate-200"}`}>
            <span className={`relative text-[14px] font-bold tracking-tighter italic transition-colors ${isDark ? "text-white/40" : "text-slate-300"}`}>VS</span>
          </div>

          {/* Default Path */}
          <div
            className={`flex flex-col border rounded-3xl overflow-hidden transition-all duration-700 backdrop-blur-xl group ${isDark ? "bg-white/[0.02] border-white/5 hover:border-white/10" : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white"}`}
          >
            <div className="p-10 pb-0">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className={`text-[12px] font-bold uppercase tracking-[0.2em] mb-3 transition-colors ${isDark ? "text-white/30" : "text-slate-400"}`}>The College Path</h3>
                  <h4 className={`text-[32px] font-bold tracking-tight leading-tight transition-colors ${isDark ? "text-white/90" : "text-slate-800"}`}>Theoretical Knowledge</h4>
                </div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 ${isDark ? "bg-white/[0.03] border-white/5 group-hover:border-rose-500/20" : "bg-white border-slate-200 group-hover:border-rose-200"}`}>
                  <Code2 className={`h-7 w-7 transition-colors ${isDark ? "text-white/20 group-hover:text-rose-500/50" : "text-slate-300 group-hover:text-rose-500"}`} />
                </div>
              </div>

              <div className="space-y-8 mb-12">
                {[
                  { title: "Syntax vs Software", text: "You learn how to write code, but not how to build a software product." },
                  { title: "Generic Projects", text: "Resume full of cookie-cutter projects that don't impress recruiters." },
                  { title: "No Deployment", text: "Code stays on your laptop. It never reaches a live user." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group/item">
                    <div className="mt-1 w-6 h-6 shrink-0 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                      <XCircle className="w-4 h-4 text-rose-500/60" />
                    </div>
                    <div>
                      <p className={`text-[16px] transition-colors leading-relaxed ${isDark ? "text-white/40 group-hover/item:text-white/60" : "text-slate-500 group-hover/item:text-slate-700"}`}>
                        <strong className={`block mb-1 transition-colors ${isDark ? "text-white/70" : "text-slate-900"}`}>{item.title}</strong> {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`mt-auto p-10 border-t transition-colors ${isDark ? "bg-white/[0.01] border-white/5" : "bg-white border-slate-100"}`}>
               <div className={`flex items-start gap-4 italic text-[15px] transition-colors ${isDark ? "text-white/30" : "text-slate-400"}`}>
                 <span className={`text-4xl leading-none transition-colors ${isDark ? "text-white/10" : "text-slate-100"}`}>"</span>
                 <p className="font-medium leading-relaxed">
                   Most students learn the "What". Very few learn the <span className={isDark ? "text-white/50" : "text-slate-600"}>"How".</span>
                 </p>
               </div>
            </div>
          </div>

          {/* GradSkills Path */}
          <div
            className={`relative flex flex-col border rounded-3xl overflow-hidden transition-all duration-700 backdrop-blur-xl group/card ${isDark ? "bg-white/[0.03] border-white/10 shadow-[0_30px_60px_-15px_rgba(140,82,255,0.15)]" : "bg-slate-50 border-slate-200 shadow-[0_30px_60px_-15px_rgba(148,163,184,0.1)] hover:bg-white"}`}
          >
            {/* Top Highlight Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#8c52ff] to-transparent opacity-50" />
            
            <div className="p-10 pb-0">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#8c52ff] mb-3">The Builder Path</h3>
                  <h4 className={`text-[32px] font-bold tracking-tight leading-tight transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>Product Engineering</h4>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-home-gradient flex items-center justify-center shadow-[0_0_20px_rgba(140,82,255,0.3)]">
                  <Rocket className="h-7 w-7 text-white" />
                </div>
              </div>

              <div className="space-y-8 mb-12">
                {[
                  { title: "Production Code", text: "Build and deploy real web, mobile, and AI applications from scratch." },
                  { title: "Integrated Systems", text: "Learn how to connect AI agents with live databases and user interfaces." },
                  { title: "Proof of Competence", text: "Showcase a portfolio of live, working products that recruiters can actually use." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group/item">
                    <div className="mt-1 w-6 h-6 shrink-0 rounded-full bg-[#8c52ff]/20 flex items-center justify-center border border-[#8c52ff]/30 shadow-[0_0_10px_rgba(140,82,255,0.2)]">
                      <CheckCircle className="w-4 h-4 text-[#8c52ff]" />
                    </div>
                    <div>
                      <p className={`text-[16px] transition-colors leading-relaxed font-medium ${isDark ? "text-white/70 group-hover/item:text-white" : "text-slate-600 group-hover/item:text-slate-900"}`}>
                        <strong className={`block mb-1 font-semibold transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>{item.title}</strong> {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ApplicationFormModal>
              <div className={`mt-auto p-10 border-t group-hover/card:bg-[#8c52ff]/5 transition-colors cursor-pointer ${isDark ? "bg-white/[0.02] border-white/10" : "bg-white border-slate-100"}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[15px] font-semibold tracking-tight transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>
                    Stop writing code. Start building products.
                  </span>
                  <ArrowRight className="h-5 w-5 text-[#8c52ff] group-hover/card:translate-x-2 transition-transform" />
                </div>
              </div>
            </ApplicationFormModal>
          </div>

        </div>
      </div>
    </section>
  );
}
