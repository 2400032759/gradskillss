
export default function Footer({ theme = "default" }: { theme?: string }) {
  const isHome = theme === "home";

  return (
    <footer className="w-full bg-slate-50 border-t border-gray-100 text-gray-500 font-sans py-20 relative overflow-hidden">

      <div className="relative z-10 mx-auto flex max-w-[1300px] flex-col items-center justify-center gap-12 px-6 lg:flex-row lg:justify-between lg:px-12">

        {/* LOGO */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="https://image2url.com/r2/default/images/1772362953079-6c29c142-3343-457e-aa4f-e62893004fd6.png"
              alt="Logo"
              className="h-12 object-contain"
            />
          </a>
        </div>

        {/* COPYRIGHT & LEGAL */}
        <div className="flex flex-col items-center lg:items-end gap-3 text-center lg:text-right w-full lg:w-auto mt-6 lg:mt-0">
          <p className="text-[13px] font-bold text-gray-500 tracking-wider">
            © {new Date().getFullYear()} GRADSKILLS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[12px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className={`hover:${isHome ? "text-[#ff5757]" : theme === "product-builder" ? "text-[#2563EB]" : "text-blue-800"} transition-colors`}>Privacy Policy</a>
            <a href="#" className={`hover:${isHome ? "text-[#ff5757]" : theme === "product-builder" ? "text-[#2563EB]" : "text-blue-800"} transition-colors`}>Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
