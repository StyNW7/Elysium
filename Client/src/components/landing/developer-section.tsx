"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Heart, Linkedin } from "lucide-react"

export function DeveloperSection() {
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
            Meet the{" "}
            <span className="bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
              Solo Developer
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Elysium is crafted with passion by a dedicated solo developer who believes in the power of creativity and
            community.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-1 rounded-3xl bg-gradient-to-r from-elysium-blue via-elysium-purple to-elysium-gold"
          >
            <div className="bg-background rounded-3xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Developer Info */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-32 h-32 mx-auto lg:mx-0 mb-8 rounded-full bg-gradient-to-br from-elysium-gold to-elysium-purple p-1"
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-elysium-blue/20 to-elysium-purple/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-foreground">SNW</span>
                      </div>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground">Stanley Nathanael Wijaya</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    A passionate full-stack developer with over 3 years of experience in creating immersive digital
                    experiences. Driven by the vision of democratizing creativity and building tools that empower
                    everyone to become a creator.
                  </p>

                  <div className="flex space-x-4 mb-8">
                    {[
                      { icon: Github, href: "https://github.com/StyNW7", label: "GitHub" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/stanley-nathanael-wijaya/", label: "Linkedin" },
                      { icon: Instagram, href: "https://www.instagram.com/snw.77/", label: "Instagram" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-elysium-blue/20 to-elysium-purple/20 flex items-center justify-center hover:from-elysium-blue/40 hover:to-elysium-purple/40 transition-all duration-200"
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5 text-foreground/80" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Journey & Vision */}
                <div>
                  <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
                    The Journey
                  </h4>

                  <div className="space-y-6">
                    {[
                      {
                        year: "2025 (Q2)",
                        title: "The Idea",
                        description:
                          "Conceived the vision of a platform where anyone could create digital entertainment.",
                      },
                      {
                        year: "2025 (Q3)",
                        title: "Development Begins",
                        description: "Started building the core infrastructure and creation tools.",
                      },
                      {
                        year: "2026",
                        title: "Elysium Launches",
                        description: "Released the first version to the public with basic creation features.",
                      },
                      {
                        year: "Future",
                        title: "Community Growth",
                        description: "Expanding features based on community feedback and needs.",
                      },
                    ].map((milestone, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-elysium-gold/20 to-elysium-purple/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-foreground">{milestone.year}</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{milestone.title}</h5>
                          <p className="text-foreground/70 text-sm">{milestone.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-elysium-gold/10 to-elysium-purple/10 border border-elysium-gold/20"
              >
                <Heart className="w-8 h-8 text-elysium-gold mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-4 text-foreground">Mission Statement</h4>
                <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  "My mission is to create a platform that empowers every individual to express their creativity and
                  share their unique vision with the world. Elysium is more than just a tool—it's a movement towards a
                  more creative and connected digital future."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
