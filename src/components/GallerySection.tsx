import { useState } from "react";
import Icon from "@/components/ui/icon";

const images = [
  {
    src: "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/f51cc6b9-abb1-41ae-b52b-36acf64235d8.jpg",
    alt: "Интерьер клуба Артель",
    label: "Интерьер",
  },
  {
    src: "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/b1c45e39-0563-4959-aec2-f9856f9ecf68.jpg",
    alt: "Живое выступление",
    label: "Сцена",
  },
  {
    src: "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/52f49f2d-a296-4c17-ae9b-a9bf7c4ff1c3.jpg",
    alt: "Бар и коктейли",
    label: "Бар",
  },
  {
    src: "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/a7b4c5c6-a990-46c5-9b86-5280f4befa18.jpg",
    alt: "Атмосфера клуба",
    label: "Атмосфера",
  },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-28 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 font-medium">
              Атмосфера
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
              Галерея
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    i === 0 ? "h-64 md:h-full" : "h-48 md:h-64"
                  }`}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon name="ZoomIn" size={20} className="text-white" />
                  </div>
                </div>
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-white/70 font-medium">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={28} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === lightbox ? "bg-primary w-6" : "bg-white/30 hover:bg-white/60"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(i);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
