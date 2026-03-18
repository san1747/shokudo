import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/sushi-platter.jpg"
                  alt="Fresh sushi platter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                <p className="font-serif text-3xl md:text-4xl font-bold">10+</p>
                <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
              </div>
            </div>
            <div className="pt-8">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/restaurant-interior.jpg"
                  alt="SHOKUDO restaurant interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              A Passion for Authentic Asian Cuisine
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SHOKUDO, meaning {"\""}cafeteria{"\""} in Japanese, was born from a simple dream: 
                to bring the authentic flavors of Japan and Pan Asia to the heart of Bangalore.
              </p>
              <p>
                Our chefs, trained in the traditional arts of Japanese cuisine, 
                meticulously craft each dish using time-honored techniques and 
                the freshest ingredients sourced from local and international markets.
              </p>
              <p>
                From the delicate art of sushi-making to the rich, complex broths of our ramen, 
                every plate tells a story of dedication, passion, and respect for culinary tradition.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Signature Dishes</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-primary">15K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-primary">4.8</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
