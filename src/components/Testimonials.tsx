const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Regular Client",
    rating: 5,
    text: "Lumière is my go-to salon for everything. The staff is incredibly talented and the atmosphere is so relaxing. My hair has never looked better!",
  },
  {
    name: "Emily Chen",
    role: "Bride",
    rating: 5,
    text: "They did my bridal makeup and it was absolutely flawless. I felt like a princess on my wedding day. Highly recommend their bridal packages!",
  },
  {
    name: "Jessica Williams",
    role: "Spa Enthusiast",
    rating: 5,
    text: "The spa treatments here are world-class. I leave feeling completely rejuvenated every time. The attention to detail is unmatched.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/60">
            Real stories from real people who trust us with their beauty.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <StarRating count={item.rating} />
              <p className="mt-5 text-sm leading-relaxed text-charcoal/70">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-rose-light pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-light font-serif text-sm font-semibold text-rose">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">
                    {item.name}
                  </p>
                  <p className="text-xs text-charcoal/50">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
