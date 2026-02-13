import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import type { Event } from "@/components/AfishaSection";
import { getEvents, saveEvents } from "@/components/AfishaSection";

const ADMIN_KEY = "artel_admin_auth";

const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "artel2024") {
      localStorage.setItem(ADMIN_KEY, "true");
      onLogin();
    } else {
      toast({ title: "Неверный пароль", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold uppercase tracking-wider text-gradient mb-2">
            Артель
          </h1>
          <p className="text-muted-foreground text-sm">Панель управления</p>
        </div>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          className="bg-card border-border h-12 rounded-sm"
        />
        <Button
          type="submit"
          className="w-full h-12 bg-primary text-primary-foreground uppercase tracking-widest text-sm rounded-sm"
        >
          Войти
        </Button>
      </form>
    </div>
  );
};

const emptyEvent: Omit<Event, "id"> = {
  date: "",
  time: "",
  title: "",
  genre: "",
  description: "",
  price: "",
  image: "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/92399a84-770e-470b-97d7-0380de8c089c.jpg",
};

const Admin = () => {
  const [authed, setAuthed] = useState(
    () => localStorage.getItem(ADMIN_KEY) === "true"
  );
  const [events, setEvents] = useState<Event[]>([]);
  const [editing, setEditing] = useState<Omit<Event, "id"> & { id?: string } | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (authed) setEvents(getEvents());
  }, [authed]);

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />;

  const handleSave = () => {
    if (!editing) return;
    if (!editing.title || !editing.date) {
      toast({ title: "Название и дата обязательны", variant: "destructive" });
      return;
    }

    let updated: Event[];
    if (editing.id) {
      updated = events.map((e) =>
        e.id === editing.id ? { ...editing, id: editing.id } as Event : e
      );
    } else {
      const newEvent: Event = {
        ...editing,
        id: Date.now().toString(),
      };
      updated = [...events, newEvent];
    }

    setEvents(updated);
    saveEvents(updated);
    setEditing(null);
    toast({ title: editing.id ? "Событие обновлено" : "Событие добавлено" });
  };

  const handleDelete = (id: string) => {
    const updated = events.filter((e) => e.id !== id);
    setEvents(updated);
    saveEvents(updated);
    toast({ title: "Событие удалено" });
  };

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_KEY);
    setAuthed(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="font-heading text-xl font-bold uppercase tracking-wider text-gradient">
              Артель
            </a>
            <span className="text-xs text-muted-foreground uppercase tracking-widest">/ Админ</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors"
            >
              На сайт
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-xs uppercase tracking-widest"
            >
              <Icon name="LogOut" size={14} />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-heading text-3xl font-bold uppercase tracking-wider">Афиша</h1>
          <Button
            onClick={() => setEditing({ ...emptyEvent })}
            className="bg-primary text-primary-foreground uppercase tracking-widest text-xs rounded-sm"
          >
            <Icon name="Plus" size={16} />
            Добавить
          </Button>
        </div>

        {editing && (
          <div className="bg-card border border-border rounded-sm p-6 mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wider">
                {editing.id ? "Редактировать" : "Новое событие"}
              </h2>
              <Button variant="ghost" size="sm" onClick={() => setEditing(null)}>
                <Icon name="X" size={18} />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Название *</label>
                <Input
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                  placeholder="Jazz Night"
                  className="bg-background border-border h-11 rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Жанр</label>
                <Input
                  value={editing.genre}
                  onChange={(e) => setEditing({ ...editing, genre: e.target.value })}
                  placeholder="Джаз"
                  className="bg-background border-border h-11 rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Дата *</label>
                <Input
                  value={editing.date}
                  onChange={(e) => setEditing({ ...editing, date: e.target.value })}
                  placeholder="15 февраля"
                  className="bg-background border-border h-11 rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Время</label>
                <Input
                  value={editing.time}
                  onChange={(e) => setEditing({ ...editing, time: e.target.value })}
                  placeholder="20:00"
                  className="bg-background border-border h-11 rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Цена</label>
                <Input
                  value={editing.price}
                  onChange={(e) => setEditing({ ...editing, price: e.target.value })}
                  placeholder="500 ₽"
                  className="bg-background border-border h-11 rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Ссылка на картинку</label>
                <Input
                  value={editing.image}
                  onChange={(e) => setEditing({ ...editing, image: e.target.value })}
                  placeholder="https://..."
                  className="bg-background border-border h-11 rounded-sm"
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Описание</label>
              <Textarea
                value={editing.description}
                onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                placeholder="Краткое описание события"
                className="bg-background border-border rounded-sm min-h-[80px]"
              />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleSave}
                className="bg-primary text-primary-foreground uppercase tracking-widest text-xs rounded-sm"
              >
                <Icon name="Check" size={16} />
                Сохранить
              </Button>
              <Button
                variant="outline"
                onClick={() => setEditing(null)}
                className="uppercase tracking-widest text-xs rounded-sm"
              >
                Отмена
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-card border border-border rounded-sm p-4 flex items-center gap-4"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-16 h-16 object-cover rounded-sm flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold uppercase tracking-wide truncate">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {event.date} · {event.time} · {event.genre}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setEditing({ ...event })}
                  className="h-9 w-9"
                >
                  <Icon name="Pencil" size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(event.id)}
                  className="h-9 w-9 text-destructive hover:text-destructive"
                >
                  <Icon name="Trash2" size={16} />
                </Button>
              </div>
            </div>
          ))}

          {events.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Icon name="Calendar" size={48} className="mx-auto mb-4 opacity-30" />
              <p>Событий пока нет. Добавьте первое!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
