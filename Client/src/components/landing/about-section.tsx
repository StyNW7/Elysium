"use client"

import { motion } from "framer-motion"
import { Sparkles, Users, Zap } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Create",
      description: "Build immersive worlds and experiences with our intuitive creation tools.",
    },
    {
      icon: Users,
      title: "Connect",
      description: "Join a vibrant community of creators and explorers from around the globe.",
    },
    {
      icon: Zap,
      title: "Experience",
      description: "Dive into endless possibilities and discover new forms of entertainment.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-elysium-black/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
              About Elysium
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Elysium is a revolutionary digital ecosystem where creativity meets technology. We're building the future of
            social entertainment, where every user can become a creator, explorer, and storyteller in an ever-evolving
            virtual universe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-background to-elysium-blue/5 border border-border hover:border-elysium-blue/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-elysium-blue/20 to-elysium-purple/20 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-elysium-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-elysium-gold/10 to-elysium-purple/10 border border-elysium-gold/20">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-lg text-foreground/80 max-w-2xl">
              To democratize digital entertainment creation and provide a platform where imagination has no limits. We
              believe everyone has a story to tell and a world to build.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
