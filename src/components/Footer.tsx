import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Hair Styling", href: "#services" },
    { label: "Skincare", href: "#services" },
    { label: "Makeup", href: "#services" },
    { label: "Spa & Wellness", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="#home" className="inline-block">
              <span className="font-serif text-2xl font-semibold">Lumière</span>
              <span className="ml-2 text-xs uppercase tracking-[0.3em] text-rose">
                Beauty
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Your destination for premium beauty and wellness. Experience
              luxury, elegance, and care.
            </p>

            <div className="mt-6 flex gap-3">
              {["instagram", "facebook", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-rose hover:text-white"
                >
                  <span className="text-xs uppercase">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-rose"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-rose"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-white/50">
              Subscribe for beauty tips and exclusive offers.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-rose"
              />
              <button
                type="submit"
                className="rounded-full bg-rose px-5 py-2.5 text-sm font-medium transition-colors hover:bg-rose-dark"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Lumière Beauty Salon. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/40 hover:text-white/60">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white/60">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
