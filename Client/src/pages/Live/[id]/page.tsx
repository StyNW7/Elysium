"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Eye,
  Heart,
  Share2,
  Radio,
  Gift,
  Settings,
  Maximize,
  Volume2,
  VolumeX,
  Verified,
  Star,
  Send,
  Smile,
  MoreHorizontal,
  UserPlus,
  Bell,
  Flag,
} from "lucide-react"

// Mock live stream data
const liveStreamData = {
  id: "1",
  title: "Creating Epic Fantasy Soundscapes Live",
  creator: {
    name: "Alex Chen",
    avatar: "/Images/Placeholder/Avatar.png",
    verified: true,
    followers: 15400,
    bio: "Professional music producer specializing in cinematic and fantasy soundscapes",
  },
  category: "Music",
  viewers: 2847,
  likes: 1234,
  thumbnail: "/Images/Content/Elysium-Design.png",
  tags: ["Fantasy", "Ambient", "Live Creation"],
  duration: "2:34:12",
  isLive: true,
  description:
    "Join me as I create an epic fantasy soundscape from scratch using various synthesizers and field recordings. We'll explore different techniques for creating atmospheric music.",
  streamUrl: "/Images/Content/Elysium-Design.png", // This would be the actual stream URL
}

// Mock chat messages
const initialChatMessages = [
  {
    id: "1",
    user: { name: "MusicLover42", avatar: "/Images/Placeholder/Avatar.png", verified: false },
    message: "This sounds amazing! 🎵",
    timestamp: "2:34:10",
    isSupporter: false,
  },
  {
    id: "2",
    user: { name: "FantasyFan", avatar: "/Images/Placeholder/Avatar.png", verified: true },
    message: "Can you show us how you layer the strings?",
    timestamp: "2:34:08",
    isSupporter: true,
  },
  {
    id: "3",
    user: { name: "AudioEngineer", avatar: "/Images/Placeholder/Avatar.png", verified: false },
    message: "What DAW are you using for this?",
    timestamp: "2:34:05",
    isSupporter: false,
  },
  {
    id: "4",
    user: { name: "CreativeSpirit", avatar: "/Images/Placeholder/Avatar.png", verified: false },
    message: "Just followed! Your work is incredible 🔥",
    timestamp: "2:34:02",
    isSupporter: false,
  },
]

export default function LiveStreamPage() {
  
  const [isFollowing, setIsFollowing] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [chatMessages, setChatMessages] = useState(initialChatMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now().toString(),
        user: { name: "You", avatar: "/Images/Placeholder/Avatar.png", verified: false },
        message: newMessage,
        timestamp: new Date().toLocaleTimeString().slice(0, -3),
        isSupporter: false,
      }
      setChatMessages([message, ...chatMessages])
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Stream Area */}
          <div className="lg:col-span-3">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-black rounded-lg overflow-hidden mb-6 aspect-video"
            >
              <img
                src={liveStreamData.streamUrl || "/Images/Content/Elysium-Design.png"}
                alt="Live Stream"
                className="w-full h-full object-cover"
              />

              {/* Live Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-600 text-white animate-pulse">
                  <Radio className="h-3 w-3 mr-1" />
                  LIVE
                </Badge>
              </div>

              {/* Viewer Count */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-black/60 text-white backdrop-blur-sm">
                  <Eye className="h-3 w-3 mr-1" />
                  {liveStreamData.viewers.toLocaleString()} watching
                </Badge>
              </div>

              {/* Stream Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-black/60 text-white hover:bg-black/80"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="bg-black/60 text-white hover:bg-black/80">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-black/60 text-white hover:bg-black/80"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Stream Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h1 className="text-2xl font-bold text-white mb-2">{liveStreamData.title}</h1>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-purple-600 text-white">{liveStreamData.category}</Badge>
                        {liveStreamData.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-white/10 text-gray-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        onClick={() => setIsLiked(!isLiked)}
                      >
                        <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                        {liveStreamData.likes + (isLiked ? 1 : 0)}
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Creator Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={liveStreamData.creator.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{liveStreamData.creator.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-white font-semibold">{liveStreamData.creator.name}</h3>
                          {liveStreamData.creator.verified && <Verified className="h-4 w-4 text-blue-400" />}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{liveStreamData.creator.followers.toLocaleString()} followers</span>
                          <span>•</span>
                          <span>Streaming for {liveStreamData.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant={isFollowing ? "outline" : "default"}
                        className={
                          isFollowing
                            ? "border-white/20 text-white hover:bg-white/10"
                            : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        }
                        onClick={() => setIsFollowing(!isFollowing)}
                      >
                        <UserPlus className="h-4 w-4 mr-2" />
                        {isFollowing ? "Following" : "Follow"}
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        <Bell className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Separator className="my-4 bg-white/20" />

                  <p className="text-gray-300 leading-relaxed">{liveStreamData.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Chat Sidebar */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm h-[600px] flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center justify-between">
                    <span>Live Chat</span>
                    <Badge className="bg-green-600 text-white">{liveStreamData.viewers.toLocaleString()}</Badge>
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col p-0">
                  {/* Chat Messages */}
                  <ScrollArea className="flex-1 px-4">
                    <div className="space-y-3">
                      {chatMessages.map((message) => (
                        <div key={message.id} className="flex items-start gap-2">
                          <Avatar className="h-6 w-6 flex-shrink-0">
                            <AvatarImage src={message.user.avatar || "/placeholder.svg"} />
                            <AvatarFallback className="text-xs">{message.user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 mb-1">
                              <span
                                className={`text-xs font-medium ${
                                  message.isSupporter ? "text-yellow-400" : "text-gray-300"
                                }`}
                              >
                                {message.user.name}
                              </span>
                              {message.user.verified && <Verified className="h-3 w-3 text-blue-400" />}
                              {message.isSupporter && <Star className="h-3 w-3 text-yellow-400" />}
                              <span className="text-xs text-gray-500 ml-auto">{message.timestamp}</span>
                            </div>
                            <p className="text-sm text-white break-words">{message.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Chat Input */}
                  <div className="p-4 border-t border-white/20">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 relative">
                        <Input
                          placeholder="Say something..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 pr-10"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-white"
                        >
                          <Smile className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Gift className="h-4 w-4 mr-1" />
                        Gift
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Flag className="h-4 w-4 mr-1" />
                        Report
                      </Button>
                    </div>
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
