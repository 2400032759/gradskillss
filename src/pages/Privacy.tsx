import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Privacy() {
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
                        <h1 className="text-[32px] sm:text-[40px] font-black text-gray-900 mb-8 leading-tight tracking-tight">Privacy <span className="text-blue-600">Policy</span></h1>
                        
                        <p className="text-gray-600 mb-8 font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                        <div className="space-y-10 text-gray-700">
                            <section>
                                <h2 className="text-[22px] font-bold text-gray-900 mb-4">1. Information Collection</h2>
                                <p className="leading-relaxed mb-4">We collect information that you voluntarily provide to us when you enroll in our programs, subscribe to our newsletter, or communicate with us.</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Name and contact information</li>
                                    <li>Educational and professional background</li>
                                    <li>Payment details (processed securely via third-party providers)</li>
                                    <li>Communication records</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-[22px] font-bold text-gray-900 mb-4">2. Use of Information</h2>
                                <p className="leading-relaxed mb-4">We use your information for the following purposes:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Providing and managing your program access</li>
                                    <li>Communicating important program updates and news</li>
                                    <li>Improving our educational materials and services</li>
                                    <li>Personalizing your learning experience</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-[22px] font-bold text-gray-900 mb-4">3. Data Security</h2>
                                <p className="leading-relaxed">We take appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or theft. We use industry-standard encryption for data storage and transmission.</p>
                            </section>

                            <section>
                                <h2 className="text-[22px] font-bold text-gray-900 mb-4">4. Third-Party Sharing</h2>
                                <p className="leading-relaxed">We do not sell your personal information. We may share your data with trusted partners who assist us in providing our services, such as payment processors, cloud storage, and email service providers, all of whom are committed to data protection.</p>
                            </section>

                            <section>
                                <h2 className="text-[22px] font-bold text-gray-900 mb-4">5. Your Rights</h2>
                                <p className="leading-relaxed">You have the right to access, correct, or delete your personal information. You also have the right to opt-out of marketing communications at any time by following the instructions in our emails.</p>
                            </section>

                            <section>
                                <h2 className="text-[22px] font-bold text-gray-900 mb-4">6. Cookies</h2>
                                <p className="leading-relaxed">We use cookies to improve your user experience and for website analytics. You can manage your cookie preferences through your browser settings.</p>
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
