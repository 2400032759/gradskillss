import { motion } from "framer-motion";
import { Users, LayoutDashboard, Database, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Tangible Student Proof",
    description: "Students graduate with live links—not just PDFs. Corporate recruitment relies heavily on demonstrable architecture.",
  },
  {
    icon: LayoutDashboard,
    title: "Placement Cell Dashboard",
    description: "Track exactly which student has deployed what project. No more guessing their actual placement readiness.",
  },
  {
    icon: Database,
    title: "End-to-End Execution",
    description: "We handle the syllabus, the code reviews, the cloud infrastructure, and the final application deployments natively.",
  },
];

const steps = [
  { step: "1", title: "Pilot Sandbox", description: "Execute a measured deployment sprint." },
  { step: "2", title: "Curriculum Map", description: "Align our pipeline with your existing modules." },
  { step: "3", title: "Cohort Launch", description: "Track real student outputs and placements." },
];

export default function CollegesSection() {
  return (
    <section id="colleges" className="relative w-full bg-[#0B0F19] text-slate-50 px-6 py-24 lg:py-32 font-sans overflow-hidden border-b border-white/5">

      {/* Background Tech Network */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 mx-auto max-w-[1300px]">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-md px-5 py-2 text-[11px] font-black uppercase tracking-widest text-indigo-400">
            Institutional Integration
          </div>
          <h2 className="mb-6 text-[36px] font-black tracking-tight sm:text-[48px] lg:text-[60px] leading-[1.05] text-slate-50">
            Empower Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
              Placement Cell
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-[18px] text-slate-400 leading-relaxed font-medium">
            Turn your academic cohort into an employable product arm. Real metrics. Real deployments.
          </p>
        </motion.div>

        {/* Benefits Cards - Premium Transparent Bento */}
        <div className="mb-32 grid gap-6 md:grid-cols-3 max-w-[1100px] mx-auto group">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-white/5 border border-white/10 rounded-[32px] p-8 shadow-xl backdrop-blur-lg hover:bg-white/10 transition-colors duration-300 overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                <b.icon className="h-7 w-7 text-indigo-400" />
              </div>
              <h3 className="mb-4 text-[22px] font-black text-slate-200">{b.title}</h3>
              <p className="text-[15px] font-medium text-slate-500 leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Pipeline Stepper */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-[12px] font-black uppercase tracking-widest text-slate-500 mb-2">Integration Path</div>
          <h3 className="text-[32px] font-black text-slate-50">Implementation Pipeline</h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 relative max-w-[900px] mx-auto">
          {/* Timeline Connector */}
          <div className="hidden md:block absolute top-[36px] left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-indigo-500/20 via-blue-600/20 to-blue-500/20 z-0" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-center relative z-10 flex flex-col items-center"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#131B2F] border-2 border-white/10 text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 font-black text-[24px] shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:border-blue-600/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all">
                {s.step}
              </div>
              <h4 className="text-[20px] font-black text-slate-200 mb-2">{s.title}</h4>
              <p className="text-[14px] text-slate-500 font-medium max-w-[220px] mx-auto">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <a href="#contact" className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-slate-50 px-8 py-4 rounded-xl font-bold text-[15px] transition-all hover:bg-white/10 backdrop-blur-md">
            Schedule Integration Call <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
