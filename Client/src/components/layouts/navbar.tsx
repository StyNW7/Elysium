"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { useAuth } from '@/context/AuthContext'

export default function Navbar() {

  const { isLoggedIn } = useAuth()

  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Realms", href: "/realms" },
    { name: "All Elysium Features", href: "/features" },
  ]

  function handleAuth(){
    navigate("/auth")
  }

  function handleDashboard(){
    navigate("/dashboard")
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2" onClick={() => navigate("/")}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-elysium-gold to-elysium-purple flex items-center justify-center">
              <span className="text-black font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-elysium-gold to-elysium-purple bg-clip-text text-transparent">
              Elysium
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button> */}

            {isLoggedIn && (
              <Button 
                variant="outline"
                className="hidden md:flex relative overflow-hidden bg-transparent hover:bg-transparent group"
                onClick={handleDashboard}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-elysium-blue to-elysium-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-elysium-blue to-elysium-purple group-hover:text-white transition-colors duration-300">
                  Dashboard
                </span>
              </Button>
            )}

            <Button className="hidden md:flex bg-gradient-to-r from-elysium-blue to-elysium-purple hover:from-elysium-purple hover:to-elysium-blue text-white" onClick={handleAuth}>
              Join Elysium
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border mt-2 pt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full bg-gradient-to-r from-elysium-blue to-elysium-purple hover:from-elysium-purple hover:to-elysium-blue text-white" onClick={handleAuth}>
                Join Elysium
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
