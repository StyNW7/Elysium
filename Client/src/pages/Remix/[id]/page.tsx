/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Play,
  Pause,
  Square,
  Volume2,
  BookOpen,
  Mic,
  Wand2,
  Sparkles,
  Save,
  Share2,
  Download,
  Upload,
  Settings,
  Layers,
  Palette,
  Sliders,
  Zap,
  RefreshCw,
  Eye,
  EyeOff,
  Plus,
  RotateCcw,
  Check,
} from "lucide-react"
import { useParams } from "react-router"

// Mock original content data
const originalContent = {
  music: {
    title: "Epic Fantasy Orchestra",
    creator: "Alex Chen",
    duration: "4:32",
    waveform: "/placeholder.jpg",
    tracks: [
      { name: "Strings", volume: 80, muted: false, solo: false },
      { name: "Brass", volume: 65, muted: false, solo: false },
      { name: "Percussion", volume: 90, muted: false, solo: false },
      { name: "Woodwinds", volume: 55, muted: false, solo: false },
    ],
  },
  story: {
    title: "Cyberpunk Detective Story",
    creator: "Maya Rodriguez",
    chapters: [
      { name: "Opening Scene", content: "The neon lights flickered in the rain-soaked streets..." },
      { name: "Investigation", content: "Detective Morgan examined the evidence carefully..." },
      { name: "Revelation", content: "The truth was more complex than anyone imagined..." },
    ],
  },
  voice: {
    title: "Character Voice Pack - Heroes",
    creator: "David Kim",
    voices: [
      { name: "Heroic Leader", sample: "For honor and justice!", pitch: 0, speed: 1.0 },
      { name: "Wise Mentor", sample: "The path ahead is treacherous...", pitch: -10, speed: 0.9 },
      { name: "Young Warrior", sample: "I will not fail!", pitch: 5, speed: 1.1 },
      { name: "Ancient Guardian", sample: "Who dares disturb my slumber?", pitch: -20, speed: 0.8 },
    ],
  },
}

type Voice = {
  name: string
  sample: string
  pitch: number
  speed: number
  [key: string]: string | number // <- index signature
}

export default function RemixStudioPage() {
    
  const params = useParams()
  const contentType = params.type as string

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, ] = useState(0)
  const [totalTime, ] = useState(272) // 4:32 in seconds
  const [remixTitle, setRemixTitle] = useState("")
  const [remixDescription, setRemixDescription] = useState("")
  const [activeTab, setActiveTab] = useState("editor")
  const [progress, ] = useState(0)

  // Music-specific states
  const [tracks, setTracks] = useState(originalContent.music.tracks)
  const [masterVolume, setMasterVolume] = useState(75)
  const [tempo, setTempo] = useState(120)
  const [key, setKey] = useState("C Major")

  // Story-specific states
  const [chapters, setChapters] = useState(originalContent.story.chapters)
  const [selectedChapter, setSelectedChapter] = useState(0)
  const [storyStyle, setStoryStyle] = useState("Original")

  // Voice-specific states
  const [voices, setVoices] = useState<Voice[]>([])
  const [selectedVoice, setSelectedVoice] = useState(0)
  const [globalPitch, setGlobalPitch] = useState(0)
  const [globalSpeed, setGlobalSpeed] = useState(1.0)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleTrackVolumeChange = (index: number, volume: number) => {
    const newTracks = [...tracks]
    newTracks[index].volume = volume
    setTracks(newTracks)
  }

  const toggleTrackMute = (index: number) => {
    const newTracks = [...tracks]
    newTracks[index].muted = !newTracks[index].muted
    setTracks(newTracks)
  }

  const handleVoiceChange = (index: number, property: string, value: any) => {
    const newVoices = [...voices]
    newVoices[index][property] = value
    setVoices(newVoices)
  }

  const renderMusicEditor = () => (
    <div className="space-y-6">
      {/* Waveform Display */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="relative h-32 bg-black/20 rounded-lg mb-4 overflow-hidden">
            <img
              src={originalContent.music.waveform || "/placeholder.svg"}
              alt="Waveform"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg transition-all duration-100"
              style={{ left: `${(currentTime / totalTime) * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsPlaying(!isPlaying)}
                className="border-white/20 text-white hover:bg-white/10"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Square className="h-4 w-4" />
              </Button>
              <span className="text-white text-sm">
                {formatTime(currentTime)} / {formatTime(totalTime)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-gray-400" />
              <Slider
                value={[masterVolume]}
                onValueChange={(value) => setMasterVolume(value[0])}
                max={100}
                step={1}
                className="w-24"
              />
              <span className="text-white text-sm w-8">{masterVolume}%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Track Controls */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Layers className="h-5 w-5" />
            Track Mixer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {tracks.map((track, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
              <div className="w-24">
                <span className="text-white font-medium">{track.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={track.muted ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleTrackMute(index)}
                  className={
                    track.muted ? "bg-red-600 hover:bg-red-700" : "border-white/20 text-white hover:bg-white/10"
                  }
                >
                  {track.muted ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  S
                </Button>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <Slider
                  value={[track.volume]}
                  onValueChange={(value) => handleTrackVolumeChange(index, value[0])}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-white text-sm w-8">{track.volume}%</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Global Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Sliders className="h-5 w-5" />
              Tempo & Key
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-white text-sm mb-2 block">Tempo (BPM)</label>
              <div className="flex items-center gap-2">
                <Slider
                  value={[tempo]}
                  onValueChange={(value) => setTempo(value[0])}
                  min={60}
                  max={200}
                  step={1}
                  className="flex-1"
                />
                <span className="text-white text-sm w-12">{tempo}</span>
              </div>
            </div>
            <div>
              <label className="text-white text-sm mb-2 block">Key</label>
              <select
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
              >
                <option value="C Major">C Major</option>
                <option value="D Major">D Major</option>
                <option value="E Major">E Major</option>
                <option value="F Major">F Major</option>
                <option value="G Major">G Major</option>
                <option value="A Major">A Major</option>
                <option value="B Major">B Major</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Zap className="h-5 w-5" />
              AI Effects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Sparkles className="h-4 w-4 mr-2" />
              Auto-Harmonize
            </Button>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              <Wand2 className="h-4 w-4 mr-2" />
              Style Transfer
            </Button>
            <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              Generate Variations
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderStoryEditor = () => (
    <div className="space-y-6">
      {/* Chapter Navigation */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Story Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            {chapters.map((chapter, index) => (
              <Button
                key={index}
                variant={selectedChapter === index ? "default" : "outline"}
                onClick={() => setSelectedChapter(index)}
                className={
                  selectedChapter === index
                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                    : "border-white/20 text-white hover:bg-white/10"
                }
              >
                {chapter.name}
              </Button>
            ))}
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Story Editor */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">{chapters[selectedChapter]?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={chapters[selectedChapter]?.content || ""}
            onChange={(e) => {
              const newChapters = [...chapters]
              newChapters[selectedChapter].content = e.target.value
              setChapters(newChapters)
            }}
            className="min-h-[300px] bg-white/10 border-white/20 text-white placeholder-gray-400 resize-none"
            placeholder="Write your story here..."
          />
        </CardContent>
      </Card>

      {/* AI Story Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Style & Tone
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-white text-sm mb-2 block">Writing Style</label>
              <select
                value={storyStyle}
                onChange={(e) => setStoryStyle(e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
              >
                <option value="Original">Original</option>
                <option value="Noir">Film Noir</option>
                <option value="Cyberpunk">Cyberpunk</option>
                <option value="Fantasy">High Fantasy</option>
                <option value="Minimalist">Minimalist</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Zap className="h-5 w-5" />
              AI Assistance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Sparkles className="h-4 w-4 mr-2" />
              Enhance Dialogue
            </Button>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              <Wand2 className="h-4 w-4 mr-2" />
              Generate Plot Twist
            </Button>
            <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              Alternative Endings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderVoiceEditor = () => (
    <div className="space-y-6">
      {/* Voice Selection */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Mic className="h-5 w-5" />
            Voice Characters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {voices.map((voice, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedVoice === index
                    ? "border-purple-500 bg-purple-500/20"
                    : "border-white/20 bg-white/5 hover:bg-white/10"
                }`}
                onClick={() => setSelectedVoice(index)}
              >
                <h4 className="text-white font-medium mb-2">{voice.name}</h4>
                <p className="text-gray-300 text-sm mb-3">"{voice.sample}"</p>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Play className="h-3 w-3" />
                  </Button>
                  <div className="text-xs text-gray-400">
                    Pitch: {voice.pitch > 0 ? "+" : ""}
                    {voice.pitch} | Speed: {voice.speed}x
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Voice Controls */}
      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">{voices[selectedVoice]?.name} Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-white text-sm mb-2 block">Pitch Adjustment</label>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">-50</span>
              <Slider
                value={[voices[selectedVoice]?.pitch || 0]}
                onValueChange={(value) => handleVoiceChange(selectedVoice, "pitch", value[0])}
                min={-50}
                max={50}
                step={1}
                className="flex-1"
              />
              <span className="text-gray-400 text-sm">+50</span>
              <span className="text-white text-sm w-12">
                {voices[selectedVoice]?.pitch > 0 ? "+" : ""}
                {voices[selectedVoice]?.pitch}
              </span>
            </div>
          </div>

          <div>
            <label className="text-white text-sm mb-2 block">Speed Adjustment</label>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">0.5x</span>
              <Slider
                value={[voices[selectedVoice]?.speed || 1.0]}
                onValueChange={(value) => handleVoiceChange(selectedVoice, "speed", value[0])}
                min={0.5}
                max={2.0}
                step={0.1}
                className="flex-1"
              />
              <span className="text-gray-400 text-sm">2.0x</span>
              <span className="text-white text-sm w-12">{voices[selectedVoice]?.speed.toFixed(1)}x</span>
            </div>
          </div>

          <div>
            <label className="text-white text-sm mb-2 block">Sample Text</label>
            <Input
              value={voices[selectedVoice]?.sample || ""}
              onChange={(e) => handleVoiceChange(selectedVoice, "sample", e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder-gray-400"
              placeholder="Enter text to preview..."
            />
          </div>
        </CardContent>
      </Card>

      {/* Global Voice Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Global Effects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-white text-sm mb-2 block">Master Pitch</label>
              <Slider
                value={[globalPitch]}
                onValueChange={(value) => setGlobalPitch(value[0])}
                min={-20}
                max={20}
                step={1}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-white text-sm mb-2 block">Master Speed</label>
              <Slider
                value={[globalSpeed]}
                onValueChange={(value) => setGlobalSpeed(value[0])}
                min={0.5}
                max={2.0}
                step={0.1}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Zap className="h-5 w-5" />
              AI Voice Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Sparkles className="h-4 w-4 mr-2" />
              Clone Voice
            </Button>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              <Wand2 className="h-4 w-4 mr-2" />
              Style Transfer
            </Button>
            <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              Generate Variations
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderEditor = () => {
    switch (contentType) {
      case "music":
        return renderMusicEditor()
      case "story":
        return renderStoryEditor()
      case "voice":
        return renderVoiceEditor()
      default:
        return renderMusicEditor()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      {/* Header */}
      <div className="border-b border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white">Remix Studio</h1>
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                {contentType?.charAt(0).toUpperCase() + contentType?.slice(1)}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Upload className="h-4 w-4 mr-2" />
                Publish Remix
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Editor */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-white/10 backdrop-blur-sm">
                <TabsTrigger
                  value="editor"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600"
                >
                  Editor
                </TabsTrigger>
                <TabsTrigger
                  value="preview"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="publish"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600"
                >
                  Publish
                </TabsTrigger>
              </TabsList>

              <TabsContent value="editor">{renderEditor()}</TabsContent>

              <TabsContent value="preview">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Preview Your Remix</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center py-12">
                    <div className="text-6xl mb-4">🎵</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Preview Coming Soon</h3>
                    <p className="text-gray-400">Your remix will be rendered here</p>
                    <Button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <Play className="h-4 w-4 mr-2" />
                      Generate Preview
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="publish">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Publish Your Remix</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="text-white text-sm mb-2 block">Remix Title</label>
                      <Input
                        value={remixTitle}
                        onChange={(e) => setRemixTitle(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="Give your remix a catchy title..."
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm mb-2 block">Description</label>
                      <Textarea
                        value={remixDescription}
                        onChange={(e) => setRemixDescription(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                        placeholder="Describe your creative process and what makes this remix special..."
                        rows={4}
                      />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        <Check className="h-4 w-4 mr-2" />
                        Publish Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Original Content Info */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Original Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="text-white font-medium">{originalContent.music.title}</h4>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">{originalContent.music.creator[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-gray-300 text-sm">{originalContent.music.creator}</span>
                    </div>
                    <Badge className="bg-purple-600 text-white">
                      {contentType?.charAt(0).toUpperCase() + contentType?.slice(1)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Progress */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Remix Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Completion</span>
                      <span className="text-white">{progress}%</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                    <div className="text-xs text-gray-400">Keep editing to increase your remix completion score</div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset Changes
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Project
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Advanced Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
