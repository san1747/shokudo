import { UtensilsCrossed, ShoppingBag, Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: UtensilsCrossed,
    title: "Dine In",
    description:
      "Immerse yourself in our warm, zen-inspired ambiance. Enjoy an authentic dining experience with impeccable service and beautifully presented dishes.",
  },
  {
    icon: ShoppingBag,
    title: "Takeaway",
    description:
      "Savor our delicious cuisine at home. We carefully package every order to preserve freshness and presentation for your enjoyment.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "Can't make it to us? We'll bring the flavors of Japan to your doorstep. Fast, reliable delivery across Bangalore.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-4 text-balance">
            How Would You Like to Experience SHOKUDO?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Whether you prefer the ambiance of our restaurant or the comfort of your home, 
            we ensure the same exceptional quality in every bite.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-background"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
