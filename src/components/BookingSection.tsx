import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const BookingSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date) {
      toast({
        title: "Заполните обязательные поля",
        description: "Имя, телефон и дата обязательны",
        variant: "destructive",
      });
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами для подтверждения. Можно также позвонить: +7 (3473) 30-30-11",
      });
      setForm({ name: "", phone: "", date: "", guests: "", message: "" });
      setSending(false);
    }, 800);
  };

  return (
    <section id="booking" className="py-28 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 font-medium">
              Ваш столик ждёт
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
              Забронировать
            </h2>
            <p className="text-sm text-muted-foreground">
              Заполните форму или позвоните{" "}
              <a href="tel:+73473303011" className="text-primary hover:underline">
                +7 (3473) 30-30-11
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Имя *
                </label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="bg-background border-border h-12 rounded-sm focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Телефон *
                </label>
                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (999) 123-45-67"
                  className="bg-background border-border h-12 rounded-sm focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Дата *
                </label>
                <Input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="bg-background border-border h-12 rounded-sm focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Количество гостей
                </label>
                <Input
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  placeholder="2"
                  type="number"
                  min="1"
                  className="bg-background border-border h-12 rounded-sm focus:border-primary/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Пожелания
              </label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Особые пожелания, день рождения, VIP-столик..."
                className="bg-background border-border rounded-sm min-h-[100px] focus:border-primary/50"
              />
            </div>

            <Button
              type="submit"
              disabled={sending}
              className="w-full h-13 bg-primary text-primary-foreground font-semibold uppercase tracking-[0.2em] text-sm rounded-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-50"
            >
              {sending ? (
                <Icon name="Loader2" size={16} className="animate-spin" />
              ) : (
                <Icon name="Send" size={16} />
              )}
              {sending ? "Отправляем..." : "Забронировать столик"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
