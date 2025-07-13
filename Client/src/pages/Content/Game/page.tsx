"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Play,
  Pause,
  Heart,
  Bookmark,
  Share2,
  MessageCircle,
  ThumbsUp,
  Gamepad2,
  Clock,
  Star,
  Trophy,
  Target,
  Zap,
  Crown,
  Settings,
  Maximize,
  Volume2,
  RotateCcw,
} from "lucide-react"

export default function GameDetailPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [gameProgress, setGameProgress] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [isLiked, setIsLiked] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [showAchievements, setShowAchievements] = useState(false)
  const [difficulty, setDifficulty] = useState("normal")

  const gameRef = useRef<HTMLDivElement>(null)

  const gameData = {
    id: "1",
    title: "Quantum Nexus: Digital Odyssey",
    developer: "Pixel Forge Studios",
    genre: "Action RPG",
    platform: "Web Browser",
    rating: 4.6,
    views: 156789,
    likes: 12340,
    comments: 678,
    description:
      "Embark on an epic journey through digital realms where reality bends to your will. Master quantum abilities, solve mind-bending puzzles, and battle against corrupted data entities in this innovative action RPG experience.",
    coverImage: "/Images/Content/Elysium-Design.png?height=600&width=800",
    screenshots: [
      "/Images/Content/Elysium-Design.png?height=400&width=600",
      "/Images/Content/Elysium-Design.png?height=400&width=600",
      "/Images/Content/Elysium-Design.png?height=400&width=600",
    ],
    releaseDate: "2024-01-10",
    lastUpdate: "2024-01-18",
    fileSize: "45 MB",
    playTime: "2-4 hours",
    tags: ["Action", "RPG", "Sci-Fi", "Puzzle", "Single Player"],
    features: [
      "Quantum-based combat system",
      "Mind-bending puzzle mechanics",
      "Multiple difficulty levels",
      "Achievement system",
      "Leaderboards",
      "Save system",
    ],
    systemRequirements: {
      browser: "Chrome 90+, Firefox 88+, Safari 14+",
      memory: "4 GB RAM",
      storage: "100 MB available space",
      graphics: "WebGL 2.0 support",
    },
    controls: [
      { key: "WASD", action: "Move character" },
      { key: "Mouse", action: "Aim and interact" },
      { key: "Space", action: "Jump/Activate quantum ability" },
      { key: "E", action: "Interact with objects" },
      { key: "Q", action: "Quick inventory" },
      { key: "ESC", action: "Pause menu" },
    ],
  }

  const leaderboard = [
    { rank: 1, player: "QuantumMaster", score: 98750, level: 15, avatar: "/Images/Content/Elysium-Design.png?height=32&width=32" },
    { rank: 2, player: "DigitalNinja", score: 87420, level: 14, avatar: "/Images/Content/Elysium-Design.png?height=32&width=32" },
    { rank: 3, player: "CodeBreaker", score: 76890, level: 13, avatar: "/Images/Content/Elysium-Design.png?height=32&width=32" },
    { rank: 4, player: "PixelWarrior", score: 65340, level: 12, avatar: "/Images/Content/Elysium-Design.png?height=32&width=32" },
    { rank: 5, player: "CyberExplorer", score: 54780, level: 11, avatar: "/Images/Content/Elysium-Design.png?height=32&width=32" },
  ]

  const achievements = [
    { id: 1, name: "First Steps", description: "Complete the tutorial", icon: "🎯", unlocked: true, rarity: "Common" },
    {
      id: 2,
      name: "Quantum Leap",
      description: "Use quantum ability 100 times",
      icon: "⚡",
      unlocked: true,
      rarity: "Uncommon",
    },
    {
      id: 3,
      name: "Data Destroyer",
      description: "Defeat 500 corrupted entities",
      icon: "💥",
      unlocked: false,
      rarity: "Rare",
    },
    {
      id: 4,
      name: "Puzzle Master",
      description: "Solve all quantum puzzles",
      icon: "🧩",
      unlocked: false,
      rarity: "Epic",
    },
    {
      id: 5,
      name: "Digital Legend",
      description: "Reach maximum level",
      icon: "👑",
      unlocked: false,
      rarity: "Legendary",
    },
  ]

  const relatedGames = [
    { id: "2", title: "Cyber Realm Adventures", developer: "Pixel Forge Studios", rating: 4.4, plays: "89K" },
    { id: "3", title: "Quantum Puzzles", developer: "Mind Games Inc", rating: 4.7, plays: "156K" },
    { id: "4", title: "Digital Warriors", developer: "Action Studios", rating: 4.2, plays: "203K" },
  ]

  const comments = [
    {
      id: "1",
      user: "GameMaster",
      avatar: "/Images/Content/Elysium-Design.png?height=40&width=40",
      text: "The quantum mechanics in this game are absolutely brilliant! Love the innovative gameplay.",
      time: "2 hours ago",
      likes: 45,
    },
    {
      id: "2",
      user: "PixelGamer",
      avatar: "/Images/Content/Elysium-Design.png?height=40&width=40",
      text: "Great art style and smooth controls. The puzzle elements really make you think!",
      time: "4 hours ago",
      likes: 32,
    },
    {
      id: "3",
      user: "RetroPlayer",
      avatar: "/Images/Content/Elysium-Design.png?height=40&width=40",
      text: "Reminds me of classic arcade games but with a modern twist. Highly recommended!",
      time: "6 hours ago",
      likes: 28,
    },
  ]

  const startGame = () => {
    setIsPlaying(true)
    setScore(0)
    setCurrentLevel(1)
    setLives(3)
    setGameProgress(0)
  }

  const pauseGame = () => {
    setIsPlaying(false)
  }

  const resetGame = () => {
    setIsPlaying(false)
    setScore(0)
    setCurrentLevel(1)
    setLives(3)
    setGameProgress(0)
  }

  // Simulate game progress
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setScore((prev) => prev + Math.floor(Math.random() * 100))
        setGameProgress((prev) => Math.min(prev + 0.5, 100))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Game Cover */}
          <div className="lg:col-span-2">
            <motion.div
              className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={gameData.coverImage || "/Images/Content/Elysium-Design.png"}
                alt={gameData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startGame}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Game Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3 bg-gradient-to-r from-purple-500 to-pink-500">
                <Gamepad2 className="w-3 h-3 mr-1" />
                {gameData.genre}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {gameData.title}
              </h1>
              <p className="text-lg text-gray-300 mb-4">by {gameData.developer}</p>
              <p className="text-gray-400 leading-relaxed">{gameData.description}</p>
            </div>

            {/* Game Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Rating</p>
                <p className="text-white font-medium flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                  {gameData.rating}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Play Time</p>
                <p className="text-white font-medium flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {gameData.playTime}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Platform</p>
                <p className="text-white font-medium">{gameData.platform}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">File Size</p>
                <p className="text-white font-medium">{gameData.fileSize}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button onClick={startGame} className="bg-gradient-to-r from-purple-500 to-pink-500">
                <Play className="w-4 h-4 mr-2" />
                Play Now
              </Button>
              <Button
                onClick={() => setIsLiked(!isLiked)}
                variant={isLiked ? "default" : "outline"}
                className={`${isLiked ? "bg-gradient-to-r from-red-500 to-pink-500" : ""}`}
              >
                <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                {gameData.likes.toLocaleString()}
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
          {/* Main Game Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Game Player */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-0">
                {/* Game Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-5 h-5 text-yellow-400" />
                        <span className="text-white font-medium">Score: {score.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="w-5 h-5 text-blue-400" />
                        <span className="text-white font-medium">Level: {currentLevel}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-red-400" />
                        <span className="text-white font-medium">Lives: {lives}</span>
                      </div>
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

                  {/* Game Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Level Progress</span>
                      <span>{Math.round(gameProgress)}%</span>
                    </div>
                    <Progress value={gameProgress} className="w-full" />
                  </div>
                </div>

                {/* Game Canvas */}
                <div
                  ref={gameRef}
                  className="aspect-video bg-gradient-to-br from-purple-900/40 to-blue-900/40 flex items-center justify-center relative"
                >
                  {!isPlaying ? (
                    <div className="text-center">
                      <Gamepad2 className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Ready to Play?</h3>
                      <p className="text-gray-400 mb-4">Click Play Now to start your quantum adventure!</p>
                      <Button onClick={startGame} className="bg-gradient-to-r from-purple-500 to-pink-500">
                        <Play className="w-4 h-4 mr-2" />
                        Start Game
                      </Button>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 animate-pulse">
                          <Zap className="w-16 h-16 text-white" />
                        </div>
                        <p className="text-white text-lg">Game Running...</p>
                        <p className="text-gray-400">Score: {score.toLocaleString()}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Game Controls */}
                <div className="p-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {isPlaying ? (
                        <Button onClick={pauseGame} variant="outline">
                          <Pause className="w-4 h-4 mr-2" />
                          Pause
                        </Button>
                      ) : (
                        <Button onClick={startGame} variant="outline">
                          <Play className="w-4 h-4 mr-2" />
                          Resume
                        </Button>
                      )}
                      <Button onClick={resetGame} variant="outline">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Restart
                      </Button>
                    </div>
                    <div className="flex items-center space-x-4">
                      <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="bg-black/50 text-white text-sm rounded px-3 py-1 border border-white/20"
                      >
                        <option value="easy">Easy</option>
                        <option value="normal">Normal</option>
                        <option value="hard">Hard</option>
                        <option value="expert">Expert</option>
                      </select>
                      <Button variant="outline" size="sm">
                        <Volume2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Game Controls Guide */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Gamepad2 className="w-5 h-5 mr-2 text-purple-400" />
                  Controls
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gameData.controls.map((control, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <Badge variant="outline" className="font-mono">
                        {control.key}
                      </Badge>
                      <span className="text-gray-300 text-sm">{control.action}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Screenshots */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Screenshots</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {gameData.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      className="aspect-video rounded-lg overflow-hidden cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={screenshot || "/Images/Content/Elysium-Design.png"}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Player Reviews ({comments.length})
                </h3>
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-3">
                      <Avatar>
                        <AvatarImage src={comment.avatar || "/Images/Content/Elysium-Design.png"} />
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
            {/* Developer Info */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Developer</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/Images/Content/Elysium-Design.png?height=48&width=48" />
                    <AvatarFallback>PF</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">{gameData.developer}</p>
                    <p className="text-sm text-gray-400">Indie Game Studio</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Follow Developer</Button>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
                    Leaderboard
                  </h3>
                  <Button variant="outline" size="sm" onClick={() => setShowLeaderboard(!showLeaderboard)}>
                    {showLeaderboard ? "Hide" : "Show"}
                  </Button>
                </div>
                <AnimatePresence>
                  {showLeaderboard && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      {leaderboard.map((player) => (
                        <div key={player.rank} className="flex items-center space-x-3 p-2 rounded-lg bg-white/5">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold">
                            {player.rank}
                          </div>
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={player.avatar || "/Images/Content/Elysium-Design.png"} />
                            <AvatarFallback>{player.player[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium text-sm truncate">{player.player}</p>
                            <p className="text-xs text-gray-400">Level {player.level}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-white font-medium">{player.score.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Crown className="w-4 h-4 mr-2 text-yellow-400" />
                    Achievements
                  </h3>
                  <Button variant="outline" size="sm" onClick={() => setShowAchievements(!showAchievements)}>
                    {showAchievements ? "Hide" : "Show"}
                  </Button>
                </div>
                <AnimatePresence>
                  {showAchievements && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3"
                    >
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className={`p-3 rounded-lg ${achievement.unlocked ? "bg-green-500/20" : "bg-white/5"}`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <p
                                className={`font-medium text-sm ${achievement.unlocked ? "text-green-400" : "text-gray-400"}`}
                              >
                                {achievement.name}
                              </p>
                              <p className="text-xs text-gray-500">{achievement.description}</p>
                              <Badge variant="outline" className="text-xs mt-1">
                                {achievement.rarity}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Game Features */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Features</h3>
                <div className="space-y-2">
                  {gameData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {gameData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Games */}
            <Card className="bg-black/20 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">More Games</h3>
                <div className="space-y-3">
                  {relatedGames.map((game) => (
                    <div
                      key={game.id}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Gamepad2 className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm truncate">{game.title}</p>
                        <p className="text-sm text-gray-400 truncate">{game.developer}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-xs text-gray-400">
                          <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                          {game.rating}
                        </div>
                        <p className="text-xs text-gray-500">{game.plays} plays</p>
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
