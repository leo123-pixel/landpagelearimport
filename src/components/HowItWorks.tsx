import { ShoppingCart, Package, MessageCircle } from "lucide-react";

const steps = [
  { icon: ShoppingCart, title: "Escolha seu produto", description: "Navegue pelo nosso catálogo e selecione o peptídeo ideal." },
  { icon: Package, title: "Receba em casa de forma discreta", description: "Enviamos com embalagem segura para todo o Brasil." },
  { icon: MessageCircle, title: "Conte com nosso suporte completo", description: "Tire dúvidas e acompanhe seu pedido via WhatsApp." },
];

const HowItWorks = () => (
  <section id="como-funciona" className="py-20 sm:py-28 bg-secondary/30">
    <div className="container">
      <h2 className="text-3xl sm:text-4xl font-black text-center mb-14">
        Como <span className="gradient-text">Funciona</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={s.title} className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 relative">
              <s.icon size={28} className="text-primary" />
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
