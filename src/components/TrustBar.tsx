import { ShieldCheck, Zap, Package, DollarSign, MessageCircle } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Mais de 300 Vendas Realizadas" },
  { icon: Zap, text: "Produtos de Alta Pureza" },
  { icon: Package, text: "Entrega Rápida e Discreta" },
  { icon: DollarSign, text: "Preço Competitivo" },
  { icon: MessageCircle, text: "Suporte via WhatsApp" },
];

const TrustBar = () => (
  <section className="py-8 border-y border-border bg-secondary/50">
    <div className="container">
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <item.icon size={18} className="text-accent shrink-0" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
