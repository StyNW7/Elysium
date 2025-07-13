"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  Repeat,
  Download,
  MessageCircle,
  Eye,
  ThumbsUp,
  Mic,
  Clock,
  Calendar,
  Users,
  Star,
  Headphones,
  FileText,
  User,
} from "lucide-react"

export default function PodcastDetailPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, ] = useState(3600) // 60 minutes
  const [volume, setVolume] = useState([75])
  const [isLiked, setIsLiked] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [showNotes, setShowNotes] = useState(true)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)

  const podcastData = {
    id: "1",
    title: "The Future of Digital Creativity",
    host: "Alex Rivera",
    show: "Creative Minds Podcast",
    episode: "Episode 42",
    genre: "Technology & Arts",
    duration: "1:00:15",
    releaseDate: "2024-01-18",
    rating: 4.9,
    views: 45678,
    likes: 3420,
    comments: 156,
    description:
      "Join us for an in-depth conversation about the intersection of technology and creativity. We explore how AI, VR, and blockchain are reshaping the creative landscape and what it means for artists, designers, and content creators.",
    coverImage: "/Images/Content/podcast.png?height=600&width=600",
    audioUrl: "/placeholder-audio.mp3",
    guests: [
      {
        name: "Dr. Sarah Chen",
        title: "AI Research Director at TechCorp",
        bio: "Dr. Chen is a leading researcher in artificial intelligence and machine learning, with over 15 years of experience in developing AI systems for creative applications.",
        image: "/placeholder.svg?height=80&width=80",
        social: { twitter: "@sarahchen_ai", linkedin: "sarah-chen-ai" },
      },
      {
        name: "Marcus Thompson",
        title: "Digital Artist & NFT Creator",
        bio: "Marcus is a pioneering digital artist who has been at the forefront of the NFT movement, creating immersive digital experiences that blur the line between art and technology.",
        image: "/placeholder.svg?height=80&width=80",
        social: { twitter: "@marcusart", instagram: "@marcus_digital" },
      },
    ],
    showNotes: [
      { timestamp: "00:00", topic: "Introduction and guest introductions" },
      { timestamp: "05:30", topic: "The current state of AI in creative industries" },
      { timestamp: "15:45", topic: "How VR is changing artistic expression" },
      { timestamp: "28:20", topic: "Blockchain and the future of digital ownership" },
      { timestamp: "42:10", topic: "Challenges facing digital creators today" },
      { timestamp: "52:30", topic: "Predictions for the next decade" },
      { timestamp: "58:45", topic: "Q&A and closing thoughts" },
    ],
    tags: ["Technology", "AI", "Creativity", "Digital Art", "Future"],
    transcript: "Full transcript available...",
  }

  const relatedEpisodes = [
    {
      id: "2",
      title: "Building Creative Communities Online",
      episode: "Episode 41",
      duration: "45:30",
      plays: "23.4K",
    },
    { id: "3", title: "The Psychology of Digital Art", episode: "Episode 40", duration: "52:15", plays: "31.2K" },
    { id: "4", title: "Monetizing Creative Content", episode: "Episode 39", duration: "38:45", plays: "28.7K" },
  ]

  const comments = [
    {
      id: "1",
      user: "TechEnthusiast",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "Fascinating discussion about AI in creativity! The insights from Dr. Chen were particularly enlightening.",
      time: "2 hours ago",
      likes: 34,
    },
    {
      id: "2",
      user: "DigitalArtist",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "As a digital creator myself, this episode really resonated with me. Great questions, Alex!",
      time: "4 hours ago",
      likes: 28,
    },
    {
      id: "3",
      user: "PodcastLover",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "Another excellent episode! Love how you dive deep into these topics while keeping it accessible.",
      time: "6 hours ago",
      likes: 19,
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

  const jumpToTimestamp = (timestamp: string) => {
    const [mins, secs] = timestamp.split(":").map(Number)
    const totalSeconds = mins * 60 + secs
    setCurrentTime(totalSeconds)
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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Podcast Cover */}
          <div className="relative">
            <motion.div
              className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={podcastData.coverImage || "/placeholder.svg"}
                alt={podcastData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>

            {/* Floating Play Button */}
            <motion.button
              className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
            </motion.button>
          </div>

          {/* Podcast Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3 bg-gradient-to-r from-purple-500 to-pink-500">
                <Mic className="w-3 h-3 mr-1" />
                {podcastData.genre}
              </Badge>
              <p className="text-lg text-purple-400 mb-2">
                {podcastData.show} • {podcastData.episode}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {podcastData.title}
              </h1>
              <p className="text-xl text-gray-300 mb-4">Hosted by {podcastData.host}</p>
              <p className="text-gray-400 leading-relaxed">{podcastData.description}</p>
            </div>

            {/* Episode Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Duration</p>
                <p className="text-white font-medium flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {podcastData.duration}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Released</p>
                <p className="text-white font-medium flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(podcastData.releaseDate).toLocaleDateString()}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Rating</p>
                <p className="text-white font-medium flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                  {podcastData.rating}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Listeners</p>
                <p className="text-white font-medium flex items-center">
                  <Headphones className="w-4 h-4 mr-2" />
                  {podcastData.views.toLocaleString()}
                </p>
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
                {podcastData.likes.toLocaleString()}
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
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Audio Player */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <Slider
                      value={[currentTime]}
                      max={duration}
                      step={1}
                      className="w-full"
                      onValueChange={(value) => setCurrentTime(value[0])}
                    />
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Player Controls */}
                  <div className="flex items-center justify-center space-x-4">
                    <Button variant="ghost" size="sm">
                      <SkipBack className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      {/* Placeholder for additional control */}
                    </Button>
                    <Button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <SkipForward className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Repeat className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Volume and Speed Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <Volume2 className="w-4 h-4 text-gray-400" />
                      <Slider value={volume} max={100} step={1} className="flex-1 max-w-32" onValueChange={setVolume} />
                      <span className="text-sm text-gray-400 w-8">{volume[0]}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">Speed:</span>
                      <select
                        value={playbackSpeed}
                        onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                        className="bg-black/50 text-white text-sm rounded px-2 py-1 border border-white/20"
                      >
                        <option value={0.5}>0.5x</option>
                        <option value={0.75}>0.75x</option>
                        <option value={1}>1x</option>
                        <option value={1.25}>1.25x</option>
                        <option value={1.5}>1.5x</option>
                        <option value={2}>2x</option>
                      </select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Show Notes */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-purple-400" />
                    Show Notes
                  </h3>
                  <Button variant="outline" size="sm" onClick={() => setShowNotes(!showNotes)}>
                    {showNotes ? "Hide" : "Show"} Notes
                  </Button>
                </div>
                <AnimatePresence>
                  {showNotes && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3"
                    >
                      {podcastData.showNotes.map((note, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                          onClick={() => jumpToTimestamp(note.timestamp)}
                        >
                          <Badge variant="outline" className="text-xs font-mono">
                            {note.timestamp}
                          </Badge>
                          <p className="text-gray-300 flex-1">{note.topic}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Guest Information */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-pink-400" />
                  Featured Guests
                </h3>
                <div className="space-y-6">
                  {podcastData.guests.map((guest, index) => (
                    <div key={index} className="flex space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={guest.image || "/placeholder.svg"} />
                        <AvatarFallback>
                          {guest.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">{guest.name}</h4>
                        <p className="text-purple-400 mb-2">{guest.title}</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">{guest.bio}</p>
                        <div className="flex space-x-3">
                          {Object.entries(guest.social).map(([platform, handle]) => (
                            <Badge key={platform} variant="outline" className="text-xs">
                              {platform}: {handle}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
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
            {/* Host Info */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Host</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">{podcastData.host}</p>
                    <p className="text-sm text-gray-400">Podcast Host & Tech Journalist</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>125K followers</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Follow</Button>
              </CardContent>
            </Card>

            {/* Episode Stats */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Episode Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400 flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Listens
                    </span>
                    <span className="text-white font-medium">{podcastData.views.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      Likes
                    </span>
                    <span className="text-white font-medium">{podcastData.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Comments
                    </span>
                    <span className="text-white font-medium">{podcastData.comments}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {podcastData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Episodes */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">More Episodes</h3>
                <div className="space-y-3">
                  {relatedEpisodes.map((episode) => (
                    <div
                      key={episode.id}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Mic className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm truncate">{episode.title}</p>
                        <p className="text-sm text-gray-400 truncate">{episode.episode}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">{episode.duration}</p>
                        <p className="text-xs text-gray-500">{episode.plays}</p>
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
