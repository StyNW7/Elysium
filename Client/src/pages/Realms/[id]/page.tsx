/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Heart,
  Bookmark,
  Share2,
  Eye,
  Users,
  Star,
  Clock,
  Calendar,
  Music,
  Film,
  Gamepad2,
  BookOpen,
  Mic,
  Play,
  Globe,
} from "lucide-react"

import { useParams } from "react-router-dom"

export default function RealmDetailPage() {

  const { id } = useParams<{ id: string }>()
  const [isFollowing, setIsFollowing] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [content, setContent] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  // Mock realm data
  const realmData = {
    id: id,
    title: "Ethereal Dreamscape",
    description:
      "A mystical realm where dreams and reality intertwine, filled with ambient music, ethereal stories, and magical experiences that transport you to otherworldly dimensions.",
    creator: {
      name: "Luna Starweaver",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
      followers: 45200,
      bio: "Digital artist and world builder creating immersive experiences across multiple mediums.",
    },
    coverImage: "/placeholder.svg?height=600&width=1200",
    category: "Fantasy",
    tags: ["Dreamy", "Magical", "Peaceful", "Ambient", "Mystical"],
    stats: {
      followers: 15420,
      totalContent: 47,
      views: 234567,
      rating: 4.8,
      likes: 8920,
    },
    contentTypes: {
      music: 12,
      stories: 8,
      videos: 15,
      games: 7,
      podcasts: 5,
    },
    createdAt: "2023-08-15",
    lastUpdated: "2024-01-20",
    featured: true,
  }

  // Mock content data
  const mockContent = [
    {
      id: 1,
      title: "Ethereal Dreams",
      type: "music",
      description: "A mesmerizing ambient track that captures the essence of floating through dreamscapes.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "4:32",
      views: 12500,
      likes: 890,
      rating: 4.8,
      createdAt: "2024-01-20",
    },
    {
      id: 2,
      title: "The Last Guardian",
      type: "video",
      description: "A short film exploring the mystical guardians of the ethereal realm.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "12:45",
      views: 8900,
      likes: 567,
      rating: 4.6,
      createdAt: "2024-01-18",
    },
    {
      id: 3,
      title: "Quantum Quest",
      type: "game",
      description: "An interactive adventure through the quantum dimensions of the dreamscape.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "∞",
      views: 15600,
      likes: 1200,
      rating: 4.9,
      createdAt: "2024-01-15",
    },
    {
      id: 4,
      title: "Whispers of the Void",
      type: "story",
      description: "A mystical tale of discovery in the ethereal realm's deepest mysteries.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "15 min read",
      views: 6700,
      likes: 445,
      rating: 4.7,
      createdAt: "2024-01-12",
    },
    {
      id: 5,
      title: "Dreamscape Dialogues",
      type: "podcast",
      description: "Conversations about the nature of dreams and reality with ethereal beings.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "45:20",
      views: 9800,
      likes: 678,
      rating: 4.5,
      createdAt: "2024-01-10",
    },
    {
      id: 6,
      title: "Celestial Harmony",
      type: "music",
      description: "Orchestral piece inspired by the movement of stars in the ethereal sky.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "6:18",
      views: 18900,
      likes: 1456,
      rating: 4.9,
      createdAt: "2024-01-08",
    },
  ]

  const loadMoreContent = useCallback(() => {
    if (isLoading || !hasMore) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const newContent = mockContent.map((item) => ({
        ...item,
        id: item.id + page * 10,
        title: `${item.title} ${page + 1}`,
      }))

      setContent((prev) => [...prev, ...newContent])
      setPage((prev) => prev + 1)
      setIsLoading(false)

      // Simulate end of content after 3 pages
      if (page >= 3) {
        setHasMore(false)
      }
    }, 1000)
  }, [isLoading, hasMore, page])

  useEffect(() => {
    // Initial load
    setContent(mockContent)
    setPage(1)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
        loadMoreContent()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [loadMoreContent])

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case "music":
        return Music
      case "video":
        return Film
      case "game":
        return Gamepad2
      case "story":
        return BookOpen
      case "podcast":
        return Mic
      default:
        return Globe
    }
  }

  const getContentTypeColor = (type: string) => {
    switch (type) {
      case "music":
        return "from-purple-500 to-pink-500"
      case "video":
        return "from-blue-500 to-cyan-500"
      case "game":
        return "from-green-500 to-emerald-500"
      case "story":
        return "from-orange-500 to-red-500"
      case "podcast":
        return "from-yellow-500 to-orange-500"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  const filteredContent = activeTab === "all" ? content : content.filter((item) => item.type === activeTab)

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  const ContentCard = ({ item }: { item: any }) => {
    const Icon = getContentTypeIcon(item.type)
    const colorClass = getContentTypeColor(item.type)

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="group"
      >
        <a href={`/${item.type}/${item.id}`}>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden">
            <div className="relative">
              <img
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                  <Play className="h-5 w-5 text-white" />
                </Button>
              </div>

              {/* Type Badge */}
              <Badge className={`absolute top-3 left-3 bg-gradient-to-r ${colorClass}`}>
                <Icon className="h-3 w-3 mr-1" />
                {item.type}
              </Badge>

              {/* Duration */}
              <Badge className="absolute top-3 right-3 bg-black/50 text-white">
                <Clock className="h-3 w-3 mr-1" />
                {item.duration}
              </Badge>

              {/* Rating */}
              <div className="absolute bottom-3 right-3 flex items-center bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                <Star className="h-3 w-3 text-elysium-gold fill-current mr-1" />
                <span className="text-white text-xs font-medium">{item.rating}</span>
              </div>
            </div>

            <CardContent className="p-4 space-y-3">
              <div>
                <h3 className="text-white font-semibold text-lg group-hover:text-elysium-gold transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2 mt-1">{item.description}</p>
              </div>

              <div className="flex items-center justify-between text-sm text-white/60">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {formatNumber(item.views)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    {formatNumber(item.likes)}
                  </span>
                </div>
                <span className="text-xs">{new Date(item.createdAt).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>
        </a>
      </motion.div>
    )
  }

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="bg-white/5 border-white/10 overflow-hidden">
          <Skeleton className="w-full h-48 bg-white/10" />
          <CardContent className="p-4 space-y-3">
            <Skeleton className="h-4 w-3/4 bg-white/10" />
            <Skeleton className="h-3 w-full bg-white/10" />
            <Skeleton className="h-3 w-2/3 bg-white/10" />
            <div className="flex justify-between">
              <Skeleton className="h-3 w-16 bg-white/10" />
              <Skeleton className="h-3 w-20 bg-white/10" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-elysium-black via-elysium-black/95 to-elysium-purple/20 pt-20">

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative mb-12">
          {/* Cover Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src={realmData.coverImage || "/placeholder.svg"}
              alt={realmData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Featured Badge */}
            {realmData.featured && (
              <Badge className="absolute top-6 left-6 bg-gradient-to-r from-elysium-gold to-yellow-500">
                <Star className="h-4 w-4 mr-2 fill-current" />
                Featured Realm
              </Badge>
            )}

            {/* Realm Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-elysium-blue to-elysium-purple w-fit">
                    <Globe className="h-3 w-3 mr-1" />
                    {realmData.category}
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-white">{realmData.title}</h1>
                  <p className="text-white/80 text-lg max-w-2xl leading-relaxed">{realmData.description}</p>

                  {/* Creator Info */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={realmData.creator.avatar || "/placeholder.svg"} />
                      <AvatarFallback>LS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="text-white font-semibold">{realmData.creator.name}</p>
                        {realmData.creator.verified && (
                          <Badge variant="secondary" className="bg-elysium-gold/20 text-elysium-gold">
                            ✓ Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-white/60 text-sm">{formatNumber(realmData.creator.followers)} followers</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`${
                      isFollowing
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : "bg-gradient-to-r from-elysium-blue to-elysium-purple"
                    }`}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                  <Button
                    onClick={() => setIsLiked(!isLiked)}
                    variant={isLiked ? "default" : "outline"}
                    className={`${isLiked ? "bg-gradient-to-r from-red-500 to-pink-500" : ""}`}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                    {formatNumber(realmData.stats.likes)}
                  </Button>
                  <Button
                    onClick={() => setIsFavorited(!isFavorited)}
                    variant={isFavorited ? "default" : "outline"}
                    className={`${isFavorited ? "bg-gradient-to-r from-yellow-500 to-orange-500" : ""}`}
                  >
                    <Bookmark className={`w-4 h-4 mr-2 ${isFavorited ? "fill-current" : ""}`} />
                    Save
                  </Button>
                  <Button variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats and Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8"
        >
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 text-elysium-blue mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{formatNumber(realmData.stats.followers)}</p>
              <p className="text-white/60 text-sm">Followers</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Globe className="w-6 h-6 text-elysium-purple mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{realmData.stats.totalContent}</p>
              <p className="text-white/60 text-sm">Content</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Eye className="w-6 h-6 text-elysium-gold mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{formatNumber(realmData.stats.views)}</p>
              <p className="text-white/60 text-sm">Views</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{realmData.stats.rating}</p>
              <p className="text-white/60 text-sm">Rating</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Calendar className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{new Date(realmData.createdAt).getFullYear()}</p>
              <p className="text-white/60 text-sm">Created</p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-pink-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{new Date(realmData.lastUpdated).toLocaleDateString()}</p>
              <p className="text-white/60 text-sm">Updated</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {realmData.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-white/10 text-white/80">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-white/5 border border-white/10">
              <TabsTrigger
                value="all"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-elysium-blue data-[state=active]:to-elysium-purple"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">All ({realmData.stats.totalContent})</span>
                <span className="sm:hidden">{realmData.stats.totalContent}</span>
              </TabsTrigger>
              <TabsTrigger
                value="music"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500"
              >
                <Music className="h-4 w-4" />
                <span className="hidden sm:inline">Music ({realmData.contentTypes.music})</span>
                <span className="sm:hidden">{realmData.contentTypes.music}</span>
              </TabsTrigger>
              <TabsTrigger
                value="video"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500"
              >
                <Film className="h-4 w-4" />
                <span className="hidden sm:inline">Videos ({realmData.contentTypes.videos})</span>
                <span className="sm:hidden">{realmData.contentTypes.videos}</span>
              </TabsTrigger>
              <TabsTrigger
                value="game"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500"
              >
                <Gamepad2 className="h-4 w-4" />
                <span className="hidden sm:inline">Games ({realmData.contentTypes.games})</span>
                <span className="sm:hidden">{realmData.contentTypes.games}</span>
              </TabsTrigger>
              <TabsTrigger
                value="story"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500"
              >
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Stories ({realmData.contentTypes.stories})</span>
                <span className="sm:hidden">{realmData.contentTypes.stories}</span>
              </TabsTrigger>
              <TabsTrigger
                value="podcast"
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500"
              >
                <Mic className="h-4 w-4" />
                <span className="hidden sm:inline">Podcasts ({realmData.contentTypes.podcasts})</span>
                <span className="sm:hidden">{realmData.contentTypes.podcasts}</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item, index) => (
              <ContentCard key={`${item.id}-${index}`} item={item} />
            ))}
          </div>

          {/* Loading Skeleton */}
          <AnimatePresence>
            {isLoading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <LoadingSkeleton />
              </motion.div>
            )}
          </AnimatePresence>

          {/* End of Content Message */}
          {!hasMore && filteredContent.length > 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white/40" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">You've reached the end!</h3>
              <p className="text-white/60">You've explored all content in this realm.</p>
            </motion.div>
          )}

          {/* No Content Message */}
          {filteredContent.length === 0 && !isLoading && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-12 w-12 text-white/40" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">No content found</h3>
              <p className="text-white/60">
                This realm doesn't have any {activeTab === "all" ? "" : activeTab} content yet.
              </p>
            </div>
          )}
        </motion.div>
      </main>

    </div>
  )
}
