"use client"

import { motion } from "framer-motion"
import { Play, Users, Star, TrendingUp } from "lucide-react"

export function OverviewSection() {
  const stats = [
    { icon: Users, value: "50K+", label: "Active Creators", color: "text-elysium-blue" },
    { icon: Star, value: "1M+", label: "Creations", color: "text-elysium-purple" },
    { icon: TrendingUp, value: "10M+", label: "Interactions", color: "text-elysium-gold" },
    { icon: Play, value: "24/7", label: "Live Worlds", color: "text-elysium-blue" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-elysium-black/5">
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
              Elysium
            </span>{" "}
            Overview
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Join a thriving ecosystem where creativity knows no bounds and every idea can become reality.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-background to-elysium-black/5 border border-border hover:border-elysium-gold/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-elysium-blue/20 to-elysium-purple/20 flex items-center justify-center">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-foreground/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-foreground">Experience the Future of Digital Entertainment</h3>
            <div className="space-y-6">
              {[
                {
                  title: "Immersive Worlds",
                  description:
                    "Step into breathtaking environments created by our community of talented artists and developers.",
                },
                {
                  title: "Interactive Storytelling",
                  description:
                    "Become part of the story with dynamic narratives that adapt to your choices and actions.",
                },
                {
                  title: "Social Experiences",
                  description:
                    "Connect with friends and make new ones in shared virtual spaces designed for collaboration.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-2 h-2 rounded-full bg-elysium-gold mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-elysium-blue/10 to-elysium-purple/10 border border-elysium-blue/20">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-elysium-gold/20 to-elysium-purple/20 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-elysium-blue to-elysium-purple flex items-center justify-center cursor-pointer shadow-lg shadow-elysium-blue/25"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.div>
              </div>
              <div className="mt-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">Watch Elysium in Action</h4>
                <p className="text-foreground/70 text-sm">See how creators are building amazing experiences</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
