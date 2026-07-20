import Marquee from "react-fast-marquee";
import { PARTNERS } from "../data";

export default function Partners() {
    // Duplicate list for a denser, more editorial marquee
    const items = [...PARTNERS, ...PARTNERS];
    return (
        <section id="clientes" className="relative bg-white py-20 lg:py-24 border-y border-[#111]/10" data-testid="partners-section">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-12 text-center">
                <p className="section-label justify-center mb-4"><span>Confiança & Parceria</span></p>
                <h2 className="font-display uppercase leading-[0.9] tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 4vw, 56px)" }}>
                    Empresas que confiam em <span className="text-[#F4C400]">nossos serviços</span>
                </h2>
            </div>
            <Marquee speed={40} gradient={true} gradientColor="rgb(255,255,255)" gradientWidth={100} pauseOnHover>
                {items.map((p, i) => (
                    <div
                        key={i}
                        className="mx-8 lg:mx-14 flex items-center justify-center h-24 lg:h-28 group"
                        title={p.name}
                    >
                        <img
                            src={p.logo}
                            alt={p.name}
                            loading="lazy"
                            className="max-h-16 lg:max-h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity] duration-500"
                            style={{ maxWidth: 220 }}
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
}
