const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg font-bold uppercase tracking-wider text-gradient">
          Артель
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Музыкальный клуб «Артель». Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
