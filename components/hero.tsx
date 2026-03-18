import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-food.jpg"
          alt="Delicious Japanese ramen bowl"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-secondary text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            Authentic Japanese & Pan Asian Cuisine
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-card mb-6 text-balance">
            A Journey Through Asian Flavors
          </h1>
          
          <p className="text-card/90 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Experience the art of Japanese cuisine with our carefully crafted dishes, 
            made with the freshest ingredients and traditional techniques.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="#contact">Reserve Your Table</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="w-full sm:w-auto bg-transparent border-card text-card hover:bg-card hover:text-foreground"
            >
              <Link href="#services">Explore Menu</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-card/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
