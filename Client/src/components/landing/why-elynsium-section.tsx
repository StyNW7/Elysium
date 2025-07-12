/* eslint-disable no-shadow-restricted-names */
"use client"

import { motion } from "framer-motion"
import { Infinity, Shield, Rocket, Heart } from "lucide-react"

export function WhyElysiumSection() {
  const reasons = [
    {
      icon: Infinity,
      title: "Limitless Possibilities",
      description:
        "No boundaries, no restrictions. Create whatever you can imagine with our advanced tools and AI assistance.",
      gradient: "from-elysium-blue to-elysium-purple",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your creations and data are protected with enterprise-grade security and privacy controls.",
      gradient: "from-elysium-purple to-elysium-gold",
    },
    {
      icon: Rocket,
      title: "Cutting-Edge Technology",
      description: "Built on the latest web technologies, AI, and blockchain for the best possible experience.",
      gradient: "from-elysium-gold to-elysium-blue",
    },
    {
      icon: Heart,
      title: "Community-Driven",
      description: "Join a passionate community of creators who support, inspire, and collaborate with each other.",
      gradient: "from-elysium-blue to-elysium-gold",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-elysium-black/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
              Elysium?
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover what makes Elysium the ultimate platform for digital creators and entertainment enthusiasts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-background to-elysium-black/5 border border-border hover:border-elysium-gold/30 transition-all duration-300"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${reason.gradient} p-0.5`}>
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <reason.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-elysium-gold transition-colors">
                  {reason.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-elysium-blue via-elysium-purple to-elysium-gold">
            <div className="bg-background rounded-2xl px-8 py-6">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-elysium-blue to-elysium-purple bg-clip-text text-transparent">
                Ready to Start Your Journey?
              </h3>
              <p className="text-foreground/80 mb-6">
                Join thousands of creators who are already building the future of entertainment.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-elysium-blue to-elysium-purple text-white rounded-full font-semibold hover:from-elysium-purple hover:to-elysium-blue transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
