import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
    alt: "Hair styling session",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    alt: "Makeup application",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
    alt: "Nail art design",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    alt: "Facial treatment",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1519415510928-9bd380c918e6?w=600&q=80",
    alt: "Spa relaxation",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Gallery
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl lg:text-5xl">
            Our Work Speaks for Itself
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/60">
            Browse through our portfolio of transformations and beautiful
            moments.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5">
          {galleryImages.map((image) => (
            <div
              key={image.alt}
              className={`group relative overflow-hidden rounded-2xl ${
                image.span.includes("col-span-2") ? "md:col-span-2" : ""
              } ${image.span.includes("row-span-2") ? "md:row-span-2" : ""} aspect-square md:aspect-auto md:min-h-[200px]`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
