import Icon from "@/components/ui/icon";

const contacts = [
  {
    icon: "MapPin",
    label: "Адрес",
    value: "г. Стерлитамак, ул. Сакко и Ванцетти, 26",
    href: "https://yandex.ru/maps/-/CHE6bWMR",
  },
  {
    icon: "Phone",
    label: "Телефон",
    value: "+7 (3473) 30-30-11",
    href: "tel:+73473303011",
  },
  {
    icon: "Clock",
    label: "Режим работы",
    value: "Пн–Чт: 12:00–00:00\nПт–Сб: 12:00–02:00\nВс: 12:00–00:00",
    href: undefined,
  },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-28 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 font-medium">
            Мы на связи
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
            Контакты
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8">
            {contacts.map((item) => (
              <div key={item.label} className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon name={item.icon} size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5 font-medium">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground text-sm whitespace-pre-line leading-relaxed">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
                Мы в соцсетях
              </p>
              <div className="flex gap-3">
                <a
                  href="https://vk.ru/artelmusicclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-secondary hover:bg-primary/20 px-4 py-2.5 rounded-sm transition-colors group"
                >
                  <Icon name="MessageCircle" size={16} className="group-hover:text-primary transition-colors" />
                  <span className="text-xs uppercase tracking-wider">VK</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-card border border-border rounded-sm overflow-hidden min-h-[360px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac5ca9e4f6e71c4c8d893d5d3a9d02cd14e4a6d2a9e7b7a4e1c7c8b5e9d3f2a1&amp;source=constructor&ll=55.946354%2C53.623665&z=16&pt=55.946354%2C53.623665%2Cpm2rdm"
              width="100%"
              height="100%"
              style={{ minHeight: "360px", border: 0 }}
              title="Артель на карте"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
