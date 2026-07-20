import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TRAININGS, waLink } from "../data";
import Marquee from "react-fast-marquee";

export default function Trainings() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const bgRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: bgRef, offset: ["start end", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <section id="treinamentos" ref={ref} className="relative bg-[#111] text-white" data-testid="trainings-section">
            {/* Hero band with parallax */}
            <div ref={bgRef} className="relative h-[70vh] min-h-[560px] overflow-hidden">
                <motion.div style={{ y: bgY }} className="absolute inset-[-10%]">
                    <img
                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2400&q=80"
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/70" />
                <div className="absolute inset-0 grain" />
                <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
                    <p className="section-label mb-6"><span>Catálogo Completo</span></p>
                    <h2 className="font-display uppercase leading-[0.88] tracking-[-0.03em] font-bold" style={{ fontSize: "clamp(64px, 15vw, 240px)" }}>
                        Treina<span className="text-[#F4C400]">mentos.</span>
                    </h2>
                    <p className="mt-6 max-w-xl text-white/70 text-base md:text-lg italic">
                        &ldquo;A nossa META é fornecer instruções para o seu progresso profissional.&rdquo;
                    </p>
                </div>

                {/* Editorial marquee */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-sm py-4 z-10">
                    <Marquee speed={40} gradient={false} className="overflow-hidden">
                        {["NR 05", "NR 06", "NR 10", "NR 11", "NR 12", "NR 17", "NR 20", "NR 31", "NR 33", "NR 34", "NR 35", "CIPA", "EPI", "PGR", "PCMSO"].map((t, i) => (
                            <span key={i} className="font-display uppercase tracking-[0.08em] text-3xl md:text-4xl mx-8 flex items-center gap-8">
                                {t}
                                <span className="w-2 h-2 bg-[#F4C400]" />
                            </span>
                        ))}
                    </Marquee>
                </div>
            </div>

            {/* Grid of cards */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
                <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F4C400]">Grid — {TRAININGS.length} cursos</p>
                        <h3 className="mt-3 font-display uppercase text-3xl md:text-4xl">Cursos & Certificações</h3>
                    </div>
                    <a href={waLink("Olá! Gostaria de saber mais sobre os treinamentos.")} target="_blank" rel="noreferrer" className="btn-yellow" data-testid="trainings-cta">
                        Consultar Turmas <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                    {TRAININGS.map((t, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: (i % 10) * 0.05 }}
                            className="tr-card group flex flex-col"
                            data-testid={`training-card-${i}`}
                        >
                            <div className="nr-card">
                                <img src={t.img} alt={t.title} className="tr-card-img absolute inset-0 w-full h-full object-cover opacity-70" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/85" />
                                <div className="nr-card-meta">META · SST</div>
                                <div className="nr-card-big">{t.code}</div>
                                <div className="nr-card-title">{t.title}</div>
                            </div>
                            <a
                                href={waLink(`Olá! Quero saber mais sobre o treinamento ${t.code} — ${t.title}.`)}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-green mt-3 justify-center"
                            >
                                Saber Mais <ArrowRight size={14} />
                            </a>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
