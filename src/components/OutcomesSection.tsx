import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const features = [
  { name: "Core Focus", ours: "Learn to Develop Real Application's (Websites's , App's,AI Agents)", theirs: "Solving DSA Puzzles" },
  { name: "Portfolio Signal", ours: "Live Web & App Links", theirs: "PDF Certificates" },
  { name: "Production Output", ours: "3-4 Real Deployed Application's in your portifolio", theirs: "Console Logs" },
  { name: "Tech Stack", ours: "MERN Stack,React Native,API's , Agentic AI", theirs: "C++, Java (Syntax)" },
  { name: "Interview Evidence", ours: "Industry-Grade Projects You Can Add to Your Portfolio", theirs: "Claiming knowledge" },
];

export default function OutcomesSection({ theme = "default" }: { theme?: string }) {
  const isHome = theme === "home";

  return (
    <section id="outcomes" className="relative w-full bg-white text-gray-900 px-6 py-24 lg:py-32 font-sans overflow-hidden border-b border-gray-100">

      <div className="relative z-10 mx-auto max-w-[1100px]">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border ${isHome ? "border-[#ff5757]/20 bg-[#ff5757]/10 text-[#ff5757]" : "border-blue-100 bg-blue-50 text-blue-800"} px-5 py-2 text-[11px] font-bold uppercase tracking-widest`}>
            Market Differentiation
          </div>
          <h2 className="mb-4 text-[36px] font-black tracking-tight sm:text-[48px] leading-[1.05] text-gray-900">
            <span className={isHome ? "text-home-gradient" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600"}>GradSkills</span> vs Typical Courses
          </h2>
          <p className="text-[18px] text-gray-600 leading-relaxed font-medium">
            We operate exclusively as a product generation system. Let's make the distinction clear.
          </p>
        </motion.div>

        {/* Massive VS Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white border border-gray-200 rounded-[32px] overflow-hidden shadow-md mx-auto relative group"
        >
          {/* Subtle colored border top */}
          <div className={`absolute top-0 inset-x-0 h-[3px] ${isHome ? "bg-home-gradient" : "bg-blue-800"}`} />

          {/* Table Header Structure */}
          <div className="grid grid-cols-3 bg-white border-b border-gray-100 relative z-10">
            <div className="p-4 lg:p-8 flex items-center justify-start border-r border-gray-100">
              <span className="text-[10px] lg:text-[13px] font-bold uppercase tracking-widest text-gray-500">Comparison Metric</span>
            </div>

            {/* The GradSkills Column Identity */}
            <div className={`p-4 lg:p-8 border-r border-gray-100 ${isHome ? "bg-blue-50/50" : "bg-blue-50"}`}>
              <span className={`text-[14px] lg:text-[20px] font-bold ${isHome ? "text-[#2563EB]" : "text-blue-900"} leading-tight block mb-1`}>The Product Builder Program</span>
              <div className={`text-[9px] lg:text-[12px] font-bold uppercase tracking-widest ${isHome ? "text-[#2563EB]" : "text-blue-800"}`}>GradSkills Ecosystem</div>
            </div>

            <div className="p-4 lg:p-8 bg-gray-50">
              <span className="text-[14px] lg:text-[20px] font-bold text-gray-700 leading-tight block mb-1">Typical Coding Course</span>
              <div className="text-[9px] lg:text-[12px] font-bold uppercase tracking-widest text-gray-500">Status Quo</div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col relative z-10 bg-white">
            {features.map((item, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">

                {/* Metric Name */}
                <div className="p-4 lg:p-8 flex flex-col justify-center border-r border-gray-100 bg-white">
                  <span className="text-[12px] lg:text-[16px] font-bold text-gray-900">{item.name}</span>
                </div>

                {/* Ours (GradSkills) */}
                <div className={`p-4 lg:p-8 border-r border-gray-100 ${isHome ? "bg-blue-50/50" : "bg-blue-50/50"} flex flex-col sm:flex-row items-start sm:items-center gap-2 lg:gap-4`}>
                  <CheckCircle2 className={`h-5 w-5 lg:h-6 lg:w-6 ${isHome ? "text-[#2563EB]" : "text-blue-800"} shrink-0`} />
                  <span className="text-[12px] lg:text-[16px] font-bold text-gray-900 leading-tight">
                    {item.ours}
                  </span>
                </div>

                {/* Theirs */}
                <div className="p-4 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 lg:gap-4 bg-gray-50">
                  <X className="h-5 w-5 lg:h-6 lg:w-6 text-red-500 shrink-0" />
                  <span className="text-[12px] lg:text-[16px] font-medium text-gray-500 leading-tight line-through decoration-red-400/30">
                    {item.theirs}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
