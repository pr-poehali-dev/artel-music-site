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
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами для подтверждения брони",
    });
    setForm({ name: "", phone: "", date: "", guests: "", message: "" });
  };

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-body">
              Забронируй место
            </p>
            <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-wider">
              Бронь
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Имя *
                </label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="bg-card border-border h-12 rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Телефон *
                </label>
                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (999) 123-45-67"
                  className="bg-card border-border h-12 rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Дата *
                </label>
                <Input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="bg-card border-border h-12 rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Гостей
                </label>
                <Input
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  placeholder="2"
                  type="number"
                  min="1"
                  className="bg-card border-border h-12 rounded-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                Пожелания
              </label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Особые пожелания, день рождения, VIP..."
                className="bg-card border-border rounded-sm min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-primary text-primary-foreground font-medium uppercase tracking-widest text-sm rounded-sm hover:bg-primary/90"
            >
              <Icon name="Send" size={16} />
              Забронировать
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
