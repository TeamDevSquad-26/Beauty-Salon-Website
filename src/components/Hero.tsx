import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose-light/60 via-cream to-white" />

      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-rose/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="animate-fade-up space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose/20 bg-white/60 px-4 py-1.5 text-sm text-rose backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-rose" />
            Award-Winning Beauty Salon
          </div>

          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Where Beauty
            <br />
            <span className="text-rose">Meets Elegance</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-charcoal/70">
            Discover a sanctuary of luxury and self-care. Our expert stylists
            and therapists deliver world-class beauty treatments tailored just
            for you.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-rose px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-rose-dark hover:shadow-xl"
            >
              Book Your Visit
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-charcoal/20 bg-white/50 px-8 py-3.5 text-sm font-semibold text-charcoal backdrop-blur-sm transition-all hover:border-rose hover:text-rose"
            >
              Explore Services
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 sm:gap-8">
            <div>
              <p className="font-serif text-3xl font-semibold text-charcoal">
                15+
              </p>
              <p className="text-sm text-charcoal/60">Years Experience</p>
            </div>
            <div className="hidden h-10 w-px bg-charcoal/10 sm:block" />
            <div>
              <p className="font-serif text-3xl font-semibold text-charcoal">
                10K+
              </p>
              <p className="text-sm text-charcoal/60">Happy Clients</p>
            </div>
            <div className="hidden h-10 w-px bg-charcoal/10 sm:block" />
            <div>
              <p className="font-serif text-3xl font-semibold text-charcoal">
                4.9
              </p>
              <p className="text-sm text-charcoal/60">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Image collage */}
        <div className="relative hidden animate-fade-up lg:block lg:justify-self-end">
          <div className="relative h-[520px] w-[420px]">
            <div className="absolute right-0 top-0 h-[380px] w-[280px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-rose/10">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80"
                alt="Luxury beauty salon interior"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>

            <div className="absolute bottom-0 left-0 h-[260px] w-[200px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-rose/10">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80"
                alt="Professional makeup artist at work"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>

            <div className="absolute bottom-16 right-4 h-[180px] w-[140px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-rose/10">
              <Image
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&q=80"
                alt="Elegant makeup and beauty"
                fill
                className="object-cover"
                sizes="140px"
              />
            </div>

            <div className="animate-float absolute -bottom-4 -left-8 rounded-2xl bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-light">
                  <svg
                    className="h-6 w-6 text-rose"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">
                    Premium Care
                  </p>
                  <p className="text-xs text-charcoal/60">
                    Organic & cruelty-free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile image strip */}
        <div className="grid grid-cols-3 gap-3 lg:hidden">
          {[
            {
              src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
              alt: "Salon interior",
            },
            {
              src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
              alt: "Makeup artist",
            },
            {
              src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80",
              alt: "Beauty treatment",
            },
          ].map((img) => (
            <div
              key={img.alt}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg ring-1 ring-rose/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
