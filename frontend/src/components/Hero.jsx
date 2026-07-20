import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, MessageCircle } from "lucide-react";
import { HERO_SLIDES, waLink } from "../data";

export default function Hero() {
    const [idx, setIdx] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    useEffect(() => {
        const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 6500);
        return () => clearInterval(t);
    }, []);

    const slide = HERO_SLIDES[idx];

    const go = (dir) => setIdx((i) => (i + dir + HERO_SLIDES.length) % HERO_SLIDES.length);

    return (
        <section
            ref={ref}
            id="hero"
            data-testid="hero-section"
            className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black"
        >
            {/* Parallax image layer */}
            <motion.div style={{ y }} className="absolute inset-0">
                <AnimatePresence mode="sync">
                    <motion.img
                        key={slide.img}
                        src={slide.img}
                        alt=""
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
            </motion.div>

            {/* Corner marks */}
            <div className="pointer-events-none absolute inset-0 z-10">
                <div className="absolute top-24 left-6 lg:left-12 w-8 h-8 border-t border-l border-white/40" />
                <div className="absolute top-24 right-6 lg:right-12 w-8 h-8 border-t border-r border-white/40" />
                <div className="absolute bottom-24 left-6 lg:left-12 w-8 h-8 border-b border-l border-white/40" />
                <div className="absolute bottom-24 right-6 lg:right-12 w-8 h-8 border-b border-r border-white/40" />
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 h-full flex flex-col justify-end pt-24 pb-24 lg:pb-28"
            >
                <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={idx}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
                                exit: { transition: { staggerChildren: 0.05 } },
                            }}
                        >
                            <motion.p
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1 },
                                    exit: { y: -10, opacity: 0 },
                                }}
                                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                                className="font-mono uppercase tracking-[0.3em] text-[11px] text-[#F4C400] mb-5 flex items-center gap-3"
                            >
                                <span className="w-8 h-[1px] bg-[#F4C400]" />
                                {slide.eyebrow.replace(/^\d+\s*[—-]\s*/, "")}
                            </motion.p>

                            <h1
                                className="font-display uppercase text-white leading-[0.9] tracking-[-0.03em] font-bold max-w-[18ch]"
                                style={{ fontSize: "clamp(38px, 6.5vw, 92px)" }}
                            >
                                {slide.title.map((line, i) => (
                                    <span key={i} className="mask-line">
                                        <motion.span
                                            variants={{
                                                hidden: { y: "110%" },
                                                visible: { y: "0%" },
                                                exit: { y: "-110%" },
                                            }}
                                            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                                            className="inline-block"
                                        >
                                            {line}
                                            {i === slide.title.length - 1 && (
                                                <span className="text-[#F4C400]">.</span>
                                            )}
                                        </motion.span>
                                    </span>
                                ))}
                            </h1>

                            <motion.p
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1 },
                                    exit: { y: -10, opacity: 0 },
                                }}
                                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                                className="mt-8 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed"
                            >
                                {slide.sub}
                            </motion.p>

                            <motion.div
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1 },
                                    exit: { y: -10, opacity: 0 },
                                }}
                                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                                className="mt-10 flex flex-wrap items-center gap-4"
                            >
                                <a
                                    href={waLink()}
                                    target="_blank"
                                    rel="noreferrer"
                                    data-testid="hero-cta-primary"
                                    className="btn-yellow"
                                >
                                    <MessageCircle size={18} strokeWidth={2.5} />
                                    Iniciar Atendimento
                                    <ArrowRight size={18} />
                                </a>
                                <a href="#treinamentos" data-testid="hero-cta-secondary" className="btn-ghost">
                                    Ver Treinamentos
                                </a>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Slider controls */}
            <div className="absolute inset-y-0 left-4 lg:left-8 flex items-center z-30">
                <button
                    onClick={() => go(-1)}
                    aria-label="Slide anterior"
                    data-testid="hero-prev"
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#F4C400] text-[#111] flex items-center justify-center hover:scale-110 hover:shadow-[0_10px_30px_-8px_rgba(244,196,0,0.7)] transition-transform"
                >
                    <ChevronLeft size={22} strokeWidth={2.5} />
                </button>
            </div>
            <div className="absolute inset-y-0 right-4 lg:right-8 flex items-center z-30">
                <button
                    onClick={() => go(1)}
                    aria-label="Próximo slide"
                    data-testid="hero-next"
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#F4C400] text-[#111] flex items-center justify-center hover:scale-110 hover:shadow-[0_10px_30px_-8px_rgba(244,196,0,0.7)] transition-transform"
                >
                    <ChevronRight size={22} strokeWidth={2.5} />
                </button>
            </div>

            {/* Slide indicators + counter */}
            <div className="absolute bottom-8 left-6 lg:left-12 right-6 lg:right-12 z-30 flex items-end justify-between text-white">
                <div className="flex gap-3">
                    {HERO_SLIDES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIdx(i)}
                            aria-label={`Slide ${i + 1}`}
                            className={`h-[2px] transition-all duration-500 ${
                                i === idx ? "w-14 bg-[#F4C400]" : "w-8 bg-white/40 hover:bg-white/70"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
