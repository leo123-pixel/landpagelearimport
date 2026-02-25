import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Produtos", href: "#produtos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start leading-none">
          <span className="text-2xl font-black tracking-[0.15em]">LEAR</span>
          <span className="flex w-full h-[3px] mt-0.5">
            <span className="flex-1 bg-primary" />
            <span className="flex-1 bg-accent" />
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
href="https://wa.me/595986110216"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-bold text-sm hover:brightness-110 transition"
        >
          Comprar Agora
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 pt-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/595986110216"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-bold text-sm"
          >
            Comprar Agora
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
