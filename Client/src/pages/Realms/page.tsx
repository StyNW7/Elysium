"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Grid3X3,
  List,
  Eye,
  Heart,
  Star,
  Users,
  TrendingUp,
  Sparkles,
  X,
  Globe,
  Music,
  Film,
  Gamepad2,
  BookOpen,
  Mic,
} from "lucide-react"

const realmCategories = [
  { id: "all", label: "All Realms", icon: Sparkles },
  { id: "fantasy", label: "Fantasy", icon: Sparkles },
  { id: "sci-fi", label: "Sci-Fi", icon: Globe },
  { id: "horror", label: "Horror", icon: Globe },
  { id: "romance", label: "Romance", icon: Heart },
  { id: "adventure", label: "Adventure", icon: Globe },
  { id: "mystery", label: "Mystery", icon: Globe },
]

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Most Popular" },
  { value: "trending", label: "Trending" },
  { value: "top-rated", label: "Top Rated" },
  { value: "most-content", label: "Most Content" },
]

const moodTags = [
  "Dark",
  "Uplifting",
  "Mysterious",
  "Romantic",
  "Epic",
  "Chill",
  "Intense",
  "Dreamy",
  "Nostalgic",
  "Futuristic",
  "Magical",
  "Peaceful",
]

const mockRealms = [
  {
    id: 1,
    title: "Ethereal Dreamscape",
    description:
      "A mystical realm where dreams and reality intertwine, filled with ambient music, ethereal stories, and magical experiences.",
    creator: "Luna Starweaver",
    category: "fantasy",
    coverImage: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=60&width=60",
    stats: {
      followers: 15420,
      totalContent: 47,
      views: 234567,
      rating: 4.8,
    },
    contentTypes: {
      music: 12,
      stories: 8,
      videos: 15,
      games: 7,
      podcasts: 5,
    },
    tags: ["Dreamy", "Magical", "Peaceful"],
    createdAt: "2023-08-15",
    lastUpdated: "2024-01-20",
    featured: true,
  },
  {
    id: 2,
    title: "Cyberpunk Nexus",
    description:
      "A futuristic digital realm exploring the intersection of technology and humanity through immersive content.",
    creator: "Neon Prophet",
    category: "sci-fi",
    coverImage: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=60&width=60",
    stats: {
      followers: 28900,
      totalContent: 63,
      views: 456789,
      rating: 4.6,
    },
    contentTypes: {
      music: 18,
      stories: 12,
      videos: 20,
      games: 8,
      podcasts: 5,
    },
    tags: ["Futuristic", "Dark", "Intense"],
    createdAt: "2023-06-10",
    lastUpdated: "2024-01-18",
    featured: true,
  },
  {
    id: 3,
    title: "Whispering Woods",
    description: "An enchanted forest realm filled with nature sounds, folk tales, and mystical adventures.",
    creator: "Forest Sage",
    category: "fantasy",
    coverImage: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=60&width=60",
    stats: {
      followers: 12340,
      totalContent: 35,
      views: 189234,
      rating: 4.9,
    },
    contentTypes: {
      music: 10,
      stories: 15,
      videos: 6,
      games: 2,
      podcasts: 2,
    },
    tags: ["Peaceful", "Magical", "Nostalgic"],
    createdAt: "2023-09-22",
    lastUpdated: "2024-01-15",
    featured: false,
  },
  {
    id: 4,
    title: "Midnight Chronicles",
    description:
      "A dark and mysterious realm where horror stories, eerie music, and spine-chilling content come to life.",
    creator: "Shadow Weaver",
    category: "horror",
    coverImage: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=60&width=60",
    stats: {
      followers: 8750,
      totalContent: 28,
      views: 145678,
      rating: 4.4,
    },
    contentTypes: {
      music: 8,
      stories: 12,
      videos: 5,
      games: 2,
      podcasts: 1,
    },
    tags: ["Dark", "Mysterious", "Intense"],
    createdAt: "2023-10-31",
    lastUpdated: "2024-01-12",
    featured: false,
  },
  {
    id: 5,
    title: "Cosmic Love",
    description:
      "A romantic realm exploring love across the universe through heartfelt music, stories, and visual content.",
    creator: "Stellar Heart",
    category: "romance",
    coverImage: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=60&width=60",
    stats: {
      followers: 19680,
      totalContent: 42,
      views: 298765,
      rating: 4.7,
    },
    contentTypes: {
      music: 16,
      stories: 14,
      videos: 8,
      games: 2,
      podcasts: 2,
    },
    tags: ["Romantic", "Uplifting", "Dreamy"],
    createdAt: "2023-07-14",
    lastUpdated: "2024-01-19",
    featured: true,
  },
  {
    id: 6,
    title: "Adventure Peaks",
    description: "An action-packed realm featuring thrilling adventures, epic music, and adrenaline-pumping content.",
    creator: "Peak Explorer",
    category: "adventure",
    coverImage: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=60&width=60",
    stats: {
      followers: 22150,
      totalContent: 56,
      views: 387654,
      rating: 4.5,
    },
    contentTypes: {
      music: 14,
      stories: 10,
      videos: 18,
      games: 12,
      podcasts: 2,
    },
    tags: ["Epic", "Intense", "Uplifting"],
    createdAt: "2023-05-20",
    lastUpdated: "2024-01-17",
    featured: false,
  },
]

export default function RealmsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filteredRealms, setFilteredRealms] = useState(mockRealms)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, ] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      let filtered = mockRealms

      // Filter by category
      if (selectedCategory !== "all") {
        filtered = filtered.filter((realm) => realm.category === selectedCategory)
      }

      // Filter by search query
      if (searchQuery) {
        filtered = filtered.filter(
          (realm) =>
            realm.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            realm.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
            realm.description.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      }

      // Filter by tags
      if (selectedTags.length > 0) {
        filtered = filtered.filter((realm) => selectedTags.some((tag) => realm.tags.includes(tag)))
      }

      // Sort
      switch (sortBy) {
        case "popular":
          filtered.sort((a, b) => b.stats.followers - a.stats.followers)
          break
        case "trending":
          filtered.sort((a, b) => b.stats.views - a.stats.views)
          break
        case "top-rated":
          filtered.sort((a, b) => b.stats.rating - a.stats.rating)
          break
        case "most-content":
          filtered.sort((a, b) => b.stats.totalContent - a.stats.totalContent)
          break
        case "newest":
        default:
          filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          break
      }

      setFilteredRealms(filtered)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery, selectedCategory, sortBy, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case "music":
        return Music
      case "videos":
        return Film
      case "games":
        return Gamepad2
      case "stories":
        return BookOpen
      case "podcasts":
        return Mic
      default:
        return Globe
    }
  }

  const RealmCard = ({ realm }: { realm: (typeof mockRealms)[0] }) => {
    const categoryConfig = realmCategories.find((c) => c.id === realm.category)!

    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -5 }}
        className="group"
      >
        <a href={`/realms/${realm.id}`}>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden h-full">
            <div className="relative">
              <img
                src={realm.coverImage || "/placeholder.svg"}
                alt={realm.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Featured Badge */}
              {realm.featured && (
                <Badge className="absolute top-3 left-3 bg-gradient-to-r from-elysium-gold to-yellow-500">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Featured
                </Badge>
              )}

              {/* Category Badge */}
              <Badge className="absolute top-3 right-3 bg-gradient-to-r from-elysium-blue to-elysium-purple">
                <categoryConfig.icon className="h-3 w-3 mr-1" />
                {categoryConfig.label}
              </Badge>

              {/* Rating */}
              <div className="absolute bottom-3 right-3 flex items-center bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                <Star className="h-3 w-3 text-elysium-gold fill-current mr-1" />
                <span className="text-white text-xs font-medium">{realm.stats.rating}</span>
              </div>
            </div>

            <CardContent className="p-4 space-y-3">
              {/* Creator Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={realm.avatar || "/placeholder.svg"}
                  alt={realm.creator}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-elysium-gold transition-colors line-clamp-1">
                    {realm.title}
                  </h3>
                  <p className="text-white/60 text-sm">by {realm.creator}</p>
                </div>
              </div>

              <p className="text-white/70 text-sm line-clamp-2">{realm.description}</p>

              {/* Content Types */}
              <div className="flex items-center space-x-3 text-xs text-white/60">
                {Object.entries(realm.contentTypes).map(([type, count]) => {
                  if (count === 0) return null
                  const Icon = getContentTypeIcon(type)
                  return (
                    <div key={type} className="flex items-center space-x-1">
                      <Icon className="h-3 w-3" />
                      <span>{count}</span>
                    </div>
                  )
                })}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-white/60">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{formatNumber(realm.stats.followers)}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{formatNumber(realm.stats.views)}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Globe className="h-3 w-3" />
                    <span>{realm.stats.totalContent}</span>
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {realm.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs bg-white/10 text-white/70">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </a>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-elysium-black via-elysium-black/95 to-elysium-purple/20 pt-20 pb-6">

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-elysium-gold via-elysium-blue to-elysium-purple bg-clip-text text-transparent">
            Discover Realms
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore immersive worlds created by talented creators, each containing unique collections of music, stories,
            games, and more
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search realms, creators, or descriptions..."
              className="pl-12 h-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-elysium-gold"
            />
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-7 bg-white/5 border border-white/10">
              {realmCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-elysium-blue data-[state=active]:to-elysium-purple"
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Filters Row */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-white/5 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-elysium-black border-white/20">
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-white hover:bg-white/10">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex bg-white/5 border border-white/20 rounded-lg p-1">
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

            {/* Results Count */}
            <div className="text-white/60 text-sm">{filteredRealms.length} realms found</div>
          </div>

          {/* Mood Tags Filter */}
          <div className="space-y-3">
            <h3 className="text-white font-medium flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter by Mood
            </h3>
            <div className="flex flex-wrap gap-2">
              {moodTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleTag(tag)}
                  className={`${
                    selectedTags.includes(tag)
                      ? "bg-gradient-to-r from-elysium-blue to-elysium-purple text-white"
                      : "border-white/20 text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tag}
                  {selectedTags.includes(tag) && <X className="h-3 w-3 ml-1" />}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Realms Grid */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-white/5 rounded-lg h-64 mb-4" />
                  <div className="space-y-2">
                    <div className="bg-white/5 rounded h-4 w-3/4" />
                    <div className="bg-white/5 rounded h-3 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredRealms.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-white/40" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">No realms found</h3>
              <p className="text-white/60">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {filteredRealms.map((realm) => (
                <RealmCard key={realm.id} realm={realm} />
              ))}
            </div>
          )}
        </motion.div>

        {/* Load More */}
        {!isLoading && filteredRealms.length > 0 && hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-elysium-blue to-elysium-purple hover:from-elysium-blue/80 hover:to-elysium-purple/80"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              Load More Realms
            </Button>
          </motion.div>
        )}
      </main>

    </div>
  )
}
