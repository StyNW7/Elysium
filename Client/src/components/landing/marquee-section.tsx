"use client"

import { motion } from "framer-motion"

export function MarqueeSection() {
  const items = [
    "Create Worlds",
    "Build Characters",
    "Design Experiences",
    "Share Stories",
    "Connect Globally",
    "Earn Rewards",
    "Collaborate",
    "Innovate",
    "Inspire Others",
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-elysium-blue/10 via-elysium-purple/10 to-elysium-gold/10 overflow-hidden">
      <div className="relative">
        {/* First Row - Moving Right */}
        <motion.div
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="flex whitespace-nowrap mb-8"
        >
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-elysium-gold via-elysium-blue to-elysium-purple bg-clip-text text-transparent">
                {item}
              </span>
              <div className="w-2 h-2 rounded-full bg-elysium-gold mx-8" />
            </div>
          ))}
        </motion.div>

        {/* Second Row - Moving Left */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...items.reverse(), ...items].map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-elysium-purple via-elysium-gold to-elysium-blue bg-clip-text text-transparent">
                {item}
              </span>
              <div className="w-2 h-2 rounded-full bg-elysium-purple mx-8" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
