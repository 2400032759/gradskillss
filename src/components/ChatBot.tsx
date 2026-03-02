import { useState, useRef, useEffect } from "react";
import { MessageSquareText, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id: string;
    sender: "bot" | "user";
    text: string;
    time: string;
}

export default function ChatBot({ theme = "default" }: { theme?: string }) {
    const isHome = theme === "home";
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const event = new CustomEvent("chat-toggled", { detail: { isOpen } });
        window.dispatchEvent(event);
    }, [isOpen]);

    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const getISTTime = () => {
        const date = new Date();
        return date.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }).toUpperCase();
    };

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    id: Date.now().toString(),
                    sender: "bot",
                    text: "hello how may i help you?",
                    time: getISTTime(),
                },
            ]);
        }
    }, [isOpen, messages.length]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            sender: "user",
            text: inputValue,
            time: getISTTime(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");

        setTimeout(() => {
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                sender: "bot",
                text: "sorry we are unavailable please contact us +91 90594 71268",
                time: getISTTime(),
            };
            setMessages((prev) => [...prev, botMsg]);
        }, 1000);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-20 right-0 w-[350px] bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden flex flex-col font-sans"
                        style={{ maxHeight: "500px", height: "calc(100vh - 120px)" }}
                    >
                        {/* Header */}
                        <div className={`${isHome ? "bg-home-gradient" :
                            theme === "product-builder" ? "bg-[#2563EB]" :
                                theme === "orange" ? "bg-[#EA580C]" :
                                    theme === "purple" ? "bg-[#9333EA]" :
                                        "bg-blue-800"
                            } p-4 flex items-center justify-between text-white`}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[16px] leading-tight">Grad Assist</h3>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                        <span className={`${isHome ? "text-white/80" :
                                                theme === "orange" ? "text-orange-100" :
                                                    theme === "purple" ? "text-purple-100" :
                                                        "text-blue-100"
                                            } text-[12px] font-medium`}>Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
                                title="Close chat"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 bg-[#F5F7FA] p-5 overflow-y-auto flex flex-col gap-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex flex-col max-w-[85%] ${msg.sender === "user" ? "self-end items-end" : "self-start items-start"
                                        }`}
                                >
                                    <div
                                        className={`relative px-4 py-3 rounded-2xl text-[14px] leading-relaxed shadow-sm ${msg.sender === "user"
                                            ? `${isHome ? "bg-home-gradient" :
                                                theme === "product-builder" ? "bg-[#2563EB]" :
                                                    theme === "orange" ? "bg-[#EA580C]" :
                                                        theme === "purple" ? "bg-[#9333EA]" :
                                                            "bg-blue-800"
                                            } text-white rounded-br-sm`
                                            : "bg-white border border-gray-100 text-gray-800 rounded-bl-sm"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-bold mt-1.5 px-1 uppercase tracking-wider">
                                        {msg.time}
                                    </span>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className={`flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3.5 text-[14px] text-gray-900 focus:outline-none focus:border-${isHome ? "[#ff5757]" : theme === "orange" ? "[#EA580C]" : theme === "purple" ? "[#9333EA]" : "blue-500"} focus:ring-1 focus:ring-${isHome ? "[#ff5757]" : theme === "orange" ? "[#EA580C]" : theme === "purple" ? "[#9333EA]" : "blue-500"} transition-all font-medium placeholder:text-gray-400`}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button
                                onClick={handleSend}
                                className={`w-12 h-12 flex items-center justify-center rounded-full shrink-0 transition-colors ${inputValue.trim()
                                    ? `${isHome ? "bg-home-gradient" :
                                        theme === "product-builder" ? "bg-[#2563EB]" :
                                            theme === "orange" ? "bg-[#EA580C]" :
                                                theme === "purple" ? "bg-[#9333EA]" :
                                                    "bg-blue-800"
                                    } text-white hover:opacity-90 shadow-md hover:shadow-lg`
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    }`}
                                disabled={!inputValue.trim()}
                            >
                                <Send className={`w-5 h-5 ${inputValue.trim() ? '-ml-0.5' : ''}`} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 ${isHome ? "bg-home-gradient" :
                    theme === "product-builder" ? "bg-[#2563EB]" :
                        theme === "orange" ? "bg-[#EA580C]" :
                            theme === "purple" ? "bg-[#9333EA]" :
                                "bg-blue-800"
                    } text-white rounded-full shadow-lg flex items-center justify-center hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transition-all z-50 relative group`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <X className="w-7 h-7" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <MessageSquareText className="w-7 h-7 scale-x-[-1]" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
}
