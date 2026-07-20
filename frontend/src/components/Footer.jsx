import { Instagram, Facebook, Linkedin, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, NAV, waLink } from "../data";
import { Logo } from "./Logo";

const SERVICES_FOOTER = [
    "Programas Técnicos",
    "Consultorias",
    "Treinamentos NR",
    "Laudos Técnicos",
    "PGR / GRO",
    "PCMSO",
    "LTCAT",
    "PPP",
];

export default function Footer() {
    return (
        <footer className="relative bg-[#0b0b0b] text-white" data-testid="site-footer">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Column 1 */}
                <div>
                    <Logo light />
                    <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-xs">
                        Consultoria técnica e treinamentos em Segurança do Trabalho. Rigor técnico. Compromisso com a vida.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                        <a href={CONTACT.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-[#F4C400] hover:border-[#F4C400] hover:text-[#111] transition-colors">
                            <Instagram size={16} />
                        </a>
                        <a href={CONTACT.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-[#F4C400] hover:border-[#F4C400] hover:text-[#111] transition-colors">
                            <Facebook size={16} />
                        </a>
                        <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-[#F4C400] hover:border-[#F4C400] hover:text-[#111] transition-colors">
                            <MessageCircle size={16} />
                        </a>
                        <a href={CONTACT.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-[#F4C400] hover:border-[#F4C400] hover:text-[#111] transition-colors">
                            <Linkedin size={16} />
                        </a>
                    </div>
                </div>

                {/* Column 2 */}
                <div>
                    <p className="font-display uppercase tracking-[0.15em] text-sm text-[#F4C400] mb-6">Contato</p>
                    <ul className="space-y-4 text-sm text-white/75">
                        <li className="flex gap-3">
                            <MapPin size={16} className="shrink-0 text-[#F4C400] mt-0.5" />
                            <span>{CONTACT.address}</span>
                        </li>
                        <li className="flex gap-3">
                            <Phone size={16} className="shrink-0 text-[#F4C400] mt-0.5" />
                            <span>
                                {CONTACT.phoneDisplay}<br />
                                {CONTACT.phoneAlt}
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Mail size={16} className="shrink-0 text-[#F4C400] mt-0.5" />
                            <a href={`mailto:${CONTACT.email}`} className="hover:text-[#F4C400] transition-colors">{CONTACT.email}</a>
                        </li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <p className="font-display uppercase tracking-[0.15em] text-sm text-[#F4C400] mb-6">Links Rápidos</p>
                    <ul className="space-y-3 text-sm">
                        {NAV.map((n) => (
                            <li key={n.label}>
                                <a href={n.href} className="text-white/75 hover:text-[#F4C400] transition-colors nav-link">
                                    {n.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <p className="font-display uppercase tracking-[0.15em] text-sm text-[#F4C400] mb-6">Serviços</p>
                    <ul className="space-y-3 text-sm text-white/75">
                        {SERVICES_FOOTER.map((s) => (
                            <li key={s} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#F4C400]" /> {s}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom band */}
            <div className="hazard-stripes-thin h-1 w-full" />
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40 font-mono uppercase tracking-[0.2em]">
                <span>© 2026 META Treinamentos, Segurança e Consultoria</span>
                <span>Todos os direitos reservados</span>
            </div>
        </footer>
    );
}
