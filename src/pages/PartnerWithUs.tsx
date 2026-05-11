import { useState } from "react";
import { motion } from "framer-motion";
import { Users, HeartHandshake, ArrowRight, Zap, Trophy, Globe, Code, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DotGrid from "@/components/DotGrid/DotGrid";

export default function PartnerWithUs() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const isDark = theme === "dark";

    const roles = [
        {
            title: "GradMentor",
            subtitle: "Knowledge Partner",
            icon: Users,
            description: "Elite industry professionals from companies like Google, Meta, and top industries who guide the next generation of builders.",
            responsibilities: [
                "Review real-world production projects",
                "Conduct technical deep-dives and code reviews",
                "Share industry best practices and architecture",
                "Help students build a professional legacy"
            ],
            link: "/apply-mentor",
            accent: "#8c52ff"
        },
        {
            title: "GradTeer",
            subtitle: "Growth Partner",
            icon: HeartHandshake,
            description: "Community leaders and growth enthusiasts who drive the GradSkills mission forward and expand our reach.",
            responsibilities: [
                "Lead community-driven growth initiatives",
                "Manage strategic campus and city partnerships",
                "Organize events and networking sessions",
                "Champion the GradSkills philosophy locally"
            ],
            link: "/apply-gradteer",
            accent: "#ff5757"
        },
        {
            title: "Summer Intern",
            subtitle: "Builder Partner",
            icon: Rocket,
            description: "High-potential students and early-career builders who want to master production engineering and build the future.",
            responsibilities: [
                "Build real-world production products",
                "Master modern AI tech stacks",
                "Work on high-impact production features",
                "Learn from world-class industry mentors"
            ],
            link: "/apply-intern",
            accent: "#c084fc"
        }
    ];

    return (
        <div className={`min-h-screen font-sans transition-colors duration-1000 selection:bg-[#8c52ff]/30 ${isDark ? "bg-[#030712] text-white" : "bg-white text-slate-900"}`}>
            <Navbar theme={theme} onThemeChange={setTheme} simple />
            
            <main className="relative pt-40 sm:pt-48 pb-20 px-6 overflow-hidden">
                {/* Background DotGrid */}
                <div className="absolute inset-0 pointer-events-none z-0 opacity-80">
                    <DotGrid baseColor={isDark ? "#1e293b" : "#e2e8f0"} activeColor="#8c52ff" dotSize={3} gap={30} />
                </div>

                {/* Hero Section */}
                <div className="relative z-10 max-w-[1300px] mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={`inline-flex items-center gap-2.5 rounded-full border backdrop-blur-xl px-7 py-3 text-[12px] font-bold uppercase tracking-[0.3em] mb-10 transition-all duration-1000 ${isDark ? "border-[#8c52ff]/30 bg-[#8c52ff]/5 text-[#8c52ff] shadow-lg shadow-purple-900/10" : "border-[#8c52ff]/20 bg-[#8c52ff]/5 text-[#8c52ff] shadow-md shadow-purple-200/50"}`}>
                            <Zap className="w-4 h-4" /> Partner Ecosystem
                        </div>
                        <h1 className="text-[54px] sm:text-[72px] lg:text-[84px] font-black leading-[1.05] tracking-tight mb-8">
                            Build the <span className="text-home-gradient">Future</span> <br className="hidden sm:block" /> With Us.
                        </h1>
                        <p className={`text-[18px] sm:text-[22px] max-w-3xl mx-auto font-medium leading-relaxed transition-colors ${isDark ? "text-white/50" : "text-slate-500"}`}>
                            Whether you're an industry expert or a community leader, there's a place for you to drive impact at GradSkills.
                        </p>
                    </motion.div>
                </div>

                {/* Roles Grid */}
                <div className="relative z-10 max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {roles.map((role, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="group relative"
                        >
                            {/* Glowing Background Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r opacity-20 blur-2xl rounded-[40px] group-hover:opacity-40 transition-opacity" style={{ backgroundImage: `linear-gradient(to right, ${role.accent}, #8c52ff)` }} />
                            
                            <div className={`relative h-full p-10 lg:p-14 rounded-[40px] border backdrop-blur-2xl transition-all duration-500 ${isDark ? "bg-[#030712]/80 border-white/10" : "bg-white/90 border-slate-200 shadow-xl"}`}>
                                
                                <div className="flex items-start justify-between mb-10">
                                    <div>
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-home-gradient shadow-lg">
                                                <role.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <h2 className="text-[36px] font-black tracking-tight">{role.title}</h2>
                                        </div>
                                        <span className="text-[14px] font-black uppercase tracking-[0.3em] text-home-gradient ml-1">
                                            {role.subtitle}
                                        </span>
                                    </div>
                                </div>

                                <p className={`text-[18px] lg:text-[20px] font-medium leading-relaxed mb-10 transition-colors ${isDark ? "text-white/60" : "text-slate-600"}`}>
                                    {role.description}
                                </p>

                                <div className="space-y-5 mb-12">
                                    <h4 className={`text-[12px] font-black uppercase tracking-[0.2em] transition-colors ${isDark ? "text-white/30" : "text-slate-400"}`}>Core Responsibilities</h4>
                                    {role.responsibilities.map((resp, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className={`w-1.5 h-1.5 rounded-full`} style={{ backgroundColor: role.accent }} />
                                            <span className={`text-[16px] lg:text-[17px] font-bold transition-colors ${isDark ? "text-white/80" : "text-slate-700"}`}>{resp}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link 
                                    to={role.link}
                                    className={`flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-black text-[18px] transition-all group/btn ${isDark ? "bg-white text-black hover:bg-white/90" : "bg-slate-900 text-white hover:bg-slate-800"}`}
                                >
                                    Apply Now <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Stats/Info */}
                <div className="relative z-10 max-w-[1200px] mx-auto mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Users, label: "Learners", value: "10K+" },
                        { icon: Globe, label: "Active Community", value: "3000+" },
                        { icon: Zap, label: "Tech Stack", value: "Modern" },
                        { icon: Code, label: "Culture", value: "Build First" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <stat.icon className="w-6 h-6 mx-auto mb-4 text-[#8c52ff]" />
                            <div className={`text-[20px] font-black mb-1 transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>{stat.value}</div>
                            <div className={`text-[11px] font-black uppercase tracking-widest transition-colors ${isDark ? "text-white/30" : "text-slate-400"}`}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer theme={theme} />
        </div>
    );
}
