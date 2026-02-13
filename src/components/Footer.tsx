import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="font-heading text-xl font-bold uppercase tracking-[0.15em] text-gradient">
              Артель
            </span>
            <div className="h-4 w-px bg-border" />
            <span className="text-xs text-muted-foreground">Music Club</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="tel:+73473303011" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Icon name="Phone" size={12} />
              +7 (3473) 30-30-11
            </a>
            <a
              href="https://vk.ru/artelmusicclub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Icon name="MessageCircle" size={12} />
              VK
            </a>
          </div>

          <p className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">
            © {new Date().getFullYear()} «Артель»
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
