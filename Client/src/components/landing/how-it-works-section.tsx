"use client"

import { motion } from "framer-motion"
import { UserPlus, Palette, Share2, Trophy } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account and customize your avatar to represent yourself in Elysium.",
      step: "01",
    },
    {
      icon: Palette,
      title: "Create",
      description:
        "Use our intuitive tools to build worlds, characters, and experiences that reflect your imagination.",
      step: "02",
    },
    {
      icon: Share2,
      title: "Share",
      description: "Publish your creations and invite others to explore, interact, and collaborate with you.",
      step: "03",
    },
    {
      icon: Trophy,
      title: "Earn",
      description: "Gain recognition, build your following, and monetize your creativity through our reward system.",
      step: "04",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-elysium-purple/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
              Elysium
            </span>{" "}
            Works
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Getting started with Elysium is simple. Follow these four easy steps to begin your creative journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-elysium-blue via-elysium-purple to-elysium-gold opacity-30 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-elysium-gold to-elysium-purple flex items-center justify-center text-black font-bold text-lg z-10">
                  {step.step}
                </div>

                {/* Card */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-background to-elysium-black/5 border border-border group-hover:border-elysium-purple/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-elysium-purple/10">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-elysium-blue/20 to-elysium-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-elysium-blue group-hover:text-elysium-purple transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-elysium-purple transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-8">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-elysium-blue to-elysium-purple opacity-50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-elysium-blue/10 to-elysium-purple/10 border border-elysium-blue/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Begin?</h3>
            <p className="text-foreground/80 mb-6 max-w-md">
              Join our community and start creating your first world today. No experience required!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-elysium-blue to-elysium-purple text-white rounded-full font-semibold hover:from-elysium-purple hover:to-elysium-blue transition-all duration-300 shadow-lg shadow-elysium-blue/25"
            >
              Start Creating Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
