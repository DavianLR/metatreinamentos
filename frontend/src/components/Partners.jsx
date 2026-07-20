import Marquee from "react-fast-marquee";
import { PARTNERS } from "../data";

export default function Partners() {
    return (
        <section id="clientes" className="relative bg-white py-20 lg:py-24 border-y border-[#111]/10" data-testid="partners-section">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-10 text-center">
                <p className="section-label justify-center mb-4"><span>Confiança & Parceria</span></p>
                <h2 className="font-display uppercase leading-[0.9] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 4vw, 56px)" }}>
                    Empresas que confiam em <span className="text-[#F4C400]">nossos serviços</span>
                </h2>
            </div>
            <Marquee speed={50} gradient={true} gradientColor="rgb(255,255,255)" gradientWidth={80} pauseOnHover>
                {PARTNERS.map((p, i) => (
                    <div key={i} className="mx-10 lg:mx-14 flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-[#F4C400]" />
                        <span
                            className="font-display uppercase tracking-[0.15em] text-2xl md:text-3xl text-[#3A3A3A]/60 grayscale group-hover:grayscale-0 group-hover:text-[#111] transition-colors"
                        >
                            {p}
                        </span>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}
