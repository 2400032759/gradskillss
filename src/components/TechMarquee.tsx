import claudeIcon from "../assets/tech-icons/claude_icon.png";
import chatgptIcon from "../assets/tech-icons/chatgpt_icon.png";
import manusIcon from "../assets/tech-icons/manus_icon.png";
import googleIcon from "../assets/tech-icons/google_icon.png";
import microsoftIcon from "../assets/tech-icons/microsoft_icon.png";
import v0Icon from "../assets/tech-icons/v0_icon.png";
import githubIcon from "../assets/tech-icons/github_icon.png";

const DISPLAY_ICONS = [
  { name: "Claude", src: claudeIcon },
  { name: "ChatGPT", src: chatgptIcon },
  { name: "Manus", src: manusIcon },
  { name: "Google", src: googleIcon },
  { name: "Microsoft", src: microsoftIcon },
  { name: "v0", src: v0Icon },
  { name: "GitHub", src: githubIcon },
  { name: "Perplexity", src: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=256" }
];

export default function TechMarquee({ theme = "dark" }: { theme?: "dark" | "light" | string }) {
  const isDark = theme === "dark" || theme === "default" || theme === "home";

  return (
    <div className="w-full max-w-[900px] mx-auto mt-4 mb-14 flex justify-center relative z-10">
      <div className="flex -space-x-3 sm:-space-x-4 hover:space-x-1 transition-all duration-300">
        {DISPLAY_ICONS.map((tech, index) => (
          <div
            key={index}
            className={`
              w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 overflow-hidden flex items-center justify-center 
              transition-transform duration-300 hover:-translate-y-2 hover:scale-110 shadow-xl
              ${isDark ? "border-[#1e293b] bg-black" : "border-white bg-slate-100"}
            `}
            style={{ zIndex: DISPLAY_ICONS.length - index }}
            title={tech.name}
          >
            <img
              src={tech.src}
              alt={tech.name}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
