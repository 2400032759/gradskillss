import { CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { ApplicationFormModal } from "./ApplicationFormModal";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "GradSkills Foundation",
    price: "₹4,999",
    unit: "Focus: Web Development",
    outcome: "The starting step for serious builders",
    badge: "",
    featured: false,
    features: [
      "Master modern full-stack web foundations",
      "Build complete web apps from scratch",
      "Learn the full concepts of building and deploying a website",
    ],
    button: "Start Building",
    href: "/foundational"
  },
  {
    name: "GradSkills Elevate",
    price: "₹7,499",
    unit: "Focus: Web + App Development",
    outcome: "For students ready to deploy multi-platform products",
    badge: "",
    featured: false,
    features: [
      "Everything in Foundation",
      "Build cross-platform iOS & Android apps",
      "Develop custom APIs and connect them with cloud and databases",
      "Launch live products to real users",
    ],
    button: "Start Accelerating",
    href: "/elevate"
  },
  {
    name: "GradSkills Product Builder",
    price: "₹9,999",
    unit: "Focus: Web + App + AI Agents",
    outcome: "The elite, career-defining path",
    badge: "Flagship",
    featured: true,
    features: [
      "Everything in Elevate",
      "Learn how to build Functional AI agent workflows",
      "Develop 3-4 real deployed projects (1 website,1 app,2 AI agents)",
      "Build a career-defining tech portfolio",
    ],
    button: "Become a Product Builder",
    href: "/product-builder"
  },
];

const getThemeStyles = (planName: string, theme: string) => {
  const isHome = theme === "home";
  const isPB = theme === "product-builder";

  if (planName === "GradSkills Product Builder") {
    return {
      card: `bg-white border-2 ${isHome || isPB ? "border-[#2563EB]/20" : "border-blue-200"} shadow-md z-20 hover:-translate-y-3 hover:shadow-lg`,
      topStroke: "bg-[#2563EB]",
      badge: "bg-[#2563EB] text-white",
      title: "text-[#2563EB]",
      zap: "text-[#2563EB] fill-[#2563EB]",
      price: "text-gray-900",
      outcome: "text-gray-700",
      listItem: "text-gray-900",
      check: "text-[#2563EB]",
      button: "bg-[#2563EB] text-white shadow-md hover:bg-blue-700 hover:shadow-lg",
      chevron: "text-white"
    };
  }
  if (planName === "GradSkills Elevate") {
    return {
      card: "bg-white border-2 border-orange-300 shadow-md z-10 hover:-translate-y-2 hover:shadow-lg",
      topStroke: "bg-orange-500",
      badge: "bg-orange-500 text-white", // Just in case it ever gets a badge
      title: "text-orange-500",
      zap: "text-orange-500 fill-orange-500",
      price: "text-gray-900",
      outcome: "text-gray-700",
      listItem: "text-gray-900", // make it pop
      check: "text-orange-500",
      button: "bg-orange-500 text-white shadow-md hover:bg-orange-600 hover:shadow-lg",
      chevron: "text-white"
    };
  }
  // Foundation (or default)
  return {
    card: "bg-white border-2 border-purple-200 shadow-sm hover:shadow-md hover:-translate-y-2 z-10",
    topStroke: "bg-purple-600",
    badge: "bg-purple-600 text-white", // Style in case it becomes current program
    title: "text-purple-600",
    zap: "",
    price: "text-gray-900",
    outcome: "text-gray-600",
    listItem: "text-gray-600",
    check: "text-purple-500",
    button: "bg-purple-600 text-white shadow-sm hover:bg-purple-700 hover:shadow-md",
    chevron: "text-white"
  };
};

export default function PricingSection({ currentPlan, theme = "default" }: { currentPlan?: string, theme?: string }) {
  const isHome = theme === "home";
  return (
    <section id="pricing" className="relative w-full bg-slate-50 text-gray-900 px-6 py-24 lg:py-32 font-sans overflow-hidden border-b border-gray-100">

      <div className="relative z-10 mx-auto max-w-[1300px]">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border ${isHome ? "border-[#ff5757]/20 bg-[#ff5757]/10 text-[#ff5757]" :
            theme === "product-builder" ? "border-[#2563EB]/20 bg-[#2563EB]/10 text-[#2563EB]" :
              theme === "orange" ? "border-[#EA580C]/20 bg-[#EA580C]/10 text-[#EA580C]" :
                theme === "purple" ? "border-[#9333EA]/20 bg-[#9333EA]/10 text-[#9333EA]" :
                  "border-blue-100 bg-blue-50 text-blue-800"
            } px-5 py-2 text-[11px] font-bold uppercase tracking-widest`}>
            Choose Your Path
          </div>
          <h2 className="mb-6 text-[36px] font-black tracking-tight sm:text-[48px] lg:text-[60px] leading-[1.05] text-gray-900">
            Invest in Your <br className="hidden md:block" />
            <span className={isHome ? "text-home-gradient" :
              theme === "product-builder" ? "text-[#2563EB]" :
                theme === "orange" ? "text-[#EA580C]" :
                  theme === "purple" ? "text-[#9333EA]" :
                    "text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600"}>
              Tech Career.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-[18px] text-gray-600 leading-relaxed font-medium">
            Stop practicing. Start building. Choose the program that aligns with your ultimate career goals. We don't sell courses; we build product engineers.
          </p>
        </motion.div>

        {/* Dynamic Bento Box Pricing Grid */}
        <div className="grid gap-6 md:grid-cols-3 items-center max-w-[1200px] mx-auto group perspective-1000">

          {plans.map((plan, i) => {
            const styles = getThemeStyles(plan.name, theme);
            const isFeaturedSize = plan.name === "GradSkills Product Builder";
            const showZap = plan.name === "GradSkills Product Builder";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: isFeaturedSize ? 1.05 : 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-[24px] flex flex-col h-full overflow-hidden transition-all duration-300 ease-out ${styles.card}`}
              >
                {styles.topStroke && (
                  <div className={`absolute top-0 inset-x-0 h-[3px] ${styles.topStroke}`} />
                )}
                {(currentPlan === plan.name || plan.badge) && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-b-xl shadow-sm ${styles.badge}`}>
                    {currentPlan === plan.name ? "Current Program" : plan.badge}
                  </div>
                )}

                <div className="p-8 lg:p-10 flex flex-col h-full z-10">
                  <div className={`flex items-center justify-between mb-6 ${isFeaturedSize ? 'mt-4' : ''}`}>
                    <h3 className={`text-[13px] font-bold uppercase tracking-widest ${styles.title}`}>{plan.name}</h3>
                    {showZap && <Zap className={`w-5 h-5 ${styles.zap}`} />}
                  </div>

                  <div className="mb-8 border-b border-gray-100 pb-8">
                    <span className={`font-black tracking-tighter leading-none ${isFeaturedSize ? 'text-[56px]' : 'text-[48px]'} ${styles.price}`}>
                      {plan.price}
                    </span>
                    <span className="block mt-3 text-[13px] font-bold text-gray-500 uppercase tracking-widest">
                      {plan.unit}
                    </span>
                    <div className={`mt-5 text-[15px] font-medium leading-relaxed ${styles.outcome}`}>
                      {plan.outcome}
                    </div>
                  </div>

                  <ul className="mb-10 space-y-4 flex-grow">
                    {plan.features.map((f, j) => (
                      <li key={j} className={`flex items-start gap-4 text-[15px] font-medium leading-snug tracking-tight ${styles.listItem}`}>
                        <CheckCircle2 className={`mt-[2px] h-[18px] w-[18px] shrink-0 ${styles.check}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto w-full">
                    <Link to={plan.href}>
                      <button className={`w-full rounded-xl py-4 px-6 font-bold text-[15px] transition-all duration-300 flex items-center justify-between group/btn ${styles.button}`}>
                        {plan.button}
                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1.5 ${styles.chevron}`} />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center relative z-20"
        >
          <h3 className="text-[24px] sm:text-[32px] font-black text-gray-900 mb-8">
            Your career shouldn't wait. Build your future today.
          </h3>
          <ApplicationFormModal>
            <button className={`inline-flex items-center justify-center gap-3 ${isHome ? "bg-home-gradient" :
                theme === "product-builder" ? "bg-[#2563EB]" :
                  theme === "orange" ? "bg-[#EA580C]" :
                    theme === "purple" ? "bg-[#9333EA]" :
                      "bg-blue-800"
              } text-white px-10 py-5 rounded-xl font-bold text-[18px] transition-all shadow-md hover:opacity-90 hover:shadow-lg hover:-translate-y-1`}>
              Apply for the Next Cohort
            </button>
          </ApplicationFormModal>
        </motion.div>

      </div>
    </section>
  );
}
