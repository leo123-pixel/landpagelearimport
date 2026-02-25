import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/595986110216"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contato WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppFloat;
