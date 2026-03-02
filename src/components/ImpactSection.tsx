import { motion } from "framer-motion";

export default function ImpactSection({ theme = "default" }: { theme?: string }) {
  const isHome = theme === "home";

  return (
    <section className="relative w-full bg-slate-50 text-gray-900 px-6 py-28 lg:py-48 font-sans overflow-hidden">

      {/* Decorative Background Elements */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${isHome ? "bg-[#ff5757]/10" : "bg-blue-100/40"} rounded-full blur-[120px] pointer-events-none`} />
      <div className={`absolute top-0 right-0 w-[300px] h-[300px] ${isHome ? "bg-[#8c52ff]/10" : "bg-indigo-50/50"} rounded-full blur-[80px] pointer-events-none`} />

      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`relative bg-white border ${isHome ? "border-[#ff5757]/10" : "border-blue-50/50"} rounded-[48px] p-8 sm:p-16 lg:p-24 shadow-[0_32px_80px_-16px_${isHome ? "rgba(255,87,87,0.15)" : "rgba(30,58,138,0.1)"}] overflow-hidden`}
        >
          {/* Subtle Corner Glows */}
          <div className={`absolute -top-10 -right-10 w-40 h-40 ${isHome ? "bg-[#ff5757]/10" : "bg-blue-50"} rounded-full blur-3xl opacity-60`} />
          <div className={`absolute -bottom-10 -left-10 w-40 h-40 ${isHome ? "bg-[#8c52ff]/10" : "bg-indigo-50"} rounded-full blur-3xl opacity-60`} />

          {/* Top Line Accent - Premium Gradient */}
          <div className={`absolute top-0 inset-x-0 h-1.5 ${isHome ? "bg-home-gradient" : "bg-gradient-to-r from-transparent via-blue-600 to-transparent"} opacity-80`} />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="mb-10 text-[32px] font-black tracking-tight sm:text-[52px] lg:text-[64px] leading-[1.1] text-gray-900">
              The next generation of <br className="hidden sm:block" /> engineers will not be <br className="hidden lg:block" /> defined by their <span className="relative inline-block px-1">
                <span className="text-gray-300">resume</span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5, ease: "circOut" }}
                  className="absolute top-1/2 left-0 h-[3px] sm:h-[4px] bg-red-500 rounded-full -rotate-2"
                />
              </span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="mb-16 text-[26px] sm:text-[36px] lg:text-[48px] font-black leading-tight">
              <span className={`italic ${isHome ? "text-[#8c52ff]" : "text-blue-700"}`}>They will be defined by </span>
              <br className="sm:hidden" />
              <span className={`${isHome ? "text-home-gradient" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500"} font-extrabold underline ${isHome ? "decoration-[#ff5757]/30" : "decoration-blue-200"} decoration-[6px] underline-offset-[8px]`}>
                what they've developed.
              </span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex group"
            >
              {/* Button Glow Effect */}
              <div className={`absolute -inset-1 ${isHome ? "bg-home-gradient" : "bg-gradient-to-r from-blue-600 to-blue-400"} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300`} />

              <div className={`relative inline-flex items-center justify-center ${isHome ? "bg-home-gradient" : "bg-blue-800"} text-white px-10 py-5 rounded-2xl font-black tracking-[0.1em] text-[18px] sm:text-[22px] uppercase shadow-lg group-hover:bg-blue-900 transition-all duration-300`}>
                GradSkills Trains Them.
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
