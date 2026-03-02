import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

export function ApplicationFormModal({ children }: { children: React.ReactNode }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <Dialog onOpenChange={(open) => !open && setIsSubmitted(false)}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px] bg-white text-gray-900 border border-gray-100 shadow-2xl font-sans rounded-3xl z-[100]">
                {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                        <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center shadow-inner">
                            <CheckCircle2 className="w-12 h-12 text-blue-600" />
                        </div>
                        <div>
                            <DialogTitle className="text-[28px] font-black tracking-tight text-gray-900 mb-2">
                                Application Received!
                            </DialogTitle>
                            <p className="text-[15px] font-medium text-gray-500 max-w-[300px] mx-auto leading-relaxed">
                                Your application has been successfully submitted. We will review your profile and get back to you shortly. Keep building!
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        <DialogHeader className="mb-2">
                            <DialogTitle className="text-[26px] font-black tracking-tight text-gray-900">
                                Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">GradSkills</span>
                            </DialogTitle>
                            <p className="text-[14px] font-medium text-gray-500">Secure your spot in the next cohort.</p>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5 focus-within:text-blue-600 group">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">Full Name</label>
                                    <input required type="text" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium placeholder:text-gray-400" placeholder="E.g. John Doe" />
                                </div>

                                <div className="flex flex-col gap-1.5 focus-within:text-blue-600 group">
                                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">Phone Number</label>
                                    <input required type="tel" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium placeholder:text-gray-400" placeholder="+91 90000 00000" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5 focus-within:text-blue-600 group">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">Email Address</label>
                                <input required type="email" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium placeholder:text-gray-400" placeholder="john@example.com" />
                            </div>

                            <div className="flex flex-col gap-1.5 focus-within:text-blue-600 group">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">College / University</label>
                                <input required type="text" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium placeholder:text-gray-400" placeholder="XYZ Institute of Technology" />
                            </div>

                            <div className="flex flex-col gap-1.5 focus-within:text-blue-600 group relative">
                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">Current Status</label>
                                <select required defaultValue="" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium appearance-none cursor-pointer">
                                    <option value="" disabled className="text-gray-400">Select your year</option>
                                    <option value="grad_1" className="bg-white">Graduation 1st Year</option>
                                    <option value="grad_2" className="bg-white">Graduation 2nd Year</option>
                                    <option value="grad_3" className="bg-white">Graduation 3rd Year</option>
                                    <option value="grad_4" className="bg-white">Graduation 4th Year</option>
                                    <option value="graduated" className="bg-white">Graduated</option>
                                </select>
                                <div className="absolute right-4 top-[32px] pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>

                            <button type="submit" className="mt-4 w-full bg-blue-800 text-white font-bold py-4 rounded-xl text-[16px] shadow-sm hover:bg-blue-900 hover:shadow-md transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                                Submit Application <ArrowRightIcon className="w-5 h-5" />
                            </button>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}

function ArrowRightIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    )
}
