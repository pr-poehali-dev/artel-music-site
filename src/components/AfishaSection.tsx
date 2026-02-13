import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Event {
  id: string;
  date: string;
  time: string;
  title: string;
  genre: string;
  description: string;
  price: string;
  image: string;
}

const defaultEvents: Event[] = [
  {
    id: "1",
    date: "15 февраля",
    time: "20:00",
    title: "Jazz Jam Session",
    genre: "Джаз",
    description: "Открытый джем — приходи слушать или играй с нами",
    price: "500 ₽",
    image: "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/92399a84-770e-470b-97d7-0380de8c089c.jpg",
  },
  {
    id: "2",
    date: "22 февраля",
    time: "21:00",
    title: "Электрическая ночь",
    genre: "Рок / Альтернатива",
    description: "Три группы, один вечер, максимальная энергия",
    price: "800 ₽",
    image: "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/92399a84-770e-470b-97d7-0380de8c089c.jpg",
  },
  {
    id: "3",
    date: "1 марта",
    time: "19:00",
    title: "Acoustic Friday",
    genre: "Акустика",
    description: "Тёплый вечер с акустическими каверами и авторскими песнями",
    price: "Вход свободный",
    image: "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/9c9f96c4-fa78-43dd-a258-1126c4919029.jpg",
  },
];

const STORAGE_KEY = "artel_events";

const loadEvents = (): Event[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultEvents;
  } catch {
    return defaultEvents;
  }
};

export const saveEvents = (events: Event[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
};

export const getEvents = loadEvents;

export type { Event };

const AfishaSection = () => {
  const [events] = useState<Event[]>(loadEvents);

  return (
    <section id="afisha" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-body">
            Ближайшие события
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-wider">
            Афиша
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {events.map((event, i) => (
            <div
              key={event.id}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-300 glow-red hover:glow-red"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-sm">
                  {event.genre}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 text-muted-foreground text-sm mb-3">
                  <span className="flex items-center gap-1.5">
                    <Icon name="Calendar" size={14} />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="Clock" size={14} />
                    {event.time}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold uppercase tracking-wide mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold text-sm">{event.price}</span>
                  <a
                    href="#booking"
                    className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Забронировать →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {events.length === 0 && (
          <p className="text-center text-muted-foreground text-lg">
            Скоро здесь появятся новые события
          </p>
        )}
      </div>
    </section>
  );
};

export default AfishaSection;
