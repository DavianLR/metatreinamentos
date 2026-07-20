// Central data for META Treinamentos website
export const CONTACT = {
    whatsapp: "556592991608", // +55 65 9299-1608
    phoneDisplay: "+55 65 9299-1608",
    phoneAlt: "+55 65 2101-2092",
    email: "seguranca@metatreinamentos.com",
    address: "Nova Mutum / MT — Av. das Itaúbas 571, Nova Mutum, MT — CEP 78450-000",
    social: {
        instagram: "https://instagram.com/metatreinamentos",
        facebook: "https://facebook.com/metatreinamentos",
        linkedin: "https://linkedin.com/company/metatreinamentos",
    }
};

export const waLink = (message = "Olá! Gostaria de solicitar um orçamento com a META Treinamentos.") =>
    `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const NAV = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Treinamentos", href: "#treinamentos" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contato", href: "#contato" },
];

// High-quality Unsplash imagery (industrial / safety / construction)
export const HERO_SLIDES = [
    {
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80",
        eyebrow: "01 — Programas Técnicos",
        title: ["ELABORAÇÃO DE", "PROGRAMAS", "TÉCNICOS."],
        sub: "GRO · PGR · PCMSO · LTCAT · PPP. Documentação técnica em conformidade com as Normas Regulamentadoras.",
    },
    {
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80",
        eyebrow: "02 — Segurança do Trabalho",
        title: ["REFERÊNCIA EM", "SEGURANÇA", "DO TRABALHO."],
        sub: "Consultoria especializada para prevenção de riscos e proteção da vida em campo.",
    },
    {
        img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2400&q=80",
        eyebrow: "03 — Treinamentos NR",
        title: ["TREINAMENTOS", "QUE FORMAM", "PROFISSIONAIS."],
        sub: "Instrutores capacitados. Turmas presenciais e EAD. Certificação nacionalmente reconhecida.",
    },
];

export const NUMBERS = [
    { value: 350, suffix: "+", label: "Projetos Entregues", note: "Consultorias legais e implantação de programas de gestão de riscos." },
    { value: 10, suffix: "+", label: "Anos de Atuação", note: "Vasta experiência acumulada na área da Segurança e Saúde do Trabalho." },
    { value: 5000, suffix: "+", label: "Pessoas Certificadas", note: "Treinamentos normativos com excelência técnica e qualificação profissional." },
    { value: 120, suffix: "+", label: "Empresas Atendidas", note: "Parcerias sólidas em indústria, agro, construção civil e comércio." },
];

export const SERVICES = [
    { code: "GRO / PGR", title: "Gerenciamento de Riscos", desc: "Programa de Gerenciamento de Riscos Ocupacionais em conformidade com a NR-01." },
    { code: "PCMSO", title: "Saúde Ocupacional", desc: "Programa de Controle Médico de Saúde Ocupacional integrado ao PGR." },
    { code: "LTCAT", title: "Laudo Técnico", desc: "Laudo Técnico das Condições Ambientais de Trabalho para aposentadoria especial." },
    { code: "PPP", title: "Perfil Profissiográfico", desc: "Perfil Profissiográfico Previdenciário para envio ao eSocial." },
];

const NR_IMG = {
    n5: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
    n6: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80",
    n10: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
    n10s: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=900&q=80",
    n11: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80",
    n11a: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
    n12: "https://images.unsplash.com/photo-1565715101841-3fa72c6adbaa?auto=format&fit=crop&w=900&q=80",
    n12b: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80",
    n12c: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    n12d: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80",
    n17: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    n20: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=900&q=80",
    n31: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80",
    n3112: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    n33: "https://images.unsplash.com/photo-1649320316177-775fe2d67ca3?auto=format&fit=crop&w=900&q=80",
    n33s: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
    n34: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80",
    n35: "https://images.unsplash.com/photo-1649320316177-775fe2d67ca3?auto=format&fit=crop&w=900&q=80",
    integ: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    pemt: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
};

export const TRAININGS = [
    { code: "NR 05", title: "CIPA — Comissão Interna de Prevenção de Acidentes", img: NR_IMG.n5 },
    { code: "NR 06", title: "EPI — Equipamento de Proteção Individual", img: NR_IMG.n6 },
    { code: "NR 10", title: "Segurança em Serviços com Eletricidade — Básico", img: NR_IMG.n10 },
    { code: "NR 10", title: "SEP — Sistema Elétrico de Potência", img: NR_IMG.n10s },
    { code: "NR 11", title: "Operador de Máquinas Agrícolas e Equipamentos", img: NR_IMG.n11 },
    { code: "NR 11", title: "Operador de Empilhadeira", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80" },
    { code: "NR 12", title: "Segurança em Máquinas e Equipamentos", img: NR_IMG.n12 },
    { code: "NR 12", title: "Ferramentas Elétricas Manuais", img: NR_IMG.n12b },
    { code: "NR 12", title: "Motosserra", img: NR_IMG.n12c },
    { code: "NR 12", title: "Roçadeira", img: NR_IMG.n12d },
    { code: "INTEG.", title: "Integração de Segurança na Construção Civil", img: NR_IMG.integ },
    { code: "PEMT", title: "Plataforma Elevatória Móvel de Trabalho", img: NR_IMG.pemt },
    { code: "NR 17", title: "Ergonomia no Ambiente de Trabalho", img: NR_IMG.n17 },
    { code: "NR 20", title: "Segurança com Líquidos e Inflamáveis", img: NR_IMG.n20 },
    { code: "NR 31", title: "Segurança e Saúde no Trabalho na Agricultura", img: NR_IMG.n31 },
    { code: "NR 31.12", title: "Máquinas e Implementos Agrícolas", img: NR_IMG.n3112 },
    { code: "NR 33", title: "Espaço Confinado — Trabalhador", img: NR_IMG.n33 },
    { code: "NR 33", title: "Espaço Confinado — Supervisor", img: NR_IMG.n33s },
    { code: "NR 34", title: "Trabalho a Quente", img: NR_IMG.n34 },
    { code: "NR 35", title: "Trabalho em Altura", img: NR_IMG.n35 },
];

export const GALLERY = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1649320316177-775fe2d67ca3?auto=format&fit=crop&w=1400&q=80",
];

export const PARTNERS = [
    { name: "AMAGGI", logo: "/logos/amaggi.webp" },
    { name: "Syngenta", logo: "/logos/syngenta.png" },
    { name: "Cargill", logo: "/logos/cargill.png" },
    { name: "Bunge", logo: "/logos/bunge.png" },
    { name: "FVB — Faculdade Vilas Boas", logo: "/logos/fvb.png" },
];

export const CHAPTERS = [
    {
        n: "01",
        label: "MISSÃO",
        title: "Proteger vidas com rigor técnico.",
        body: "Contribuir para o desenvolvimento e capacitação dos nossos clientes, agregando valores, conhecimento e boas práticas na execução dos seus negócios.",
    },
    {
        n: "02",
        label: "VISÃO",
        title: "Referência nacional em SST.",
        body: "Ser reconhecida como a principal consultoria em Segurança do Trabalho, sustentada por excelência técnica, ética e compromisso com a vida.",
    },
    {
        n: "03",
        label: "VALORES",
        title: "Compromisso com a vida.",
        body: "Ética, rigor técnico, transparência, respeito às pessoas, responsabilidade social e melhoria contínua em cada projeto entregue.",
    },
];
