import Image from "next/image";

const services = [
  {
    title: "Hair Styling",
    description:
      "Precision cuts, vibrant color, keratin treatments, and elegant updos by master stylists.",
    price: "From $45",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
    alt: "Hair styling session",
  },
  {
    title: "Skincare & Facials",
    description:
      "Rejuvenating facials, anti-aging treatments, and customized skincare regimens.",
    price: "From $65",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    alt: "Facial treatment",
  },
  {
    title: "Makeup Artistry",
    description:
      "Bridal makeup, special occasions, and professional makeup lessons.",
    price: "From $80",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    alt: "Makeup application",
  },
  {
    title: "Nail Care",
    description:
      "Manicures, pedicures, gel nails, nail art, and luxurious hand treatments.",
    price: "From $35",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    alt: "Nail art design",
  },
  {
    title: "Spa & Wellness",
    description:
      "Relaxing massages, body wraps, aromatherapy, and holistic wellness packages.",
    price: "From $90",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    alt: "Spa wellness massage",
  },
  {
    title: "Bridal Packages",
    description:
      "Complete bridal beauty packages including hair, makeup, nails, and trial sessions.",
    price: "From $350",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
    alt: "Bridal beauty package",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Our Services
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl lg:text-5xl">
            Curated Beauty Experiences
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/60">
            From everyday elegance to special occasions, we offer a full range
            of premium beauty services.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-rose-light bg-cream/50 transition-all duration-300 hover:-translate-y-1 hover:border-rose/30 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-serif text-lg font-medium text-white">
                  {service.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-charcoal/60">
                  {service.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-gold">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
