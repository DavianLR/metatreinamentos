import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV, waLink } from "../data";
import { Logo } from "./Logo";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                data-testid="site-header"
                className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,border-color] duration-500 ${
                    scrolled
                        ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.08),0_8px_24px_-12px_rgba(0,0,0,0.15)]"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-[76px] flex items-center justify-between">
                    <a href="#hero" data-testid="header-logo-link" className="flex items-center">
                        <Logo light={!scrolled} />
                    </a>

                    <nav className="hidden lg:flex items-center gap-9">
                        {NAV.map((n) => (
                            <a
                                key={n.label}
                                href={n.href}
                                data-testid={`nav-link-${n.label.toLowerCase()}`}
                                className={`nav-link font-body text-[13px] uppercase tracking-[0.18em] font-medium ${
                                    scrolled ? "text-[#111]" : "text-white"
                                }`}
                            >
                                {n.label}
                            </a>
                        ))}
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="header-cta-orcamento"
                            className="ml-2 inline-flex items-center gap-2 bg-[#F4C400] text-[#111] px-5 py-2.5 font-display uppercase tracking-[0.1em] text-[13px] font-bold hover:-translate-y-0.5 transition-transform"
                        >
                            <MessageCircle size={16} strokeWidth={2.5} />
                            Solicitar Orçamento
                        </a>
                    </nav>

                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Abrir menu"
                        data-testid="header-menu-button"
                        className={`lg:hidden ${scrolled ? "text-[#111]" : "text-white"}`}
                    >
                        <Menu size={26} />
                    </button>
                </div>
                <div className={`h-[1px] w-full transition-colors duration-500 ${scrolled ? "bg-black/10" : "bg-white/10"}`} />
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                        className="fixed inset-0 z-[60] bg-[#111] text-white"
                        data-testid="mobile-menu"
                    >
                        <div className="flex items-center justify-between px-6 h-[76px] border-b border-white/10">
                            <Logo light />
                            <button onClick={() => setOpen(false)} data-testid="mobile-menu-close" aria-label="Fechar menu">
                                <X size={26} />
                            </button>
                        </div>
                        <nav className="p-6 flex flex-col gap-2">
                            {NAV.map((n, i) => (
                                <motion.a
                                    key={n.label}
                                    href={n.href}
                                    onClick={() => setOpen(false)}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    className="font-display uppercase text-3xl tracking-tight py-3 border-b border-white/10 flex items-baseline gap-4"
                                >
                                    <span className="text-[#F4C400] text-xs font-mono">0{i + 1}</span>
                                    {n.label}
                                </motion.a>
                            ))}
                            <a
                                href={waLink()}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-yellow mt-8 justify-center"
                            >
                                <MessageCircle size={18} /> Solicitar Orçamento
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
