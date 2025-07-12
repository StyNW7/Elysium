"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is Elysium?",
      answer:
        "Elysium is a digital-based social entertainment platform that combines creation, exploration, and interaction in one immersive ecosystem. Users can create worlds, characters, and experiences while connecting with a global community.",
    },
    {
      question: "Is Elysium free to use?",
      answer:
        "Yes! Elysium offers a free tier with access to basic creation tools and community features. We also offer premium plans with advanced features, additional storage, and monetization options.",
    },
    {
      question: "What devices can I use Elysium on?",
      answer:
        "Elysium is accessible on desktop computers, mobile devices, and VR headsets. Our platform is designed to work seamlessly across all devices with automatic synchronization.",
    },
    {
      question: "Can I monetize my creations?",
      answer:
        "Elysium features a built-in creator economy where you can sell your creations, offer premium experiences, and earn rewards through our community engagement system.",
    },
    {
      question: "Do I need coding experience to create on Elysium?",
      answer:
        "Not at all! Our intuitive visual creation tools are designed for users of all skill levels. However, if you do have coding experience, you can access advanced scripting features for more complex creations.",
    },
    {
      question: "How do I protect my intellectual property?",
      answer:
        "Elysium uses blockchain technology to verify ownership and protect your intellectual property. All creations are timestamped and linked to your account for legal protection.",
    },
    {
      question: "Can I collaborate with other creators?",
      answer:
        "Yes! Collaboration is at the heart of Elysium. You can invite other creators to work on projects together, share resources, and build amazing experiences as a team.",
    },
    {
      question: "What kind of support is available?",
      answer:
        "We offer comprehensive support including documentation, video tutorials, community forums, and direct support for premium users. Our community is also very helpful and welcoming to newcomers.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-elysium-purple/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Find answers to common questions about Elysium and how to get started with your creative journey.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="rounded-2xl bg-gradient-to-br from-background to-elysium-black/5 border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-elysium-gold/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-elysium-gold" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-foreground/60" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-elysium-gold/10 to-elysium-purple/10 border border-elysium-gold/20">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Still have questions?</h3>
            <p className="text-foreground/80 mb-6">
              Our support team is here to help you get started and make the most of Elysium.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-elysium-gold to-elysium-purple text-black rounded-full font-semibold hover:from-elysium-purple hover:to-elysium-gold transition-all duration-300"
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
