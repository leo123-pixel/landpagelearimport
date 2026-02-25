const CTASection = () => (
  <section id="contato" className="py-20 sm:py-28 relative overflow-hidden">
    {/* Glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[160px]" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-primary/8 rounded-full blur-[160px]" />
    </div>

    <div className="container relative z-10 text-center max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-black mb-4">
        Pronto para <span className="gradient-text">Elevar Seus Resultados?</span>
      </h2>
      <p className="text-muted-foreground mb-10">
        Entre em contato pelo WhatsApp ou acesse nossa loja agora.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#produtos"
          className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-bold text-base hover:brightness-110 transition w-full sm:w-auto"
        >
          Comprar na Loja
        </a>
        <a
          href="https://wa.me/595986110216"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-lg border-2 border-primary text-primary font-bold text-base hover:bg-primary/10 transition w-full sm:w-auto"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
