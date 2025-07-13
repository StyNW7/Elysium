"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Eye,
  Heart,
  MessageSquare,
  MoreHorizontal,
  Search,
  Grid3X3,
  List,
  Music,
  Film,
  Gamepad2,
  BookOpen,
  Mic,
  Calendar,
  TrendingUp,
  Edit,
  Trash2,
  Download,
  ExternalLink,
} from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const contentData = [
  {
    id: 1,
    title: "Ethereal Dreams",
    type: "music",
    status: "published",
    views: 12500,
    likes: 890,
    comments: 45,
    shares: 23,
    revenue: 125.5,
    publishDate: "2024-01-15",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "3:45",
    description: "A dreamy ambient track that takes you on a journey through ethereal soundscapes.",
  },
  {
    id: 2,
    title: "Neon Nights",
    type: "film",
    status: "published",
    views: 8900,
    likes: 567,
    comments: 78,
    shares: 34,
    revenue: 89.2,
    publishDate: "2024-01-12",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "12:30",
    description: "A cyberpunk short film exploring the neon-lit streets of a futuristic city.",
  },
  {
    id: 3,
    title: "Quantum Quest",
    type: "game",
    status: "draft",
    views: 0,
    likes: 0,
    comments: 0,
    shares: 0,
    revenue: 0,
    publishDate: "2024-01-10",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "∞",
    description: "An interactive puzzle game that challenges players with quantum mechanics.",
  },
  {
    id: 4,
    title: "Mystic Tales",
    type: "story",
    status: "published",
    views: 6700,
    likes: 445,
    comments: 89,
    shares: 12,
    revenue: 67.8,
    publishDate: "2024-01-08",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "15 min read",
    description: "A collection of mystical short stories from ancient folklore.",
  },
  {
    id: 5,
    title: "Tech Talk Weekly",
    type: "podcast",
    status: "published",
    views: 3400,
    likes: 234,
    comments: 56,
    shares: 18,
    revenue: 45.6,
    publishDate: "2024-01-05",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "45:20",
    description: "Weekly discussions about the latest in technology and innovation.",
  },
  {
    id: 6,
    title: "Cosmic Journey",
    type: "music",
    status: "published",
    views: 9800,
    likes: 678,
    comments: 34,
    shares: 45,
    revenue: 98.7,
    publishDate: "2024-01-03",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "4:12",
    description: "An epic orchestral piece inspired by space exploration.",
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "music":
      return Music
    case "film":
      return Film
    case "game":
      return Gamepad2
    case "story":
      return BookOpen
    case "podcast":
      return Mic
    default:
      return Music
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "music":
      return "from-elysium-gold to-elysium-blue"
    case "film":
      return "from-elysium-blue to-elysium-purple"
    case "game":
      return "from-elysium-purple to-elysium-gold"
    case "story":
      return "from-elysium-gold to-elysium-purple"
    case "podcast":
      return "from-elysium-blue to-elysium-gold"
    default:
      return "from-elysium-gold to-elysium-blue"
  }
}

export default function ContentPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredContent = contentData.filter((content) => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = filterType === "all" || content.type === filterType
    const matchesStatus = filterStatus === "all" || content.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const totalStats = {
    totalViews: contentData.reduce((sum, content) => sum + content.views, 0),
    totalLikes: contentData.reduce((sum, content) => sum + content.likes, 0),
    totalRevenue: contentData.reduce((sum, content) => sum + content.revenue, 0),
    totalContent: contentData.length,
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-elysium-black to-elysium-black/95 ">
      <DashboardSidebar />

      <main className="flex-1 lg:ml-64 p-6 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-elysium-gold via-elysium-blue to-elysium-purple bg-clip-text text-transparent">
              My Content
            </h1>
            <p className="text-white/60 text-lg mt-2">Manage and track your creative works</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-elysium-blue" : "text-white/60 hover:text-white"}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-elysium-blue" : "text-white/60 hover:text-white"}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              title: "Total Content",
              value: totalStats.totalContent,
              icon: BookOpen,
              color: "from-elysium-blue to-elysium-purple",
            },
            {
              title: "Total Views",
              value: totalStats.totalViews.toLocaleString(),
              icon: Eye,
              color: "from-elysium-purple to-elysium-gold",
            },
            {
              title: "Total Likes",
              value: totalStats.totalLikes.toLocaleString(),
              icon: Heart,
              color: "from-elysium-gold to-elysium-blue",
            },
            {
              title: "Total Revenue",
              value: `$${totalStats.totalRevenue.toFixed(2)}`,
              icon: TrendingUp,
              color: "from-elysium-blue to-elysium-gold",
            },
          ].map((stat, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
            <Input
              placeholder="Search your content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40"
            />
          </div>

          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full lg:w-48 bg-white/5 border-white/20 text-white">
              <SelectValue placeholder="Content Type" />
            </SelectTrigger>
            <SelectContent className="bg-elysium-black border-white/20">
              <SelectItem value="all" className="text-white hover:bg-white/10">
                All Types
              </SelectItem>
              <SelectItem value="music" className="text-white hover:bg-white/10">
                Music
              </SelectItem>
              <SelectItem value="film" className="text-white hover:bg-white/10">
                Film
              </SelectItem>
              <SelectItem value="game" className="text-white hover:bg-white/10">
                Game
              </SelectItem>
              <SelectItem value="story" className="text-white hover:bg-white/10">
                Story
              </SelectItem>
              <SelectItem value="podcast" className="text-white hover:bg-white/10">
                Podcast
              </SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full lg:w-48 bg-white/5 border-white/20 text-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-elysium-black border-white/20">
              <SelectItem value="all" className="text-white hover:bg-white/10">
                All Status
              </SelectItem>
              <SelectItem value="published" className="text-white hover:bg-white/10">
                Published
              </SelectItem>
              <SelectItem value="draft" className="text-white hover:bg-white/10">
                Draft
              </SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Content Grid/List */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((content, index) => {
                const TypeIcon = getTypeIcon(content.type)
                return (
                  <motion.div
                    key={content.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden">
                      <div className="relative">
                        <img
                          src={content.thumbnail || "/placeholder.svg"}
                          alt={content.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(content.type)}`}>
                            <TypeIcon className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge variant={content.status === "published" ? "default" : "secondary"}>
                            {content.status}
                          </Badge>
                        </div>
                        <div className="absolute bottom-3 right-3 text-white text-sm bg-black/50 px-2 py-1 rounded">
                          {content.duration}
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-white font-semibold text-lg truncate flex-1">{content.title}</h3>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-elysium-black border-white/20">
                              <DropdownMenuItem className="text-white hover:bg-white/10">
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-white hover:bg-white/10">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-white hover:bg-white/10">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-400 hover:bg-red-500/10">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <p className="text-white/60 text-sm mb-4 line-clamp-2">{content.description}</p>

                        <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(content.publishDate).toLocaleDateString()}
                          </span>
                          <span className="text-elysium-gold font-medium">${content.revenue.toFixed(2)}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1 text-white/60">
                              <Eye className="h-3 w-3" />
                              {content.views.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1 text-white/60">
                              <Heart className="h-3 w-3" />
                              {content.likes}
                            </span>
                            <span className="flex items-center gap-1 text-white/60">
                              <MessageSquare className="h-3 w-3" />
                              {content.comments}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredContent.map((content, index) => {
                const TypeIcon = getTypeIcon(content.type)
                return (
                  <motion.div
                    key={content.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-6">
                          <img
                            src={content.thumbnail || "/placeholder.svg"}
                            alt={content.title}
                            className="w-24 h-16 object-cover rounded-lg"
                          />

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`p-1.5 rounded-lg bg-gradient-to-r ${getTypeColor(content.type)}`}>
                                <TypeIcon className="h-3 w-3 text-white" />
                              </div>
                              <h3 className="text-white font-semibold truncate">{content.title}</h3>
                              <Badge
                                variant={content.status === "published" ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {content.status}
                              </Badge>
                            </div>
                            <p className="text-white/60 text-sm line-clamp-1 mb-2">{content.description}</p>
                            <div className="flex items-center gap-4 text-xs text-white/60">
                              <span>{new Date(content.publishDate).toLocaleDateString()}</span>
                              <span>{content.duration}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-6 text-sm text-white/60">
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {content.views.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {content.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              {content.comments}
                            </span>
                            <span className="text-elysium-gold font-medium">${content.revenue.toFixed(2)}</span>
                          </div>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-elysium-black border-white/20">
                              <DropdownMenuItem className="text-white hover:bg-white/10">
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-white hover:bg-white/10">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-white hover:bg-white/10">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-400 hover:bg-red-500/10">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          )}
        </motion.div>

        {filteredContent.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="text-white/40 mb-4">
              <BookOpen className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white/60 mb-2">No content found</h3>
              <p className="text-white/40">Try adjusting your search or filters</p>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  )
}
