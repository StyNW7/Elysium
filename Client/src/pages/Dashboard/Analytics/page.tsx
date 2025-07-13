"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  TrendingDown,
  Eye,
  Heart,
  Users,
  Clock,
  Globe,
  Monitor,
  DollarSign,
  Target,
  Zap,
} from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts"

// Sample data for charts
const viewsData = [
  { date: "Jan 1", views: 1200, likes: 89, comments: 23, shares: 12 },
  { date: "Jan 2", views: 1800, likes: 134, comments: 45, shares: 18 },
  { date: "Jan 3", views: 1600, likes: 112, comments: 34, shares: 15 },
  { date: "Jan 4", views: 2200, likes: 167, comments: 56, shares: 24 },
  { date: "Jan 5", views: 2800, likes: 201, comments: 67, shares: 31 },
  { date: "Jan 6", views: 2400, likes: 178, comments: 52, shares: 28 },
  { date: "Jan 7", views: 3200, likes: 234, comments: 78, shares: 35 },
]

const contentTypeData = [
  { name: "Music", value: 45, color: "#f5d87a" },
  { name: "Film", value: 23, color: "#6a75f1" },
  { name: "Story", value: 34, color: "#a28ad6" },
  { name: "Podcast", value: 18, color: "#f5d87a" },
  { name: "Game", value: 12, color: "#6a75f1" },
]

const deviceData = [
  { name: "Desktop", value: 45, fill: "#6a75f1" },
  { name: "Mobile", value: 35, fill: "#a28ad6" },
  { name: "Tablet", value: 20, fill: "#f5d87a" },
]

const audienceData = [
  { age: "18-24", male: 30, female: 45 },
  { age: "25-34", male: 25, female: 35 },
  { age: "35-44", male: 20, female: 25 },
  { age: "45-54", male: 15, female: 18 },
  { age: "55+", male: 10, female: 12 },
]

const revenueData = [
  { month: "Jan", revenue: 1250, expenses: 450 },
  { month: "Feb", revenue: 1680, expenses: 520 },
  { month: "Mar", revenue: 2100, expenses: 680 },
  { month: "Apr", revenue: 1890, expenses: 590 },
  { month: "May", revenue: 2340, expenses: 720 },
  { month: "Jun", revenue: 2680, expenses: 810 },
]

const topContent = [
  { title: "Ethereal Dreams", type: "Music", views: 12500, engagement: 8.9 },
  { title: "Neon Nights", type: "Film", views: 8900, engagement: 7.2 },
  { title: "Quantum Quest", type: "Game", views: 15600, engagement: 9.4 },
  { title: "Mystic Tales", type: "Story", views: 6700, engagement: 6.8 },
  { title: "Tech Talk Weekly", type: "Podcast", views: 3400, engagement: 5.9 },
]

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d")

  const stats = [
    {
      title: "Total Views",
      value: "156.2K",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "from-elysium-blue to-elysium-purple",
    },
    {
      title: "Engagement Rate",
      value: "8.4%",
      change: "+2.1%",
      trend: "up",
      icon: Heart,
      color: "from-elysium-purple to-elysium-gold",
    },
    {
      title: "Total Revenue",
      value: "$2,847",
      change: "+18.3%",
      trend: "up",
      icon: DollarSign,
      color: "from-elysium-gold to-elysium-blue",
    },
    {
      title: "Avg. Watch Time",
      value: "4m 32s",
      change: "-5.2%",
      trend: "down",
      icon: Clock,
      color: "from-elysium-blue to-elysium-gold",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-elysium-black to-elysium-black/95">
      <DashboardSidebar />

      <main className="flex-1 lg:ml-64 p-6 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-elysium-gold via-elysium-blue to-elysium-purple bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-white/60 text-lg mt-2">Deep insights into your content performance</p>
          </div>

          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32 bg-white/5 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-elysium-black border-white/20">
                <SelectItem value="7d" className="text-white hover:bg-white/10">
                  Last 7 days
                </SelectItem>
                <SelectItem value="30d" className="text-white hover:bg-white/10">
                  Last 30 days
                </SelectItem>
                <SelectItem value="90d" className="text-white hover:bg-white/10">
                  Last 90 days
                </SelectItem>
                <SelectItem value="1y" className="text-white hover:bg-white/10">
                  Last year
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {stat.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {stat.change}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-white/60">{stat.title}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Analytics Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-white/5 border-white/10">
              <TabsTrigger value="overview" className="data-[state=active]:bg-elysium-blue">
                Overview
              </TabsTrigger>
              <TabsTrigger value="audience" className="data-[state=active]:bg-elysium-blue">
                Audience
              </TabsTrigger>
              <TabsTrigger value="content" className="data-[state=active]:bg-elysium-blue">
                Content
              </TabsTrigger>
              <TabsTrigger value="revenue" className="data-[state=active]:bg-elysium-blue">
                Revenue
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Views & Engagement Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-elysium-gold" />
                      Views & Engagement Trend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={viewsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                        <XAxis dataKey="date" stroke="#ffffff60" />
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

                {/* Content Type Distribution */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Target className="h-5 w-5 text-elysium-purple" />
                      Content Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={contentTypeData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent || 1 * 100).toFixed(0)}%`}
                        >
                          {contentTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Device Usage */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Monitor className="h-5 w-5 text-elysium-blue" />
                    Device Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ResponsiveContainer width="100%" height={200}>
                      <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" data={deviceData}>
                        <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
                        <Tooltip />
                      </RadialBarChart>
                    </ResponsiveContainer>
                    <div className="space-y-4">
                      {deviceData.map((device, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: device.fill }} />
                            <span className="text-white">{device.name}</span>
                          </div>
                          <span className="text-white/60">{device.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="audience" className="space-y-6">
              {/* Audience Demographics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Users className="h-5 w-5 text-elysium-gold" />
                      Age & Gender Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={audienceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                        <XAxis dataKey="age" stroke="#ffffff60" />
                        <YAxis stroke="#ffffff60" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#171717",
                            border: "1px solid #ffffff20",
                            borderRadius: "12px",
                          }}
                        />
                        <Legend />
                        <Bar dataKey="male" stackId="a" fill="#6a75f1" name="Male" />
                        <Bar dataKey="female" stackId="a" fill="#a28ad6" name="Female" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Geographic Distribution */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Globe className="h-5 w-5 text-elysium-blue" />
                      Top Locations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { country: "United States", percentage: 35, flag: "🇺🇸" },
                        { country: "United Kingdom", percentage: 18, flag: "🇬🇧" },
                        { country: "Canada", percentage: 12, flag: "🇨🇦" },
                        { country: "Australia", percentage: 10, flag: "🇦🇺" },
                        { country: "Germany", percentage: 8, flag: "🇩🇪" },
                        { country: "France", percentage: 7, flag: "🇫🇷" },
                        { country: "Japan", percentage: 6, flag: "🇯🇵" },
                        { country: "Others", percentage: 4, flag: "🌍" },
                      ].map((location, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{location.flag}</span>
                            <span className="text-white">{location.country}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-elysium-blue to-elysium-purple rounded-full"
                                style={{ width: `${location.percentage}%` }}
                              />
                            </div>
                            <span className="text-white/60 w-8 text-right">{location.percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="content" className="space-y-6">
              {/* Top Performing Content */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Zap className="h-5 w-5 text-elysium-gold" />
                    Top Performing Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topContent.map((content, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-elysium-blue to-elysium-purple rounded-lg flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{content.title}</h4>
                            <p className="text-white/60 text-sm">{content.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                          <div className="text-center">
                            <p className="text-white font-medium">{content.views.toLocaleString()}</p>
                            <p className="text-white/60">Views</p>
                          </div>
                          <div className="text-center">
                            <p className="text-elysium-gold font-medium">{content.engagement}%</p>
                            <p className="text-white/60">Engagement</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-6">
              {/* Revenue Chart */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-elysium-gold" />
                    Revenue & Expenses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis dataKey="month" stroke="#ffffff60" />
                      <YAxis stroke="#ffffff60" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#171717",
                          border: "1px solid #ffffff20",
                          borderRadius: "12px",
                        }}
                      />
                      <Legend />
                      <Bar dataKey="revenue" fill="#f5d87a" name="Revenue" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="expenses" fill="#6a75f1" name="Expenses" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Revenue Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-elysium-gold mb-2">$2,847</div>
                    <p className="text-white/60">Total Revenue</p>
                    <div className="text-green-400 text-sm mt-1">+18.3% from last month</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-elysium-blue mb-2">$1,234</div>
                    <p className="text-white/60">Net Profit</p>
                    <div className="text-green-400 text-sm mt-1">+22.1% from last month</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-elysium-purple mb-2">$18.50</div>
                    <p className="text-white/60">Avg. Revenue per View</p>
                    <div className="text-green-400 text-sm mt-1">+5.7% from last month</div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  )
}
