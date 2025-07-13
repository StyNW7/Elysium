"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  MessageCircle,
  Share,
  Repeat2,
  Search,
  TrendingUp,
  MoreHorizontal,
  ImageIcon,
  Smile,
  Calendar,
  MapPin,
} from "lucide-react"

// Mock data for echoes
const mockEchoes = [
  {
    id: 1,
    user: {
      name: "Alex Rivera",
      username: "@alexrivera",
      avatar: "/placeholder-user.jpg",
      verified: true,
    },
    content:
      'Just dropped my latest ambient track "Ethereal Dreams" 🎵 The soundscapes in this one transport you to another dimension. What do you think of the new direction?',
    timestamp: "2h",
    likes: 234,
    comments: 45,
    reechoes: 67,
    shares: 23,
    isLiked: false,
    isReechoed: false,
    type: "original",
    media: ["/Images/Content/Design-Elysium.png"],
  },
  {
    id: 2,
    user: {
      name: "Maya Chen",
      username: "@mayachen",
      avatar: "/placeholder-user.jpg",
      verified: false,
    },
    content:
      "The storytelling in @alexrivera's latest piece is absolutely phenomenal. The way they weave emotion into every note... *chef's kiss* 👌",
    timestamp: "4h",
    likes: 156,
    comments: 28,
    reechoes: 89,
    shares: 12,
    isLiked: true,
    isReechoed: false,
    type: "original",
  },
  {
    id: 3,
    user: {
      name: "Jordan Kim",
      username: "@jordankim",
      avatar: "/placeholder-user.jpg",
      verified: true,
    },
    content: "Working on something special... 👀",
    originalEcho: {
      user: {
        name: "Alex Rivera",
        username: "@alexrivera",
        avatar: "/placeholder-user.jpg",
      },
      content:
        "The creative process is like diving into the unknown. Every project teaches you something new about yourself.",
    },
    timestamp: "6h",
    likes: 89,
    comments: 15,
    reechoes: 34,
    shares: 8,
    isLiked: false,
    isReechoed: true,
    type: "quote",
  },
]

const trendingTopics = [
  { tag: "#ElysiumCreators", posts: "12.5K" },
  { tag: "#AmbientVibes", posts: "8.2K" },
  { tag: "#CreativeProcess", posts: "6.7K" },
  { tag: "#NewMusic", posts: "15.3K" },
  { tag: "#StorytellingMagic", posts: "4.1K" },
]

const suggestedUsers = [
  {
    name: "Luna Martinez",
    username: "@lunamartinez",
    avatar: "/placeholder-user.jpg",
    bio: "Digital artist & storyteller",
    followers: "2.3K",
  },
  {
    name: "Kai Thompson",
    username: "@kaithompson",
    avatar: "/placeholder-user.jpg",
    bio: "Podcast creator & voice actor",
    followers: "1.8K",
  },
  {
    name: "Zara Ahmed",
    username: "@zaraahmed",
    avatar: "/placeholder-user.jpg",
    bio: "Game developer & designer",
    followers: "3.1K",
  },
]

export default function EchoesPage() {
  const [echoes, setEchoes] = useState(mockEchoes)
  const [newEcho, setNewEcho] = useState("")
  const [, setIsCreating] = useState(false)
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [replyText, setReplyText] = useState("")

  const handleCreateEcho = () => {
    if (!newEcho.trim()) return

    const echo = {
      id: Date.now(),
      user: {
        name: "You",
        username: "@you",
        avatar: "/placeholder-user.jpg",
        verified: false,
      },
      content: newEcho,
      timestamp: "now",
      likes: 0,
      comments: 0,
      reechoes: 0,
      shares: 0,
      isLiked: false,
      isReechoed: false,
      type: "original" as const,
    }

    setEchoes([echo, ...echoes])
    setNewEcho("")
    setIsCreating(false)
  }

  const handleLike = (id: number) => {
    setEchoes(
      echoes.map((echo) =>
        echo.id === id
          ? {
              ...echo,
              isLiked: !echo.isLiked,
              likes: echo.isLiked ? echo.likes - 1 : echo.likes + 1,
            }
          : echo,
      ),
    )
  }

  const handleReecho = (id: number) => {
    setEchoes(
      echoes.map((echo) =>
        echo.id === id
          ? {
              ...echo,
              isReechoed: !echo.isReechoed,
              reechoes: echo.isReechoed ? echo.reechoes - 1 : echo.reechoes + 1,
            }
          : echo,
      ),
    )
  }

  const handleReply = (id: number) => {
    if (!replyText.trim()) return

    const reply = {
      id: Date.now(),
      user: {
        name: "You",
        username: "@you",
        avatar: "/placeholder-user.jpg",
        verified: false,
      },
      content: replyText,
      timestamp: "now",
      likes: 0,
      comments: 0,
      reechoes: 0,
      shares: 0,
      isLiked: false,
      isReechoed: false,
      type: "original" as const,
      replyTo: id,
    }

    setEchoes([reply, ...echoes])
    setEchoes(echoes.map((echo) => (echo.id === id ? { ...echo, comments: echo.comments + 1 } : echo)))
    setReplyText("")
    setReplyingTo(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-elysium-black via-elysium-black/95 to-elysium-purple/20 pt-20 pb-6">

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-8">
            {/* Create Echo */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea
                        placeholder="What's echoing in your mind?"
                        value={newEcho}
                        onChange={(e) => setNewEcho(e.target.value)}
                        className="border-0 resize-none text-lg placeholder:text-slate-400 focus-visible:ring-0"
                        rows={3}
                      />
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                            <ImageIcon className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                            <Smile className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                            <Calendar className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                            <MapPin className="w-4 h-4" />
                          </Button>
                        </div>
                        <Button
                          onClick={handleCreateEcho}
                          disabled={!newEcho.trim()}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                          Echo
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Echo Feed */}
            <div className="space-y-6">
              <AnimatePresence>
                {echoes.map((echo, index) => (
                  <motion.div
                    key={echo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        {/* Echo Header */}
                        <div className="flex items-start gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={echo.user.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{echo.user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-slate-900">{echo.user.name}</h3>
                              {echo.user.verified && (
                                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                  <div className="w-3 h-3 bg-white rounded-full" />
                                </div>
                              )}
                              <span className="text-slate-500">{echo.user.username}</span>
                              <span className="text-slate-400">·</span>
                              <span className="text-slate-500">{echo.timestamp}</span>
                            </div>

                            {/* Quote Echo */}
                            {echo.type === "quote" && echo.originalEcho && (
                              <div className="mt-3">
                                <p className="text-slate-900 mb-3">{echo.content}</p>
                                <Card className="border border-slate-200 bg-slate-50/50">
                                  <CardContent className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Avatar className="w-6 h-6">
                                        <AvatarImage src={echo.originalEcho.user.avatar || "/placeholder.svg"} />
                                        <AvatarFallback>{echo.originalEcho.user.name[0]}</AvatarFallback>
                                      </Avatar>
                                      <span className="font-medium text-sm">{echo.originalEcho.user.name}</span>
                                      <span className="text-slate-500 text-sm">{echo.originalEcho.user.username}</span>
                                    </div>
                                    <p className="text-slate-700">{echo.originalEcho.content}</p>
                                  </CardContent>
                                </Card>
                              </div>
                            )}

                            {/* Regular Echo */}
                            {echo.type === "original" && (
                              <div className="mt-3">
                                <p className="text-slate-900 leading-relaxed">{echo.content}</p>
                                {echo.media && (
                                  <div className="mt-4 rounded-xl overflow-hidden">
                                    <img
                                      src={echo.media[0] || "/Images/Content/Elysium-Design.png"}
                                      alt="Echo media"
                                      className="w-full h-64 object-cover"
                                    />
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Echo Actions */}
                            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setReplyingTo(replyingTo === echo.id ? null : echo.id)}
                                className="text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                              >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                {echo.comments}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleReecho(echo.id)}
                                className={`hover:bg-green-50 ${echo.isReechoed ? "text-green-600" : "text-slate-600 hover:text-green-600"}`}
                              >
                                <Repeat2 className="w-4 h-4 mr-2" />
                                {echo.reechoes}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleLike(echo.id)}
                                className={`hover:bg-red-50 ${echo.isLiked ? "text-red-600" : "text-slate-600 hover:text-red-600"}`}
                              >
                                <Heart className={`w-4 h-4 mr-2 ${echo.isLiked ? "fill-current" : ""}`} />
                                {echo.likes}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                              >
                                <Share className="w-4 h-4 mr-2" />
                                {echo.shares}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-slate-600 hover:text-slate-700 hover:bg-slate-50"
                              >
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>

                            {/* Reply Section */}
                            <AnimatePresence>
                              {replyingTo === echo.id && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="mt-4 pt-4 border-t border-slate-100"
                                >
                                  <div className="flex gap-3">
                                    <Avatar className="w-8 h-8">
                                      <AvatarImage src="/placeholder-user.jpg" />
                                      <AvatarFallback>You</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                      <Textarea
                                        placeholder={`Reply to ${echo.user.name}...`}
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                        className="border-slate-200 resize-none"
                                        rows={2}
                                      />
                                      <div className="flex justify-end gap-2 mt-2">
                                        <Button variant="ghost" size="sm" onClick={() => setReplyingTo(null)}>
                                          Cancel
                                        </Button>
                                        <Button
                                          size="sm"
                                          onClick={() => handleReply(echo.id)}
                                          disabled={!replyText.trim()}
                                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                                        >
                                          Reply
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Search */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input placeholder="Search Echoes" className="pl-10 border-slate-200 bg-slate-50/50" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trending Topics */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                    <h3 className="font-semibold text-slate-900">Trending in Elysium</h3>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <motion.div
                        key={topic.tag}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50/50 cursor-pointer transition-colors"
                      >
                        <div>
                          <p className="font-medium text-slate-900">{topic.tag}</p>
                          <p className="text-sm text-slate-500">{topic.posts} echoes</p>
                        </div>
                        <TrendingUp className="w-4 h-4 text-orange-500" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Suggested Users */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <h3 className="font-semibold text-slate-900">Who to follow</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {suggestedUsers.map((user, index) => (
                      <motion.div
                        key={user.username}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium text-slate-900">{user.name}</p>
                          <p className="text-sm text-slate-500">{user.username}</p>
                          <p className="text-xs text-slate-400">{user.bio}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                        >
                          Follow
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
