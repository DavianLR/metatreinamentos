import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: false,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        const rafId = requestAnimationFrame(raf);

        // anchor smooth scroll
        const handler = (e) => {
            const link = e.target.closest("a[href^='#']");
            if (!link) return;
            const id = link.getAttribute("href");
            if (id && id.length > 1) {
                const el = document.querySelector(id);
                if (el) {
                    e.preventDefault();
                    lenis.scrollTo(el, { offset: -60 });
                }
            }
        };
        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);
    return null;
}
