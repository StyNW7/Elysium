"use client"

import { motion } from "framer-motion"
import { Brush, Users, Zap, Globe, Shield, Coins } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brush,
      title: "Advanced Creation Tools",
      description: "Professional-grade tools with AI assistance to bring your wildest ideas to life.",
      color: "from-elysium-gold to-elysium-blue",
    },
    {
      icon: Users,
      title: "Social Collaboration",
      description: "Work together with friends and creators from around the world in real-time.",
      color: "from-elysium-blue to-elysium-purple",
    },
    {
      icon: Zap,
      title: "Instant Publishing",
      description: "Share your creations instantly with our global community and get immediate feedback.",
      color: "from-elysium-purple to-elysium-gold",
    },
    {
      icon: Globe,
      title: "Cross-Platform Access",
      description: "Access Elysium from any device - desktop, mobile, or VR headset.",
      color: "from-elysium-gold to-elysium-purple",
    },
    {
      icon: Shield,
      title: "Content Protection",
      description: "Your intellectual property is protected with blockchain-based ownership verification.",
      color: "from-elysium-blue to-elysium-gold",
    },
    {
      icon: Coins,
      title: "Creator Economy",
      description: "Monetize your creativity through our integrated marketplace and reward system.",
      color: "from-elysium-purple to-elysium-blue",
    },
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-elysium-purple/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful{" "}
            <span className="bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Everything you need to create, share, and monetize your digital entertainment experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative overflow-hidden"
            >
              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-background to-elysium-black/5 border border-border group-hover:border-transparent transition-all duration-300 h-full">
                {/* Gradient Border on Hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5`}
                >
                  <div className="w-full h-full rounded-2xl bg-background" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${feature.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-elysium-gold group-hover:to-elysium-purple group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                </div>

                {/* Hover Effect Background */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-elysium-blue via-elysium-purple to-elysium-gold">
            <div className="bg-background rounded-3xl p-12">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-elysium-blue to-elysium-purple bg-clip-text text-transparent">
                AI-Powered Creation Assistant
              </h3>
              <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                Our advanced AI helps you create faster and better than ever before. From generating ideas to optimizing
                performance, your AI assistant is always ready to help.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {["Smart Suggestions", "Auto-Optimization", "Creative Inspiration"].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-br from-elysium-gold/10 to-elysium-purple/10 border border-elysium-gold/20"
                  >
                    <span className="font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
