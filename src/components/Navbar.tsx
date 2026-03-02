import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ApplicationFormModal } from "./ApplicationFormModal";

const navLinks = [
  { label: "The Reality", href: "#gap" },
  { label: "Program", href: "#program" },
  { label: "Compare", href: "#outcomes" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar({ simple = false, theme = "blue" }: { simple?: boolean; theme?: "blue" | "purple" | "orange" | "home" | "product-builder" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 py-3 shadow-sm" : "bg-transparent py-5"} font-sans`}>
      <div className="mx-auto flex max-w-[1300px] items-center justify-between px-6">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-2 group">
          <img
            src="https://image2url.com/r2/default/images/1772362953079-6c29c142-3343-457e-aa4f-e62893004fd6.png"
            alt="Logo"
            className="h-10 object-contain select-none pointer-events-none"
            draggable={false}
          />
        </a>

        {/* Desktop links */}
        {!simple && (
          <div className="hidden items-center gap-8 lg:flex bg-white/40 border border-gray-200 shadow-sm px-8 py-3 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[14px] font-bold tracking-wider text-gray-600 hover:${theme === "home" ? "text-[#ff5757]" : theme === "product-builder" ? "text-[#2563EB]" : "text-blue-800"} transition-colors uppercase`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className={simple ? "block" : "hidden lg:block"}>
          <ApplicationFormModal>
            <button className={`${theme === "purple" ? "bg-purple-600 hover:bg-purple-700" :
              theme === "orange" ? "bg-orange-600 hover:bg-orange-700" :
                theme === "home" ? "bg-home-gradient hover:opacity-90" :
                  theme === "product-builder" ? "bg-[#2563EB] hover:bg-blue-700" :
                    "bg-blue-800 hover:bg-blue-900"
              } rounded-full px-6 py-3 text-[14px] font-bold text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5`}>
              Apply Now
            </button>
          </ApplicationFormModal>
        </div>

        {/* Mobile menu */}
        {!simple && (
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className={`p-2 transition-colors ${theme === "home" ? "text-[#ff5757]" : theme === "product-builder" ? "text-[#2563EB]" : "text-gray-900"}`}>
                  <Menu className="h-7 w-7" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-gray-200 bg-white p-6 shadow-2xl text-gray-900">
                <SheetTitle className="sr-only text-gray-900">Navigation</SheetTitle>
                <div className="mt-10 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`text-[18px] font-black uppercase tracking-wide text-gray-700 hover:${theme === "home" ? "text-[#ff5757]" : theme === "product-builder" ? "text-[#2563EB]" : "text-blue-800"} transition-colors`}
                    >
                      {link.label}
                    </a>
                  ))}
                  <ApplicationFormModal>
                    <button onClick={() => setOpen(false)} className={`mt-8 w-full rounded-xl ${theme === "home" ? "bg-home-gradient" : theme === "product-builder" ? "bg-[#2563EB]" : "bg-blue-800"} px-6 py-4 text-[16px] font-bold text-white shadow-md hover:opacity-90 transition-all`}>
                      Apply Now
                    </button>
                  </ApplicationFormModal>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </nav >
  );
}
