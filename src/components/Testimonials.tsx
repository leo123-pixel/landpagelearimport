import { Star } from "lucide-react";

const testimonials = [
  { name: "Lucas M.", text: "Produto de altíssima qualidade, entrega super rápida. Recomendo demais!" },
  { name: "Fernanda S.", text: "Melhor custo-benefício que encontrei no Brasil. Atendimento excelente pelo WhatsApp." },
  { name: "Ricardo P.", text: "Já fiz 3 pedidos e todos chegaram perfeitos. Confiança total na LEAR." },
];

const Testimonials = () => (
  <section id="depoimentos" className="py-20 sm:py-28">
    <div className="container">
      <h2 className="text-3xl sm:text-4xl font-black text-center mb-14">
        O Que Nossos Clientes <span className="gradient-text">Dizem</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {testimonials.map((t) => (
          <article key={t.name} className="bg-card rounded-xl p-6 border border-border card-hover">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-muted-foreground">Comprador verificado</p>
          </article>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground">
        ⭐ +300 vendas realizadas com avaliações 5 estrelas na Shopee
      </p>
    </div>
  </section>
);

export default Testimonials;
