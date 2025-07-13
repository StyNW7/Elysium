"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Music,
  BookOpen,
  Mic,
  Video,
  Gamepad2,
  Shuffle,
  Wand2,
  Sparkles,
  Play,
  Heart,
  Download,
  Star,
  Verified,
  Clock,
  Users,
} from "lucide-react"

// Mock content data for remixing
const remixableContent = [
  {
    id: "1",
    title: "Epic Fantasy Orchestra",
    type: "Music",
    creator: {
      name: "Alex Chen",
      avatar: "/placeholder-user.jpg",
      verified: true,
    },
    thumbnail: "/placeholder.jpg",
    duration: "4:32",
    plays: 125000,
    likes: 8900,
    downloads: 2300,
    tags: ["Orchestral", "Fantasy", "Epic"],
    remixCount: 45,
    difficulty: "Intermediate",
    rating: 4.8,
  },
  {
    id: "2",
    title: "Cyberpunk Detective Story",
    type: "Story",
    creator: {
      name: "Maya Rodriguez",
      avatar: "/placeholder-user.jpg",
      verified: true,
    },
    thumbnail: "/placeholder.jpg",
    duration: "12:45",
    plays: 89000,
    likes: 5600,
    downloads: 1800,
    tags: ["Cyberpunk", "Detective", "Noir"],
    remixCount: 23,
    difficulty: "Advanced",
    rating: 4.9,
  },
  {
    id: "3",
    title: "Character Voice Pack - Heroes",
    type: "Voice",
    creator: {
      name: "David Kim",
      avatar: "/placeholder-user.jpg",
      verified: false,
    },
    thumbnail: "/placeholder.jpg",
    duration: "8:20",
    plays: 67000,
    likes: 4200,
    downloads: 1500,
    tags: ["Character", "Heroes", "Fantasy"],
    remixCount: 67,
    difficulty: "Beginner",
    rating: 4.6,
  },
  {
    id: "4",
    title: "Space Exploration Podcast",
    type: "Podcast",
    creator: {
      name: "Sarah Johnson",
      avatar: "/placeholder-user.jpg",
      verified: true,
    },
    thumbnail: "/placeholder.jpg",
    duration: "45:12",
    plays: 156000,
    likes: 12000,
    downloads: 3400,
    tags: ["Space", "Science", "Educational"],
    remixCount: 12,
    difficulty: "Intermediate",
    rating: 4.7,
  },
  {
    id: "5",
    title: "Puzzle Game Mechanics",
    type: "Game",
    creator: {
      name: "Michael Brown",
      avatar: "/placeholder-user.jpg",
      verified: true,
    },
    thumbnail: "/placeholder.jpg",
    duration: "∞",
    plays: 234000,
    likes: 18000,
    downloads: 5600,
    tags: ["Puzzle", "Mechanics", "Interactive"],
    remixCount: 89,
    difficulty: "Advanced",
    rating: 4.9,
  },
  {
    id: "6",
    title: "Ambient Nature Sounds",
    type: "Music",
    creator: {
      name: "Emma Wilson",
      avatar: "/placeholder-user.jpg",
      verified: false,
    },
    thumbnail: "/placeholder.jpg",
    duration: "15:30",
    plays: 78000,
    likes: 3400,
    downloads: 1200,
    tags: ["Ambient", "Nature", "Relaxing"],
    remixCount: 34,
    difficulty: "Beginner",
    rating: 4.5,
  },
]

const contentTypes = [
  { name: "All", icon: Shuffle, count: 156 },
  { name: "Music", icon: Music, count: 45 },
  { name: "Story", icon: BookOpen, count: 32 },
  { name: "Voice", icon: Mic, count: 28 },
  { name: "Podcast", icon: Video, count: 18 },
  { name: "Game", icon: Gamepad2, count: 23 },
]

const remixTemplates = [
  {
    id: "1",
    name: "Music Remix Studio",
    description: "Advanced audio mixing and effects",
    icon: Music,
    features: ["Multi-track editing", "Effects library", "AI harmonization"],
    difficulty: "Intermediate",
  },
  {
    id: "2",
    name: "Story Weaver",
    description: "Interactive narrative builder",
    icon: BookOpen,
    features: ["Character development", "Plot branching", "AI dialogue"],
    difficulty: "Beginner",
  },
  {
    id: "3",
    name: "Voice Transformer",
    description: "Voice modulation and synthesis",
    icon: Mic,
    features: ["Voice cloning", "Style transfer", "Real-time effects"],
    difficulty: "Advanced",
  },
  {
    id: "4",
    name: "Game Modifier",
    description: "Interactive game element editor",
    icon: Gamepad2,
    features: ["Mechanics editor", "Asset library", "Physics engine"],
    difficulty: "Advanced",
  },
]

export default function RemixPage() {
  const [selectedType, setSelectedType] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [filteredContent, setFilteredContent] = useState(remixableContent)

  useEffect(() => {
    const filtered = remixableContent.filter((content) => {
      const matchesType = selectedType === "All" || content.type === selectedType
      const matchesSearch =
        content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesType && matchesSearch
    })

    // Sort content
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.plays - a.plays
        case "recent":
          return b.id.localeCompare(a.id)
        case "remixes":
          return b.remixCount - a.remixCount
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })

    setFilteredContent(filtered)
  }, [selectedType, searchQuery, sortBy])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Music":
        return Music
      case "Story":
        return BookOpen
      case "Voice":
        return Mic
      case "Podcast":
        return Video
      case "Game":
        return Gamepad2
      default:
        return Shuffle
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-600"
      case "Intermediate":
        return "bg-yellow-600"
      case "Advanced":
        return "bg-red-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-16">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative container mx-auto px-6 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Remix</span>{" "}
              Studio
            </h1>
            <p className="text-xl text-gray-300 mb-8">Transform existing content into something uniquely yours</p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <Wand2 className="h-5 w-5 text-purple-400" />
                <span>AI-Powered Tools</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Sparkles className="h-5 w-5 text-pink-400" />
                <span>Creative Templates</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Community Driven</span>
              </div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search content to remix..."
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
                <option value="popular">Most Popular</option>
                <option value="recent">Recently Added</option>
                <option value="remixes">Most Remixed</option>
                <option value="rating">Highest Rated</option>
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

      <div className="container mx-auto px-6 pb-12">
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/10 backdrop-blur-sm">
            <TabsTrigger
              value="content"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600"
            >
              Select Content
            </TabsTrigger>
            <TabsTrigger
              value="templates"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600"
            >
              Remix Templates
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            {/* Content Types */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {contentTypes.map((type) => {
                const Icon = type.icon
                return (
                  <motion.button
                    key={type.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedType(type.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      selectedType === type.name
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{type.name}</span>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {type.count}
                    </Badge>
                  </motion.button>
                )
              })}
            </div>

            {/* Content Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredContent.map((content, index) => {
                  const TypeIcon = getTypeIcon(content.type)
                  return (
                    <motion.div
                      key={content.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 overflow-hidden group">
                        <div className="relative">
                          <img
                            src={content.thumbnail || "/placeholder.svg"}
                            alt={content.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                          {/* Type Badge */}
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-white/20 text-white backdrop-blur-sm">
                              <TypeIcon className="h-3 w-3 mr-1" />
                              {content.type}
                            </Badge>
                          </div>

                          {/* Difficulty Badge */}
                          <div className="absolute top-3 right-3">
                            <Badge className={`${getDifficultyColor(content.difficulty)} text-white`}>
                              {content.difficulty}
                            </Badge>
                          </div>

                          {/* Duration */}
                          <div className="absolute bottom-3 right-3">
                            <Badge className="bg-black/60 text-white">
                              <Clock className="h-3 w-3 mr-1" />
                              {content.duration}
                            </Badge>
                          </div>

                          {/* Stats */}
                          <div className="absolute bottom-3 left-3 flex items-center gap-2">
                            <div className="flex items-center gap-1 bg-black/60 px-2 py-1 rounded text-white text-xs">
                              <Play className="h-3 w-3" />
                              {(content.plays / 1000).toFixed(0)}K
                            </div>
                            <div className="flex items-center gap-1 bg-black/60 px-2 py-1 rounded text-white text-xs">
                              <Shuffle className="h-3 w-3" />
                              {content.remixCount}
                            </div>
                          </div>
                        </div>

                        <CardContent className="p-4">
                          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
                            {content.title}
                          </h3>

                          {/* Creator Info */}
                          <div className="flex items-center gap-3 mb-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={content.creator.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{content.creator.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-1">
                                <span className="text-gray-300 text-sm font-medium">{content.creator.name}</span>
                                {content.creator.verified && <Verified className="h-3 w-3 text-blue-400" />}
                              </div>
                              <div className="flex items-center gap-1 text-xs text-gray-400">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                {content.rating}
                              </div>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {content.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="bg-white/10 text-gray-300 text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Actions */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                              <div className="flex items-center gap-1">
                                <Heart className="h-4 w-4" />
                                {(content.likes / 1000).toFixed(1)}K
                              </div>
                              <div className="flex items-center gap-1">
                                <Download className="h-4 w-4" />
                                {(content.downloads / 1000).toFixed(1)}K
                              </div>
                            </div>
                            <a href={`/remix/${content.type.toLowerCase()}/${content.id}`}>
                              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                <Wand2 className="h-4 w-4 mr-2" />
                                Remix
                              </Button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          </TabsContent>

          <TabsContent value="templates">
            {/* Remix Templates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {remixTemplates.map((template, index) => {
                const Icon = template.icon
                return (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 h-full">
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-fit">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-white text-xl">{template.name}</CardTitle>
                        <p className="text-gray-300 text-sm">{template.description}</p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3 mb-4">
                          {template.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                              <Sparkles className="h-3 w-3 text-purple-400" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <Badge className={`${getDifficultyColor(template.difficulty)} text-white`}>
                            {template.difficulty}
                          </Badge>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                          <Wand2 className="h-4 w-4 mr-2" />
                          Use Template
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
