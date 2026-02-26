import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { items, setDrawerOpen } = useCart();

  const links = [
    { label: "Produtos", href: "#produtos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container flex items-center justify-between h-16" aria-label="Navegação principal">
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

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#produtos"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-bold text-sm hover:brightness-110 transition"
          >
            Comprar Agora
          </a>
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir carrinho"
            className="relative p-2.5 rounded-lg border border-border hover:bg-muted transition"
          >
            <ShoppingCart size={20} />
            {items.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                {items.length}
              </span>
            )}
          </button>
        </div>

        {/* Mobile right actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir carrinho"
            className="relative p-2 rounded-lg hover:bg-muted transition"
          >
            <ShoppingCart size={22} />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                {items.length}
              </span>
            )}
          </button>
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
            href="#produtos"
            onClick={() => setOpen(false)}
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
