"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Zap, Star } from "lucide-react"

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)

  const loadingTexts = [
    "Initializing Elysium...",
    "Loading your universe...",
    "Preparing creative tools...",
    "Connecting to the metaverse...",
    "Almost ready to explore...",
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 10)

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length)
    }, 250)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#171717] via-[#2a2a2a] to-[#171717] dark:from-[#0a0a0a] dark:via-[#1a1a1a] dark:to-[#0a0a0a]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#6a75f1]/20 via-[#a28ad6]/20 to-[#f5d87a]/20"
          animate={{
            background: [
              "linear-gradient(to right, rgba(106, 117, 241, 0.2), rgba(162, 138, 214, 0.2), rgba(245, 216, 122, 0.2))",
              "linear-gradient(to right, rgba(245, 216, 122, 0.2), rgba(106, 117, 241, 0.2), rgba(162, 138, 214, 0.2))",
              "linear-gradient(to right, rgba(162, 138, 214, 0.2), rgba(245, 216, 122, 0.2), rgba(106, 117, 241, 0.2))",
            ],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, 200, 0],
              y: [0, -150, 0],
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 3 === 0 && <Sparkles className="w-6 h-6 text-[#f5d87a] opacity-60" />}
            {i % 3 === 1 && <Zap className="w-5 h-5 text-[#6a75f1] opacity-60" />}
            {i % 3 === 2 && <Star className="w-4 h-4 text-[#a28ad6] opacity-60" />}
          </motion.div>
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center space-y-8 max-w-md mx-auto px-4">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mx-auto w-24 h-24 bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] rounded-full flex items-center justify-center shadow-2xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Sparkles className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#f5d87a] via-[#6a75f1] to-[#a28ad6] bg-clip-text text-transparent mb-2">
            Elysium
          </h1>
          <p className="text-white/70 text-lg">Where imagination becomes entertainment</p>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="h-8"
        >
          <p className="text-white/80 text-lg font-medium">{loadingTexts[currentText]}</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="space-y-4">
          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-white/20">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6a75f1] via-[#a28ad6] to-[#f5d87a] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-between text-sm text-white/60"
          >
            <span>Loading...</span>
            <span>{progress}%</span>
          </motion.div>
        </div>

        {/* Pulsing Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
