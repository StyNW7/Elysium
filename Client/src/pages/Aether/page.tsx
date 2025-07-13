"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  Filter,
  Search,
  Plus,
  Sparkles,
  Music,
  Trophy,
  BookOpen,
  Heart,
  Share,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  Eye,
  Zap,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const featuredEvents = [
  {
    id: 1,
    title: "The Grand AI Symphony",
    description: "Experience the first-ever AI-composed symphony performed by virtual orchestras from across Elysium",
    type: "AI Concert",
    date: "2024-02-15",
    time: "20:00 UTC",
    location: "Harmony Realm",
    attendees: 15420,
    maxAttendees: 20000,
    status: "upcoming",
    featured: true,
    image: "/placeholder.jpg",
    host: {
      name: "Elysium Music Collective",
      avatar: "/placeholder-user.jpg",
      verified: true,
    },
    tags: ["Music", "AI", "Symphony", "Live Performance"],
    price: "Free",
    category: "concert",
  },
  {
    id: 2,
    title: "Creator Festival 2024",
    description: "Celebrate the most innovative creators in Elysium with showcases, workshops, and networking",
    type: "Creator Festival",
    date: "2024-03-01",
    time: "10:00 UTC",
    location: "Central Plaza",
    attendees: 8750,
    maxAttendees: 15000,
    status: "upcoming",
    featured: true,
    image: "/placeholder.jpg",
    host: {
      name: "Elysium Foundation",
      avatar: "/placeholder-user.jpg",
      verified: true,
    },
    tags: ["Festival", "Creators", "Workshops", "Networking"],
    price: "Premium",
    category: "festival",
  },
  {
    id: 3,
    title: "Neon Dreams Realm Premiere",
    description: "Step into the cyberpunk world of Neon Dreams - a collaborative realm by 50+ creators",
    type: "Realm Premiere",
    date: "2024-02-28",
    time: "18:00 UTC",
    location: "Neon Dreams Realm",
    attendees: 12300,
    maxAttendees: 25000,
    status: "upcoming",
    featured: true,
    image: "/placeholder.jpg",
    host: {
      name: "Neon Collective",
      avatar: "/placeholder-user.jpg",
      verified: true,
    },
    tags: ["Realm", "Cyberpunk", "Collaborative", "Premiere"],
    price: "Free",
    category: "premiere",
  },
]

const upcomingEvents = [
  {
    id: 4,
    title: "World-Building Championship",
    description: "Compete in the ultimate world-building tournament",
    type: "Tournament",
    date: "2024-03-15",
    time: "16:00 UTC",
    location: "Arena Realm",
    attendees: 3420,
    maxAttendees: 10000,
    status: "upcoming",
    image: "/placeholder.jpg",
    host: { name: "Tournament Organizers", avatar: "/placeholder-user.jpg" },
    tags: ["Competition", "World Building", "Tournament"],
    price: "Entry Fee",
    category: "tournament",
  },
  {
    id: 5,
    title: "Crossover Story Arc: The Convergence",
    description: "Multiple storylines collide in this epic crossover event",
    type: "Story Event",
    date: "2024-04-01",
    time: "19:00 UTC",
    location: "Story Nexus",
    attendees: 6780,
    maxAttendees: 15000,
    status: "upcoming",
    image: "/placeholder.jpg",
    host: { name: "Story Collective", avatar: "/placeholder-user.jpg" },
    tags: ["Story", "Crossover", "Narrative", "Epic"],
    price: "Free",
    category: "story",
  },
  {
    id: 6,
    title: "AI Voice Acting Workshop",
    description: "Learn advanced voice acting techniques with AI assistance",
    type: "Workshop",
    date: "2024-02-20",
    time: "14:00 UTC",
    location: "Voice Studio",
    attendees: 890,
    maxAttendees: 2000,
    status: "upcoming",
    image: "/placeholder.jpg",
    host: { name: "Voice Masters Guild", avatar: "/placeholder-user.jpg" },
    tags: ["Workshop", "Voice Acting", "AI", "Learning"],
    price: "Premium",
    category: "workshop",
  },
]

const pastEvents = [
  {
    id: 7,
    title: "Elysium Launch Celebration",
    description: "The grand opening of Elysium platform",
    type: "Launch Event",
    date: "2024-01-01",
    time: "00:00 UTC",
    location: "Origin Realm",
    attendees: 50000,
    maxAttendees: 50000,
    status: "completed",
    image: "/placeholder.jpg",
    host: { name: "Elysium Team", avatar: "/placeholder-user.jpg" },
    tags: ["Launch", "Celebration", "Historic"],
    price: "Free",
    category: "celebration",
  },
]

const eventCategories = [
  { name: "All Events", count: 156, icon: Calendar, color: "purple" },
  { name: "AI Concerts", count: 24, icon: Music, color: "pink" },
  { name: "Creator Festivals", count: 12, icon: Star, color: "blue" },
  { name: "Realm Premieres", count: 18, icon: Sparkles, color: "green" },
  { name: "Tournaments", count: 8, icon: Trophy, color: "yellow" },
  { name: "Story Events", count: 15, icon: BookOpen, color: "red" },
  { name: "Workshops", count: 32, icon: Users, color: "indigo" },
]

export default function AetherPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Events")
  const [currentMonth, setCurrentMonth] = useState(new Date())

//   const allEvents = [...featuredEvents, ...upcomingEvents, ...pastEvents]

//   const filteredEvents = allEvents.filter((event) => {
//     const matchesSearch =
//       event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       event.description.toLowerCase().includes(searchQuery.toLowerCase())
//     const matchesCategory =
//       selectedCategory === "All Events" ||
//       event.type.toLowerCase().includes(selectedCategory.toLowerCase().replace("s", ""))
//     return matchesSearch && matchesCategory
//   })

  const getEventIcon = (category: string) => {
    switch (category) {
      case "concert":
        return Music
      case "festival":
        return Star
      case "premiere":
        return Sparkles
      case "tournament":
        return Trophy
      case "story":
        return BookOpen
      case "workshop":
        return Users
      default:
        return Calendar
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Aether</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover and celebrate the biggest moments in Elysium. From AI concerts to creator festivals, experience
              the events that shape our digital universe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/aether/create">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  Create Event
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
              >
                <Calendar className="mr-2 h-5 w-5" />
                View Calendar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Events</h2>
            <p className="text-gray-400">Don't miss these spectacular upcoming events</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => {
              const EventIcon = getEventIcon(event.category)
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                          index === 0 ? "h-64 lg:h-80" : "h-48"
                        }`}
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">Featured</Badge>
                        <Badge variant="outline" className="border-white/30 text-white bg-black/50 backdrop-blur-sm">
                          {event.type}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
                          <EventIcon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {new Date(event.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">{event.attendees.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={event.host.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{event.host.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">{event.host.name}</span>
                          {event.host.verified && (
                            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                      <h3 className={`font-bold text-white mb-2 ${index === 0 ? "text-xl" : "text-lg"}`}>
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>

                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-purple-500/30 text-purple-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-semibold ${event.price === "Free" ? "text-green-400" : "text-purple-400"}`}
                          >
                            {event.price}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {event.attendees}/{event.maxAttendees} attending
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                            <Share className="h-4 w-4" />
                          </Button>
                          <a href={`/aether/${event.id}`}>
                            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                              View Event
                            </Button>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Event Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Event Categories</h2>
            <p className="text-gray-400">Explore events by type and interest</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {eventCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedCategory === category.name ? "scale-105" : "hover:scale-105"
                }`}
              >
                <Card
                  className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 ${
                    selectedCategory === category.name ? "ring-2 ring-purple-500 bg-purple-500/10" : ""
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`p-3 rounded-full mx-auto mb-3 bg-gradient-to-r ${
                        category.color === "purple"
                          ? "from-purple-500 to-purple-600"
                          : category.color === "pink"
                            ? "from-pink-500 to-pink-600"
                            : category.color === "blue"
                              ? "from-blue-500 to-blue-600"
                              : category.color === "green"
                                ? "from-green-500 to-green-600"
                                : category.color === "yellow"
                                  ? "from-yellow-500 to-yellow-600"
                                  : category.color === "red"
                                    ? "from-red-500 to-red-600"
                                    : "from-indigo-500 to-indigo-600"
                      }`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-medium text-sm mb-1">{category.name}</h3>
                    <p className="text-gray-400 text-xs">{category.count} events</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="upcoming" className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <TabsList className="grid w-full lg:w-auto grid-cols-3 bg-white/5 backdrop-blur-sm">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-purple-600">
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger value="calendar" className="data-[state=active]:bg-purple-600">
                Calendar View
              </TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-purple-600">
                Past Events
              </TabsTrigger>
            </TabsList>

            {/* Search and Filters */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 lg:w-auto w-full">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search events..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button variant="outline" className="border-white/20 text-white bg-transparent">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => {
                const EventIcon = getEventIcon(event.category)
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="outline" className="border-white/30 text-white bg-black/50 backdrop-blur-sm">
                            {event.type}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
                            <EventIcon className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-white">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm font-medium">
                                {new Date(event.date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                              <Users className="h-4 w-4" />
                              <span className="text-sm">{event.attendees.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={event.host.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{event.host.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-gray-400">{event.host.name}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>

                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-purple-500/30 text-purple-300">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <span
                            className={`font-semibold ${event.price === "Free" ? "text-green-400" : "text-purple-400"}`}
                          >
                            {event.price}
                          </span>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                              <Bookmark className="h-4 w-4" />
                            </Button>
                            <a href={`/aether/${event.id}`}>
                              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                                Join Event
                              </Button>
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">
                    {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                      className="text-gray-400 hover:text-white"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                      className="text-gray-400 hover:text-white"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-gray-400 text-sm font-medium p-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }, (_, i) => {
                    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i - 6)
                    const isCurrentMonth = date.getMonth() === currentMonth.getMonth()
                    const hasEvent = Math.random() > 0.8 // Simulate events

                    return (
                      <div
                        key={i}
                        className={`aspect-square p-2 rounded-lg text-center text-sm transition-colors cursor-pointer ${
                          isCurrentMonth
                            ? hasEvent
                              ? "bg-purple-600/20 text-white hover:bg-purple-600/30 border border-purple-500/30"
                              : "text-gray-300 hover:bg-white/5"
                            : "text-gray-600"
                        }`}
                      >
                        {date.getDate()}
                        {hasEvent && isCurrentMonth && (
                          <div className="w-1 h-1 bg-purple-400 rounded-full mx-auto mt-1" />
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => {
                const EventIcon = getEventIcon(event.category)
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gray-600 text-white">Completed</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
                            <EventIcon className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-white">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm font-medium">
                                {new Date(event.date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                              <Eye className="h-4 w-4" />
                              <span className="text-sm">{event.attendees.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={event.host.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{event.host.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-gray-400">{event.host.name}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-gray-500/30 text-gray-400">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">{event.attendees.toLocaleString()} attended</span>
                          <a href={`/aether/${event.id}`}>
                            <Button size="sm" variant="outline" className="border-white/20 text-white bg-transparent">
                              View Recap
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
