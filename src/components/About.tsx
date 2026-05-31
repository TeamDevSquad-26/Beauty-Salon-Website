import Image from "next/image";

const features = [
  "Certified & experienced professionals",
  "Premium organic product lines",
  "Hygienic & sanitized environment",
  "Personalized consultation for every client",
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                alt="Professional beautician at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-rose p-8 text-white shadow-xl sm:block">
              <p className="font-serif text-4xl font-semibold">15+</p>
              <p className="mt-1 text-sm text-white/80">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
              About Us
            </p>
            <h2 className="font-serif text-3xl font-medium text-charcoal sm:text-4xl lg:text-5xl">
              Redefining Beauty Standards Since 2010
            </h2>
            <p className="text-lg leading-relaxed text-charcoal/70">
              At Lumière Beauty Salon, we believe beauty is an art form. Our
              team of passionate stylists and therapists combine international
              techniques with personalized care to bring out your natural
              radiance.
            </p>
            <p className="leading-relaxed text-charcoal/60">
              We use only premium, cruelty-free products and maintain the
              highest standards of hygiene. Every visit is designed to be a
              luxurious escape from the everyday.
            </p>

            <ul className="space-y-3 pt-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-light">
                    <svg
                      className="h-3.5 w-3.5 text-rose"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-charcoal/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
