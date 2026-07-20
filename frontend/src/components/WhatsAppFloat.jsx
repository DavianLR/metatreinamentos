import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "../data";

export default function WhatsAppFloat() {
    return (
        <motion.a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            data-testid="whatsapp-float"
            aria-label="Falar no WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.08 }}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_-6px_rgba(37,211,102,0.7)]"
        >
            <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" />
            <MessageCircle size={26} strokeWidth={2} className="relative z-10" />
        </motion.a>
    );
}
