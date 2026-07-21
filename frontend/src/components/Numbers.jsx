import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { NUMBERS } from "../data";
import { HardHat, Award, Users, Building2 } from "lucide-react";

const ICONS = [Award, HardHat, Users, Building2];

function Counter({ target, suffix, active }) {
    const [n, setN] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start = 0;
        const duration = 1600;
        const t0 = performance.now();
        let raf;
        const step = (now) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * target));
            if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [active, target]);
    return (
        <span>
            {n.toLocaleString("pt-BR")}
            <span className="text-[#F4C400]">{suffix}</span>
        </span>
    );
}

export default function Numbers() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative bg-white py-24 lg:py-32" data-testid="numbers-section">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                {/* Top heading + image row */}
                <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
                    <div className="lg:col-span-7">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="section-label mb-6"
                        >
                            <span>Excelência técnica</span>
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                            className="font-display uppercase leading-[0.92] tracking-[-0.02em] text-[#111]"
                            style={{ fontSize: "clamp(40px, 6vw, 92px)" }}
                        >
                            Referência em <span className="text-[#F4C400]">Segurança</span><br />
                            e Saúde no Trabalho.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-6 max-w-xl text-[#3A3A3A] text-base md:text-lg leading-relaxed"
                        >
                            Consultoria especializada e treinamentos normativos para prevenção de riscos e conformidade das Normas Regulamentadoras nas mais diversas frentes industriais.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
                        className="lg:col-span-5 relative aspect-[4/5] overflow-hidden"
                    >
                        <img
                            src="/Imagens/nr 34.jpeg"
                            alt="Profissional de Solda"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 border border-[#111]/5" />
                    </motion.div>
                </div>

                {/* Divider label */}
                <div className="flex items-center gap-6 mb-12">
                    <div className="h-[2px] flex-1 bg-[#111]" />
                    <p className="font-display uppercase text-[#111] tracking-[0.1em] text-2xl md:text-3xl">
                        Nossos <span className="text-[#F4C400]">Números</span>
                    </p>
                    <div className="h-[2px] flex-1 bg-[#111]" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#111]/10">
                    {NUMBERS.map((item, i) => {
                        const Icon = ICONS[i];
                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.15 * i }}
                                className="bg-white p-6 lg:p-10 group"
                                data-testid={`counter-${i}`}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <Icon size={28} strokeWidth={1.5} className="text-[#111] group-hover:text-[#F4C400] transition-colors" />
                                </div>
                                <div className="font-display leading-none text-[#111] mb-3" style={{ fontSize: "clamp(48px, 6vw, 84px)" }}>
                                    <Counter target={item.value} suffix={item.suffix} active={inView} />
                                </div>
                                <p className="font-display uppercase tracking-tight text-lg md:text-xl text-[#111]">{item.label}</p>
                                <p className="mt-2 text-sm text-[#3A3A3A] leading-relaxed">{item.note}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
