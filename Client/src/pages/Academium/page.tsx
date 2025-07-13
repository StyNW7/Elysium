"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BookOpen,
  Play,
  Users,
  Trophy,
  Sparkles,
  Clock,
  Star,
  ChevronRight,
  Search,
  Zap,
  Brain,
  Palette,
  Music,
  Gamepad2,
  Award,
  Target,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const courses = [
  {
    id: 1,
    title: "Elysium Fundamentals",
    description: "Master the basics of creating in Elysium",
    instructor: "Dr. Maya Chen",
    avatar: "/placeholder-user.jpg",
    duration: "4 hours",
    lessons: 12,
    students: 15420,
    rating: 4.9,
    level: "Beginner",
    category: "Fundamentals",
    progress: 0,
    thumbnail: "/placeholder.jpg",
    tags: ["Basics", "Getting Started", "Platform"],
    icon: BookOpen,
  },
  {
    id: 2,
    title: "AI-Powered Storytelling",
    description: "Learn to craft compelling narratives with AI assistance",
    instructor: "Alex Rivera",
    avatar: "/placeholder-user.jpg",
    duration: "6 hours",
    lessons: 18,
    students: 12350,
    rating: 4.8,
    level: "Intermediate",
    category: "Storytelling",
    progress: 35,
    thumbnail: "/placeholder.jpg",
    tags: ["AI", "Storytelling", "Creative Writing"],
    icon: Brain,
  },
  {
    id: 3,
    title: "World Building Mastery",
    description: "Create immersive worlds that captivate audiences",
    instructor: "Jordan Kim",
    avatar: "/placeholder-user.jpg",
    duration: "8 hours",
    lessons: 24,
    students: 9870,
    rating: 4.9,
    level: "Advanced",
    category: "World Building",
    progress: 0,
    thumbnail: "/placeholder.jpg",
    tags: ["World Building", "Environment", "Lore"],
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Music Production in Elysium",
    description: "Compose and produce music using Elysium's AI tools",
    instructor: "Sam Torres",
    avatar: "/placeholder-user.jpg",
    duration: "5 hours",
    lessons: 15,
    students: 8920,
    rating: 4.7,
    level: "Intermediate",
    category: "Music",
    progress: 60,
    thumbnail: "/placeholder.jpg",
    tags: ["Music", "AI", "Production"],
    icon: Music,
  },
  {
    id: 5,
    title: "Visual Design & Art",
    description: "Create stunning visuals and artwork for your content",
    instructor: "Riley Park",
    avatar: "/placeholder-user.jpg",
    duration: "7 hours",
    lessons: 21,
    students: 11200,
    rating: 4.8,
    level: "Intermediate",
    category: "Design",
    progress: 0,
    thumbnail: "/placeholder.jpg",
    tags: ["Art", "Design", "Visual"],
    icon: Palette,
  },
  {
    id: 6,
    title: "Game Development Basics",
    description: "Build interactive experiences and games",
    instructor: "Casey Wong",
    avatar: "/placeholder-user.jpg",
    duration: "10 hours",
    lessons: 30,
    students: 7650,
    rating: 4.6,
    level: "Advanced",
    category: "Gaming",
    progress: 0,
    thumbnail: "/placeholder.jpg",
    tags: ["Games", "Interactive", "Development"],
    icon: Gamepad2,
  },
]

const achievements = [
  { name: "First Steps", description: "Complete your first lesson", icon: Target, unlocked: true },
  { name: "Knowledge Seeker", description: "Complete 5 courses", icon: BookOpen, unlocked: true },
  { name: "AI Master", description: "Master all AI tool courses", icon: Brain, unlocked: false },
  { name: "Creative Genius", description: "Publish 10 original works", icon: Sparkles, unlocked: false },
  { name: "Community Leader", description: "Help 100 other learners", icon: Users, unlocked: false },
  { name: "Elysium Expert", description: "Complete all available courses", icon: Trophy, unlocked: false },
]

const stats = [
  { label: "Courses Completed", value: "3", icon: BookOpen },
  { label: "Hours Learned", value: "24", icon: Clock },
  { label: "Skill Points", value: "1,250", icon: Star },
  { label: "Rank", value: "#847", icon: TrendingUp },
]

export default function AcademiumPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")

  const categories = ["All", "Fundamentals", "Storytelling", "World Building", "Music", "Design", "Gaming"]
  const levels = ["All", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

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
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Academium
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master the art of creation in Elysium. Learn from experts, practice with AI tools, and unlock your
              creative potential in our comprehensive learning center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white/5 backdrop-blur-sm">
            <TabsTrigger value="courses" className="data-[state=active]:bg-purple-600">
              Courses
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-purple-600">
              Achievements
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-purple-600">
              Community
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-8">
            {/* Search and Filters */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="flex gap-4">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-slate-800">
                          {category}
                        </option>
                      ))}
                    </select>
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white"
                    >
                      {levels.map((level) => (
                        <option key={level} value={level} className="bg-slate-800">
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-purple-600 text-white">
                          {course.level}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
                          <course.icon className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={course.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{course.instructor[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm text-gray-400">{course.instructor}</div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{course.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{course.description}</p>

                      {course.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-purple-500/30 text-purple-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Play className="h-4 w-4" />
                            {course.lessons} lessons
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{course.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{course.students.toLocaleString()} students</span>
                        <a href={`/academium/${course.id}`}>
                          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                            {course.progress > 0 ? "Continue" : "Start Course"}
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`${
                      achievement.unlocked
                        ? "bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30"
                        : "bg-white/5 border-white/10"
                    } backdrop-blur-sm`}
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`p-4 rounded-full mx-auto mb-4 ${
                          achievement.unlocked ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gray-600"
                        }`}
                      >
                        <achievement.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{achievement.name}</h3>
                      <p className="text-gray-400 text-sm">{achievement.description}</p>
                      {achievement.unlocked && (
                        <Badge className="mt-3 bg-green-600 text-white">
                          <Award className="mr-1 h-3 w-3" />
                          Unlocked
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Study Groups
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "AI Storytellers", members: 234, topic: "Advanced AI Narratives" },
                    { name: "World Builders", members: 189, topic: "Environment Design" },
                    { name: "Music Producers", members: 156, topic: "AI-Assisted Composition" },
                  ].map((group, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <div>
                        <h4 className="text-white font-medium">{group.name}</h4>
                        <p className="text-gray-400 text-sm">{group.topic}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-medium">{group.members}</div>
                        <div className="text-gray-400 text-sm">members</div>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">Join a Study Group</Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Leaderboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { rank: 1, name: "Alex Chen", points: 15420, avatar: "/placeholder-user.jpg" },
                    { rank: 2, name: "Maya Rodriguez", points: 14890, avatar: "/placeholder-user.jpg" },
                    { rank: 3, name: "Jordan Kim", points: 13750, avatar: "/placeholder-user.jpg" },
                    { rank: 4, name: "You", points: 1250, avatar: "/placeholder-user.jpg", isUser: true },
                  ].map((user, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-3 rounded-lg ${
                        user.isUser ? "bg-purple-600/20 border border-purple-500/30" : "bg-white/5"
                      }`}
                    >
                      <div className="text-white font-bold text-lg">#{user.rank}</div>
                      <Avatar>
                        <AvatarImage src={user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-white font-medium">{user.name}</div>
                        <div className="text-gray-400 text-sm">{user.points.toLocaleString()} points</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
