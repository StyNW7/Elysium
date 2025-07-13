/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Filter,
  Grid,
  List,
  Star,
  Users,
  Zap,
  BookOpen,
  Calendar,
  Gamepad2,
  Music,
  Video,
  Mic,
  Palette,
  Globe,
  ShoppingBag,
  Heart,
  Camera,
  Headphones,
  Sparkles,
  Wand2,
  Target,
  Crown,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Feature {
  id: string
  name: string
  description: string
  longDescription: string
  icon: any
  category: string
  status: "live" | "beta" | "coming-soon"
  popularity: number
  href: string
  gradient: string
  features: string[]
  stats?: {
    users?: string
    content?: string
    rating?: number
  }
}

const features: Feature[] = [
  {
    id: "explore",
    name: "Explore",
    description: "Discover infinite worlds of creativity",
    longDescription: "Dive into a vast universe of user-generated content across all media types",
    icon: Globe,
    category: "Discovery",
    status: "live",
    popularity: 95,
    href: "/explore",
    gradient: "from-purple-500 to-pink-500",
    features: ["Content Discovery", "Trending Feed", "Personalized Recommendations", "Advanced Search"],
    stats: { users: "2.5M+", content: "500K+", rating: 4.9 },
  },
  {
    id: "echoes",
    name: "Echoes",
    description: "AI-powered voice synthesis and cloning",
    longDescription: "Create, clone, and transform voices with cutting-edge AI technology",
    icon: Mic,
    category: "AI Tools",
    status: "live",
    popularity: 88,
    href: "/echoes",
    gradient: "from-blue-500 to-purple-500",
    features: ["Voice Cloning", "Real-time Synthesis", "Voice Library", "Custom Training"],
    stats: { users: "1.8M+", content: "100K+", rating: 4.8 },
  },
  {
    id: "academium",
    name: "Academium",
    description: "Master creative skills and AI tools",
    longDescription: "Comprehensive learning platform for creators and storytellers",
    icon: BookOpen,
    category: "Education",
    status: "live",
    popularity: 92,
    href: "/academium",
    gradient: "from-green-500 to-blue-500",
    features: ["Interactive Courses", "Skill Tracking", "Certifications", "Community Learning"],
    stats: { users: "1.2M+", content: "5K+", rating: 4.9 },
  },
  {
    id: "aether",
    name: "Aether",
    description: "Discover and create amazing events",
    longDescription: "Platform for virtual events, concerts, and community gatherings",
    icon: Calendar,
    category: "Events",
    status: "live",
    popularity: 85,
    href: "/aether",
    gradient: "from-orange-500 to-red-500",
    features: ["Event Discovery", "Live Streaming", "Community Events", "Event Creation"],
    stats: { users: "900K+", content: "25K+", rating: 4.7 },
  },
  {
    id: "realms",
    name: "Realms",
    description: "Build and explore virtual worlds",
    longDescription: "Create immersive 3D worlds and experiences for others to explore",
    icon: Gamepad2,
    category: "World Building",
    status: "live",
    popularity: 90,
    href: "/realms",
    gradient: "from-purple-500 to-indigo-500",
    features: ["3D World Builder", "Physics Engine", "Multiplayer Support", "Asset Library"],
    stats: { users: "1.5M+", content: "75K+", rating: 4.8 },
  },
  {
    id: "marketplace",
    name: "Marketplace",
    description: "Buy and sell creative assets",
    longDescription: "Monetize your creativity and discover premium content from other creators",
    icon: ShoppingBag,
    category: "Commerce",
    status: "live",
    popularity: 78,
    href: "/marketplace",
    gradient: "from-yellow-500 to-orange-500",
    features: ["Asset Trading", "Creator Economy", "Secure Payments", "Quality Assurance"],
    stats: { users: "800K+", content: "200K+", rating: 4.6 },
  },
  {
    id: "live",
    name: "Live Streaming",
    description: "Broadcast your creativity in real-time",
    longDescription: "Professional live streaming platform with interactive features",
    icon: Video,
    category: "Broadcasting",
    status: "live",
    popularity: 82,
    href: "/live",
    gradient: "from-red-500 to-pink-500",
    features: ["HD Streaming", "Interactive Chat", "Multi-platform", "Analytics"],
    stats: { users: "1.1M+", content: "50K+", rating: 4.7 },
  },
  {
    id: "remix",
    name: "Remix Studio",
    description: "Collaborate and remix content",
    longDescription: "Advanced tools for remixing and collaborating on creative projects",
    icon: Palette,
    category: "Creation",
    status: "live",
    popularity: 87,
    href: "/remix",
    gradient: "from-pink-500 to-purple-500",
    features: ["Collaborative Editing", "Version Control", "Asset Mixing", "Real-time Sync"],
    stats: { users: "1.3M+", content: "300K+", rating: 4.8 },
  },
  {
    id: "dashboard",
    name: "Creator Dashboard",
    description: "Manage your creative empire",
    longDescription: "Comprehensive analytics and management tools for creators",
    icon: Target,
    category: "Analytics",
    status: "live",
    popularity: 91,
    href: "/dashboard",
    gradient: "from-indigo-500 to-purple-500",
    features: ["Advanced Analytics", "Content Management", "Revenue Tracking", "Audience Insights"],
    stats: { users: "2M+", rating: 4.9 },
  },
  {
    id: "ai-composer",
    name: "AI Composer",
    description: "Generate music with artificial intelligence",
    longDescription: "Create original music compositions using advanced AI algorithms",
    icon: Music,
    category: "AI Tools",
    status: "beta",
    popularity: 75,
    href: "/ai-composer",
    gradient: "from-purple-500 to-blue-500",
    features: ["Music Generation", "Style Transfer", "Instrument Synthesis", "Collaboration Tools"],
    stats: { users: "500K+", content: "50K+", rating: 4.5 },
  },
  {
    id: "story-weaver",
    name: "Story Weaver",
    description: "AI-assisted storytelling platform",
    longDescription: "Create compelling narratives with AI-powered writing assistance",
    icon: Wand2,
    category: "AI Tools",
    status: "beta",
    popularity: 80,
    href: "/story-weaver",
    gradient: "from-green-500 to-teal-500",
    features: ["AI Writing Assistant", "Plot Generation", "Character Development", "World Building"],
    stats: { users: "600K+", content: "80K+", rating: 4.6 },
  },
  {
    id: "neural-art",
    name: "Neural Art",
    description: "AI-powered visual art generation",
    longDescription: "Create stunning visual art using neural networks and machine learning",
    icon: Sparkles,
    category: "AI Tools",
    status: "live",
    popularity: 89,
    href: "/neural-art",
    gradient: "from-pink-500 to-orange-500",
    features: ["Style Transfer", "Image Generation", "Art Enhancement", "Custom Models"],
    stats: { users: "1.4M+", content: "2M+", rating: 4.8 },
  },
  {
    id: "community",
    name: "Community Hub",
    description: "Connect with fellow creators",
    longDescription: "Social platform for creators to connect, collaborate, and share",
    icon: Users,
    category: "Social",
    status: "live",
    popularity: 93,
    href: "/community",
    gradient: "from-blue-500 to-green-500",
    features: ["Creator Profiles", "Discussion Forums", "Collaboration Tools", "Mentorship"],
    stats: { users: "2.8M+", rating: 4.9 },
  },
  {
    id: "voice-lab",
    name: "Voice Lab",
    description: "Advanced voice processing tools",
    longDescription: "Professional-grade voice editing and enhancement suite",
    icon: Headphones,
    category: "Audio",
    status: "live",
    popularity: 76,
    href: "/voice-lab",
    gradient: "from-purple-500 to-pink-500",
    features: ["Voice Enhancement", "Noise Reduction", "Audio Effects", "Batch Processing"],
    stats: { users: "700K+", content: "150K+", rating: 4.7 },
  },
  {
    id: "quantum-render",
    name: "Quantum Render",
    description: "Ultra-fast 3D rendering engine",
    longDescription: "Next-generation rendering technology for 3D content creation",
    icon: Zap,
    category: "Technology",
    status: "beta",
    popularity: 72,
    href: "/quantum-render",
    gradient: "from-yellow-500 to-red-500",
    features: ["Real-time Rendering", "Cloud Processing", "Ray Tracing", "GPU Acceleration"],
    stats: { users: "300K+", rating: 4.4 },
  },
  {
    id: "metaverse-builder",
    name: "Metaverse Builder",
    description: "Create interconnected virtual spaces",
    longDescription: "Build persistent virtual worlds that connect across the metaverse",
    icon: Crown,
    category: "World Building",
    status: "coming-soon",
    popularity: 95,
    href: "/metaverse-builder",
    gradient: "from-purple-500 to-indigo-500",
    features: ["Cross-platform Worlds", "Persistent State", "Social Integration", "Economy System"],
    stats: { users: "Coming Soon" },
  },
  {
    id: "ai-director",
    name: "AI Director",
    description: "Automated video editing and production",
    longDescription: "AI-powered video editing that creates professional content automatically",
    icon: Camera,
    category: "AI Tools",
    status: "coming-soon",
    popularity: 88,
    href: "/ai-director",
    gradient: "from-red-500 to-purple-500",
    features: ["Auto Editing", "Scene Detection", "Music Sync", "Style Templates"],
    stats: { users: "Coming Soon" },
  },
  {
    id: "emotion-engine",
    name: "Emotion Engine",
    description: "AI that understands and creates emotions",
    longDescription: "Advanced AI system for creating emotionally resonant content",
    icon: Heart,
    category: "AI Tools",
    status: "coming-soon",
    popularity: 92,
    href: "/emotion-engine",
    gradient: "from-pink-500 to-red-500",
    features: ["Emotion Analysis", "Sentiment Generation", "Mood Adaptation", "Empathy AI"],
    stats: { users: "Coming Soon" },
  },
]

const categories = [
  "All",
  "AI Tools",
  "Discovery",
  "Education",
  "Events",
  "World Building",
  "Commerce",
  "Broadcasting",
  "Creation",
  "Analytics",
  "Social",
  "Audio",
  "Technology",
]
const statusOptions = ["All", "Live", "Beta", "Coming Soon"]
const sortOptions = ["Popularity", "Name", "Category", "Status"]

export default function FeaturesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [sortBy, setSortBy] = useState("Popularity")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredAndSortedFeatures = useMemo(() => {
    const filtered = features.filter((feature) => {
      const matchesSearch =
        feature.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "All" || feature.category === selectedCategory

      const matchesStatus =
        selectedStatus === "All" ||
        (selectedStatus === "Live" && feature.status === "live") ||
        (selectedStatus === "Beta" && feature.status === "beta") ||
        (selectedStatus === "Coming Soon" && feature.status === "coming-soon")

      return matchesSearch && matchesCategory && matchesStatus
    })

    // Sort features
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "Name":
          return a.name.localeCompare(b.name)
        case "Category":
          return a.category.localeCompare(b.category)
        case "Status":
          return a.status.localeCompare(b.status)
        case "Popularity":
        default:
          return b.popularity - a.popularity
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, selectedStatus, sortBy])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Live</Badge>
      case "beta":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Beta</Badge>
      case "coming-soon":
        return <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Coming Soon</Badge>
      default:
        return null
    }
  }

  const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <a href={feature.href}>
        <Card className="h-full bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/60 hover:border-white/30 transition-all duration-300 overflow-hidden">
          <div className={`h-2 bg-gradient-to-r ${feature.gradient}`} />

          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-20 backdrop-blur-sm`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              {getStatusBadge(feature.status)}
            </div>

            <CardTitle className="text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
              {feature.name}
            </CardTitle>

            <CardDescription className="text-gray-300 text-sm leading-relaxed">{feature.description}</CardDescription>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="space-y-4">
              <p className="text-gray-400 text-xs leading-relaxed">{feature.longDescription}</p>

              <div className="flex flex-wrap gap-1">
                {feature.features.slice(0, 3).map((feat, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs bg-white/5 text-gray-300 border-white/10">
                    {feat}
                  </Badge>
                ))}
                {feature.features.length > 3 && (
                  <Badge variant="secondary" className="text-xs bg-white/5 text-gray-300 border-white/10">
                    +{feature.features.length - 3} more
                  </Badge>
                )}
              </div>

              {feature.stats && (
                <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    {feature.stats.users && (
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{feature.stats.users}</span>
                      </div>
                    )}
                    {feature.stats.content && (
                      <div className="flex items-center gap-1">
                        <Zap className="h-3 w-3" />
                        <span>{feature.stats.content}</span>
                      </div>
                    )}
                  </div>
                  {feature.stats.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{feature.stats.rating}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Elysium Features
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the complete suite of creative tools and platforms that make Elysium the ultimate destination for
              digital creators
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
                {features.length} Features
              </Badge>
              <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 px-4 py-2">
                {categories.length - 1} Categories
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">Always Growing</Badge>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/10">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="text-white hover:bg-white/10">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-32 bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/10">
                  {statusOptions.map((status) => (
                    <SelectItem key={status} value={status} className="text-white hover:bg-white/10">
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32 bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/10">
                  {sortOptions.map((option) => (
                    <SelectItem key={option} value={option} className="text-white hover:bg-white/10">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="h-8 w-8 p-0"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="h-8 w-8 p-0"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              Showing {filteredAndSortedFeatures.length} of {features.length} features
            </p>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400 text-sm">
                {selectedCategory !== "All" && `${selectedCategory} • `}
                {selectedStatus !== "All" && `${selectedStatus} • `}
                Sorted by {sortBy}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedStatus}-${sortBy}-${searchQuery}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={
              viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"
            }
          >
            {filteredAndSortedFeatures.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredAndSortedFeatures.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-12 max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No features found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your search criteria or filters</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setSelectedStatus("All")
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Clear Filters
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {features.filter((f) => f.status === "live").length}
              </div>
              <div className="text-gray-400 text-sm">Live Features</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {features.filter((f) => f.status === "beta").length}
              </div>
              <div className="text-gray-400 text-sm">Beta Features</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {features.filter((f) => f.status === "coming-soon").length}
              </div>
              <div className="text-gray-400 text-sm">Coming Soon</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
