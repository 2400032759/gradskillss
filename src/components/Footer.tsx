import { Link } from "react-router-dom";
import DotGrid from "./ui/DotGrid";

export default function Footer({ theme = "dark" }: { theme?: "dark" | "light" | string }) {
  const isDark = theme === "dark" || theme === "default" || theme === "home";

  return (
    <footer className={`w-full transition-colors duration-1000 border-t font-sans py-20 relative overflow-hidden ${isDark ? "bg-[#030712] border-white/5 text-white/40" : "bg-white border-slate-200 text-slate-500"}`}>
      {/* Interactive Dot Grid Pattern - Standardized Visibility */}
      <div className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-1000 opacity-80">
          <DotGrid 
              baseColor={isDark ? "#1e293b" : "#e2e8f0"}
              activeColor="#8c52ff"
              dotSize={3}
              gap={30}
          />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-12 px-6 lg:flex-row lg:justify-between lg:px-12">

        {/* LOGO */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={isDark 
                ? "https://www.image2url.com/r2/default/images/1778127317902-a7e88d3f-f0eb-497d-b18f-24984d8f0ac9.png" 
                : "https://www.image2url.com/r2/default/images/1778152066419-1ba8578d-1152-47e0-adf6-5a96c3ed2cbd.png"
              }
              alt="Logo"
              className="h-10 object-contain transition-all duration-500"
            />
          </Link>
          <div className={`text-[11px] font-semibold tracking-[0.4em] uppercase transition-colors ${isDark ? "text-white/50" : "text-slate-400"}`}>
            Skills to Career • Platform
          </div>
        </div>

        {/* COPYRIGHT & LEGAL */}
        <div className="flex flex-col items-center lg:items-end gap-6 text-center lg:text-right w-full lg:w-auto mt-6 lg:mt-0">
          <p className={`text-[12px] font-semibold tracking-[0.2em] uppercase transition-colors ${isDark ? "text-white/60" : "text-slate-500"}`}>
            © {new Date().getFullYear()} GRADSKILLS. ALL RIGHTS RESERVED.
          </p>
          <div className={`flex gap-8 text-[11px] font-bold uppercase tracking-[0.3em] transition-colors ${isDark ? "text-white/50" : "text-slate-600"}`}>
            <Link to="/privacy" className={`transition-colors duration-300 ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>Privacy Policy</Link>
            <Link to="/terms" className={`transition-colors duration-300 ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
