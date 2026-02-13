import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Music",
    title: "Живой звук",
    desc: "Концерты, джемы и акустические вечера каждую неделю",
  },
  {
    icon: "UtensilsCrossed",
    title: "Авторская кухня",
    desc: "Европейская кухня с авторскими блюдами от шефа",
  },
  {
    icon: "Brain",
    title: "Квизы и игры",
    desc: "Интеллектуальные баттлы и тематические вечера",
  },
  {
    icon: "Wine",
    title: "Крафтовый бар",
    desc: "Авторские коктейли, крафтовое пиво и обширная винная карта",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">
              О клубе
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 leading-tight">
              Больше, чем <br />
              <span className="text-gradient">просто бар</span>
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-4 text-lg font-light">
              «Артель» — музыкальный клуб в самом сердце Стерлитамака.
              Мы создали место, где сливаются живой звук, вкусная еда
              и настоящие эмоции.
            </p>
            <p className="text-foreground/50 leading-relaxed mb-8">
              Каждую пятницу и субботу — живые выступления. Кавер-бэнды,
              авторские проекты, джаз-вечера и рок-концерты. А по будням —
              квизы, акустика и уютная атмосфера для тёплых встреч.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#booking"
                className="bg-primary text-primary-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] rounded-sm hover:bg-primary/90 transition-all"
              >
                Забронировать
              </a>
              <a
                href="tel:+73473303011"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="Phone" size={14} />
                +7 (3473) 30-30-11
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`bg-card border border-border rounded-sm p-6 hover:border-primary/30 transition-all duration-300 group ${
                  i % 2 === 1 ? "mt-6" : ""
                }`}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={f.icon} size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-2">
                  {f.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
