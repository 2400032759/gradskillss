import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Rocket, Smartphone, Database, Code2, Target, Users, BookOpen, GraduationCap, Building2, AppWindow, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ApplicationFormModal } from "@/components/ApplicationFormModal";
import PricingSection from "@/components/PricingSection";
import ChatBot from "@/components/ChatBot";
import { BackToTop } from "@/components/BackToTop";
import { useState } from "react";

const FAQ_ITEMS = [
    { q: "Is this program suitable for beginners?", a: "While we start from scratch in web development, Elevate is more intensive as we cover both web and mobile in 8 weeks. It's perfect for students who want to move fast and build multi-platform products." },
    { q: "What is the 8-week structure?", a: "The first 4 weeks focus on mastering Web Development (Frontend & Backend). The next 4 weeks shift directly into Mobile App Development using React Native." },
    { q: "Will my website and app be live?", a: "Absolutely. You will learn to deploy your website to the public internet and prepare your mobile application for the app stores." },
    { q: "How many projects will I have in my portfolio?", a: "By the end of 8 weeks, you will have two major production-ready projects: a fully functional website and a cross-platform mobile app." }
];

export default function ElevateProgram() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden font-sans relative selection:bg-orange-200">
            <Navbar simple theme="orange" />

            <main className="pb-24 lg:pb-0">
                {/* HERO SECTION - RESTRUCTURED MODERN SALES LAYOUT */}
                <section className="relative w-full min-h-[85vh] bg-slate-50 text-gray-900 flex items-center justify-center pt-20 pb-16 overflow-hidden font-sans border-b border-gray-100">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

                    <div className="relative z-10 mx-auto max-w-[1300px] px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-16 lg:gap-12 items-center lg:items-stretch py-10 lg:py-6">

                        {/* Left Content */}
                        <div className="flex flex-col items-start text-left lg:pr-10 h-full pb-4 lg:pb-0">

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                className="mb-6 inline-block bg-orange-100 rounded-lg py-1.5 px-4 w-fit"
                            >
                                <span className="text-[13px] font-black text-orange-800 uppercase tracking-widest">
                                    Elevate Program
                                </span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                                className="mb-6 lg:mb-6 flex flex-col gap-2 relative z-20 w-full"
                            >
                                <h1 className="text-[22px] sm:text-[32px] font-bold leading-[1.2] lg:leading-[1.1] tracking-tight text-gray-500 mb-0">
                                    <span className="underline decoration-orange-500 decoration-[3px] underline-offset-4">Learn & Deploy</span> &gt; <span className="font-light text-gray-400">Not Just Studying.</span>
                                </h1>
                                <h2 className="text-[36px] sm:text-[52px] lg:text-[60px] font-black leading-[1.1] tracking-tighter">
                                    <span className="text-orange-600 block pb-1">
                                        Master
                                    </span>
                                    <span className="text-gray-900 underline decoration-orange-600 decoration-[5px] sm:decoration-[8px] underline-offset-[6px] sm:underline-offset-[10px]">
                                        Web & App Development.
                                    </span>
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-[16px] sm:text-[18px] text-gray-600 mb-8 max-w-[500px] leading-relaxed font-medium"
                            >
                                In 8 focused weeks, we make you learn web and app development. and let you Build Website & App and launch:
                                <ul className="mt-5 flex flex-col gap-3">
                                    <li className="flex items-start sm:items-center gap-3 text-gray-900 font-bold tracking-tight text-[15px] sm:text-[16px]">
                                        <span className="w-2 h-2 rounded-full bg-orange-600 mt-1.5 sm:mt-0 shrink-0" /> A high-converting website with React.js
                                    </li>
                                    <li className="flex items-start sm:items-center gap-3 text-gray-900 font-bold tracking-tight text-[15px] sm:text-[16px]">
                                        <span className="w-2 h-2 rounded-full bg-orange-600 mt-1.5 sm:mt-0 shrink-0" /> A cross-platform mobile app with React Native
                                    </li>
                                    <li className="flex items-start sm:items-center gap-3 text-gray-900 font-bold tracking-tight text-[15px] sm:text-[16px]">
                                        <span className="w-2 h-2 rounded-full bg-orange-600 mt-1.5 sm:mt-0 shrink-0" /> Real deployed products on Web & App Stores
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
                                className="mb-8 p-4 rounded-xl bg-white border border-gray-100 shadow-sm border-l-[4px] border-l-orange-600 w-full lg:max-w-[480px]"
                            >
                                <p className="text-[15px] sm:text-[16px] font-bold text-gray-500 italic mb-1">
                                    "Plan before you code. Deploy before you're ready."
                                </p>
                                <p className="text-[17px] sm:text-[18px] font-black text-orange-600">
                                    Follow the professional DTI framework.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row w-full sm:w-auto gap-4"
                            >
                                <ApplicationFormModal>
                                    <button className="w-full sm:w-auto bg-orange-600 text-white px-8 py-4 min-h-[56px] rounded-xl font-bold text-[16px] transition-all shadow-md hover:bg-orange-700 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2">
                                        Start Accelerating <ArrowRight className="w-5 h-5" />
                                    </button>
                                </ApplicationFormModal>
                            </motion.div>

                            {/* Mobile Credibility Strip */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
                                className="lg:hidden w-full mt-8 bg-orange-50 rounded-full py-3 px-4 flex flex-row items-center justify-center gap-3 border border-orange-100"
                            >
                                <span className="text-[13px] text-gray-700 font-medium">
                                    <span className="font-bold text-orange-600">5+</span> Years Exp
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-300" />
                                <span className="text-[13px] text-gray-700 font-medium">
                                    <span className="font-bold text-orange-600">5000+</span> Students
                                </span>
                            </motion.div>
                        </div>

                        {/* Right Visual - Process Pipeline */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative h-full w-full hidden lg:flex flex-col justify-between items-end"
                        >
                            <div className="relative w-full max-w-[440px] flex flex-col gap-4 py-2 mt-auto mb-auto">
                                <div className="absolute left-[39px] top-10 bottom-10 w-[2px] bg-orange-100 z-0 rounded-full" />

                                <motion.div whileHover={{ x: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="relative z-10 flex items-center gap-6 bg-white border border-gray-100 p-4 rounded-3xl shadow-sm group hover:border-orange-200 hover:shadow-md transition-all">
                                    <div className="relative flex w-14 h-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 border border-orange-200 group-hover:border-orange-300 transition-colors">
                                        <span className="text-orange-600 font-bold text-[20px]">01</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[24px] font-bold text-gray-900 tracking-tight mb-0.5">Design.</h3>
                                        <p className="text-[14px] text-gray-500 font-medium">UI/UX Layouts natively for Web & Mobile apps.</p>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="relative z-10 flex items-center gap-6 bg-white border border-gray-100 p-4 rounded-3xl shadow-sm group hover:border-orange-200 hover:shadow-md transition-all">
                                    <div className="relative flex w-14 h-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 border border-orange-200 group-hover:border-orange-300 transition-colors">
                                        <span className="text-orange-600 font-bold text-[20px]">02</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[24px] font-bold text-gray-900 tracking-tight mb-0.5">Think.</h3>
                                        <p className="text-[14px] text-gray-500 font-medium">Business logic, secure APIs, and database schemas.</p>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="relative z-10 flex items-center gap-6 bg-white border border-gray-100 p-4 rounded-3xl shadow-sm group hover:border-orange-200 hover:shadow-md transition-all">
                                    <div className="relative flex w-14 h-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 border border-orange-200 group-hover:border-orange-300 transition-colors">
                                        <span className="text-orange-600 font-bold text-[20px]">03</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[24px] font-bold text-gray-900 tracking-tight mb-0.5">Implement.</h3>
                                        <p className="text-[14px] text-gray-500 font-medium">Deploying live websites and apps to real users.</p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="w-full max-w-[440px] mt-auto mb-6 lg:mb-10 flex flex-wrap items-center justify-center gap-6 bg-white border border-gray-100 rounded-3xl py-4 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <span className="text-[22px] font-black text-orange-600 leading-none">5+</span>
                                    <span className="text-[12px] font-bold text-gray-600 uppercase tracking-widest leading-tight">Years<br />Experience</span>
                                </div>
                                <div className="w-[1px] h-8 bg-gray-200 hidden sm:block" />
                                <div className="flex items-center gap-3">
                                    <span className="text-[22px] font-black text-orange-600 leading-none">5000+</span>
                                    <span className="text-[12px] font-bold text-gray-600 uppercase tracking-widest leading-tight">Students<br />Trained</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* WHO THIS IS FOR - PREMIUM LAYOUT */}
                <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_var(--tw-gradient-stops))] from-orange-100/60 via-transparent to-transparent pointer-events-none" />

                    <div className="max-w-[1200px] mx-auto relative z-10">
                        <div className="text-center mb-20">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                                className="mb-6 inline-flex uppercase tracking-widest text-[11px] font-bold px-4 py-1.5 rounded-full bg-orange-100 text-orange-700"
                            >
                                Target Audience
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                className="text-[36px] sm:text-[48px] font-black text-gray-900 mb-6 tracking-tight"
                            >
                                Is this program for <span className="text-orange-600">you?</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                                className="text-gray-600 text-[18px] sm:text-[20px] font-medium max-w-2xl mx-auto leading-relaxed"
                            >
                                Elevate is designed for those who want to skip the 'beginner' phase and jump straight into multi-platform professional engineering.
                            </motion.p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: Smartphone, title: "Ambitious Students", desc: "You want to learn both Web and Mobile platforms in one intensive, project-driven course." },
                                { icon: Target, title: "Career Upgraders", desc: "You know basic code but want to master the full architectural stack to land high-paying roles." },
                                { icon: Users, title: "College Students", desc: "You want to build real-world production experience that helps you stand out in the job market." }
                            ].map((item, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} key={i}
                                    className="group bg-white p-8 lg:p-10 rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col items-start"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 group-hover:bg-orange-500 transition-colors duration-300" />
                                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-orange-100">
                                        <item.icon className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h3 className="text-[22px] font-bold text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium text-[16px]">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* THE 8-WEEK JOURNEY */}
                <section className="py-24 px-6 bg-white border-y border-gray-100">
                    <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[32px] sm:text-[40px] font-black text-gray-900 mb-6 leading-tight">
                                One Program. <br className="hidden sm:block" />
                                <span className="text-orange-500">Two Major Platforms.</span>
                            </h2>
                            <p className="text-gray-600 text-[18px] leading-relaxed mb-8">
                                In 8 weeks, you don't just learn syntax. You apply DTI principles to build a full ecosystem. We start with the web, master the backend, and then translate those skills into mobile apps.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Master Web Development with React.js and Node.js in the first 4 weeks",
                                    "Build cross-platform Mobile Apps with React Native in the final 4 weeks",
                                    "Apply DTI (Design, Thinking, Implementation) to every project",
                                    "Learn how to deploy both live websites and mobile app binaries"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl border border-gray-100">
                                        <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
                                        <span className="text-gray-900 font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-orange-50 p-8 sm:p-12 rounded-[32px] border border-orange-100">
                            <h3 className="text-[24px] font-black text-orange-700 mb-8">8-Week Mastery Plan</h3>
                            <div className="space-y-8 relative before:content-[''] before:absolute before:inset-y-0 before:left-[15px] before:w-[2px] before:bg-orange-200">
                                {[
                                    { w: "Week 1-2", title: "Web Design & Frontend", desc: "Native UI/UX layouts for the web and building interactive frontends with React.js." },
                                    { w: "Week 3-4", title: "Backend & Web Launch", desc: "Setting up Node.js APIs, PostgreSQL databases, and deploying your first live website." },
                                    { w: "Week 5-6", title: "Mobile UI & Architecture", desc: "Transitioning to React Native. Building mobile-first layouts and cross-platform components." },
                                    { w: "Week 7-8", title: "Advanced Mobile & App Store", desc: "Integrating mobile with secure cloud APIs and preparing your app for the App Stores." }
                                ].map((item, i) => (
                                    <div key={i} className="relative z-10 flex gap-6">
                                        <div className="w-8 h-8 rounded-full bg-orange-500 border-4 border-orange-50 flex shrink-0" />
                                        <div>
                                            <div className="text-orange-600 font-bold text-[12px] uppercase tracking-widest mb-1">{item.w}</div>
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
                <PricingSection currentPlan="GradSkills Elevate" theme="orange" />

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

            <Footer theme="orange" />
            <ChatBot theme="orange" />
            <BackToTop theme="orange" />
        </div>
    );
}
