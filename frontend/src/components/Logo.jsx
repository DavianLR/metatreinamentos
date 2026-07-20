import { motion } from "framer-motion";

export const Logo = ({ className = "", light = false }) => {
    const color = light ? "#FFFFFF" : "#111111";
    return (
        <div className={`inline-flex items-baseline gap-2 ${className}`} data-testid="brand-logo">
            <div className="relative">
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                    className="font-display font-bold leading-none"
                    style={{ color, fontSize: "34px", letterSpacing: "-0.04em" }}
                >
                    META
                </motion.span>
                <span
                    className="absolute -top-2 -right-3 block"
                    style={{ width: 10, height: 10, background: "#F4C400" }}
                />
            </div>
            <span
                className="hidden sm:block font-mono uppercase"
                style={{ color, fontSize: "9px", letterSpacing: "0.25em", opacity: 0.75 }}
            >
                Treinamentos<br />Segurança & Consultoria
            </span>
        </div>
    );
};
