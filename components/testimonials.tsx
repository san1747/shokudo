import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Food Blogger",
    content:
      "SHOKUDO has become my go-to spot for authentic Japanese food in Bangalore. Their ramen is simply divine - the broth has so much depth and flavor!",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Regular Customer",
    content:
      "The sushi here is incredibly fresh and the presentation is beautiful. The staff is attentive and the ambiance is perfect for both casual dinners and special occasions.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Expat in Bangalore",
    content:
      "As someone who lived in Tokyo for years, I can confidently say SHOKUDO captures the authentic taste of Japan. Their gyoza and tonkatsu are exceptional!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Don{"'"}t just take our word for it. Here{"'"}s what our valued customers 
            have to say about their SHOKUDO experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-secondary mb-4" />
                
                {/* Content */}
                <p className="text-card-foreground leading-relaxed mb-6">
                  {testimonial.content}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Author */}
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
