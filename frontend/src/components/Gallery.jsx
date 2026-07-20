import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "../data";

export default function Gallery() {
    const ref = useRef(null);
    const trackRef = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [i, setI] = useState(0);

    const scrollBy = (dir) => {
        if (!trackRef.current) return;
        const w = trackRef.current.clientWidth * 0.7;
        trackRef.current.scrollBy({ left: dir * w, behavior: "smooth" });
        setI((prev) => Math.max(0, Math.min(GALLERY.length - 1, prev + dir)));
    };

    return (
        <section ref={ref} className="relative bg-white py-24 lg:py-32" data-testid="gallery-section">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-10 flex items-end justify-between flex-wrap gap-6">
                <div>
                    <p className="section-label mb-4"><span>Galeria — Campo</span></p>
                    <h2 className="font-display uppercase leading-[0.9] tracking-[-0.02em]" style={{ fontSize: "clamp(40px, 6vw, 84px)" }}>
                        Material <span className="text-[#F4C400]">Fotográfico</span>
                    </h2>
                    <p className="mt-3 text-[#3A3A3A] max-w-xl">Registros reais de treinamentos, consultorias e auditorias em campo.</p>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => scrollBy(-1)} data-testid="gallery-prev" aria-label="Anterior" className="w-12 h-12 border border-[#111]/15 flex items-center justify-center hover:bg-[#F4C400] hover:border-[#F4C400] transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={() => scrollBy(1)} data-testid="gallery-next" aria-label="Próximo" className="w-12 h-12 border border-[#111]/15 flex items-center justify-center hover:bg-[#F4C400] hover:border-[#F4C400] transition-colors">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                ref={trackRef}
                className="flex gap-4 lg:gap-6 overflow-x-auto pb-6 pl-6 lg:pl-12 pr-6 lg:pr-12 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none" }}
            >
                {GALLERY.map((src, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.05 }}
                        className="relative shrink-0 snap-start overflow-hidden"
                        style={{ width: "clamp(280px, 60vw, 720px)", aspectRatio: "4/3" }}
                    >
                        <img src={src} alt={`Galeria ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                        <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] bg-black/70 text-white px-3 py-1.5 uppercase">
                            {String(idx + 1).padStart(2, "0")} / {String(GALLERY.length).padStart(2, "0")}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
