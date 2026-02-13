import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "О клубе", href: "#about" },
  { label: "Афиша", href: "#afisha" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-primary overflow-hidden h-8 flex items-center">
        <div className="animate-marquee whitespace-nowrap flex gap-16 text-primary-foreground/90 text-[11px] tracking-[0.2em] uppercase font-medium">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-16 items-center">
              <span>Живая музыка каждые Пт и Сб</span>
              <span className="text-primary-foreground/30">|</span>
              <span>+7 (3473) 30-30-11</span>
              <span className="text-primary-foreground/30">|</span>
              <span>Стерлитамак, Сакко и Ванцетти, 26</span>
              <span className="text-primary-foreground/30">|</span>
              <span>Квизы · Концерты · Вечеринки</span>
            </div>
          ))}
        </div>
      </div>

      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/40"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="font-heading text-2xl font-bold tracking-[0.15em] uppercase text-gradient">
              Артель
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-l border-border pl-3 leading-tight">
              Music<br />Club
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em] py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-primary text-primary-foreground px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-primary/90 transition-all rounded-sm hover:shadow-lg hover:shadow-primary/20"
            >
              Забронировать
            </a>
          </nav>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors uppercase tracking-[0.15em] py-3 px-3 rounded-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                className="bg-primary text-primary-foreground px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-center rounded-sm mt-3"
                onClick={() => setMenuOpen(false)}
              >
                Забронировать столик
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
