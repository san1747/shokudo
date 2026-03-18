import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-card py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl md:text-3xl font-serif font-bold text-primary">
                SHOKUDO
              </span>
            </Link>
            <p className="text-card/70 text-sm leading-relaxed max-w-xs">
              Authentic Japanese & Pan Asian cuisine in the heart of Bangalore. 
              Experience the art of traditional flavors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-card/70 hover:text-secondary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold text-card mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-card/70">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>12:00 PM - 10:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 PM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-card/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-card/60">
              &copy; {currentYear} SHOKUDO. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-card/60 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-card/60 hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
