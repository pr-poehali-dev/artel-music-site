import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Афиша", href: "#afisha" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="font-heading text-2xl font-bold tracking-wider uppercase text-gradient">
          Артель
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-primary text-primary-foreground px-5 py-2 text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors rounded-sm"
          >
            Бронь
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-primary text-primary-foreground px-5 py-3 text-sm font-medium uppercase tracking-widest text-center rounded-sm"
              onClick={() => setMenuOpen(false)}
            >
              Забронировать
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
