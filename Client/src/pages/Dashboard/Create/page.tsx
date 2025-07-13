"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Upload,
  Music,
  Film,
  Gamepad2,
  BookOpen,
  Mic,
  ImageIcon,
  Plus,
  X,
  Eye,
  Lock,
  MessageCircle,
  MessageCircleOff,
  Save,
  Send,
} from "lucide-react"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"

const contentTypes = [
  { id: "music", label: "Music", icon: Music, color: "from-elysium-gold to-elysium-blue" },
  { id: "film", label: "Film", icon: Film, color: "from-elysium-blue to-elysium-purple" },
  { id: "game", label: "Game", icon: Gamepad2, color: "from-elysium-purple to-elysium-gold" },
  { id: "story", label: "Story", icon: BookOpen, color: "from-elysium-gold to-elysium-purple" },
  { id: "podcast", label: "Podcast", icon: Mic, color: "from-elysium-blue to-elysium-gold" },
]

const genres = {
  music: ["Electronic", "Ambient", "Lo-Fi", "Synthwave", "Orchestral", "Jazz", "Rock", "Pop"],
  film: ["Sci-Fi", "Fantasy", "Drama", "Action", "Horror", "Comedy", "Documentary", "Animation"],
  game: ["RPG", "Action", "Strategy", "Puzzle", "Adventure", "Simulation", "Indie", "Arcade"],
  story: ["Fantasy", "Sci-Fi", "Romance", "Mystery", "Thriller", "Adventure", "Drama", "Comedy"],
  podcast: ["Technology", "Entertainment", "Education", "News", "Comedy", "Health", "Business", "Arts"],
}

export default function CreatePage() {
  const [selectedType, setSelectedType] = useState<string>("")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    isPublic: true,
    allowComments: true,
    customThumbnail: false,
  })
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSubmit = async () => {
    setIsUploading(true)
    // Simulate upload process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsUploading(false)
    // Handle success
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-elysium-black to-elysium-black/95">
      <DashboardSidebar />

      <main className="flex-1 lg:ml-64 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-elysium-gold via-elysium-blue to-elysium-purple bg-clip-text text-transparent">
              Create New Content
            </h1>
            <p className="text-white/60 text-lg">Share your creativity with the Elysium community</p>
          </div>

          {/* Content Type Selection */}
          {!selectedType && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {contentTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${type.color} cursor-pointer group relative overflow-hidden`}
                >
                  <div className="relative z-10 text-center space-y-3">
                    <div className="mx-auto w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold">{type.label}</h3>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Content Creation Form */}
          {selectedType && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              {/* Selected Type Header */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {(() => {
                        const type = contentTypes.find((t) => t.id === selectedType)!
                        return (
                          <>
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${type.color}`}>
                              <type.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h2 className="text-xl font-semibold text-white">Create {type.label}</h2>
                              <p className="text-white/60">Upload your {type.label.toLowerCase()} content to Elysium</p>
                            </div>
                          </>
                        )
                      })()}
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedType("")}
                      className="text-white/60 hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Upload Form */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Form */}
                <div className="lg:col-span-2 space-y-6">
                  {/* File Upload */}
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Upload className="h-5 w-5 text-elysium-gold" />
                        Upload Content
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-elysium-gold/50 transition-colors">
                        <Upload className="h-12 w-12 text-white/40 mx-auto mb-4" />
                        <p className="text-white/60 mb-2">
                          Drag and drop your {selectedType} file here, or click to browse
                        </p>
                        <Button
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          Choose File
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Basic Information */}
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Basic Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="title" className="text-white">
                          Title
                        </Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          placeholder="Enter your content title"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-white">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="Describe your content..."
                          rows={4}
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="genre" className="text-white">
                          Genre/Category
                        </Label>
                        <Select
                          value={formData.genre}
                          onValueChange={(value) => setFormData({ ...formData, genre: value })}
                        >
                          <SelectTrigger className="bg-white/5 border-white/20 text-white">
                            <SelectValue placeholder="Select a genre" />
                          </SelectTrigger>
                          <SelectContent className="bg-elysium-black border-white/20">
                            {genres[selectedType as keyof typeof genres]?.map((genre) => (
                              <SelectItem key={genre} value={genre} className="text-white hover:bg-white/10">
                                {genre}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Tags */}
                      <div className="space-y-2">
                        <Label className="text-white">Tags</Label>
                        <div className="flex gap-2">
                          <Input
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            placeholder="Add a tag"
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                            onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                          />
                          <Button
                            onClick={handleAddTag}
                            size="icon"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        {tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-elysium-blue/20 text-elysium-blue border-elysium-blue/30"
                              >
                                {tag}
                                <button onClick={() => handleRemoveTag(tag)} className="ml-1 hover:text-red-400">
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Settings Sidebar */}
                <div className="space-y-6">
                  {/* Thumbnail */}
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <ImageIcon className="h-5 w-5 text-elysium-purple" />
                        Thumbnail
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="aspect-video bg-white/5 rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center">
                        <div className="text-center">
                          <ImageIcon className="h-8 w-8 text-white/40 mx-auto mb-2" />
                          <p className="text-sm text-white/60">Auto-generated</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="custom-thumbnail"
                          checked={formData.customThumbnail}
                          onCheckedChange={(checked) => setFormData({ ...formData, customThumbnail: checked })}
                        />
                        <Label htmlFor="custom-thumbnail" className="text-white text-sm">
                          Upload custom thumbnail
                        </Label>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Privacy Settings */}
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Privacy & Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {formData.isPublic ? (
                            <Eye className="h-4 w-4 text-elysium-gold" />
                          ) : (
                            <Lock className="h-4 w-4 text-white/60" />
                          )}
                          <Label htmlFor="public" className="text-white">
                            {formData.isPublic ? "Public" : "Private"}
                          </Label>
                        </div>
                        <Switch
                          id="public"
                          checked={formData.isPublic}
                          onCheckedChange={(checked) => setFormData({ ...formData, isPublic: checked })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {formData.allowComments ? (
                            <MessageCircle className="h-4 w-4 text-elysium-blue" />
                          ) : (
                            <MessageCircleOff className="h-4 w-4 text-white/60" />
                          )}
                          <Label htmlFor="comments" className="text-white">
                            Allow Comments
                          </Label>
                        </div>
                        <Switch
                          id="comments"
                          checked={formData.allowComments}
                          onCheckedChange={(checked) => setFormData({ ...formData, allowComments: checked })}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      onClick={() => handleSubmit()}
                      disabled={isUploading}
                      className="w-full bg-gradient-to-r from-elysium-blue to-elysium-purple hover:from-elysium-blue/80 hover:to-elysium-purple/80"
                    >
                      {isUploading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Publishing...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Publish Content
                        </div>
                      )}
                    </Button>

                    <Button
                      onClick={() => handleSubmit()}
                      variant="outline"
                      disabled={isUploading}
                      className="w-full border-white/20 text-black hover:bg-white/10 hover:text-white"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save as Draft
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  )
}
