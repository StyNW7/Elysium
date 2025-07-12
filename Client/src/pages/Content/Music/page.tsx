/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useRef, useEffect } from "react"
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
  Shuffle,
  MessageCircle,
  Eye,
  ThumbsUp,
  Download,
  Music,
  Headphones,
  Waves,
  Zap,
} from "lucide-react"

export default function MusicDetailPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(240) // 4 minutes
  const [volume, setVolume] = useState([75])
  const [isLiked, setIsLiked] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [showLyrics, setShowLyrics] = useState(true)
  const [activeEffect, setActiveEffect] = useState<string | null>(null)

  // Audio effects state
  const [reverb, setReverb] = useState([0])
  const [echo, setEcho] = useState([0])
  const [bass, setBass] = useState([50])
  const [treble, setTreble] = useState([50])

  const audioRef = useRef<HTMLAudioElement>(null)

  const musicData = {
    id: "1",
    title: "Ethereal Dreams",
    artist: "Luna Starweaver",
    album: "Cosmic Resonance",
    genre: "Ambient Electronic",
    duration: "4:00",
    coverImage: "/Images/Content/music-1.png?height=600&width=600",
    audioUrl: "/placeholder-audio.mp3",
    likes: 15420,
    views: 89340,
    comments: 234,
    description:
      "A mesmerizing journey through ethereal soundscapes that blend organic and synthetic elements, creating an immersive experience that transcends traditional musical boundaries.",
    releaseDate: "2024-01-15",
    bpm: 120,
    key: "C Major",
    mood: "Dreamy, Uplifting",
    tags: ["Ambient", "Electronic", "Chill", "Meditation"],
  }

  const lyrics = [
    { time: 0, text: "In the silence of the night" },
    { time: 15, text: "Stars whisper ancient secrets" },
    { time: 30, text: "Dreams cascade like silver rain" },
    { time: 45, text: "Through dimensions yet unseen" },
    { time: 60, text: "Ethereal voices call my name" },
    { time: 75, text: "In this cosmic dance of light" },
    { time: 90, text: "Where time and space collide" },
    { time: 105, text: "I find my soul's true flight" },
    { time: 120, text: "Beyond the veil of mortal sight" },
    { time: 135, text: "In dreams that never fade" },
    { time: 150, text: "The universe unfolds its might" },
    { time: 165, text: "In melodies that gods have made" },
    { time: 180, text: "Ethereal dreams, forever bright" },
    { time: 195, text: "In harmony with cosmic light" },
    { time: 210, text: "Where souls and stars unite" },
    { time: 225, text: "In eternal, endless flight" },
  ]

  const relatedMusic = [
    { id: "2", title: "Stellar Voyage", artist: "Luna Starweaver", duration: "3:45", plays: "12.3K" },
    { id: "3", title: "Quantum Harmony", artist: "Echo Nebula", duration: "5:20", plays: "8.7K" },
    { id: "4", title: "Digital Serenity", artist: "Cyber Monk", duration: "4:15", plays: "15.2K" },
  ]

  const comments = [
    {
      id: "1",
      user: "CosmicListener",
      avatar: "/Images/Content/music-1.png?height=40&width=40",
      text: "This track takes me to another dimension! The ethereal quality is incredible.",
      time: "2 hours ago",
      likes: 23,
    },
    {
      id: "2",
      user: "SoundExplorer",
      avatar: "/Images/Content/music-1.png?height=40&width=40",
      text: "Luna's production skills are getting better with each release. Love the ambient textures!",
      time: "5 hours ago",
      likes: 18,
    },
    {
      id: "3",
      user: "MeditationMaster",
      avatar: "/Images/Content/music-1.png?height=40&width=40",
      text: "Perfect for my morning meditation sessions. Thank you for this beautiful creation.",
      time: "1 day ago",
      likes: 31,
    },
  ]

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getCurrentLyric = () => {
    return lyrics.find((lyric, index) => {
      const nextLyric = lyrics[index + 1]
      return currentTime >= lyric.time && (!nextLyric || currentTime < nextLyric.time)
    })
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
          {/* Cover Art */}
          <div className="relative">
            <motion.div
              className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={musicData.coverImage || "/Images/Content/music-1.png"}
                alt={musicData.title}
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

          {/* Track Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3 bg-gradient-to-r from-purple-500 to-pink-500">
                <Music className="w-3 h-3 mr-1" />
                {musicData.genre}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {musicData.title}
              </h1>
              <p className="text-xl text-gray-300 mb-4">by {musicData.artist}</p>
              <p className="text-gray-400 leading-relaxed">{musicData.description}</p>
            </div>

            {/* Track Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Duration</p>
                <p className="text-white font-medium">{musicData.duration}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">BPM</p>
                <p className="text-white font-medium">{musicData.bpm}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Key</p>
                <p className="text-white font-medium">{musicData.key}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Mood</p>
                <p className="text-white font-medium">{musicData.mood}</p>
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
                {musicData.likes.toLocaleString()}
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
            {/* Music Player */}
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
                      <Shuffle className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <SkipBack className="w-5 h-5" />
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

                  {/* Volume Control */}
                  <div className="flex items-center space-x-3">
                    <Volume2 className="w-4 h-4 text-gray-400" />
                    <Slider value={volume} max={100} step={1} className="flex-1" onValueChange={setVolume} />
                    <span className="text-sm text-gray-400 w-8">{volume[0]}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Audio Effects */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Headphones className="w-5 h-5 mr-2 text-purple-400" />
                  Audio Effects
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm text-gray-400 flex items-center">
                      <Waves className="w-4 h-4 mr-2" />
                      Reverb
                    </label>
                    <Slider value={reverb} max={100} step={1} onValueChange={setReverb} className="w-full" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm text-gray-400 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Echo
                    </label>
                    <Slider value={echo} max={100} step={1} onValueChange={setEcho} className="w-full" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm text-gray-400">Bass</label>
                    <Slider value={bass} max={100} step={1} onValueChange={setBass} className="w-full" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm text-gray-400">Treble</label>
                    <Slider value={treble} max={100} step={1} onValueChange={setTreble} className="w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lyrics Section */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Lyrics</h3>
                  <Button variant="outline" size="sm" onClick={() => setShowLyrics(!showLyrics)}>
                    {showLyrics ? "Hide" : "Show"} Lyrics
                  </Button>
                </div>
                <AnimatePresence>
                  {showLyrics && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="max-h-96 overflow-y-auto space-y-3"
                    >
                      {lyrics.map((lyric, index) => {
                        const isActive = getCurrentLyric()?.text === lyric.text
                        return (
                          <motion.p
                            key={index}
                            className={`text-lg transition-all duration-300 ${
                              isActive
                                ? "text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold scale-105"
                                : "text-gray-400"
                            }`}
                            animate={{ scale: isActive ? 1.05 : 1 }}
                          >
                            {lyric.text}
                          </motion.p>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
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
                        <AvatarImage src={comment.avatar || "/Images/Content/music-1.png"} />
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
                    <AvatarImage src="/Images/Content/music-1.png?height=48&width=48" />
                    <AvatarFallback>LS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">{musicData.artist}</p>
                    <p className="text-sm text-gray-400">Electronic Producer</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Follow</Button>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400 flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Views
                    </span>
                    <span className="text-white font-medium">{musicData.views.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      Likes
                    </span>
                    <span className="text-white font-medium">{musicData.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Comments
                    </span>
                    <span className="text-white font-medium">{musicData.comments}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {musicData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Music */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Related Music</h3>
                <div className="space-y-3">
                  {relatedMusic.map((track) => (
                    <div
                      key={track.id}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Music className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">{track.title}</p>
                        <p className="text-sm text-gray-400 truncate">{track.artist}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">{track.duration}</p>
                        <p className="text-xs text-gray-500">{track.plays}</p>
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
