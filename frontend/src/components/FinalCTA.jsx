import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "../data";

export default function FinalCTA() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section id="contato" ref={ref} className="relative bg-[#111] text-white overflow-hidden" data-testid="cta-final">
            <div className="hazard-stripes h-6 w-full" />

            {/* Slow marquee word */}
            <motion.div style={{ x }} className="pointer-events-none py-14 border-y border-white/5">
                <div className="whitespace-nowrap font-display uppercase text-white/5 leading-none" style={{ fontSize: "clamp(120px, 22vw, 320px)", letterSpacing: "-0.04em" }}>
                    SEGURANÇA · META · SEGURANÇA · META · SEGURANÇA · META
                </div>
            </motion.div>

            <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-label mb-8"
                >
                    <span>Chamada Final</span>
                </motion.p>
                <h2 className="font-display uppercase leading-[0.9] tracking-[-0.02em] font-bold max-w-6xl" style={{ fontSize: "clamp(48px, 8vw, 128px)" }}>
                    Proteja sua equipe<br />
                    com treinamentos e<br />
                    <span className="text-[#F4C400]">consultorias especializadas.</span>
                </h2>
                <div className="mt-12 flex flex-wrap gap-4 items-center">
                    <a href={waLink()} target="_blank" rel="noreferrer" className="btn-yellow" data-testid="cta-final-primary">
                        <MessageCircle size={18} strokeWidth={2.5} />
                        Solicitar Orçamento
                        <ArrowRight size={18} />
                    </a>
                    <a href="#treinamentos" className="btn-ghost" data-testid="cta-final-secondary">
                        Ver Treinamentos
                    </a>
                </div>
                <div className="mt-14 pt-10 border-t border-white/10 grid sm:grid-cols-3 gap-6 text-sm">
                    <div>
                        <p className="font-mono text-[10px] tracking-[0.3em] text-[#F4C400]">RESPOSTA</p>
                        <p className="mt-2 font-display uppercase text-xl">Em até 24h úteis</p>
                    </div>
                    <div>
                        <p className="font-mono text-[10px] tracking-[0.3em] text-[#F4C400]">ATENDIMENTO</p>
                        <p className="mt-2 font-display uppercase text-xl">Todo território nacional</p>
                    </div>
                    <div>
                        <p className="font-mono text-[10px] tracking-[0.3em] text-[#F4C400]">FORMATO</p>
                        <p className="mt-2 font-display uppercase text-xl">Presencial / EAD / In-Company</p>
                    </div>
                </div>
            </div>
            <div className="hazard-stripes h-6 w-full" />
        </section>
    );
}
