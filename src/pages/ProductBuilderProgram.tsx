import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Rocket, Smartphone, Database, Code2, Target, Users, BookOpen, GraduationCap, Building2, AppWindow, Cpu, Bot, Sparkles, Zap, BrainCircuit } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ApplicationFormModal } from "@/components/ApplicationFormModal";
import PricingSection from "@/components/PricingSection";
import ChatBot from "@/components/ChatBot";
import { BackToTop } from "@/components/BackToTop";
import { useState } from "react";

const FAQ_ITEMS = [
    { q: "Is this for absolute beginners?", a: "The Product Builder Program is our most comprehensive journey. While we start with fundamentals, we move fast into AI and complex workflows. It's designed for students who want to become world-class product engineers in 12 weeks." },
    { q: "What exactly are AI Agents and Workflows?", a: "Instead of just simple chat boxes, you will learn to build autonomous agents that can query databases, process documents, and execute specific business tasks on behalf of users." },
    { q: "Will I really build 4 major products?", a: "Yes. By the end of 12 weeks, you will have a live website, a cross-platform mobile app, and two production-grade AI agent systems in your portfolio." },
    { q: "Do I get mentorship on architecture?", a: "Absolutely. This program focuses heavily on high-level system design (Thinking phase), ensuring you know how to architect complex apps that can scale." }
];

export default function ProductBuilderProgram() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden font-sans relative selection:bg-blue-200 pb-theme">
            <Navbar simple theme="product-builder" />

            <main className="pb-24 lg:pb-0">
                {/* HERO SECTION - RESTRUCTURED MODERN SALES LAYOUT */}
                <section className="relative w-full min-h-[85vh] bg-slate-50 text-gray-900 flex items-center justify-center pt-14 pb-16 overflow-hidden font-sans border-b border-gray-100">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

                    <div className="relative z-10 mx-auto max-w-[1300px] px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-16 lg:gap-12 items-center lg:items-stretch py-10 lg:py-6">

                        {/* Left Content */}
                        <div className="flex flex-col items-start text-left lg:pr-10 h-full pb-4 lg:pb-0">

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                className="mb-6 inline-flex items-center gap-3 bg-[#2563EB] rounded-full py-2 px-6 w-fit shadow-lg"
                            >
                                <Zap className="w-4 h-4 text-white fill-[#2563EB]/50" />
                                <span className="text-[12px] font-black text-white uppercase tracking-[0.2em]">
                                    Flagship: Product Builder Program
                                </span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                                className="mb-6 lg:mb-6 flex flex-col gap-2 relative z-20 w-full"
                            >
                                <h1 className="text-[22px] sm:text-[32px] font-bold leading-[1.2] lg:leading-[1.1] tracking-tight text-gray-500 mb-0">
                                    <span className="underline decoration-[#2563EB] decoration-[3px] underline-offset-4">Build & Architect</span> &gt; <span className="font-light text-gray-400">Not Just Coding.</span>
                                </h1>
                                <h2 className="text-[36px] sm:text-[52px] lg:text-[60px] font-black leading-[1.1] tracking-tighter">
                                    <span className="text-[#2563EB] block pb-1">
                                        Master Web, App
                                    </span>
                                    <span className="text-gray-900 underline decoration-[#2563EB] decoration-[5px] sm:decoration-[8px] underline-offset-[6px] sm:underline-offset-[10px]">
                                        & AI Agent Development.
                                    </span>
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-[16px] sm:text-[18px] text-gray-600 mb-8 max-w-[500px] leading-relaxed font-medium"
                            >
                                In 12 focused weeks, we make you learn web, app and AI Agent development. and let you Build Website, App & AI Agents and launch:
                                <ul className="mt-5 flex flex-col gap-3">
                                    <li className="flex items-start sm:items-center gap-3 text-gray-900 font-bold tracking-tight text-[15px] sm:text-[16px]">
                                        <span className="w-2 h-2 rounded-full bg-[#2563EB] mt-1.5 sm:mt-0 shrink-0" /> One high-converting website with React.js
                                    </li>
                                    <li className="flex items-start sm:items-center gap-3 text-gray-900 font-bold tracking-tight text-[15px] sm:text-[16px]">
                                        <span className="w-2 h-2 rounded-full bg-[#2563EB] mt-1.5 sm:mt-0 shrink-0" /> One cross-platform mobile app with React Native
                                    </li>
                                    <li className="flex items-start sm:items-center gap-3 text-gray-900 font-bold tracking-tight text-[15px] sm:text-[16px]">
                                        <span className="w-2 h-2 rounded-full bg-[#2563EB] mt-1.5 sm:mt-0 shrink-0" /> Two intelligent AI agents & workflows
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
                                className="mb-8 p-4 rounded-xl bg-white border border-gray-100 shadow-sm border-l-[4px] border-l-[#2563EB] w-full lg:max-w-[480px]"
                            >
                                <p className="text-[15px] sm:text-[16px] font-bold text-gray-500 italic mb-1">
                                    "Traditional courses teach syntax. We teach you how to build a company."
                                </p>
                                <p className="text-[17px] sm:text-[18px] font-black text-[#2563EB]">
                                    Apply the DTI principle to every product.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row w-full sm:w-auto gap-4"
                            >
                                <ApplicationFormModal>
                                    <button className="w-full sm:w-auto bg-[#2563EB] text-white px-8 py-4 min-h-[56px] rounded-xl font-bold text-[16px] transition-all shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2">
                                        Become a Product Builder <ArrowRight className="w-5 h-5" />
                                    </button>
                                </ApplicationFormModal>
                            </motion.div>

                        </div>

                        {/* Right Visual - Process Pipeline */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative h-full w-full hidden lg:flex flex-col justify-between items-end"
                        >
                            <div className="relative w-full max-w-[440px] flex flex-col gap-4 py-2 mt-auto mb-auto">
                                <div className="absolute left-[39px] top-10 bottom-10 w-[2px] bg-blue-100 z-0 rounded-full" />

                                <motion.div whileHover={{ x: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="relative z-10 flex items-center gap-6 bg-white border border-gray-100 p-4 rounded-3xl shadow-sm group hover:border-blue-200 hover:shadow-md transition-all">
                                    <div className="relative flex w-14 h-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 group-hover:border-blue-300 transition-colors">
                                        <span className="text-[#2563EB] font-bold text-[20px]">01</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[24px] font-bold text-gray-900 tracking-tight mb-0.5">Design.</h3>
                                        <p className="text-[14px] text-gray-500 font-medium">Native UI/UX for Web, Mobile, and AI interfaces.</p>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="relative z-10 flex items-center gap-6 bg-white border border-gray-100 p-4 rounded-3xl shadow-sm group hover:border-blue-200 hover:shadow-md transition-all">
                                    <div className="relative flex w-14 h-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 group-hover:border-blue-300 transition-colors">
                                        <span className="text-[#2563EB] font-bold text-[20px]">02</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[24px] font-bold text-gray-900 tracking-tight mb-0.5">Think.</h3>
                                        <p className="text-[14px] text-gray-500 font-medium">Complex logic, AI prompts, and backends.</p>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="relative z-10 flex items-center gap-6 bg-white border border-gray-100 p-4 rounded-3xl shadow-sm group hover:border-blue-200 hover:shadow-md transition-all">
                                    <div className="relative flex w-14 h-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 group-hover:border-blue-300 transition-colors">
                                        <span className="text-[#2563EB] font-bold text-[20px]">03</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[24px] font-bold text-gray-900 tracking-tight mb-0.5">Implement.</h3>
                                        <p className="text-[14px] text-gray-500 font-medium">Deploying live products and AI workers.</p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="w-full max-w-[440px] mt-auto mb-14 lg:mb-20 flex flex-wrap items-center justify-center gap-6 bg-white border border-gray-100 rounded-3xl py-4 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <span className="text-[22px] font-black text-[#2563EB] leading-none">5+</span>
                                    <span className="text-[12px] font-bold text-gray-600 uppercase tracking-widest leading-tight">Years<br />Experience</span>
                                </div>
                                <div className="w-[1px] h-8 bg-gray-200 hidden sm:block" />
                                <div className="flex items-center gap-3">
                                    <span className="text-[22px] font-black text-[#2563EB] leading-none">5000+</span>
                                    <span className="text-[12px] font-bold text-gray-600 uppercase tracking-widest leading-tight">Students<br />Trained</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* WHO THIS IS FOR - PREMIUM LAYOUT */}
                <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_var(--tw-gradient-stops))] from-blue-100/60 via-transparent to-transparent pointer-events-none" />

                    <div className="max-w-[1200px] mx-auto relative z-10">
                        <div className="text-center mb-20">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                                className="mb-6 inline-flex uppercase tracking-widest text-[11px] font-bold px-4 py-1.5 rounded-full bg-blue-100 text-[#2563EB]"
                            >
                                Admissions Criteria
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                className="text-[36px] sm:text-[48px] font-black text-gray-900 mb-6 tracking-tight"
                            >
                                Is this program for <span className="text-[#2563EB]">you?</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                                className="text-gray-600 text-[18px] sm:text-[20px] font-medium max-w-2xl mx-auto leading-relaxed"
                            >
                                The GradSkills Product Builder Program is our elite flagship track, designed for those aiming to build complex, AI-powered systems that solve high-level problems.
                            </motion.p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: BrainCircuit, title: "Future Founders", desc: "You want the technical skill to build your own MVP from scratch without needing a technical co-founder." },
                                { icon: Target, title: "High-Growth Seekers", desc: "You want to master the cutting edge of AI and mobile to stand out for high-paying engineering roles." },
                                { icon: GraduationCap, title: "Ambitious Students", desc: "You want to go beyond traditional coursework and build a portfolio of complex, integrated systems." }
                            ].map((item, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} key={i}
                                    className="group bg-white p-8 lg:p-10 rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col items-start"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 group-hover:bg-[#2563EB] transition-colors duration-300" />
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                                        <item.icon className="w-8 h-8 text-[#2563EB]" />
                                    </div>
                                    <h3 className="text-[22px] font-bold text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium text-[16px]">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* THE 12-WEEK JOURNEY */}
                <section className="py-24 px-6 bg-white border-y border-gray-100">
                    <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[32px] sm:text-[40px] font-black text-gray-900 mb-6 leading-tight">
                                90 Days. <br className="hidden sm:block" />
                                <span className="text-[#2563EB]">A Lifetime of Capability.</span>
                            </h2>
                            <p className="text-gray-600 text-[18px] leading-relaxed mb-8">
                                In 12 weeks, we make you learn web, app and AI Agent development. We apply the DTI principle so you understand how to plan as an architect and execute as an engineer.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Master full-stack Web Development in the first 4 weeks",
                                    "Build production-grade Mobile Apps in the next 4 weeks",
                                    "Architect autonomous AI Agents & workflows in the final 4 weeks",
                                    "Deploy a unified ecosystem of live web, app, and AI products"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl border border-gray-100">
                                        <CheckCircle2 className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
                                        <span className="text-gray-900 font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-8 sm:p-12 rounded-[32px] border border-blue-100 shadow-sm">
                            <h3 className="text-[24px] font-black text-[#2563EB] mb-8 lowercase tracking-tight">The 12-Week Roadmap</h3>
                            <div className="space-y-8 relative before:content-[''] before:absolute before:inset-y-0 before:left-[15px] before:w-[2px] before:bg-blue-100">
                                {[
                                    { w: "Week 1-4", title: "Web Foundations", desc: "Mastering React.js, Node.js, and SQL. Building and launching a fully functional web platform." },
                                    { w: "Week 5-8", title: "Mobile Engineering", desc: "Cross-platform development with React Native, secure APIs, and mobile store deployment." },
                                    { w: "Week 9-12", title: "AI agents & Workflows", desc: "Integrating LLMs, building autonomous agents, and RAG-based intelligent data systems." }
                                ].map((item, i) => (
                                    <div key={i} className="relative z-10 flex gap-6">
                                        <div className="w-8 h-8 rounded-full bg-[#2563EB] border-4 border-blue-50 flex shrink-0 shadow-sm" />
                                        <div>
                                            <div className="text-[#2563EB] font-bold text-[12px] uppercase tracking-widest mb-1">{item.w}</div>
                                            <h4 className="text-[18px] font-bold text-gray-900 mb-1">{item.title}</h4>
                                            <p className="text-gray-600 text-[14px] leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING */}
                <PricingSection currentPlan="GradSkills Product Builder" theme="product-builder" />

                {/* FAQ */}
                <section className="py-24 px-6 bg-white border-y border-gray-100">
                    <div className="max-w-[800px] mx-auto">
                        <h2 className="text-[32px] sm:text-[40px] font-black text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {FAQ_ITEMS.map((faq, i) => (
                                <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-slate-50 transition-colors">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="font-bold text-[16px] text-gray-900">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed text-[15px]">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer theme="product-builder" />
            <ChatBot theme="product-builder" />
            <BackToTop theme="product-builder" />
        </div>
    );
}
