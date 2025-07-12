"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sparkles, Mail, Twitter, Github, DiscIcon as Discord, Instagram, Heart } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "How it Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "Roadmap", href: "#roadmap" },
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "API", href: "#api" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
    ],
  }

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Discord", icon: Discord, href: "#" },
    { name: "Github", icon: Github, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background to-[#171717]/20 dark:from-background dark:to-[#0a0a0a]/50 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6a75f1]/5 via-[#a28ad6]/5 to-[#f5d87a]/5 opacity-50" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <a href="/" className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#f5d87a] to-[#6a75f1] bg-clip-text text-transparent">
                  Elysium
                </span>
              </a>

              <p className="text-muted-foreground max-w-sm">
                Where imagination becomes entertainment. Create, explore, and connect in a digital universe without
                limits.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gradient-to-r from-[#6a75f1]/20 to-[#a28ad6]/20 rounded-full flex items-center justify-center border border-white/10 hover:border-[#6a75f1]/50 transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground hover:text-[#6a75f1] transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="font-semibold text-foreground">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-[#6a75f1] transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-foreground">Stay Updated</h3>
              <p className="text-muted-foreground text-sm">Get the latest news and updates from Elysium.</p>
              <form className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 bg-background/50 border-white/20 focus:border-[#6a75f1]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] hover:from-[#5a65e1] hover:to-[#927ac6] text-white">
                  Subscribe
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2025 Elysium. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>for creators worldwide</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
