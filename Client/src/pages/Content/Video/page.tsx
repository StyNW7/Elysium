/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import {
  Play,
  Pause,
  Heart,
  Bookmark,
  Share2,
  Volume2,
  SkipBack,
  SkipForward,
  Maximize,
  Settings,
  MessageCircle,
  Eye,
  ThumbsUp,
  Download,
  Film,
  Clock,
  Calendar,
  Star,
  Users,
} from "lucide-react"

export default function VideoDetailPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(1800) // 30 minutes
  const [volume, setVolume] = useState([75])
  const [isLiked, setIsLiked] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showDescription, setShowDescription] = useState(true)
  const [quality, setQuality] = useState("1080p")

  const videoRef = useRef<HTMLVideoElement>(null)

  const videoData = {
    id: "1",
    title: "The Last Guardian of Elysium",
    creator: "Stellar Studios",
    genre: "Sci-Fi Adventure",
    duration: "30:45",
    releaseDate: "2024-01-20",
    rating: 4.8,
    views: 234567,
    likes: 18420,
    comments: 892,
    description:
      "In a world where reality bends to imagination, follow the journey of Aria, the last guardian of the mystical realm of Elysium. As ancient forces threaten to tear apart the fabric of existence, she must master her newfound powers and unite the scattered tribes of her world.",
    synopsis:
      "An epic tale of courage, magic, and destiny unfolds as our protagonist discovers her true heritage and the weight of responsibility that comes with it. With stunning visuals and compelling storytelling, this film explores themes of identity, sacrifice, and the power of unity.",
    cast: [
      { name: "Elena Voss", character: "Aria", image: "/placeholder.svg?height=60&width=60" },
      { name: "Marcus Chen", character: "Kael", image: "/placeholder.svg?height=60&width=60" },
      { name: "Sophia Rivera", character: "Lyra", image: "/placeholder.svg?height=60&width=60" },
    ],
    crew: [
      { name: "Alex Thompson", role: "Director" },
      { name: "Sarah Kim", role: "Producer" },
      { name: "David Martinez", role: "Cinematographer" },
    ],
    tags: ["Sci-Fi", "Adventure", "Fantasy", "Drama"],
    thumbnailUrl: "/Images/Content/Elysium-Design.png?height=720&width=1280",
    videoUrl: "/Images/Placeholder/Video.mp4",
  }

  const relatedVideos = [
    {
      id: "2",
      title: "Chronicles of the Void",
      creator: "Stellar Studios",
      duration: "25:30",
      views: "156K",
      thumbnail: "/Images/Content/Elysium-Design.png??height=180&width=320",
    },
    {
      id: "3",
      title: "Quantum Realms",
      creator: "Nova Films",
      duration: "42:15",
      views: "89K",
      thumbnail: "/Images/Content/Elysium-Design.png?height=180&width=320",
    },
    {
      id: "4",
      title: "Digital Awakening",
      creator: "Cyber Cinema",
      duration: "18:45",
      views: "203K",
      thumbnail: "/Images/Content/Elysium-Design.png?height=180&width=320",
    },
  ]

  const comments = [
    {
      id: "1",
      user: "CinemaLover",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "Absolutely stunning visuals! The world-building is incredible and the story kept me engaged throughout.",
      time: "3 hours ago",
      likes: 45,
    },
    {
      id: "2",
      user: "SciFiFan2024",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "Elena Voss's performance as Aria is phenomenal. Can't wait for the sequel!",
      time: "6 hours ago",
      likes: 32,
    },
    {
      id: "3",
      user: "FilmCritic",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "Stellar Studios has outdone themselves. The cinematography and sound design are top-notch.",
      time: "1 day ago",
      likes: 67,
    },
  ]

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => (prev < duration ? prev + 1 : prev))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, duration])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Video Player Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Card className="bg-black/40 backdrop-blur-sm border-white/10 overflow-hidden">
            <CardContent className="p-0">
              {/* Video Container */}
              <div className="relative aspect-video bg-black">
                <img
                  src={videoData.thumbnailUrl || "/placeholder.svg"}
                  alt={videoData.title}
                  className="w-full h-full object-cover"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </motion.button>
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <Slider
                      value={[currentTime]}
                      max={duration}
                      step={1}
                      className="w-full"
                      onValueChange={(value) => setCurrentTime(value[0])}
                    />
                    <div className="flex justify-between text-sm text-white/80 mt-1">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Button variant="ghost" size="sm" className="text-white hover:text-white">
                        <SkipBack className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => setIsPlaying(!isPlaying)}
                        variant="ghost"
                        size="sm"
                        className="text-white hover:text-white"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white hover:text-white">
                        <SkipForward className="w-4 h-4" />
                      </Button>

                      {/* Volume Control */}
                      <div className="flex items-center space-x-2">
                        <Volume2 className="w-4 h-4 text-white" />
                        <Slider value={volume} max={100} step={1} className="w-20" onValueChange={setVolume} />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <select
                        value={quality}
                        onChange={(e) => setQuality(e.target.value)}
                        className="bg-black/50 text-white text-sm rounded px-2 py-1 border border-white/20"
                      >
                        <option value="720p">720p</option>
                        <option value="1080p">1080p</option>
                        <option value="4K">4K</option>
                      </select>
                      <Button variant="ghost" size="sm" className="text-white hover:text-white">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white hover:text-white">
                        <Maximize className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Info */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <Badge className="mb-3 bg-gradient-to-r from-purple-500 to-pink-500">
                      <Film className="w-3 h-3 mr-1" />
                      {videoData.genre}
                    </Badge>
                    <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {videoData.title}
                    </h1>
                    <p className="text-lg text-gray-300 mb-4">by {videoData.creator}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{videoData.rating}</span>
                  </div>
                </div>

                {/* Video Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-gray-400 mr-1" />
                    </div>
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-white font-medium">{videoData.duration}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Eye className="w-4 h-4 text-gray-400 mr-1" />
                    </div>
                    <p className="text-sm text-gray-400">Views</p>
                    <p className="text-white font-medium">{videoData.views.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Heart className="w-4 h-4 text-gray-400 mr-1" />
                    </div>
                    <p className="text-sm text-gray-400">Likes</p>
                    <p className="text-white font-medium">{videoData.likes.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                    </div>
                    <p className="text-sm text-gray-400">Released</p>
                    <p className="text-white font-medium">{new Date(videoData.releaseDate).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => setIsLiked(!isLiked)}
                    variant={isLiked ? "default" : "outline"}
                    className={`${isLiked ? "bg-gradient-to-r from-red-500 to-pink-500" : ""}`}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                    {videoData.likes.toLocaleString()}
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
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Synopsis & Description */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Synopsis</h3>
                  <Button variant="outline" size="sm" onClick={() => setShowDescription(!showDescription)}>
                    {showDescription ? "Hide" : "Show"} Details
                  </Button>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{videoData.description}</p>
                <AnimatePresence>
                  {showDescription && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      <Separator className="bg-white/10" />
                      <p className="text-gray-300 leading-relaxed">{videoData.synopsis}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Cast & Crew */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Cast & Crew</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-purple-400">Cast</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {videoData.cast.map((actor, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={actor.image || "/placeholder.svg"} />
                            <AvatarFallback>
                              {actor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-white">{actor.name}</p>
                            <p className="text-sm text-gray-400">as {actor.character}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-pink-400">Crew</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {videoData.crew.map((member, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-400">{member.role}:</span>
                          <span className="text-white">{member.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Comments ({comments.length})
                </h3>
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-3">
                      <Avatar>
                        <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{comment.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-white">{comment.user}</span>
                          <span className="text-sm text-gray-400">{comment.time}</span>
                        </div>
                        <p className="text-gray-300 mb-2">{comment.text}</p>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <ThumbsUp className="w-3 h-3 mr-1" />
                          {comment.likes}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Creator Info */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Creator</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">{videoData.creator}</p>
                    <p className="text-sm text-gray-400">Film Studio</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>2.3M subscribers</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Subscribe</Button>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {videoData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Videos */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Related Videos</h3>
                <div className="space-y-4">
                  {relatedVideos.map((video) => (
                    <div
                      key={video.id}
                      className="flex space-x-3 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors"
                    >
                      <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm line-clamp-2 mb-1">{video.title}</p>
                        <p className="text-gray-400 text-xs mb-1">{video.creator}</p>
                        <p className="text-gray-500 text-xs">{video.views} views</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
