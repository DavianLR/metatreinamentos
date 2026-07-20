import { motion } from "framer-motion";

export const Logo = ({ className = "", light = false }) => {
    return (
        <motion.div
            className={`inline-flex items-center ${className}`}
            data-testid="brand-logo"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
            <img
                src={light ? "/logos/meta-logo.png" : "/logos/meta-logo-dark.png"}
                alt="META Treinamentos, Segurança e Consultoria"
                className="h-9 md:h-11 w-auto select-none"
                draggable="false"
            />
        </motion.div>
    );
};
