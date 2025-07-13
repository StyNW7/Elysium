/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Users,
  ImageIcon,
  ChevronLeft,
  Plus,
  X,
  Sparkles,
  Music,
  Trophy,
  BookOpen,
  Mic,
  Video,
  Star,
  Eye,
  Save,
  Send,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const eventTypes = [
  { id: "concert", name: "AI Concert", icon: Music, description: "Musical performances and concerts" },
  { id: "festival", name: "Creator Festival", icon: Star, description: "Celebrations and festivals" },
  { id: "premiere", name: "Realm Premiere", icon: Sparkles, description: "New realm launches and showcases" },
  { id: "tournament", name: "Tournament", icon: Trophy, description: "Competitions and contests" },
  { id: "story", name: "Story Event", icon: BookOpen, description: "Narrative experiences and storytelling" },
  { id: "workshop", name: "Workshop", icon: Users, description: "Educational sessions and tutorials" },
  { id: "1v1", name: "Live Stream", icon: Video, description: "Live streaming events" },
  { id: "podcast", name: "Podcast", icon: Mic, description: "Audio discussions and interviews" },
]

const predefinedTags = [
  "AI",
  "Music",
  "Art",
  "Gaming",
  "Education",
  "Technology",
  "Community",
  "Live",
  "Interactive",
  "Beginner",
  "Advanced",
  "Free",
  "Premium",
  "Workshop",
  "Competition",
  "Showcase",
  "Premiere",
]

export default function CreateAetherPage() {
  const [selectedType, setSelectedType] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    duration: "",
    location: "",
    maxAttendees: "",
    price: "free",
    customPrice: "",
    isPublic: true,
    allowRecording: true,
    requireApproval: false,
    tags: [] as string[],
    customTags: "",
    coverImage: null as File | null,
    schedule: [{ time: "", title: "", duration: "" }],
    performers: [{ name: "", role: "", avatar: null as File | null }],
    sponsors: [{ name: "", logo: null as File | null }],
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addTag = (tag: string) => {
    if (!formData.tags.includes(tag)) {
      handleInputChange("tags", [...formData.tags, tag])
    }
  }

  const removeTag = (tag: string) => {
    handleInputChange(
      "tags",
      formData.tags.filter((t) => t !== tag),
    )
  }

  const addScheduleItem = () => {
    handleInputChange("schedule", [...formData.schedule, { time: "", title: "", duration: "" }])
  }

  const updateScheduleItem = (index: number, field: string, value: string) => {
    const newSchedule = [...formData.schedule]
    newSchedule[index] = { ...newSchedule[index], [field]: value }
    handleInputChange("schedule", newSchedule)
  }

  const removeScheduleItem = (index: number) => {
    handleInputChange(
      "schedule",
      formData.schedule.filter((_, i) => i !== index),
    )
  }

  const addPerformer = () => {
    handleInputChange("performers", [...formData.performers, { name: "", role: "", avatar: null }])
  }

  const updatePerformer = (index: number, field: string, value: any) => {
    const newPerformers = [...formData.performers]
    newPerformers[index] = { ...newPerformers[index], [field]: value }
    handleInputChange("performers", newPerformers)
  }

  const removePerformer = (index: number) => {
    handleInputChange(
      "performers",
      formData.performers.filter((_, i) => i !== index),
    )
  }

  const handleSubmit = (isDraft = false) => {
    console.log("Submitting event:", { ...formData, selectedType, isDraft })
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <a href="/aether">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Aether
            </Button>
          </a>
          <div>
            <h1 className="text-3xl font-bold text-white">Create New Event</h1>
            <p className="text-gray-400">Share your event with the Elysium community</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Event Type Selection */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Event Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {eventTypes.map((type) => (
                  <motion.div
                    key={type.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedType(type.id)}
                    className={`cursor-pointer p-4 rounded-lg border transition-all ${
                      selectedType === type.id
                        ? "bg-purple-600/20 border-purple-500 ring-2 ring-purple-500/50"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="text-center">
                      <div
                        className={`p-3 rounded-full mx-auto mb-3 ${
                          selectedType === type.id ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gray-600"
                        }`}
                      >
                        <type.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-white font-medium text-sm mb-1">{type.name}</h3>
                      <p className="text-gray-400 text-xs">{type.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Form */}
          <Tabs defaultValue="basic" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-white/5 backdrop-blur-sm">
              <TabsTrigger value="basic" className="data-[state=active]:bg-purple-600">
                Basic Info
              </TabsTrigger>
              <TabsTrigger value="details" className="data-[state=active]:bg-purple-600">
                Details
              </TabsTrigger>
              <TabsTrigger value="schedule" className="data-[state=active]:bg-purple-600">
                Schedule
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-purple-600">
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Cover Image */}
                  <div>
                    <Label className="text-white mb-2 block">Cover Image</Label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-purple-500/50 transition-colors cursor-pointer">
                      <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400 mb-2">Click to upload or drag and drop</p>
                      <p className="text-gray-500 text-sm">PNG, JPG up to 10MB</p>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleInputChange("coverImage", e.target.files?.[0] || null)}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <Label htmlFor="title" className="text-white mb-2 block">
                      Event Title *
                    </Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Enter your event title..."
                      className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description" className="text-white mb-2 block">
                      Description *
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Describe your event..."
                      rows={4}
                      className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                    />
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-white mb-2 block">
                        Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-white mb-2 block">
                        Time *
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                        className="bg-white/5 border-white/10 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="duration" className="text-white mb-2 block">
                        Duration
                      </Label>
                      <Input
                        id="duration"
                        value={formData.duration}
                        onChange={(e) => handleInputChange("duration", e.target.value)}
                        placeholder="e.g., 2 hours"
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Location and Capacity */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location" className="text-white mb-2 block">
                        Location *
                      </Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="e.g., Harmony Realm"
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="maxAttendees" className="text-white mb-2 block">
                        Max Attendees
                      </Label>
                      <Input
                        id="maxAttendees"
                        type="number"
                        value={formData.maxAttendees}
                        onChange={(e) => handleInputChange("maxAttendees", e.target.value)}
                        placeholder="e.g., 1000"
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Event Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div>
                    <Label className="text-white mb-4 block">Pricing</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="free"
                          name="price"
                          value="free"
                          checked={formData.price === "free"}
                          onChange={(e) => handleInputChange("price", e.target.value)}
                          className="text-purple-600"
                        />
                        <Label htmlFor="free" className="text-white">
                          Free Event
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="premium"
                          name="price"
                          value="premium"
                          checked={formData.price === "premium"}
                          onChange={(e) => handleInputChange("price", e.target.value)}
                          className="text-purple-600"
                        />
                        <Label htmlFor="premium" className="text-white">
                          Premium Access Required
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="custom"
                          name="price"
                          value="custom"
                          checked={formData.price === "custom"}
                          onChange={(e) => handleInputChange("price", e.target.value)}
                          className="text-purple-600"
                        />
                        <Label htmlFor="custom" className="text-white">
                          Custom Price
                        </Label>
                      </div>
                      {formData.price === "custom" && (
                        <Input
                          value={formData.customPrice}
                          onChange={(e) => handleInputChange("customPrice", e.target.value)}
                          placeholder="Enter price..."
                          className="bg-white/5 border-white/10 text-white placeholder-gray-400 ml-6"
                        />
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <Label className="text-white mb-2 block">Tags</Label>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {predefinedTags.map((tag) => (
                          <Badge
                            key={tag}
                            variant={formData.tags.includes(tag) ? "default" : "outline"}
                            className={`cursor-pointer transition-colors ${
                              formData.tags.includes(tag)
                                ? "bg-purple-600 text-white"
                                : "border-white/20 text-gray-300 hover:bg-white/10"
                            }`}
                            onClick={() => (formData.tags.includes(tag) ? removeTag(tag) : addTag(tag))}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Input
                        value={formData.customTags}
                        onChange={(e) => handleInputChange("customTags", e.target.value)}
                        placeholder="Add custom tags (comma separated)..."
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                        onKeyPress={(e) => {
                          if (e.key === "Enter" && formData.customTags.trim()) {
                            const newTags = formData.customTags
                              .split(",")
                              .map((tag) => tag.trim())
                              .filter((tag) => tag)
                            newTags.forEach((tag) => addTag(tag))
                            handleInputChange("customTags", "")
                          }
                        }}
                      />
                    </div>
                    {formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {formData.tags.map((tag) => (
                          <Badge key={tag} className="bg-purple-600 text-white">
                            {tag}
                            <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Performers */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label className="text-white">Performers/Speakers</Label>
                      <Button
                        type="button"
                        size="sm"
                        onClick={addPerformer}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Performer
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {formData.performers.map((performer, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                          <Avatar>
                            <AvatarFallback className="bg-gray-600">
                              <Users className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                              value={performer.name}
                              onChange={(e) => updatePerformer(index, "name", e.target.value)}
                              placeholder="Performer name"
                              className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                            />
                            <Input
                              value={performer.role}
                              onChange={(e) => updatePerformer(index, "role", e.target.value)}
                              placeholder="Role/Title"
                              className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                            />
                          </div>
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            onClick={() => removePerformer(index)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="schedule">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">Event Schedule</CardTitle>
                    <Button
                      type="button"
                      size="sm"
                      onClick={addScheduleItem}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Item
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {formData.schedule.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                          <Input
                            type="time"
                            value={item.time}
                            onChange={(e) => updateScheduleItem(index, "time", e.target.value)}
                            className="bg-white/5 border-white/10 text-white"
                          />
                          <Input
                            value={item.title}
                            onChange={(e) => updateScheduleItem(index, "title", e.target.value)}
                            placeholder="Schedule item title"
                            className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                          />
                          <Input
                            value={item.duration}
                            onChange={(e) => updateScheduleItem(index, "duration", e.target.value)}
                            placeholder="Duration (e.g., 30 min)"
                            className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                          />
                        </div>
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          onClick={() => removeScheduleItem(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Event Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Visibility */}
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Public Event</Label>
                      <p className="text-gray-400 text-sm">Anyone can discover and join this event</p>
                    </div>
                    <Switch
                      checked={formData.isPublic}
                      onCheckedChange={(checked) => handleInputChange("isPublic", checked)}
                    />
                  </div>

                  {/* Recording */}
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Allow Recording</Label>
                      <p className="text-gray-400 text-sm">Participants can record the event</p>
                    </div>
                    <Switch
                      checked={formData.allowRecording}
                      onCheckedChange={(checked) => handleInputChange("allowRecording", checked)}
                    />
                  </div>

                  {/* Approval */}
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Require Approval</Label>
                      <p className="text-gray-400 text-sm">Manually approve attendees before they can join</p>
                    </div>
                    <Switch
                      checked={formData.requireApproval}
                      onCheckedChange={(checked) => handleInputChange("requireApproval", checked)}
                    />
                  </div>

                  {/* Additional Settings */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <h3 className="text-white font-medium">Additional Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="chat" className="text-purple-600" />
                        <Label htmlFor="chat" className="text-white text-sm">
                          Enable live chat
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="qa" className="text-purple-600" />
                        <Label htmlFor="qa" className="text-white text-sm">
                          Q&A session
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="polls" className="text-purple-600" />
                        <Label htmlFor="polls" className="text-white text-sm">
                          Interactive polls
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="breakout" className="text-purple-600" />
                        <Label htmlFor="breakout" className="text-white text-sm">
                          Breakout rooms
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-gray-400">
              <Eye className="h-4 w-4" />
              <span className="text-sm">Preview your event before publishing</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => handleSubmit(true)} className="border-white/20 text-white">
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </Button>
              <Button
                onClick={() => handleSubmit(false)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Send className="mr-2 h-4 w-4" />
                Publish Event
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
