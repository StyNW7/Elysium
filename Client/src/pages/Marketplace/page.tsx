"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Grid3X3,
  List,
  ShoppingCart,
  Star,
  Download,
  Heart,
  TrendingUp,
  Zap,
  Mic,
  BookOpen,
  Palette,
  Bot,
  Package,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Mock data for marketplace items
const marketplaceItems = [
  {
    id: 1,
    title: "Ethereal Voice Pack",
    description: "Professional voice pack with 50+ ethereal and mystical voice samples",
    category: "voice-packs",
    price: 29.99,
    originalPrice: 39.99,
    creator: {
      name: "Luna Starweaver",
      avatar: "/Images/Placeholder/Avatar.png",
      verified: true,
      rating: 4.9,
    },
    image: "/Images/Content/Elysium-Design.png",
    downloads: 1247,
    rating: 4.8,
    reviews: 89,
    tags: ["ethereal", "mystical", "fantasy", "ambient"],
    featured: true,
    trending: true,
    type: "premium",
  },
  {
    id: 2,
    title: "AI Narrator - Morgan",
    description: "Advanced AI voice with natural storytelling capabilities and emotional range",
    category: "ai-voices",
    price: 49.99,
    creator: {
      name: "VoiceForge AI",
      avatar: "/Images/Placeholder/Avatar.png",
      verified: true,
      rating: 4.7,
    },
    image: "/Images/Content/Elysium-Design.png",
    downloads: 892,
    rating: 4.9,
    reviews: 156,
    tags: ["ai", "narrator", "storytelling", "natural"],
    featured: false,
    trending: true,
    type: "premium",
  },
  {
    id: 3,
    title: "Cyberpunk Story Pack",
    description: "Complete cyberpunk story templates with characters, plots, and world-building",
    category: "story-packs",
    price: 19.99,
    creator: {
      name: "Neo Chronicles",
      avatar: "/Images/Placeholder/Avatar.png",
      verified: false,
      rating: 4.6,
    },
    image: "/Images/Content/Elysium-Design.png",
    downloads: 634,
    rating: 4.7,
    reviews: 42,
    tags: ["cyberpunk", "sci-fi", "templates", "futuristic"],
    featured: false,
    trending: false,
    type: "standard",
  },
  {
    id: 4,
    title: "Lo-Fi Remix Templates",
    description: "Professional lo-fi music templates ready for customization and remixing",
    category: "remix-templates",
    price: 15.99,
    creator: {
      name: "ChillBeats Studio",
      avatar: "/Images/Placeholder/Avatar.png",
      verified: true,
      rating: 4.8,
    },
    image: "/Images/Content/Elysium-Design.png",
    downloads: 2156,
    rating: 4.6,
    reviews: 203,
    tags: ["lo-fi", "chill", "templates", "music"],
    featured: true,
    trending: false,
    type: "standard",
  },
  {
    id: 5,
    title: "Sage - Wise AI Avatar",
    description: "Philosophical AI avatar with deep knowledge and contemplative personality",
    category: "ai-avatars",
    price: 34.99,
    creator: {
      name: "Wisdom Collective",
      avatar: "/Images/Placeholder/Avatar.png",
      verified: true,
      rating: 4.9,
    },
    image: "/Images/Content/Elysium-Design.png",
    downloads: 445,
    rating: 4.9,
    reviews: 67,
    tags: ["wisdom", "philosophy", "ai", "contemplative"],
    featured: false,
    trending: true,
    type: "premium",
  },
  {
    id: 6,
    title: "Content Creator Toolkit",
    description: "Complete plugin package for content creators with automation tools",
    category: "plugins",
    price: 59.99,
    originalPrice: 79.99,
    creator: {
      name: "DevCraft Solutions",
      avatar: "/Images/Placeholder/Avatar.png",
      verified: true,
      rating: 4.8,
    },
    image: "/Images/Content/Elysium-Design.png",
    downloads: 1089,
    rating: 4.8,
    reviews: 134,
    tags: ["plugins", "automation", "tools", "productivity"],
    featured: true,
    trending: false,
    type: "premium",
  },
]

const categories = [
  { id: "all", name: "All Items", icon: Package, count: 1247 },
  { id: "voice-packs", name: "Voice Packs", icon: Mic, count: 234 },
  { id: "ai-voices", name: "AI Voices", icon: Bot, count: 156 },
  { id: "story-packs", name: "Story Packs", icon: BookOpen, count: 189 },
  { id: "remix-templates", name: "Remix Templates", icon: Palette, count: 298 },
  { id: "ai-avatars", name: "AI Avatars", icon: Zap, count: 87 },
  { id: "plugins", name: "Plugins", icon: Package, count: 283 },
]

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("trending")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFeatured, ] = useState(false)
  const [showTrending, ] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    marketplaceItems.forEach((item) => {
      item.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags)
  }, [])

  // Filter and sort items
  const filteredItems = useMemo(() => {
    const filtered = marketplaceItems.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.creator.name.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1]
      const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => item.tags.includes(tag))
      const matchesFeatured = !showFeatured || item.featured
      const matchesTrending = !showTrending || item.trending

      return matchesSearch && matchesCategory && matchesPrice && matchesTags && matchesFeatured && matchesTrending
    })

    // Sort items
    switch (sortBy) {
      case "trending":
        filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0))
        break
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "downloads":
        filtered.sort((a, b) => b.downloads - a.downloads)
        break
      case "newest":
        filtered.sort((a, b) => b.id - a.id)
        break
    }

    return filtered
  }, [searchQuery, selectedCategory, sortBy, priceRange, selectedTags, showFeatured, showTrending])

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Elysium Marketplace
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover, buy, and sell premium digital assets, tools, and creative resources from talented creators
            worldwide
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:w-80 space-y-6">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <h3 className="text-lg font-semibold text-white">Categories</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                        selectedCategory === category.id
                          ? "bg-purple-500/20 border border-purple-400/30 text-purple-300"
                          : "hover:bg-white/5 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        <span>{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="bg-white/10 text-white">
                        {category.count}
                      </Badge>
                    </motion.button>
                  )
                })}
              </CardContent>
            </Card>

            {/* Price Range */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <h3 className="text-lg font-semibold text-white">Price Range</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Slider value={priceRange} onValueChange={setPriceRange} max={100} step={1} className="w-full" />
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tags Filter */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <h3 className="text-lg font-semibold text-white">Tags</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <motion.button
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-all ${
                        selectedTags.includes(tag)
                          ? "bg-purple-500/30 text-purple-300 border border-purple-400/30"
                          : "bg-white/10 text-slate-300 hover:bg-white/20"
                      }`}
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Filters */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <h3 className="text-lg font-semibold text-white">Filters</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="featured" checked={showFeatured} />
                  <label htmlFor="featured" className="text-sm text-slate-300">
                    Featured only
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="trending" checked={showTrending}/>
                  <label htmlFor="trending" className="text-sm text-slate-300">
                    Trending only
                  </label>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    placeholder="Search marketplace..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48 bg-white/5 border-white/10 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="trending">Trending</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="downloads">Most Downloaded</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex border border-white/10 rounded-lg overflow-hidden">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="rounded-none"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="rounded-none"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Results Info */}
              <div className="flex justify-between items-center text-sm text-slate-400">
                <span>
                  Showing {paginatedItems.length} of {filteredItems.length} results
                </span>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            </motion.div>

            {/* Items Grid/List */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${viewMode}-${currentPage}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}
              >
                {paginatedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {viewMode === "grid" ? (
                      <Card className="group bg-white/5 backdrop-blur-xl border-white/10 hover:border-purple-400/30 transition-all duration-300 overflow-hidden">
                        <div className="relative">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3 flex gap-2">
                            {item.featured && (
                              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                Featured
                              </Badge>
                            )}
                            {item.trending && (
                              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                          </div>
                          <div className="absolute top-3 right-3">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="bg-black/20 backdrop-blur-sm hover:bg-black/40"
                            >
                              <Heart className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-sm text-slate-400 mt-1 line-clamp-2">{item.description}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-4">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={item.creator.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{item.creator.name[0]}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-slate-300">{item.creator.name}</span>
                            {item.creator.verified && (
                              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                                ✓
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>{item.rating}</span>
                              <span>({item.reviews})</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              <span>{item.downloads.toLocaleString()}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {item.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs border-white/20 text-slate-300">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-white">${item.price}</span>
                              {item.originalPrice && (
                                <span className="text-sm text-slate-400 line-through">${item.originalPrice}</span>
                              )}
                            </div>
                            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Add to Cart
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-purple-400/30 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex gap-6">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-32 h-32 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                                  <p className="text-slate-400 mb-3">{item.description}</p>
                                </div>
                                <div className="flex gap-2">
                                  {item.featured && (
                                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                      Featured
                                    </Badge>
                                  )}
                                  {item.trending && (
                                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                                      Trending
                                    </Badge>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center gap-2">
                                  <Avatar className="w-6 h-6">
                                    <AvatarImage src={item.creator.avatar || "/placeholder.svg"} />
                                    <AvatarFallback>{item.creator.name[0]}</AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm text-slate-300">{item.creator.name}</span>
                                  {item.creator.verified && (
                                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                                      ✓
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-1 text-sm text-slate-400">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span>{item.rating}</span>
                                  <span>({item.reviews})</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-slate-400">
                                  <Download className="w-4 h-4" />
                                  <span>{item.downloads.toLocaleString()}</span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-1">
                                  {item.tags.map((tag) => (
                                    <Badge
                                      key={tag}
                                      variant="outline"
                                      className="text-xs border-white/20 text-slate-300"
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-white">${item.price}</span>
                                    {item.originalPrice && (
                                      <span className="text-sm text-slate-400 line-through">${item.originalPrice}</span>
                                    )}
                                  </div>
                                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Add to Cart
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 flex justify-center"
              >
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          if (currentPage > 1) setCurrentPage(currentPage - 1)
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const page = i + 1
                      return (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              setCurrentPage(page)
                            }}
                            isActive={currentPage === page}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    })}
                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
