import { Globe, Smartphone, Bot, Rocket, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  {
    icon: Globe,
    programName: "Foundation",
    title: "Build the Web Foundation",
    duration: "Phase 1 • Weeks 1-4",
    emphasis: "Web Development",
    learnings: [
      "Create modern websites from scratch",
      "Develop both frontend and backend",
      "Deploy your site live on the internet",
    ],
    outcome: "A live, production-ready website.",
    color: "from-purple-600 to-purple-500",
    bgAccent: "bg-purple-50 border-purple-200 text-purple-700",
  },
  {
    icon: Smartphone,
    programName: "Elevate",
    title: "App Development",
    duration: "Phase 2 • Weeks 5-8",
    emphasis: "App Development",
    learnings: [
      "Develop apps for Android and iOS",
      "Integrate cloud storage and backend services",
      "Prepare for real user deployment",
    ],
    outcome: "A working mobile application.",
    color: "from-orange-500 to-orange-400",
    bgAccent: "bg-orange-50 border-orange-200 text-orange-600",
  },
  {
    icon: Bot,
    programName: "Product Builder",
    title: "AI Agent Development",
    duration: "Phase 3 • Weeks 9-12",
    emphasis: "AI Agent Development",
    learnings: [
      "Automate workflows",
      "Integrate powerful AI models",
      "Create intelligent, real-world solutions",
    ],
    outcome: "A functional AI workflow system.",
    color: "from-blue-800 to-indigo-600",
    bgAccent: "bg-blue-50 border-blue-100 text-blue-800",
  },
];

export default function ProgramSection({ theme = "default" }: { theme?: string }) {
  const isHome = theme === "home";

  const getModules = () => {
    return modules.map(mod => {
      if (mod.programName === "Product Builder" && isHome) {
        return {
          ...mod,
          color: "bg-[#2563EB]",
          bgAccent: "bg-blue-50 border-blue-200 text-[#2563EB]",
        };
      }
      return mod;
    });
  };

  const activeModules = getModules();

  return (
    <section id="program" className="relative w-full bg-slate-50 text-gray-900 px-6 py-24 lg:py-32 font-sans overflow-hidden border-b border-gray-100">

      <div className="relative z-10 mx-auto max-w-[1300px]">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border ${isHome ? "border-[#ff5757]/20 bg-[#ff5757]/10 text-[#ff5757]" : "border-blue-100 bg-blue-50 text-blue-800"} px-5 py-2 text-[11px] font-bold uppercase tracking-widest shadow-sm`}>
            <TerminalSquare className="w-4 h-4" /> Clear Steps to Success
          </div>
          <h2 className="mb-6 text-[36px] font-black tracking-tight sm:text-[48px] lg:text-[56px] leading-[1.05] text-gray-900">
            <span className="text-gray-400 line-through decoration-gray-300">Not Just Theory.</span> <br className="hidden md:block" />
            A 12-Week Product Building Journey.
          </h2>
          <p className="mx-auto max-w-2xl text-[18px] text-gray-600 leading-relaxed font-medium">
            Every phase is hands-on. <br className="hidden sm:block" />
            You won’t just learn to code - you’ll launch real products.
          </p>
        </motion.div>

        {/* Bento Grid layout for modules */}
        <div className="grid gap-6 lg:grid-cols-3 w-full max-w-[1200px] mx-auto group">

          {activeModules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`flex flex-col relative overflow-hidden bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-500`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${mod.color.includes('bg-') ? mod.color : `bg-gradient-to-r ${mod.color}`}`} />

              <div className="p-8 flex flex-col h-full z-10">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-sm whitespace-nowrap ${mod.color.includes('bg-') ? mod.color : `bg-gradient-to-r ${mod.color}`}`}>
                        {mod.programName}
                      </div>
                      <div className="text-[12px] font-bold uppercase tracking-widest text-gray-500">
                        {mod.duration}
                      </div>
                    </div>
                    <div className="text-[14px] font-bold text-gray-500">
                      Focus: <span className="text-gray-900">{mod.emphasis}</span>
                    </div>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl ${mod.bgAccent} border flex flex-col items-center justify-center`}>
                    <mod.icon className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="mb-6 text-[24px] font-bold text-gray-900 leading-tight">
                  {mod.title}
                </h3>

                {/* Checkmarks */}
                <ul className="mb-10 space-y-4 flex-grow">
                  {mod.learnings.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[15px] text-gray-600 font-medium">
                      <span className={`w-1.5 h-1.5 rounded-full mt-[7px] shrink-0 ${mod.color.includes('bg-') ? mod.color : `bg-gradient-to-r ${mod.color}`}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Output Chip */}
                <div className="mt-auto bg-gray-50 border border-gray-100 rounded-xl p-5 flex flex-col gap-2 relative overflow-hidden">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500 z-10">Production Output</div>
                  <div className="flex items-center gap-2 text-[15px] font-bold text-gray-900 z-10">
                    <Rocket className={`w-4 h-4 ${mod.programName === 'Product Builder' && isHome ? 'text-[#2563EB]' : (mod.color.includes('bg-home') ? 'text-home-gradient' : `text-transparent bg-clip-text bg-gradient-to-r ${mod.color}`)}`} />
                    {mod.outcome}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
