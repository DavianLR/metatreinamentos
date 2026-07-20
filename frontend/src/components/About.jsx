import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CHAPTERS, waLink } from "../data";

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-120px" });
    const [ci, setCi] = useState(0);
    const chapter = CHAPTERS[ci];
    const goCh = (d) => setCi((i) => (i + d + CHAPTERS.length) % CHAPTERS.length);

    return (
        <section ref={ref} id="sobre" className="relative bg-[#111] text-white overflow-hidden" data-testid="about-section">
            <div className="hazard-stripes-thin h-2 w-full" />
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-12 gap-10">
                {/* Left: image + Quem Somos */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                    className="lg:col-span-6 relative aspect-[4/5] lg:aspect-auto lg:min-h-[720px] overflow-hidden"
                >
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
                        alt="Equipe industrial em operação"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
                    <div className="absolute inset-0 grain" />

                    <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-12">
                        <p className="section-label mb-4">
                            <span>Sobre a Empresa</span>
                        </p>
                        <h2 className="font-display uppercase leading-[0.9] tracking-[-0.02em]" style={{ fontSize: "clamp(48px, 6vw, 88px)" }}>
                            Quem<br />Somos<span className="text-[#F4C400]">.</span>
                        </h2>
                        <p className="mt-6 max-w-md text-white/80 leading-relaxed">
                            A <strong className="text-[#F4C400] font-semibold">META Treinamentos</strong> nasceu para preencher uma lacuna clara no mercado: entregar consultoria técnica e treinamentos de alto padrão, com foco absoluto na proteção da vida e na conformidade normativa.
                        </p>
                        <p className="mt-4 max-w-md text-white/70 leading-relaxed">
                            Nosso time de engenheiros e técnicos atua em campo, lado a lado com as equipes operacionais, entregando resultados mensuráveis para indústria, agronegócio e construção civil.
                        </p>
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="about-cta"
                            className="btn-yellow mt-8 self-start"
                        >
                            Saber Mais
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Right: numbered chapters carousel */}
                <div className="lg:col-span-6 flex flex-col">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="section-label mb-6"
                    >
                        <span>Manifesto</span>
                    </motion.p>

                    <div className="relative flex-1 min-h-[560px] border border-white/10 p-8 lg:p-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={ci}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                            >
                                <div className="font-display uppercase tracking-tight text-[#F4C400] leading-none" style={{ fontSize: "clamp(72px, 10vw, 160px)" }}>
                                    {chapter.label}
                                </div>
                                <h3 className="mt-8 font-display uppercase text-white leading-[0.95] tracking-tight" style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}>
                                    {chapter.title}
                                </h3>
                                <p className="mt-8 text-white/80 leading-relaxed max-w-lg text-lg md:text-xl">
                                    {chapter.body}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute bottom-8 right-8 flex gap-3">
                            <button
                                onClick={() => goCh(-1)}
                                data-testid="chapter-prev"
                                aria-label="Capítulo anterior"
                                className="w-11 h-11 border border-white/25 text-white flex items-center justify-center hover:bg-[#F4C400] hover:border-[#F4C400] hover:text-[#111] transition-colors"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={() => goCh(1)}
                                data-testid="chapter-next"
                                aria-label="Próximo capítulo"
                                className="w-11 h-11 border border-white/25 text-white flex items-center justify-center hover:bg-[#F4C400] hover:border-[#F4C400] hover:text-[#111] transition-colors"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="border border-white/10 p-5">
                            <p className="font-mono text-[10px] tracking-[0.3em] text-white/50">CREA / MTE</p>
                            <p className="mt-2 font-display uppercase text-white text-lg">Habilitação Técnica</p>
                        </div>
                        <div className="border border-white/10 p-5">
                            <p className="font-mono text-[10px] tracking-[0.3em] text-white/50">Presencial / EAD</p>
                            <p className="mt-2 font-display uppercase text-white text-lg">Turmas Ativas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hazard-stripes-thin h-2 w-full" />
        </section>
    );
}
