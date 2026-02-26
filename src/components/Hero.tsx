const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Molecular grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
          Peptídeos e Água Bacteriostática de{" "}
          <span className="gradient-text">Alta Pureza</span>{" "}
          no Brasil
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Qualidade importada, entrega rápida e discreta em todo o Brasil.
          Mais de 300 pedidos entregues com excelência.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#produtos"
            className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-bold text-base hover:brightness-110 transition w-full sm:w-auto"
          >
            Ver Produtos
          </a>
          <a
            href="https://wa.me/595986110216"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg border-2 border-primary text-primary font-bold text-base hover:bg-primary/10 transition w-full sm:w-auto"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
