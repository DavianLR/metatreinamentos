import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HardHat, Stethoscope, FileText, ClipboardList, ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data";

const ICONS = [HardHat, Stethoscope, FileText, ClipboardList];

export default function Services() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="servicos" className="relative bg-white py-24 lg:py-32" data-testid="services-section">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
                    <div>
                        <p className="section-label mb-6">
                            <span>Consultoria Técnica</span>
                        </p>
                        <h2 className="font-display uppercase leading-[0.9] tracking-[-0.02em] text-[#111]" style={{ fontSize: "clamp(48px, 8vw, 120px)" }}>
                            Nossos<br />
                            <span className="relative inline-block">
                                Serviços
                                <span className="absolute -bottom-4 left-0 h-2 w-2/3 bg-[#F4C400]" />
                            </span>
                        </h2>
                    </div>
                    <p className="max-w-md text-[#3A3A3A] leading-relaxed">
                        Elaboração completa de <strong>programas técnicos e laudos</strong> em conformidade com as Normas Regulamentadoras e exigências do eSocial.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
                    {/* Left image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                        className="lg:col-span-5 relative aspect-[3/4] overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80"
                            alt="Consultora técnica com tablet"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute top-4 left-4 flex flex-col gap-1">
                            <span className="font-mono text-[10px] tracking-[0.3em] bg-[#F4C400] text-[#111] px-2 py-1">FIELD 001</span>
                            <span className="font-mono text-[10px] tracking-[0.3em] bg-white/90 text-[#111] px-2 py-1">AUDIT</span>
                        </div>
                        <div className="absolute bottom-4 right-4 h-16 w-16 border-2 border-[#F4C400] flex items-center justify-center">
                            <span className="font-display text-white text-3xl">04</span>
                        </div>
                    </motion.div>

                    {/* Right cards */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:gap-6">
                        {SERVICES.map((s, i) => {
                            const Icon = ICONS[i];
                            return (
                                <motion.div
                                    key={s.code}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.7, delay: 0.1 * i }}
                                    className="srv-card relative bg-white border border-[#111]/10 p-8 lg:p-10 min-h-[280px] flex flex-col"
                                    data-testid={`service-card-${i}`}
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 border border-[#111]/15 flex items-center justify-center text-[#F4C400]">
                                            <Icon size={26} strokeWidth={1.8} />
                                        </div>
                                        <ArrowUpRight size={18} className="text-[#111]/40 group-hover:text-[#F4C400]" />
                                    </div>
                                    <p className="font-mono text-[10px] tracking-[0.3em] text-[#3A3A3A] mb-2">
                                        SERV — 0{i + 1}
                                    </p>
                                    <h3 className="font-display uppercase text-2xl lg:text-3xl text-[#111] leading-tight tracking-tight">
                                        {s.code}
                                    </h3>
                                    <p className="mt-1 font-display uppercase text-[#F4C400] text-sm tracking-[0.1em]">
                                        {s.title}
                                    </p>
                                    <p className="mt-4 text-[#3A3A3A] text-sm leading-relaxed">{s.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
