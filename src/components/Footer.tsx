const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        {/* Logo */}
        <div className="flex flex-col items-start leading-none">
          <span className="text-xl font-black tracking-[0.15em]">LEAR</span>
          <span className="flex w-full h-[2px] mt-0.5">
            <span className="flex-1 bg-primary" />
            <span className="flex-1 bg-accent" />
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-6">
          {["Produtos", "Depoimentos", "FAQ", "Contato"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>

      <div className="text-center space-y-2">
        <p className="text-xs text-muted-foreground">
          © 2025 LEAR Import Export. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground max-w-xl mx-auto">
          Os produtos são destinados exclusivamente para fins de pesquisa. Consulte sempre um profissional de saúde.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
