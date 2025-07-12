"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Users, MessageCircle, Zap, Heart } from "lucide-react"

export function CommunitySection() {
  const communityStats = [
    { icon: Users, value: "50K+", label: "Active Members" },
    { icon: MessageCircle, value: "1M+", label: "Messages Daily" },
    { icon: Zap, value: "24/7", label: "Live Support" },
    { icon: Heart, value: "99%", label: "Satisfaction" },
  ]

  return (
    <section id="community" className="py-24 bg-gradient-to-b from-background to-elysium-black/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Our{" "}
            <span className="bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
            Connect with creators, share your work, and be part of a vibrant community that's shaping the future of
            digital entertainment.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {communityStats.map((stat, index) => (
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
                  <stat.icon className="w-8 h-8 text-elysium-blue" />
                </div>
                <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-foreground/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA Section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-1 rounded-3xl bg-gradient-to-r from-elysium-blue via-elysium-purple to-elysium-gold"
          >
            <div className="bg-background rounded-3xl p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-elysium-blue to-elysium-purple bg-clip-text text-transparent">
                Ready to Start Creating?
              </h3>
              <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                Join Elysium today and become part of a revolutionary platform where your imagination becomes reality.
              </p>

              {/* Email Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
              >
                <Input placeholder="Enter your email" className="flex-1 h-12 bg-background/50 border-border text-lg" />
                <Button
                  size="lg"
                  className="h-12 bg-gradient-to-r from-elysium-blue to-elysium-purple hover:from-elysium-purple hover:to-elysium-blue text-white px-8 font-semibold group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <p className="text-sm text-foreground/60 mb-8">
                Free to start • No credit card required • Join 50,000+ creators
              </p>

              {/* Feature Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
              >
                {[
                  {
                    title: "Instant Access",
                    description: "Start creating immediately with our intuitive tools",
                    gradient: "from-elysium-blue to-elysium-purple",
                  },
                  {
                    title: "Global Community",
                    description: "Connect with creators from around the world",
                    gradient: "from-elysium-purple to-elysium-gold",
                  },
                  {
                    title: "Monetize Creativity",
                    description: "Turn your passion into profit with our creator economy",
                    gradient: "from-elysium-gold to-elysium-blue",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl bg-gradient-to-br from-elysium-black/5 to-background border border-border hover:border-elysium-gold/30 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.gradient} p-0.5`}>
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-elysium-gold/50 to-elysium-purple/50" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-foreground/70">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-foreground/60 mb-4">Trusted by creators worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {["Creator Studio", "Digital Arts", "VR Worlds", "Game Dev", "Story Tellers"].map((brand, index) => (
              <div key={index} className="text-sm font-medium text-foreground/40">
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
