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

const IMG_CONCERT = "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/b1c45e39-0563-4959-aec2-f9856f9ecf68.jpg";
const IMG_BAR = "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/52f49f2d-a296-4c17-ae9b-a9bf7c4ff1c3.jpg";
const IMG_CLUB = "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/f51cc6b9-abb1-41ae-b52b-36acf64235d8.jpg";

const defaultEvents: Event[] = [
  {
    id: "1",
    date: "14 февраля",
    time: "20:00",
    title: "Romantic Live Night",
    genre: "Живая музыка",
    description: "Романтический вечер с живым звуком, свечами и специальным меню для пар",
    price: "1 000 ₽",
    image: IMG_CLUB,
  },
  {
    id: "2",
    date: "15 февраля",
    time: "21:00",
    title: "Rock Friday",
    genre: "Рок",
    description: "Кавер-бэнд с лучшими хитами русского и зарубежного рока",
    price: "500 ₽",
    image: IMG_CONCERT,
  },
  {
    id: "3",
    date: "16 февраля",
    time: "19:00",
    title: "Квиз «Мозговой штурм»",
    genre: "Квиз",
    description: "Интеллектуальная битва команд с призами и хорошим настроением",
    price: "300 ₽ / чел",
    image: IMG_BAR,
  },
  {
    id: "4",
    date: "21 февраля",
    time: "21:00",
    title: "Jazz & Wine",
    genre: "Джаз",
    description: "Вечер живого джаза в сопровождении авторских коктейлей и вина",
    price: "Вход свободный",
    image: IMG_CLUB,
  },
  {
    id: "5",
    date: "22 февраля",
    time: "20:00",
    title: "Мужской вечер",
    genre: "Вечеринка",
    description: "Праздничная программа к 23 февраля — конкурсы, подарки, живой звук",
    price: "800 ₽",
    image: IMG_CONCERT,
  },
  {
    id: "6",
    date: "1 марта",
    time: "19:00",
    title: "Acoustic Session",
    genre: "Акустика",
    description: "Тёплый вечер с акустическими каверами и авторскими песнями",
    price: "Вход свободный",
    image: IMG_BAR,
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
    <section id="afisha" className="py-28 bg-card relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 max-w-6xl mx-auto">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 font-medium">
              Ближайшие события
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
              Афиша
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Следите за расписанием — каждую неделю новые впечатления
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-background border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-sm">
                  {event.genre}
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-foreground/80 text-xs">
                    <Icon name="Calendar" size={12} />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-foreground/80 text-xs">
                    <Icon name="Clock" size={12} />
                    {event.time}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wide mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {event.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-primary font-semibold text-sm">{event.price}</span>
                  <a
                    href="#booking"
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group/link"
                  >
                    Забронировать
                    <Icon name="ArrowRight" size={10} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-16 max-w-6xl mx-auto">
            <Icon name="Music" size={48} className="mx-auto mb-4 text-muted-foreground/20" />
            <p className="text-muted-foreground">Скоро здесь появятся новые события</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AfishaSection;
