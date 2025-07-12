/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Grid, List, Play, Heart, Eye, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ElysiumContent {
  id: string
  title: string
  creator: string
  type: "music" | "film" | "game" | "story" | "podcast"
  genre: string
  tags: string[]
  views: number
  likes: number
  rating: number
  description: string
  coverImage: string
  duration?: string
  createdAt: string
}

const mockContent: ElysiumContent[] = [
  {
    id: "1",
    title: "Ethereal Dreams",
    creator: "SoundWeaver",
    type: "music",
    genre: "Ambient",
    tags: ["Chill", "Lo-Fi", "Fantasy"],
    views: 12500,
    likes: 890,
    rating: 4.8,
    description: "A mesmerizing journey through ethereal soundscapes that transport you to otherworldly realms.",
    coverImage: "/Images/Content/music-2.png",
    duration: "3:45",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Neon Shadows",
    creator: "CyberVision",
    type: "film",
    genre: "Sci-Fi",
    tags: ["Dark", "Cyberpunk", "Action"],
    views: 45200,
    likes: 3200,
    rating: 4.6,
    description: "A cyberpunk thriller set in a dystopian future where reality and virtual worlds collide.",
    coverImage: "/Images/Content/movie.png",
    duration: "12:30",
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    title: "Mystic Realms",
    creator: "GameForge",
    type: "game",
    genre: "RPG",
    tags: ["Fantasy", "Adventure", "Magic"],
    views: 78900,
    likes: 5600,
    rating: 4.9,
    description: "An immersive RPG experience where magic and mystery await around every corner.",
    coverImage: "/Images/Content/game.png",
    createdAt: "2024-01-08",
  },
  {
    id: "4",
    title: "The Last Echo",
    creator: "StoryTeller",
    type: "story",
    genre: "Mystery",
    tags: ["Dark", "Thriller", "Suspense"],
    views: 23400,
    likes: 1800,
    rating: 4.7,
    description: "A gripping tale of mystery and suspense that will keep you on the edge of your seat.",
    coverImage: "/Images/Content/story.png",
    createdAt: "2024-01-05",
  },
  {
    id: "5",
    title: "Cosmic Conversations",
    creator: "VoidCaster",
    type: "podcast",
    genre: "Science",
    tags: ["Educational", "Space", "Philosophy"],
    views: 34500,
    likes: 2100,
    rating: 4.5,
    description: "Deep discussions about the universe, consciousness, and our place in the cosmos.",
    coverImage: "/Images/Content/podcast.png",
    duration: "45:20",
    createdAt: "2024-01-03",
  },
  {
    id: "6",
    title: "Midnight Melodies",
    creator: "NightComposer",
    type: "music",
    genre: "Jazz",
    tags: ["Chill", "Jazz", "Night"],
    views: 18700,
    likes: 1200,
    rating: 4.4,
    description: "Smooth jazz compositions perfect for late-night contemplation and relaxation.",
    coverImage: "/Images/Content/music-1.png",
    duration: "4:12",
    createdAt: "2024-01-01",
  },
]

const contentTypes = ["all", "music", "film", "game", "story", "podcast"]
const sortOptions = ["newest", "popular", "recommended", "genre"]
const allTags = [
  "Fantasy",
  "Chill",
  "Lo-Fi",
  "Dark",
  "Cyberpunk",
  "Action",
  "Adventure",
  "Magic",
  "Thriller",
  "Suspense",
  "Educational",
  "Space",
  "Philosophy",
  "Jazz",
  "Night",
]

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filteredContent, setFilteredContent] = useState<ElysiumContent[]>(mockContent)
  const [isLoading, setIsLoading] = useState(false)

  const filterContent = useCallback(() => {
    let filtered = [...mockContent]

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter((item) => item.type === selectedType)
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((item) => selectedTags.some((tag) => item.tags.includes(tag)))
    }

    // Sort content
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.views - a.views)
        break
      case "recommended":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "genre":
        filtered.sort((a, b) => a.genre.localeCompare(b.genre))
        break
      default: // newest
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }

    setFilteredContent(filtered)
  }, [searchQuery, selectedType, sortBy, selectedTags])

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      filterContent()
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [filterContent])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "music":
        return "🎵"
      case "film":
        return "🎬"
      case "game":
        return "🎮"
      case "story":
        return "📚"
      case "podcast":
        return "🎙️"
      default:
        return "✨"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/50">

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6a75f1]/10 via-[#a28ad6]/10 to-[#f5d87a]/10" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#6a75f1] via-[#a28ad6] to-[#f5d87a] bg-clip-text text-transparent">
              Explore Elysium
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Discover infinite worlds of creativity and imagination
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search content, creators, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card/50 backdrop-blur-sm border-border/50 focus:border-[#6a75f1]/50"
              />
            </div>

            {/* Type Filter */}
            <Tabs value={selectedType} onValueChange={setSelectedType} className="w-full lg:w-auto">
              <TabsList className="grid grid-cols-6 w-full lg:w-auto bg-card/50 backdrop-blur-sm">
                {contentTypes.map((type) => (
                  <TabsTrigger key={type} value={type} className="capitalize">
                    {type === "all" ? "All" : `${getTypeIcon(type)} ${type}`}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Sort and View Mode */}
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-card/50 backdrop-blur-sm border-border/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="genre">Genre</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] hover:from-[#a28ad6] hover:to-[#f5d87a]"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] hover:from-[#a28ad6] hover:to-[#f5d87a]"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Tag Filter */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Filter by Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? "bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] hover:from-[#a28ad6] hover:to-[#f5d87a]"
                      : "hover:bg-card/50"
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center py-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border-4 border-[#6a75f1]/20 border-t-[#6a75f1] rounded-full animate-spin" />
                  <span className="text-lg text-muted-foreground">Loading content...</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {filteredContent.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold mb-2">No content found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters or search query</p>
                  </div>
                ) : (
                  <div
                    className={`grid gap-6 ${
                      viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
                    }`}
                  >
                    {filteredContent.map((content, index) => (
                      <motion.div
                        key={content.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-[#6a75f1]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#6a75f1]/10">
                          <div className="relative">
                            <div className="aspect-square overflow-hidden">
                              <img
                                src={content.coverImage || "/placeholder.svg"}
                                alt={content.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-3 left-3">
                              <Badge className="bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] text-white">
                                {getTypeIcon(content.type)} {content.type}
                              </Badge>
                            </div>
                            <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                              <Star className="w-3 h-3 text-[#f5d87a] fill-current" />
                              <span className="text-xs text-white">{content.rating}</span>
                            </div>
                            <Button
                              size="sm"
                              className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] hover:from-[#a28ad6] hover:to-[#f5d87a]"
                            >
                              <Play className="w-4 h-4" />
                            </Button>
                          </div>

                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-bold text-lg line-clamp-1 group-hover:text-[#6a75f1] transition-colors">
                                {content.title}
                              </h3>
                              {content.duration && (
                                <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                                  {content.duration}
                                </span>
                              )}
                            </div>

                            <p className="text-sm text-muted-foreground mb-2">by {content.creator}</p>

                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="outline" className="text-xs">
                                {content.genre}
                              </Badge>
                              {content.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{content.description}</p>

                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <Eye className="w-4 h-4" />
                                  <span>{formatNumber(content.views)}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Heart className="w-4 h-4" />
                                  <span>{formatNumber(content.likes)}</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Load More Button */}
          {filteredContent.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] hover:from-[#a28ad6] hover:to-[#f5d87a] text-white px-8 py-3"
              >
                Load More Content
              </Button>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  )
}
