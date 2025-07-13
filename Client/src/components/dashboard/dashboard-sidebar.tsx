"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  Plus,
  BarChart3,
  Settings,
  Users,
  Heart,
  MessageSquare,
  Bookmark,
  Crown,
  LogOut,
  Menu,
  X,
  Home,
  Search,
  Bell,
  Zap,
} from "lucide-react"
import { useLocation, useNavigate } from "react-router"

const menuItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    badge: null,
  },
  {
    title: "Create",
    href: "/dashboard/create",
    icon: Plus,
    badge: null,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
    badge: null,
  },
  {
    title: "Content",
    href: "/dashboard/content",
    icon: Bookmark,
    badge: "132",
  },
  {
    title: "Community",
    href: "/dashboard/community",
    icon: Users,
    badge: null,
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
    badge: "3",
  },
  {
    title: "Likes",
    href: "/dashboard/likes",
    icon: Heart,
    badge: null,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
    badge: "12",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    badge: null,
  },
]

const quickActions = [
  { title: "Back to Elysium", href: "/", icon: Home },
  { title: "Explore", href: "/explore", icon: Search },
  { title: "Upgrade to Pro", href: "/upgrade", icon: Crown },
]

import { supabase } from "@/lib/supabase"

export function DashboardSidebar() {

  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate("/auth")
  }


  const SidebarContent = () => (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <div className="p-6 border-b border-white/10 flex-none">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-elysium-gold to-elysium-blue rounded-lg flex items-center justify-center">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg">Elysium</h2>
            <p className="text-white/60 text-xs">Creator Dashboard</p>
          </div>
        </div>
      </div>

      {/* Fixed User Profile */}
      <div className="p-6 border-b border-white/10 flex-none">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-elysium-gold/30">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback className="bg-elysium-gold text-elysium-black font-bold">EC</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-medium truncate">Elysian Creator</h3>
            <div className="flex items-center gap-2">
              <Badge className="bg-elysium-gold/20 text-elysium-gold border-elysium-gold/30 text-xs">
                <Crown className="h-2 w-2 mr-1" />
                Pro
              </Badge>
              <span className="text-white/60 text-xs">Level 15</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <a key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-elysium-blue/20 to-elysium-purple/20 border border-elysium-blue/30 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.title}</span>
                  {item.badge && (
                    <Badge className="ml-auto bg-elysium-gold/20 text-elysium-gold border-elysium-gold/30 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </motion.div>
              </a>
            )
          })}
        </nav>

        {/* Quick Actions */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <h4 className="text-white/60 text-sm font-medium mb-3">Quick Actions</h4>
          {quickActions.map((action) => (
            <a key={action.href} href={action.href}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <action.icon className="h-4 w-4" />
                <span className="text-sm">{action.title}</span>
              </motion.div>
            </a>
          ))}
        </div>
      </div>

      {/* Fixed Logout */}
      <div className="p-4 border-t border-white/10 flex-none">
        <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-red-500/10" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-elysium-black/95 backdrop-blur-xl border-r border-white/10 z-30">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isMobileOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 h-full w-64 bg-elysium-black/95 backdrop-blur-xl border-r border-white/10 z-50 lg:hidden"
      >
        <SidebarContent />
      </motion.aside>
    </>
  )
}
