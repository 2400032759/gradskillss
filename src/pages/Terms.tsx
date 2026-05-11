import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Terms() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans relative selection:bg-blue-200">
            <Navbar simple />

            <main className="pt-32 pb-24 px-6">
                <div className="max-w-[800px] mx-auto bg-white p-8 sm:p-12 rounded-[32px] border border-gray-100 shadow-sm">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="prose prose-slate max-w-none"
                    >
                        <h1 className="text-[32px] sm:text-[40px] font-black text-gray-900 mb-8 leading-tight tracking-tight">Terms and <span className="text-blue-600">Conditions</span></h1>
                        
                        <p className="text-gray-600 mb-8 font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                        <div className="space-y-10 text-gray-700">
                            <section>
                                <h2 className="text-[22px] font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                                <p className="leading-relaxed">By accessing and using GradSkills ("we," "our," or "us") website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
                            </section>

                            <section>
                                <h2 className="text-[22px] font-bold text-gray-900 mb-4">2. Program Enrollment</h2>
                                <p className="leading-relaxed">Enrollment in our programs (Foundational, Elevate, or Product Builder) is subject to availability and payment of the specified fees. We reserve the right to refuse enrollment to anyone for any reason.</p>
                            </section>

                            <section>
                                <h2 className="text-[22px] font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
                                <p className="leading-relaxed">All course materials, including but not limited to videos, code snippets, documentation, and designs, are the intellectual property of GradSkills. You are granted a limited, non-exclusive license to use these materials for your personal learning purposes only.</p>
                            </section>

                            <section>
                                <h2 className="text-[22px] font-bold text-gray-900 mb-4">4. Code of Conduct</h2>
                                <p className="leading-relaxed">Users are expected to maintain professional behavior in all community forums and communication channels. Harassment, plagiarism, or any form of intellectual property theft will result in immediate termination of access without refund.</p>
                            </section>

                            <section>
                                <h2 className="text-[22px] font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                                <p className="leading-relaxed">GradSkills provides educational services. While we strive for excellence, we do not guarantee specific job placements or career outcomes. We are not liable for any direct or indirect damages resulting from the use of our services.</p>
                            </section>

                            <section>
                                <h2 className="text-[22px] font-bold text-gray-900 mb-4">6. Modification of Terms</h2>
                                <p className="leading-relaxed">We reserve the right to modify these terms at any time. Significant changes will be communicated via email or through our website.</p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
            <BackToTop />
        </div>
    );
}
