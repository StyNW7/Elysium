"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, DiscIcon as Discord, Mail } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    Product: ["Features", "How it Works", "Pricing", "Updates"],
    Community: ["Discord", "Twitter", "GitHub", "Blog"],
    Support: ["Help Center", "Contact", "Privacy", "Terms"],
    Company: ["About", "Careers", "Press", "Partners"],
  }

  return (
    <footer className="bg-gradient-to-b from-background to-elysium-black/20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
            Stay Updated with Elysium
          </h3>
          <p className="text-foreground/60 mb-6 max-w-md mx-auto">
            Get the latest updates, features, and news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1 bg-background/50 border-border" />
            <Button className="bg-gradient-to-r from-elysium-blue to-elysium-purple hover:from-elysium-purple hover:to-elysium-blue text-white">
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-elysium-gold to-elysium-purple flex items-center justify-center">
                <span className="text-black font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
                Elysium
              </span>
            </motion.div>
            <p className="text-foreground/60 mb-6 max-w-sm">
              Where imagination becomes entertainment. Discover new realities and build your own universe.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Discord, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-elysium-blue/20 to-elysium-purple/20 flex items-center justify-center hover:from-elysium-blue/40 hover:to-elysium-purple/40 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5 text-foreground/80" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">© 2024 Elysium. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
