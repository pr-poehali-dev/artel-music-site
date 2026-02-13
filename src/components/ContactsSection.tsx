import Icon from "@/components/ui/icon";

const contacts = [
  {
    icon: "MapPin" as const,
    label: "Адрес",
    value: "г. Москва, ул. Примерная, 42",
    href: "https://maps.yandex.ru",
  },
  {
    icon: "Phone" as const,
    label: "Телефон",
    value: "+7 (495) 123-45-67",
    href: "tel:+74951234567",
  },
  {
    icon: "Mail" as const,
    label: "Почта",
    value: "info@artel.club",
    href: "mailto:info@artel.club",
  },
  {
    icon: "Clock" as const,
    label: "Режим работы",
    value: "Пн–Чт 18:00–02:00 / Пт–Сб 18:00–05:00",
    href: undefined,
  },
];

const socials = [
  { icon: "MessageCircle", label: "VK", href: "https://vk.ru/artelmusicclub" },
  { icon: "Send", label: "Telegram", href: "#" },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-body">
            Как нас найти
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-wider">
            Контакты
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            {contacts.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Мы в соцсетях
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Icon name={s.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-sm overflow-hidden min-h-[300px] flex items-center justify-center">
            <div className="text-center p-8">
              <Icon name="Map" size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-sm">
                Карта будет подключена отдельно
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
