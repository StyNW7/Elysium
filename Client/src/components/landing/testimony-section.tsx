"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function TestimonySection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Artist",
      avatar: "SC",
      content:
        "Elysium has completely transformed how I create and share my art. The tools are intuitive, and the community is incredibly supportive.",
      rating: 5,
      gradient: "from-elysium-blue to-elysium-purple",
    },
    {
      name: "Marcus Rodriguez",
      role: "Game Developer",
      avatar: "MR",
      content:
        "As an indie game developer, Elysium gives me the platform I need to showcase my work and connect with players worldwide.",
      rating: 5,
      gradient: "from-elysium-purple to-elysium-gold",
    },
    {
      name: "Emily Watson",
      role: "Content Creator",
      avatar: "EW",
      content:
        "The monetization features are game-changing. I can finally earn from my creativity while doing what I love most.",
      rating: 5,
      gradient: "from-elysium-gold to-elysium-blue",
    },
    {
      name: "David Kim",
      role: "VR Enthusiast",
      avatar: "DK",
      content: "The VR integration is seamless. Creating in virtual reality has never been this accessible and fun.",
      rating: 5,
      gradient: "from-elysium-blue to-elysium-gold",
    },
    {
      name: "Luna Martinez",
      role: "Storyteller",
      avatar: "LM",
      content:
        "Elysium helped me bring my stories to life in ways I never imagined. The interactive storytelling tools are phenomenal.",
      rating: 5,
      gradient: "from-elysium-purple to-elysium-blue",
    },
    {
      name: "Alex Thompson",
      role: "Educator",
      avatar: "AT",
      content:
        "I use Elysium to create educational experiences for my students. It makes learning engaging and memorable.",
      rating: 5,
      gradient: "from-elysium-gold to-elysium-purple",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-elysium-purple/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
              Creators
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Join thousands of satisfied creators who are building amazing experiences on Elysium.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-background to-elysium-black/5 border border-border group-hover:border-elysium-gold/30 transition-all duration-300 h-full">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-elysium-gold/50 mb-4" />

                {/* Content */}
                <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-elysium-gold text-elysium-gold" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-sm font-bold text-foreground">{testimonial.avatar}</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-foreground/60">{testimonial.role}</div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-elysium-blue/10 to-elysium-purple/10 border border-elysium-blue/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Join Our Community?</h3>
            <p className="text-foreground/80 mb-6 max-w-md">
              Become part of a growing community of creators and start building your digital legacy today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-elysium-blue to-elysium-purple text-white rounded-full font-semibold hover:from-elysium-purple hover:to-elysium-blue transition-all duration-300 shadow-lg shadow-elysium-blue/25"
            >
              Start Creating
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
