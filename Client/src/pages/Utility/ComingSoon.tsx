"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Mail, Clock, Star, Zap, ArrowLeft } from "lucide-react"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Countdown timer (example: 30 days from now)
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden pt-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#171717] via-[#2a2a2a] to-[#171717] dark:from-[#0a0a0a] dark:via-[#1a1a1a] dark:to-[#0a0a0a]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#6a75f1]/10 via-[#a28ad6]/10 to-[#f5d87a]/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(106, 117, 241, 0.1), rgba(162, 138, 214, 0.1), rgba(245, 216, 122, 0.1))",
              "linear-gradient(135deg, rgba(245, 216, 122, 0.1), rgba(106, 117, 241, 0.1), rgba(162, 138, 214, 0.1))",
              "linear-gradient(225deg, rgba(162, 138, 214, 0.1), rgba(245, 216, 122, 0.1), rgba(106, 117, 241, 0.1))",
            ],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Floating Elements */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-30"
            animate={{
              x: [0, 150, 0],
              y: [0, -200, 0],
              rotate: [0, 360],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 4 === 0 && <Sparkles className="w-8 h-8 text-[#f5d87a]" />}
            {i % 4 === 1 && <Zap className="w-6 h-6 text-[#6a75f1]" />}
            {i % 4 === 2 && <Star className="w-5 h-5 text-[#a28ad6]" />}
            {i % 4 === 3 && <Clock className="w-7 h-7 text-[#f5d87a]" />}
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <a href="/">
        <Button
          variant="ghost"
          className="absolute top-20 left-6 z-50 text-white hover:bg-white/10 border border-white/20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </a>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-12 max-w-4xl mx-auto">
          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="mx-auto w-32 h-32 bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] rounded-full flex items-center justify-center shadow-2xl"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <Sparkles className="w-16 h-16 text-white" />
              </motion.div>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#f5d87a] via-[#6a75f1] to-[#a28ad6] bg-clip-text text-transparent">
                Elysium
              </h1>
              <p className="text-2xl md:text-3xl text-white/80 font-light">Where imagination becomes entertainment</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-white/60 max-w-2xl mx-auto"
              >
                We're crafting something extraordinary. A digital universe where creativity knows no bounds, where every
                user becomes a creator, and where entertainment evolves beyond imagination.
              </motion.div>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-white/90 mb-8">Launching In</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-xl">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        key={item.value}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] bg-clip-text text-transparent"
                      >
                        {item.value.toString().padStart(2, "0")}
                      </motion.div>
                      <div className="text-white/70 text-sm font-medium mt-2">{item.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white/90">Be the first to enter Elysium</h3>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-white/50" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6a75f1] h-12"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] hover:from-[#5a65e1] hover:to-[#927ac6] text-white font-semibold h-12 px-8"
                >
                  Notify Me
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center space-y-2"
              >
                <div className="text-[#f5d87a] text-lg font-semibold">✨ You're on the list!</div>
                <div className="text-white/70">We'll notify you when Elysium launches</div>
              </motion.div>
            )}
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Create",
                description: "Build immersive worlds with powerful creation tools",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Explore",
                description: "Discover infinite universes crafted by the community",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Connect",
                description: "Interact with creators and players worldwide",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-4"
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-[#6a75f1]/20 to-[#a28ad6]/20 rounded-full flex items-center justify-center border border-white/20">
                  <div className="text-[#f5d87a]">{feature.icon}</div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white/90 mb-2">{feature.title}</h4>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
