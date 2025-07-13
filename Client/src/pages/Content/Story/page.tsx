"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import {
  Heart,
  Bookmark,
  Share2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Eye,
  ThumbsUp,
  BookOpen,
  Star,
  Settings,
  Maximize,
  User,
  Scroll,
} from "lucide-react"

export default function StoryDetailPage() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [, setIsReading] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [showCharacters, setShowCharacters] = useState(false)
  const [showLore, setShowLore] = useState(false)
  const [dialogMode, setDialogMode] = useState(false)
  const [fontSize, ] = useState(16)

  const storyData = {
    id: "1",
    title: "Chronicles of the Ethereal Realm",
    author: "Luna Nightweaver",
    genre: "Epic Fantasy",
    status: "Ongoing",
    chapters: 24,
    totalWords: 156000,
    rating: 4.7,
    views: 89234,
    likes: 7420,
    comments: 445,
    description:
      "In a world where magic flows through ancient ley lines and mythical creatures roam the lands, young Elara discovers she possesses a rare gift that could either save her realm or destroy it. Join her on an epic journey of self-discovery, friendship, and the battle between light and darkness.",
    coverImage: "/Images/Content/story.png?height=600&width=400",
    releaseDate: "2023-08-15",
    lastUpdate: "2024-01-20",
    tags: ["Fantasy", "Magic", "Adventure", "Coming of Age", "Dragons"],
    chapters_detail: [
      {
        id: 1,
        title: "The Awakening",
        wordCount: 3200,
        content:
          "The morning mist clung to the ancient stones of Eldergrove like whispered secrets from ages past. Elara stood at the edge of the sacred grove, her emerald eyes reflecting the ethereal light that danced between the towering oaks. She had always felt different, but today, on her eighteenth birthday, the very air around her seemed to hum with an energy she had never experienced before...",
      },
      {
        id: 2,
        title: "Shadows of the Past",
        wordCount: 3800,
        content:
          "The revelation of her heritage struck Elara like lightning splitting the night sky. Master Theron's words echoed in her mind as she struggled to comprehend the magnitude of what she had learned. The Ethereal Bloodline, thought extinct for over a century, flowed through her veins...",
      },
      {
        id: 3,
        title: "The First Trial",
        wordCount: 4100,
        content:
          "The Crystal Caverns stretched endlessly before them, their walls pulsing with an inner light that seemed to respond to Elara's presence. Kael walked beside her, his warrior's instincts alert to every shadow, every whisper of wind through the crystalline formations...",
      },
    ],
    characters: [
      {
        name: "Elara Moonwhisper",
        role: "Protagonist",
        description:
          "A young woman who discovers her connection to the ancient Ethereal Bloodline. Brave, compassionate, and struggling to control her newfound powers.",
        image: "/placeholder.svg?height=100&width=100",
        traits: ["Ethereal Magic", "Empathy", "Determination"],
        relationships: ["Kael (Companion)", "Master Theron (Mentor)", "Lyra (Best Friend)"],
      },
      {
        name: "Kael Stormwind",
        role: "Companion",
        description:
          "A skilled warrior and protector sworn to guard Elara. His mysterious past is slowly revealed throughout the story.",
        image: "/placeholder.svg?height=100&width=100",
        traits: ["Swordsmanship", "Loyalty", "Strategic Mind"],
        relationships: ["Elara (Protected)", "Captain of the Royal Guard (Former)"],
      },
      {
        name: "Master Theron",
        role: "Mentor",
        description:
          "An ancient sage who has waited centuries for Elara's awakening. Keeper of forgotten knowledge and magical lore.",
        image: "/placeholder.svg?height=100&width=100",
        traits: ["Ancient Wisdom", "Magical Knowledge", "Patience"],
        relationships: ["Elara (Student)", "The Council of Mages (Member)"],
      },
    ],
    lore: [
      {
        title: "The Ethereal Bloodline",
        content:
          "A legendary magical lineage that once ruled the realm with wisdom and power. Those born with this bloodline can manipulate the very fabric of reality, but at great personal cost.",
      },
      {
        title: "The Great Sundering",
        content:
          "A catastrophic event 300 years ago that shattered the magical barriers between realms, allowing dark creatures to enter the world and forcing the Ethereal Bloodline into hiding.",
      },
      {
        title: "Ley Lines",
        content:
          "Ancient channels of magical energy that crisscross the realm. They are the source of all magic and are slowly being corrupted by an unknown dark force.",
      },
    ],
  }

  const relatedStories = [
    { id: "2", title: "Legends of the Dragon Riders", author: "Luna Nightweaver", chapters: 18, rating: 4.5 },
    { id: "3", title: "The Mage's Apprentice", author: "Sage Wordsmith", chapters: 32, rating: 4.8 },
    { id: "4", title: "Realm of Shadows", author: "Dark Quill", chapters: 15, rating: 4.3 },
  ]

  const comments = [
    {
      id: "1",
      user: "FantasyReader",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "The world-building in this story is absolutely incredible! I can visualize every scene perfectly.",
      time: "1 hour ago",
      likes: 28,
    },
    {
      id: "2",
      user: "BookwormBella",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "Elara's character development is so well done. Can't wait to see how she handles her powers!",
      time: "3 hours ago",
      likes: 35,
    },
    {
      id: "3",
      user: "EpicTales",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "Luna Nightweaver has created something truly special here. The magic system is so unique!",
      time: "5 hours ago",
      likes: 42,
    },
  ]

  const currentChapterData = storyData.chapters_detail[currentChapter]

  const nextChapter = () => {
    if (currentChapter < storyData.chapters_detail.length - 1) {
      setCurrentChapter(currentChapter + 1)
      setReadingProgress(0)
    }
  }

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1)
      setReadingProgress(0)
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Story Cover */}
          <div className="lg:col-span-1">
            <motion.div
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={storyData.coverImage || "/placeholder.svg"}
                alt={storyData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>

          {/* Story Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Badge className="mb-3 bg-gradient-to-r from-purple-500 to-pink-500">
                <BookOpen className="w-3 h-3 mr-1" />
                {storyData.genre}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {storyData.title}
              </h1>
              <p className="text-xl text-gray-300 mb-4">by {storyData.author}</p>
              <p className="text-gray-400 leading-relaxed">{storyData.description}</p>
            </div>

            {/* Story Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <BookOpen className="w-4 h-4 text-gray-400 mr-1" />
                </div>
                <p className="text-sm text-gray-400">Chapters</p>
                <p className="text-white font-medium">{storyData.chapters}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Scroll className="w-4 h-4 text-gray-400 mr-1" />
                </div>
                <p className="text-sm text-gray-400">Words</p>
                <p className="text-white font-medium">{formatNumber(storyData.totalWords)}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Eye className="w-4 h-4 text-gray-400 mr-1" />
                </div>
                <p className="text-sm text-gray-400">Views</p>
                <p className="text-white font-medium">{formatNumber(storyData.views)}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                </div>
                <p className="text-sm text-gray-400">Rating</p>
                <p className="text-white font-medium">{storyData.rating}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => setIsReading(true)} className="bg-gradient-to-r from-purple-500 to-pink-500">
                <BookOpen className="w-4 h-4 mr-2" />
                Start Reading
              </Button>
              <Button
                onClick={() => setIsLiked(!isLiked)}
                variant={isLiked ? "default" : "outline"}
                className={`${isLiked ? "bg-gradient-to-r from-red-500 to-pink-500" : ""}`}
              >
                <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                {storyData.likes.toLocaleString()}
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
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Reading Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Story Reader */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-0">
                {/* Reader Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        Chapter {currentChapterData.id}: {currentChapterData.title}
                      </h2>
                      <p className="text-gray-400">{currentChapterData.wordCount.toLocaleString()} words</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Maximize className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Reading Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Reading Progress</span>
                      <span>{Math.round(readingProgress)}%</span>
                    </div>
                    <Slider
                      value={[readingProgress]}
                      max={100}
                      step={1}
                      className="w-full"
                      onValueChange={(value) => setReadingProgress(value[0])}
                    />
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-8">
                  <div className="prose prose-invert max-w-none" style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}>
                    <p className="text-gray-300 leading-relaxed">{currentChapterData.content}</p>
                    {/* Add more story content here */}
                    <p className="text-gray-300 leading-relaxed mt-6">
                      The ancient runes carved into the cavern walls began to glow with an otherworldly light as Elara
                      approached. Each symbol seemed to pulse in rhythm with her heartbeat, responding to the ethereal
                      energy that coursed through her veins. Kael watched in amazement as the very stones themselves
                      seemed to come alive in her presence.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-6">
                      "The prophecy speaks of one who can awaken the sleeping magic," Master Theron had told her. "But
                      it also warns of the price that must be paid." As Elara reached out to touch the nearest rune, she
                      wondered if she was ready to discover what that price might be.
                    </p>
                  </div>
                </div>

                {/* Chapter Navigation */}
                <div className="p-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <Button onClick={prevChapter} disabled={currentChapter === 0} variant="outline">
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous Chapter
                    </Button>
                    <div className="text-center">
                      <p className="text-sm text-gray-400">
                        Chapter {currentChapter + 1} of {storyData.chapters_detail.length}
                      </p>
                    </div>
                    <Button
                      onClick={nextChapter}
                      disabled={currentChapter === storyData.chapters_detail.length - 1}
                      variant="outline"
                    >
                      Next Chapter
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Dialog Mode */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-purple-400" />
                    Interactive Dialog Mode
                  </h3>
                  <Button
                    onClick={() => setDialogMode(!dialogMode)}
                    variant={dialogMode ? "default" : "outline"}
                    className={`${dialogMode ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}`}
                  >
                    {dialogMode ? "Exit" : "Enter"} Dialog Mode
                  </Button>
                </div>
                <AnimatePresence>
                  {dialogMode && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                        <p className="text-white mb-3">
                          <strong>Elara:</strong> "I can feel the magic calling to me, but I'm afraid of what might
                          happen if I answer."
                        </p>
                        <div className="space-y-2">
                          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                            → "Trust in your abilities, Elara. You're stronger than you know."
                          </Button>
                          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                            → "Perhaps we should seek Master Theron's guidance first."
                          </Button>
                          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                            → "What does your heart tell you to do?"
                          </Button>
                        </div>
                      </div>
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
                  Reader Comments ({comments.length})
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
            {/* Author Info */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Author</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>LN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">{storyData.author}</p>
                    <p className="text-sm text-gray-400">Fantasy Author</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Follow Author</Button>
              </CardContent>
            </Card>

            {/* Character Gallery */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <User className="w-4 h-4 mr-2 text-purple-400" />
                    Characters
                  </h3>
                  <Button variant="outline" size="sm" onClick={() => setShowCharacters(!showCharacters)}>
                    {showCharacters ? "Hide" : "Show"}
                  </Button>
                </div>
                <AnimatePresence>
                  {showCharacters && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      {storyData.characters.map((character, index) => (
                        <div key={index} className="flex space-x-3 p-3 rounded-lg bg-white/5">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={character.image || "/placeholder.svg"} />
                            <AvatarFallback>
                              {character.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium text-white text-sm">{character.name}</p>
                            <p className="text-xs text-purple-400 mb-1">{character.role}</p>
                            <p className="text-xs text-gray-400 line-clamp-2">{character.description}</p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Lore Section */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Scroll className="w-4 h-4 mr-2 text-pink-400" />
                    World Lore
                  </h3>
                  <Button variant="outline" size="sm" onClick={() => setShowLore(!showLore)}>
                    {showLore ? "Hide" : "Show"}
                  </Button>
                </div>
                <AnimatePresence>
                  {showLore && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      {storyData.lore.map((item, index) => (
                        <div key={index} className="p-3 rounded-lg bg-white/5">
                          <h4 className="font-medium text-white text-sm mb-2">{item.title}</h4>
                          <p className="text-xs text-gray-400">{item.content}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {storyData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Stories */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Related Stories</h3>
                <div className="space-y-3">
                  {relatedStories.map((story) => (
                    <div
                      key={story.id}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm truncate">{story.title}</p>
                        <p className="text-sm text-gray-400 truncate">{story.author}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-xs text-gray-400">
                          <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                          {story.rating}
                        </div>
                        <p className="text-xs text-gray-500">{story.chapters} chapters</p>
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
