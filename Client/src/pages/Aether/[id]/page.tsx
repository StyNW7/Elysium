"use client"

import { useState } from "react"
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  Heart,
  Share,
  Bookmark,
  ChevronLeft,
  Play,
  MessageCircle,
  UserPlus,
  Bell,
  Music,
  Eye,
  ThumbsUp,
  Send,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

const eventData = {
  id: 1,
  title: "The Grand AI Symphony",
  description:
    "Experience the first-ever AI-composed symphony performed by virtual orchestras from across Elysium. This groundbreaking event brings together the most advanced AI composers and virtual musicians to create a musical experience unlike anything heard before.",
  type: "AI Concert",
  date: "2024-02-15",
  time: "20:00 UTC",
  duration: "2 hours",
  location: "Harmony Realm",
  attendees: 15420,
  maxAttendees: 20000,
  status: "upcoming",
  featured: true,
  image: "/placeholder.jpg",
  host: {
    name: "Elysium Music Collective",
    avatar: "/placeholder-user.jpg",
    verified: true,
    followers: 125000,
    bio: "Pioneering the future of AI-generated music and virtual performances in Elysium.",
  },
  tags: ["Music", "AI", "Symphony", "Live Performance", "Virtual Orchestra"],
  price: "Free",
  category: "concert",
  streamUrl: "/placeholder-stream",
  isLive: false,
  schedule: [
    { time: "20:00", title: "Opening Ceremony", duration: "15 min" },
    { time: "20:15", title: "AI Composer Showcase", duration: "30 min" },
    { time: "20:45", title: "The Grand Symphony - Part I", duration: "25 min" },
    { time: "21:10", title: "Intermission & Q&A", duration: "15 min" },
    { time: "21:25", title: "The Grand Symphony - Part II", duration: "30 min" },
    { time: "21:55", title: "Closing & Community Celebration", duration: "15 min" },
  ],
  performers: [
    { name: "AI Maestro Alpha", role: "Lead Conductor", avatar: "/placeholder-user.jpg" },
    { name: "Virtual Philharmonic", role: "Orchestra", avatar: "/placeholder-user.jpg" },
    { name: "Harmony AI", role: "Composer", avatar: "/placeholder-user.jpg" },
    { name: "Echo Ensemble", role: "Choir", avatar: "/placeholder-user.jpg" },
  ],
  sponsors: [
    { name: "Elysium Foundation", logo: "/placeholder-logo.svg" },
    { name: "AI Music Labs", logo: "/placeholder-logo.svg" },
    { name: "Virtual Instruments Co.", logo: "/placeholder-logo.svg" },
  ],
}

const chatMessages = [
  {
    id: 1,
    user: "MusicLover42",
    avatar: "/placeholder-user.jpg",
    message: "Can't wait for this! 🎵",
    timestamp: "2 min ago",
    isSupporter: false,
  },
  {
    id: 2,
    user: "AIEnthusiast",
    avatar: "/placeholder-user.jpg",
    message: "This is going to be revolutionary!",
    timestamp: "3 min ago",
    isSupporter: true,
  },
  {
    id: 3,
    user: "SymphonyFan",
    avatar: "/placeholder-user.jpg",
    message: "First AI symphony ever? Historic moment!",
    timestamp: "5 min ago",
    isSupporter: false,
  },
  {
    id: 4,
    user: "VirtualVibes",
    avatar: "/placeholder-user.jpg",
    message: "The future of music is here 🚀",
    timestamp: "7 min ago",
    isSupporter: true,
  },
]

export default function EventDetailPage() {

//   const { id } = useParams<{ id: string }>()
  const [isAttending, setIsAttending] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [showFullDescription, setShowFullDescription] = useState(false)

  const attendancePercentage = (eventData.attendees / eventData.maxAttendees) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <a href="/aether">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Aether
            </Button>
          </a>
          <div className="flex items-center gap-2">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">Featured Event</Badge>
            <Badge variant="outline" className="border-purple-500/30 text-purple-300">
              {eventData.type}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Hero */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
              <div className="relative aspect-video bg-black">
                <img
                  src={eventData.image || "/placeholder.svg"}
                  alt={eventData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Live Indicator */}
                {eventData.isLive && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-sm font-medium">LIVE</span>
                    </div>
                  </div>
                )}

                {/* Event Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{eventData.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-white">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span className="font-medium">
                        {new Date(eventData.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>{eventData.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <span>{eventData.location}</span>
                    </div>
                  </div>
                </div>

                {/* Play Button for Live Events */}
                {eventData.isLive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                    >
                      <Play className="mr-2 h-6 w-6" />
                      Join Live Stream
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* Event Details */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white/5 backdrop-blur-sm">
                <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="schedule" className="data-[state=active]:bg-purple-600">
                  Schedule
                </TabsTrigger>
                <TabsTrigger value="performers" className="data-[state=active]:bg-purple-600">
                  Performers
                </TabsTrigger>
                <TabsTrigger value="discussion" className="data-[state=active]:bg-purple-600">
                  Discussion
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">About This Event</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <p className="text-gray-300 leading-relaxed">
                        {showFullDescription ? eventData.description : `${eventData.description.slice(0, 200)}...`}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className="text-purple-400 hover:text-purple-300 p-0 mt-2"
                      >
                        {showFullDescription ? "Show Less" : "Read More"}
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {eventData.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-purple-500/30 text-purple-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 rounded-lg bg-white/5">
                        <Users className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{eventData.attendees.toLocaleString()}</div>
                        <div className="text-sm text-gray-400">Attending</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-white/5">
                        <Clock className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{eventData.duration}</div>
                        <div className="text-sm text-gray-400">Duration</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-white/5">
                        <Star className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">Free</div>
                        <div className="text-sm text-gray-400">Admission</div>
                      </div>
                    </div>

                    {/* Sponsors */}
                    <div>
                      <h3 className="text-white font-semibold mb-4">Sponsored By</h3>
                      <div className="flex items-center gap-6">
                        {eventData.sponsors.map((sponsor, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-400">
                            <img src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} className="h-8 w-8" />
                            <span className="text-sm">{sponsor.name}</span>
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
                    <CardTitle className="text-white">Event Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {eventData.schedule.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                          <div className="text-purple-400 font-mono text-sm min-w-[60px]">{item.time}</div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.duration}</p>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-purple-400" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="performers">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Featured Performers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {eventData.performers.map((performer, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={performer.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{performer.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="text-white font-medium">{performer.name}</h4>
                            <p className="text-gray-400 text-sm">{performer.role}</p>
                          </div>
                          <Button size="sm" variant="outline" className="border-white/20 text-white bg-transparent">
                            Follow
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discussion">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Event Discussion
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>You</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <Textarea
                          placeholder="Share your thoughts about this event..."
                          value={chatMessage}
                          onChange={(e) => setChatMessage(e.target.value)}
                          className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                        />
                        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                          <Send className="mr-2 h-4 w-4" />
                          Post Comment
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {chatMessages.map((message) => (
                        <div key={message.id} className="flex gap-3">
                          <Avatar>
                            <AvatarImage src={message.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{message.user[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-white font-medium">{message.user}</span>
                              {message.isSupporter && (
                                <Badge className="bg-purple-600 text-white text-xs">Supporter</Badge>
                              )}
                              <span className="text-gray-400 text-sm">{message.timestamp}</span>
                            </div>
                            <p className="text-gray-300">{message.message}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-0">
                                <ThumbsUp className="mr-1 h-3 w-3" />
                                Like
                              </Button>
                              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-0">
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Host Info */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={eventData.host.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{eventData.host.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-semibold">{eventData.host.name}</h3>
                      {eventData.host.verified && (
                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{eventData.host.followers.toLocaleString()} followers</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{eventData.host.bio}</p>
                <Button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`w-full ${
                    isFollowing
                      ? "bg-gray-600 hover:bg-gray-700"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  }`}
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  {isFollowing ? "Following" : "Follow Host"}
                </Button>
              </CardContent>
            </Card>

            {/* Event Actions */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6 space-y-4">
                <Button
                  onClick={() => setIsAttending(!isAttending)}
                  size="lg"
                  className={`w-full ${
                    isAttending
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  }`}
                >
                  <Users className="mr-2 h-5 w-5" />
                  {isAttending ? "Attending" : "Join Event"}
                </Button>

                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`border-white/20 ${isBookmarked ? "text-purple-400 border-purple-400" : "text-white"}`}
                  >
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white bg-transparent">
                    <Share className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white bg-transparent">
                    <Bell className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Attendance</span>
                    <span className="text-white">{Math.round(attendancePercentage)}% full</span>
                  </div>
                  <Progress value={attendancePercentage} className="h-2" />
                  <div className="text-xs text-gray-400 text-center">
                    {eventData.attendees.toLocaleString()} of {eventData.maxAttendees.toLocaleString()} spots filled
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Event Stats */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">Event Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Eye className="h-4 w-4" />
                    <span>Views</span>
                  </div>
                  <span className="text-white font-medium">24.5K</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Heart className="h-4 w-4" />
                    <span>Likes</span>
                  </div>
                  <span className="text-white font-medium">3.2K</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Share className="h-4 w-4" />
                    <span>Shares</span>
                  </div>
                  <span className="text-white font-medium">892</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MessageCircle className="h-4 w-4" />
                    <span>Comments</span>
                  </div>
                  <span className="text-white font-medium">156</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Events */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">Related Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "AI Music Workshop", date: "Feb 20", attendees: "2.1K" },
                  { title: "Virtual Concert Series", date: "Mar 1", attendees: "5.8K" },
                  { title: "Creator Showcase", date: "Mar 15", attendees: "3.4K" },
                ].map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Music className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm">{event.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{event.date}</span>
                        <span>•</span>
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
