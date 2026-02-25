import { Droplets, HeartPulse, Dumbbell, Scale, Sparkles } from "lucide-react";

const products = [
  {
    name: "Água Bacteriostática",
    description: "Essencial para diluição segura de peptídeos",
    icon: Droplets,
  },
  {
    name: "BPC-157",
    description: "Suporte à recuperação e cicatrização",
    icon: HeartPulse,
  },
  {
    name: "TB-500",
    description: "Performance e regeneração muscular",
    icon: Dumbbell,
  },
  {
    name: "Semaglutida / Tirzepatida",
    description: "Controle de peso e bem-estar metabólico",
    icon: Scale,
  },
  {
    name: "HGH Fragment / Ipamorelin",
    description: "Estímulo natural ao GH e anti-aging",
    icon: Sparkles,
  },
];

const Products = () => (
  <section id="produtos" className="py-20 sm:py-28">
    <div className="container">
      <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
        Nossos <span className="gradient-text">Produtos</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <article
            key={p.name}
            className="bg-card rounded-xl p-6 border-gradient card-hover flex flex-col"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <p.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{p.name}</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1">{p.description}</p>
            <a
              href="https://wa.me/595986110216"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition"
            >
              Saiba Mais
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
