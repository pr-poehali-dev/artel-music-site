const images = [
  {
    src: "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/a7b4c5c6-a990-46c5-9b86-5280f4befa18.jpg",
    alt: "Интерьер клуба Артель",
  },
  {
    src: "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/92399a84-770e-470b-97d7-0380de8c089c.jpg",
    alt: "Живое выступление",
  },
  {
    src: "https://cdn.poehali.dev/projects/5880786a-c0e1-4fad-84b3-629a40fb59fe/files/9c9f96c4-fa78-43dd-a258-1126c4919029.jpg",
    alt: "Бар Артель",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-body">
            Атмосфера
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-wider">
            Галерея
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                  i === 0 ? "h-64 md:h-full" : "h-64"
                }`}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
