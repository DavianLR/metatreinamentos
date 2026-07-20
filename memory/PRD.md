# META Treinamentos, Segurança e Consultoria — PRD

## Original problem statement (resumo)
Website institucional premium para META Treinamentos, Segurança e Consultoria (SST, consultorias e treinamentos NR). Estilo industrial/engenharia. Cores: Branco, Preto #111111, Amarelo Segurança #F4C400, Cinza #3A3A3A. Todos os CTAs redirecionam para WhatsApp. PT-BR, foco em confiança, autoridade e conversão via WhatsApp.

Referência visual: catálogo tipo capa para treinamentos, faixas amarelas/pretas nos CTAs, hero com slider industrial, contadores animados, empresas parceiras em grayscale.

## Escolhas do usuário
- Contato: usuário fornecerá dados reais (placeholders atuais em /app/frontend/src/data.js CONTACT).
- Formulário: apenas WhatsApp (links wa.me com mensagem pré-preenchida).
- Textos institucionais: usuário fornecerá (placeholders padrão do setor aplicados).
- Logos parceiras: usuário enviará (nomes em texto usados por enquanto).
- Sem Google Analytics/Meta Pixel/Google Maps por ora.

## Persona
- Gestores de RH / SST de indústrias, agronegócio e construção civil buscando consultoria e treinamentos NR conformes.

## Arquitetura
- Frontend: React 19 + CRA + TailwindCSS. Bibliotecas: framer-motion (animações), lenis (smooth scroll), react-fast-marquee, lucide-react (ícones).
- Backend: FastAPI + MongoDB — não utilizado nesta fase (site institucional puro; CTAs vão para WhatsApp).
- Fontes: Oswald (display) + IBM Plex Sans (body) + IBM Plex Mono (labels).

## Seções implementadas (2026-12)
1. Header fixo (transparente → branco com sombra ao rolar) + menu mobile animado.
2. Hero cinético com 3 slides auto-advance (6.5s), parallax, revelação line-by-line masked, setas circulares amarelas, indicadores animados.
3. Números: contadores animados com IntersectionObserver (350+, 10+, 5.000+, 120+) + foto em campo.
4. Quem Somos + Manifesto em capítulos numerados (01. Missão, 02. Visão, 03. Valores) com carrossel.
5. Nossos Serviços: 4 cards (GRO/PGR, PCMSO, LTCAT, PPP) com hover elevado + imagem lateral.
6. Treinamentos: hero band com parallax e marquee editorial + grid 5 colunas de 20 cards estilo "capa NR".
7. Galeria carrossel horizontal com snap.
8. Empresas Parceiras (marquee grayscale → cor no hover).
9. CTA Final com marquee gigante e faixas hazard yellow/black.
10. Rodapé preto em 4 colunas (Contato, Links, Serviços, Social).
11. Botão flutuante WhatsApp com ring pulse.

## Motion & polish
- Lenis smooth momentum scroll global.
- framer-motion: staggered line reveals, parallax hero, chapter transitions, counter easing.
- Hazard stripes CSS repeating gradient nas bordas do CTA.
- Grain texture em seções escuras.

## Backlog / Next actions
- [P0] Substituir placeholders de CONTATO (telefone/WhatsApp/e-mail/endereço) em `/app/frontend/src/data.js` — CONTACT.whatsapp precisa do número real (formato 55DDDXXXXXXXX).
- [P1] Fornecer textos institucionais reais (Quem Somos, Missão, Visão, Valores) em `/app/frontend/src/data.js` (CHAPTERS + About.jsx).
- [P1] Substituir logos das empresas parceiras por SVG/PNG reais em `Partners.jsx`.
- [P2] Ativar Google Analytics / Meta Pixel / Google Maps (Contato) quando desejado.
- [P2] Formulário de orçamento com salvamento em MongoDB (fase futura, opcional).
- [P2] Página interna de detalhes por treinamento (rota /treinamentos/[slug]).
- [P2] Adicionar OG image customizada (assets/og-meta.jpg) e favicon META.

## Testes
- Iteração 1 (frontend): PASS — 27 links wa.me, sem erros de console, mobile 390x844 sem scroll horizontal, todos os testids validados.
