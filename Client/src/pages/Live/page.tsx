"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Users,
  Eye,
  Heart,
  MessageCircle,
  Search,
  Filter,
  Radio,
  Video,
  Mic,
  Music,
  BookOpen,
  Gamepad2,
  Verified,
  Share2,
  MoreHorizontal,
} from "lucide-react"

// Mock data for live streams
const liveStreams = [
  {
    id: "1",
    title: "Creating Epic Fantasy Soundscapes Live",
    creator: {
      name: "Alex Chen",
      avatar: "/placeholder-user.jpg",
      verified: true,
      followers: 15400,
    },
    category: "Music",
    viewers: 2847,
    thumbnail: "/placeholder.jpg",
    tags: ["Fantasy", "Ambient", "Live Creation"],
    duration: "2:34:12",
    isLive: true,
  },
  {
    id: "2",
    title: "Interactive Story Building with AI",
    creator: {
      name: "Maya Rodriguez",
      avatar: "/placeholder-user.jpg",
      verified: true,
      followers: 8900,
    },
    category: "Story",
    viewers: 1523,
    thumbnail: "/placeholder.jpg",
    tags: ["AI", "Interactive", "Sci-Fi"],
    duration: "1:45:30",
    isLive: true,
  },
  {
    id: "3",
    title: "Voice Acting Masterclass - Character Voices",
    creator: {
      name: "David Kim",
      avatar: "/placeholder-user.jpg",
      verified: false,
      followers: 3200,
    },
    category: "Voice",
    viewers: 892,
    thumbnail: "/placeholder.jpg",
    tags: ["Voice Acting", "Tutorial", "Characters"],
    duration: "0:58:45",
    isLive: true,
  },
  {
    id: "4",
    title: "Game Development Stream - Building Worlds",
    creator: {
      name: "Sarah Johnson",
      avatar: "/placeholder-user.jpg",
      verified: true,
      followers: 12100,
    },
    category: "Game",
    viewers: 3421,
    thumbnail: "/placeholder.jpg",
    tags: ["Game Dev", "Unity", "World Building"],
    duration: "3:12:08",
    isLive: true,
  },
  {
    id: "5",
    title: "Podcast Recording - Future of AI Creativity",
    creator: {
      name: "Michael Brown",
      avatar: "/placeholder-user.jpg",
      verified: true,
      followers: 6700,
    },
    category: "Podcast",
    viewers: 1876,
    thumbnail: "/placeholder.jpg",
    tags: ["AI", "Future Tech", "Discussion"],
    duration: "1:23:17",
    isLive: true,
  },
  {
    id: "6",
    title: "Remix Challenge - Transforming Classical Music",
    creator: {
      name: "Emma Wilson",
      avatar: "/placeholder-user.jpg",
      verified: false,
      followers: 4500,
    },
    category: "Music",
    viewers: 1234,
    thumbnail: "/placeholder.jpg",
    tags: ["Remix", "Classical", "Electronic"],
    duration: "2:01:33",
    isLive: true,
  },
]

const categories = [
  { name: "All", icon: Radio, count: 156 },
  { name: "Music", icon: Music, count: 45 },
  { name: "Story", icon: BookOpen, count: 32 },
  { name: "Voice", icon: Mic, count: 28 },
  { name: "Game", icon: Gamepad2, count: 23 },
  { name: "Podcast", icon: Video, count: 18 },
]

export default function LivePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("viewers")
  const [filteredStreams, setFilteredStreams] = useState(liveStreams)

  useEffect(() => {
    const filtered = liveStreams.filter((stream) => {
      const matchesCategory = selectedCategory === "All" || stream.category === selectedCategory
      const matchesSearch =
        stream.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stream.creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stream.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })

    // Sort streams
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "viewers":
          return b.viewers - a.viewers
        case "recent":
          return new Date(b.duration).getTime() - new Date(a.duration).getTime()
        case "followers":
          return b.creator.followers - a.creator.followers
        default:
          return 0
      }
    })

    setFilteredStreams(filtered)
  }, [selectedCategory, searchQuery, sortBy])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Music":
        return Music
      case "Story":
        return BookOpen
      case "Voice":
        return Mic
      case "Game":
        return Gamepad2
      case "Podcast":
        return Video
      default:
        return Radio
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative container mx-auto px-6 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">
              Live on{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Elysium
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">Join creators as they build, create, and share in real-time</p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
              >
                <Radio className="mr-2 h-5 w-5" />
                Go Live Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search live streams, creators, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 backdrop-blur-sm"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white backdrop-blur-sm"
              >
                <option value="viewers">Most Viewers</option>
                <option value="recent">Recently Started</option>
                <option value="followers">Top Creators</option>
              </select>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-6 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.name}</span>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {category.count}
                </Badge>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Live Streams Grid */}
      <div className="container mx-auto px-6 pb-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredStreams.map((stream, index) => {
              const CategoryIcon = getCategoryIcon(stream.category)
              return (
                <motion.div
                  key={stream.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <a href={`/live/${stream.id}`}>
                    <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 overflow-hidden group">
                      <div className="relative">
                        <img
                          src={stream.thumbnail || "/placeholder.svg"}
                          alt={stream.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* Live Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-red-600 text-white animate-pulse">
                            <Radio className="h-3 w-3 mr-1" />
                            LIVE
                          </Badge>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-white/20 text-white backdrop-blur-sm">
                            <CategoryIcon className="h-3 w-3 mr-1" />
                            {stream.category}
                          </Badge>
                        </div>

                        {/* Duration */}
                        <div className="absolute bottom-3 right-3">
                          <Badge className="bg-black/60 text-white">{stream.duration}</Badge>
                        </div>

                        {/* Viewer Count */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                          <div className="flex items-center gap-1 bg-black/60 px-2 py-1 rounded">
                            <Eye className="h-3 w-3" />
                            <span className="text-sm font-medium">{stream.viewers.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
                          {stream.title}
                        </h3>

                        {/* Creator Info */}
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={stream.creator.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{stream.creator.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-1">
                              <span className="text-gray-300 text-sm font-medium">{stream.creator.name}</span>
                              {stream.creator.verified && <Verified className="h-3 w-3 text-blue-400" />}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Users className="h-3 w-3" />
                              {stream.creator.followers.toLocaleString()} followers
                            </div>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {stream.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-white/10 text-gray-300 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-gray-400">
                            <button className="flex items-center gap-1 hover:text-red-400 transition-colors">
                              <Heart className="h-4 w-4" />
                              <span className="text-xs">Like</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                              <MessageCircle className="h-4 w-4" />
                              <span className="text-xs">Chat</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-green-400 transition-colors">
                              <Share2 className="h-4 w-4" />
                              <span className="text-xs">Share</span>
                            </button>
                          </div>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {filteredStreams.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <Radio className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No live streams found</h3>
            <p className="text-gray-400">Try adjusting your search or category filters</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
