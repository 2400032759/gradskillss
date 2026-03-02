import { motion } from "framer-motion";
import { Code2, Rocket, ArrowRight, XCircle, CheckCircle } from "lucide-react";

export default function GapSection({ theme = "default" }: { theme?: string }) {
  const isHome = theme === "home";

  return (
    <section id="gap" className="relative w-full bg-white text-gray-900 px-6 py-24 lg:py-32 font-sans overflow-hidden border-b border-gray-100">

      <div className="relative z-10 mx-auto max-w-[1300px]">

        {/* Aggressive Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-20 max-w-4xl mx-auto text-center"
        >
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border ${isHome ? "border-[#ff5757]/20 bg-[#ff5757]/10 text-[#ff5757]" : "border-blue-100 bg-blue-50 text-blue-800"} px-5 py-2 text-[11px] font-bold uppercase tracking-widest shadow-sm`}>
            The Industry Reality
          </div>
          <h2 className="mb-6 text-[36px] font-black tracking-tight sm:text-[48px] lg:text-[60px] leading-[1.05] text-gray-900">
            While others solve <span className="text-gray-400 font-medium line-through decoration-red-500/50">problems</span>,<br className="hidden lg:block" />
            we <span className={`${isHome ? "text-home-gradient" : "text-blue-800"}`}>make you build real apps, websites and AI agents</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-[18px] sm:text-[20px] text-gray-600 leading-relaxed font-medium">
            Coding puzzles are good for practice. But launching working applications is what actually starts a <strong className="text-gray-900">career</strong>.
          </p>
        </motion.div>

        {/* Bento Box Split Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 w-full max-w-[1100px] mx-auto group">

          {/* Default Path (Red / Muted Variant) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col bg-gray-50 border border-gray-200 rounded-[32px] overflow-hidden group-hover:opacity-80 hover:!opacity-100 transition-opacity duration-300 shadow-sm"
          >
            <div className="p-8 pb-0 flex items-center justify-between">
              <div>
                <h3 className="text-[14px] font-bold uppercase tracking-widest text-red-600 mb-2">The Default Path</h3>
                <h4 className="text-[28px] font-bold text-gray-900">DSA Solver</h4>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex flex-col items-center justify-center border border-red-100">
                <Code2 className="h-6 w-6 text-red-500" />
              </div>
            </div>

            <div className="p-8 flex-grow flex flex-col justify-start">
              <ul className="flex flex-col gap-6">
                <li className="flex gap-4 text-gray-600 font-medium text-[16px]">
                  <XCircle className="w-6 h-6 shrink-0 text-red-500" />
                  <span>Spends months practicing basic coding problems.</span>
                </li>
                <li className="flex gap-4 text-gray-600 font-medium text-[16px]">
                  <XCircle className="w-6 h-6 shrink-0 text-red-500" />
                  <span>Knows code syntax, but struggles to build a full app.</span>
                </li>
                <li className="flex gap-4 text-gray-600 font-medium text-[16px]">
                  <XCircle className="w-6 h-6 shrink-0 text-red-500" />
                  <span>Has no completed projects to show employers.</span>
                </li>
              </ul>
            </div>
            {/* The tragic quote */}
            <div className="bg-gray-100 p-6 text-[15px] italic text-gray-600 border-t border-gray-200 flex items-start gap-4 mx-4 mb-4 rounded-xl">
              <div className="text-3xl font-serif text-gray-400 leading-none">"</div>
              I know the code, but I don't know how to make a live app.
            </div>
          </motion.div>

          {/* GradSkills Path (Cyan / Blue Elite Variant) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
            className={`relative flex flex-col bg-white border ${isHome ? "border-[#8c52ff]/20" : "border-blue-200"} rounded-[32px] overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-500`}
          >
            {/* Glowing Accent */}
            <div className={`absolute top-0 inset-x-0 h-[3px] ${isHome ? "bg-home-gradient" : "bg-blue-800"}`} />

            <div className="p-8 pb-0 flex items-center justify-between">
              <div>
                <h3 className={`text-[14px] font-bold uppercase tracking-widest ${isHome ? "text-[#8c52ff]" : "text-blue-800"} mb-2`}>The GradSkills Path</h3>
                <h4 className="text-[28px] font-bold text-gray-900">Product Builder</h4>
              </div>
              <div className={`w-14 h-14 rounded-2xl ${isHome ? "bg-home-gradient" : "bg-blue-800"} flex flex-col items-center justify-center shadow-sm`}>
                <Rocket className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="p-8 flex-grow flex flex-col justify-start">
              <ul className="flex flex-col gap-6">
                <li className="flex gap-4 text-gray-800 font-semibold text-[16px]">
                  <CheckCircle className={`w-6 h-6 shrink-0 ${isHome ? "text-[#8c52ff]" : "text-blue-800"}`} />
                  <span>Learn Web, App and AI agent development.</span>
                </li>
                <li className="flex gap-4 text-gray-800 font-semibold text-[16px]">
                  <CheckCircle className={`w-6 h-6 shrink-0 ${isHome ? "text-[#8c52ff]" : "text-blue-800"}`} />
                  <span>Develop real Website, App and an AI Agent.</span>
                </li>
                <li className="flex gap-4 text-gray-800 font-semibold text-[16px]">
                  <CheckCircle className={`w-6 h-6 shrink-0 ${isHome ? "text-[#8c52ff]" : "text-blue-800"}`} />
                  <span>Launch the working application's on the Internet.</span>
                </li>
              </ul>
            </div>

            {/* The power quote */}
            <div className={`p-6 text-[15px] ${isHome ? "text-[#8c52ff]" : "text-blue-900"} border-t ${isHome ? "border-[#8c52ff]/10" : "border-blue-100"} flex items-center gap-4 ${isHome ? "bg-[#8c52ff]/5" : "bg-blue-50/50"}`}>
              <ArrowRight className={`h-5 w-5 ${isHome ? "text-[#8c52ff]" : "text-blue-800"}`} />
              <span className="font-bold tracking-wide">"Here is what I built, and here is a live link you can click."</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
