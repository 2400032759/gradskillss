import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle2, Terminal, LineChart, Globe } from "lucide-react";
import { ApplicationFormModal } from "./ApplicationFormModal";

export default function HeroSection({ theme = "default" }: { theme?: string }) {
  const isHome = theme === "home";

  return (
    <section className="relative w-full min-h-[100vh] bg-slate-50 text-gray-900 flex items-center justify-center pt-24 pb-16 overflow-hidden font-sans">

      {/* Light subtle section background */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-16 lg:gap-12 items-center lg:items-stretch py-10 lg:py-6">

        {/* Left Content (Aggressive Conversion Copy) */}
        <div className="flex flex-col items-start text-left lg:pr-10 h-full pb-4 lg:pb-0">

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 lg:mb-6 flex flex-col gap-2 relative z-20 w-full"
          >
            <h1 className="text-[22px] sm:text-[32px] font-bold leading-[1.2] lg:leading-[1.1] tracking-tight text-gray-500 mb-0">
              <span className={`underline decoration-red-500 decoration-[3px] underline-offset-4`}>Real Skills</span> &gt; <span className="font-light text-gray-400">Interview Tricks.</span>
            </h1>
            <h2 className="text-[42px] sm:text-[64px] lg:text-[72px] font-black leading-[1.05] tracking-tighter">
              <span className={`${isHome ? "text-home-gradient" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600"} block pb-1`}>
                Start Developing
              </span>
              <span className="text-gray-900 relative inline-block leading-[1.1] lg:leading-[1.05]">
                Real Products.
                <div className={`absolute -bottom-1 sm:-bottom-2 left-0 w-full h-[3px] ${isHome ? "bg-gradient-to-r from-[#ff5757] to-[#8c52ff]" : "bg-blue-800"} rounded-full opacity-80`} />
              </span>
            </h2>
          </motion.div>



          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] sm:text-[18px] text-gray-600 mb-8 max-w-[500px] leading-relaxed font-medium"
          >
            In 12 focused weeks, you will Learn, develop and launch:
            <ul className="mt-5 flex flex-col gap-3">
              <li className="flex items-start sm:items-center gap-3 text-gray-900 font-bold tracking-tight text-[15px] sm:text-[16px]">
                <span className={`w-2 h-2 rounded-full ${isHome ? "bg-[#ff5757]" : "bg-blue-800"} mt-1.5 sm:mt-0 shrink-0`} /> A live web-application
              </li>
              <li className="flex items-start sm:items-center gap-3 text-gray-900 font-bold tracking-tight text-[15px] sm:text-[16px]">
                <span className={`w-2 h-2 rounded-full ${isHome ? "bg-[#ff5757]" : "bg-blue-800"} mt-1.5 sm:mt-0 shrink-0`} /> A production-ready mobile app
              </li>
              <li className="flex items-start sm:items-center gap-3 text-gray-900 font-bold tracking-tight text-[15px] sm:text-[16px]">
                <span className={`w-2 h-2 rounded-full ${isHome ? "bg-[#ff5757]" : "bg-blue-800"} mt-1.5 sm:mt-0 shrink-0`} /> A functional AI agent
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className={`mb-8 p-4 rounded-xl bg-white border border-gray-100 shadow-sm border-l-[4px] ${isHome ? "border-l-[#ff5757]" : "border-l-blue-800"} w-full lg:max-w-[480px]`}
          >
            <p className="text-[15px] sm:text-[16px] font-bold text-gray-500 italic mb-1">
              "When recruiters ask what you've built..."
            </p>
            <p className={`text-[17px] sm:text-[18px] font-black ${isHome ? "text-[#ff5757]" : "text-blue-800"}`}>
              You won't hesitate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full lg:w-auto mt-auto pt-6 lg:pt-8 lg:items-center"
          >
            <ApplicationFormModal>
              <button className={`w-full lg:w-auto group flex items-center justify-center gap-3 ${isHome ? "bg-home-gradient" : "bg-blue-800"} text-white px-8 py-4 sm:py-4 min-h-[56px] rounded-xl font-bold text-[16px] transition-all shadow-md hover:bg-blue-900 hover:shadow-lg hover:-translate-y-1`}>
                Apply to the Program <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </ApplicationFormModal>
            <a href="https://pdflink.to/c22a39fb/" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto flex">
              <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-8 py-4 sm:py-4 min-h-[56px] rounded-xl font-bold text-[16px] transition-all shadow-sm hover:-translate-y-1">
                <Play className="w-5 h-5 text-gray-900" /> View Syllabus
              </button>
            </a>
          </motion.div>

          {/* Mobile Credibility Strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:hidden w-full mt-8 bg-blue-50/60 rounded-full py-3 px-4 flex flex-row items-center justify-center gap-3 border border-blue-100"
          >
            <span className="text-[13px] text-gray-700 font-medium">
              <span className="font-bold text-blue-800">5+</span> Years Exp
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            <span className="text-[13px] text-gray-700 font-medium">
              <span className="font-bold text-blue-800">5000+</span> Students
            </span>
          </motion.div>
        </div>

        {/* Right Visual - Premium Learn Build Deploy Pipeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-full w-full hidden lg:flex flex-col justify-between items-end"
        >

          <div className="relative w-full max-w-[440px] flex flex-col gap-4 py-2 mt-auto mb-auto">

            {/* Connecting Vertical Beam */}
            <div className="absolute left-[39px] top-10 bottom-10 w-[2px] bg-gray-200 z-0 rounded-full" />

            {/* LEARN Phase */}
            <motion.div
              whileHover={{ x: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative z-10 flex items-center gap-6 bg-white border border-gray-100 p-4 rounded-3xl shadow-sm group hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className={`relative flex w-14 h-14 shrink-0 items-center justify-center rounded-2xl bg-gray-50 border border-gray-200 group-hover:bg-home-gradient group-hover:text-white transition-all duration-300`}>
                <span className={`${isHome ? "text-[#ff5757]" : "text-blue-800"} font-bold text-[20px] group-hover:text-white`}>01</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[24px] font-bold text-gray-900 tracking-tight mb-0.5">Learn.</h3>
                <p className="text-[14px] text-gray-500 font-medium">Learn concepts and gain knowledge.</p>
              </div>
            </motion.div>

            {/* BUILD Phase */}
            <motion.div
              whileHover={{ x: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative z-10 flex items-center gap-6 bg-white border border-gray-100 p-4 rounded-3xl shadow-sm group hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className={`relative flex w-14 h-14 shrink-0 items-center justify-center rounded-2xl bg-gray-50 border border-gray-200 group-hover:bg-home-gradient group-hover:text-white transition-all duration-300`}>
                <span className={`${isHome ? "text-[#ff5757]" : "text-blue-800"} font-bold text-[20px] group-hover:text-white`}>02</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[24px] font-bold text-gray-900 tracking-tight mb-0.5">Build.</h3>
                <p className="text-[14px] text-gray-500 font-medium">Develop real applications (Websites, Apps, AI Agents).</p>
              </div>
            </motion.div>

            {/* DEPLOY Phase */}
            <motion.div
              whileHover={{ x: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative z-10 flex items-center gap-6 bg-white border border-gray-100 p-4 rounded-3xl shadow-sm group hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className={`relative flex w-14 h-14 shrink-0 items-center justify-center rounded-2xl bg-gray-50 border border-gray-200 group-hover:bg-home-gradient group-hover:text-white transition-all duration-300`}>
                <span className={`${isHome ? "text-[#ff5757]" : "text-blue-800"} font-bold text-[20px] group-hover:text-white`}>03</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[24px] font-bold text-gray-900 tracking-tight mb-0.5">Deploy.</h3>
                <p className="text-[14px] text-gray-500 font-medium">Launch your projects for real users.</p>
              </div>
            </motion.div>

          </div>

          {/* Credibility Strip */}
          <div className="w-full max-w-[440px] mt-auto flex flex-wrap items-center justify-center gap-6 bg-white border border-gray-100 rounded-3xl py-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className={`text-[22px] font-black ${isHome ? "text-[#ff5757]" : "text-blue-800"} leading-none`}>5+</span>
              <span className="text-[12px] font-bold text-gray-600 uppercase tracking-widest leading-tight">Years<br />Experience</span>
            </div>
            {/* Divider */}
            <div className="w-[1px] h-8 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-3">
              <span className={`text-[22px] font-black ${isHome ? "text-[#ff5757]" : "text-blue-800"} leading-none`}>5000+</span>
              <span className="text-[12px] font-bold text-gray-600 uppercase tracking-widest leading-tight">Students<br />Trained</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
