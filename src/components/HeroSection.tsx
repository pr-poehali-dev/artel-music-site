const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/a7b4c5c6-a990-46c5-9b86-5280f4befa18.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-body">
          Музыкальный клуб
        </p>
        <h1 className="font-heading text-7xl md:text-9xl font-bold uppercase tracking-wider text-gradient mb-6">
          Артель
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto font-light mb-10">
          Живой звук, атмосфера и душа. Место, где музыка объединяет.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#afisha"
            className="bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-all rounded-sm"
          >
            Афиша
          </a>
          <a
            href="#booking"
            className="border border-foreground/20 text-foreground px-8 py-3.5 text-sm font-medium uppercase tracking-widest hover:bg-foreground/5 transition-all rounded-sm"
          >
            Забронировать столик
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground/50" />
      </div>
    </section>
  );
};

export default HeroSection;
