"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Eye, Heart, Star, TrendingUp, Users, Play, Calendar, Award, Zap, Crown } from "lucide-react"
import { DashboardSidebar } from "@/components/Dashboard/dashboard-sidebar"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts"

const viewsData = [
  { name: "Jan", views: 4000, likes: 2400 },
  { name: "Feb", views: 3000, likes: 1398 },
  { name: "Mar", views: 2000, likes: 9800 },
  { name: "Apr", views: 2780, likes: 3908 },
  { name: "May", views: 1890, likes: 4800 },
  { name: "Jun", views: 2390, likes: 3800 },
  { name: "Jul", views: 3490, likes: 4300 },
]

const contentData = [
  { name: "Music", count: 45, color: "#f5d87a" },
  { name: "Film", count: 23, color: "#6a75f1" },
  { name: "Game", count: 12, color: "#a28ad6" },
  { name: "Story", count: 34, color: "#f5d87a" },
  { name: "Podcast", count: 18, color: "#6a75f1" },
]

const recentContent = [
  {
    id: 1,
    title: "Ethereal Dreams",
    type: "Music",
    views: 12500,
    likes: 890,
    status: "Published",
    date: "2024-01-15",
    thumbnail: "/Images/Content/Elysium-Design.png?height=60&width=60",
  },
  {
    id: 2,
    title: "Neon Nights",
    type: "Film",
    views: 8900,
    likes: 567,
    status: "Published",
    date: "2024-01-12",
    thumbnail: "/Images/Content/Elysium-Design.png?height=60&width=60",
  },
  {
    id: 3,
    title: "Quantum Quest",
    type: "Game",
    views: 15600,
    likes: 1200,
    status: "Draft",
    date: "2024-01-10",
    thumbnail: "/Images/Content/Elysium-Design.png?height=60&width=60",
  },
  {
    id: 4,
    title: "Mystic Tales",
    type: "Story",
    views: 6700,
    likes: 445,
    status: "Published",
    date: "2024-01-08",
    thumbnail: "/Images/Content/Elysium-Design.png?height=60&width=60",
  },
]

const achievements = [
  { title: "Rising Star", description: "Reached 10K total views", icon: Star, earned: true },
  { title: "Content Creator", description: "Published 50+ pieces", icon: Crown, earned: true },
  { title: "Community Favorite", description: "Received 1K+ likes", icon: Heart, earned: true },
  { title: "Viral Creator", description: "Content reached 100K views", icon: Zap, earned: false },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-elysium-black to-elysium-black/95">
      <DashboardSidebar />

      <main className="flex-1 lg:ml-64 p-6 space-y-8">
        {/* Creator Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-elysium-blue via-elysium-purple to-elysium-gold p-8 text-white"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-white/20">
              <AvatarImage src="/Images/Placeholder/Avatar.png?height=96&width=96" />
              <AvatarFallback className="bg-elysium-gold text-elysium-black text-2xl font-bold">EC</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">Elysian Creator</h1>
                <Badge className="bg-elysium-gold text-elysium-black hover:bg-elysium-gold/90">
                  <Crown className="h-3 w-3 mr-1" />
                  Pro Creator
                </Badge>
              </div>
              <p className="text-white/80 text-lg">
                Digital artist crafting immersive experiences across multiple mediums
              </p>
              <div className="flex items-center gap-6 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined January 2024
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  2.5K Followers
                </span>
                <span className="flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  Level 15
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
                Edit Profile
              </Button>
              <Button className="bg-white text-elysium-black hover:bg-white/90">View Public Profile</Button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-4 right-4 opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Star className="h-8 w-8" />
            </motion.div>
          </div>
          <div className="absolute bottom-4 right-20 opacity-20">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Zap className="h-6 w-6" />
            </motion.div>
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
              title: "Total Views",
              value: "156.2K",
              change: "+12.5%",
              icon: Eye,
              color: "from-elysium-blue to-elysium-purple",
            },
            {
              title: "Total Likes",
              value: "23.8K",
              change: "+8.2%",
              icon: Heart,
              color: "from-elysium-purple to-elysium-gold",
            },
            {
              title: "Followers",
              value: "2.5K",
              change: "+15.3%",
              icon: Users,
              color: "from-elysium-gold to-elysium-blue",
            },
            { title: "Content", value: "132", change: "+3", icon: Play, color: "from-elysium-blue to-elysium-gold" },
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
                    <p className="text-sm text-elysium-gold">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Views & Likes Chart */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-elysium-gold" />
                Views & Likes Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={viewsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="name" stroke="#ffffff60" />
                  <YAxis stroke="#ffffff60" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#171717",
                      border: "1px solid #ffffff20",
                      borderRadius: "12px",
                    }}
                  />
                  <Area type="monotone" dataKey="views" stackId="1" stroke="#6a75f1" fill="url(#viewsGradient)" />
                  <Area type="monotone" dataKey="likes" stackId="1" stroke="#f5d87a" fill="url(#likesGradient)" />
                  <defs>
                    <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6a75f1" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#6a75f1" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="likesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f5d87a" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#f5d87a" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Content Distribution */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BarChart className="h-5 w-5 text-elysium-purple" />
                Content Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={contentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="name" stroke="#ffffff60" />
                  <YAxis stroke="#ffffff60" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#171717",
                      border: "1px solid #ffffff20",
                      borderRadius: "12px",
                    }}
                  />
                  <Bar dataKey="count" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a28ad6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#6a75f1" stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Content & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Recent Content */}
          <Card className="lg:col-span-2 bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Play className="h-5 w-5 text-elysium-blue" />
                Recent Content
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentContent.map((content) => (
                <motion.div
                  key={content.id}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <img
                    src={content.thumbnail || "/Images/Content/Elysium-Design.png"}
                    alt={content.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium truncate">{content.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span>{content.type}</span>
                      <span>•</span>
                      <span>{content.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {content.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {content.likes}
                      </span>
                    </div>
                    <Badge variant={content.status === "Published" ? "default" : "secondary"} className="mt-1">
                      {content.status}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Award className="h-5 w-5 text-elysium-gold" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    achievement.earned
                      ? "bg-gradient-to-r from-elysium-gold/20 to-elysium-blue/20 border border-elysium-gold/30"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        achievement.earned ? "bg-elysium-gold text-elysium-black" : "bg-white/10 text-white/60"
                      }`}
                    >
                      <achievement.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${achievement.earned ? "text-white" : "text-white/60"}`}>
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-white/60">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Creator Level Progress */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Crown className="h-5 w-5 text-elysium-purple" />
                Creator Level Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">Level 15 - Elite Creator</span>
                  <span className="text-elysium-gold">2,450 / 3,000 XP</span>
                </div>
                <Progress value={81.67} className="h-3" />
                <p className="text-sm text-white/60">550 XP needed to reach Level 16 - Master Creator</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
