import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/f51cc6b9-abb1-41ae-b52b-36acf64235d8.jpg)`,
          transform: `translateY(${offset}px) scale(1.1)`,
        }}
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/5" />

      <div className="relative z-10 text-center px-4 animate-fade-in max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Стерлитамак
          </span>
        </div>

        <h1 className="font-heading text-7xl sm:text-8xl md:text-[10rem] font-bold uppercase leading-[0.85] tracking-wider mb-6">
          <span className="text-gradient">Артель</span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-light">
            Music Club
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <p className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto font-light leading-relaxed mb-12">
          Живая музыка, авторская кухня и атмосфера,
          <br className="hidden sm:block" />
          в которую хочется возвращаться
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#afisha"
            className="group bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-primary/90 transition-all rounded-sm hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2"
          >
            <Icon name="Music" size={16} />
            Афиша
          </a>
          <a
            href="#booking"
            className="group border border-foreground/20 text-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] hover:bg-foreground/5 hover:border-foreground/40 transition-all rounded-sm flex items-center justify-center gap-2"
          >
            Забронировать
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
