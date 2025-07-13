"use client"

import { useState } from "react"
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Maximize,
  BookOpen,
  CheckCircle,
  Circle,
  Download,
  Share,
  MessageCircle,
  ThumbsUp,
  Clock,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
// import { useParams } from "react-router"

const courseData = {
  id: 1,
  title: "AI-Powered Storytelling Mastery",
  instructor: "Alex Rivera",
  avatar: "/placeholder-user.jpg",
  description:
    "Learn to craft compelling narratives with AI assistance and master the art of digital storytelling in Elysium.",
  duration: "6 hours",
  totalLessons: 18,
  students: 12350,
  rating: 4.8,
  level: "Intermediate",
  category: "Storytelling",
  progress: 35,
  currentLesson: 6,
  chapters: [
    {
      id: 1,
      title: "Introduction to AI Storytelling",
      lessons: [
        { id: 1, title: "Welcome to the Course", duration: "5:30", completed: true, type: "video" },
        { id: 2, title: "The Evolution of Digital Narratives", duration: "12:45", completed: true, type: "video" },
        { id: 3, title: "Understanding AI in Creative Writing", duration: "18:20", completed: true, type: "video" },
        { id: 4, title: "Quiz: Fundamentals", duration: "10:00", completed: true, type: "quiz" },
      ],
    },
    {
      id: 2,
      title: "AI Tools and Techniques",
      lessons: [
        { id: 5, title: "Elysium's AI Writing Assistant", duration: "22:15", completed: true, type: "video" },
        {
          id: 6,
          title: "Character Development with AI",
          duration: "19:30",
          completed: false,
          type: "video",
          current: true,
        },
        { id: 7, title: "Plot Generation Techniques", duration: "25:10", completed: false, type: "video" },
        { id: 8, title: "Hands-on: Create Your First AI Story", duration: "30:00", completed: false, type: "project" },
      ],
    },
    {
      id: 3,
      title: "Advanced Storytelling",
      lessons: [
        { id: 9, title: "Multi-layered Narratives", duration: "28:45", completed: false, type: "video" },
        { id: 10, title: "Interactive Storytelling", duration: "32:20", completed: false, type: "video" },
        { id: 11, title: "Voice and Style Adaptation", duration: "24:15", completed: false, type: "video" },
        { id: 12, title: "Final Project: Complete Story", duration: "45:00", completed: false, type: "project" },
      ],
    },
  ],
}

const currentLesson = {
  id: 6,
  title: "Character Development with AI",
  description:
    "Learn how to create compelling, multi-dimensional characters using AI assistance and advanced prompting techniques.",
  duration: "19:30",
  videoUrl: "/placeholder-video.mp4",
  transcript:
    "In this lesson, we'll explore how artificial intelligence can help you develop rich, complex characters...",
  resources: [
    { name: "Character Development Worksheet", type: "pdf", size: "2.3 MB" },
    { name: "AI Prompting Templates", type: "doc", size: "1.8 MB" },
    { name: "Example Character Profiles", type: "zip", size: "5.1 MB" },
  ],
  notes: [
    { timestamp: "2:30", note: "Key insight about character motivation" },
    { timestamp: "8:15", note: "Remember to use the three-layer approach" },
    { timestamp: "14:45", note: "Great example of AI-generated backstory" },
  ],
}

export default function CoursePage() {

//   const { id } = useParams<{ course: string }>()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, ] = useState(0)
  const [newNote, setNewNote] = useState("")

  const totalDuration = 19 * 60 + 30 // 19:30 in seconds
  const progressPercent = (currentTime / totalDuration) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <a href="/academium">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Academium
            </Button>
          </a>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">{courseData.title}</h1>
            <div className="flex items-center gap-4 mt-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={courseData.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{courseData.instructor[0]}</AvatarFallback>
                </Avatar>
                <span>{courseData.instructor}</span>
              </div>
              <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                {courseData.level}
              </Badge>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {courseData.students.toLocaleString()} students
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                {courseData.rating}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Video Player */}
            <Card className="bg-black/50 backdrop-blur-sm border-white/10 overflow-hidden">
              <div className="relative aspect-video bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4 mx-auto">
                      {isPlaying ? (
                        <Pause className="h-8 w-8 text-white" />
                      ) : (
                        <Play className="h-8 w-8 text-white ml-1" />
                      )}
                    </div>
                    <h3 className="text-white text-lg font-medium">{currentLesson.title}</h3>
                    <p className="text-gray-400">{currentLesson.duration}</p>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="space-y-2">
                    <Progress value={progressPercent} className="h-1" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="text-white hover:bg-white/20"
                        >
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <SkipBack className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <SkipForward className="h-4 w-4" />
                        </Button>
                        <span className="text-white text-sm">
                          {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, "0")} /{" "}
                          {currentLesson.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Volume2 className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Maximize className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Lesson Content */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white/5 backdrop-blur-sm">
                <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="resources" className="data-[state=active]:bg-purple-600">
                  Resources
                </TabsTrigger>
                <TabsTrigger value="notes" className="data-[state=active]:bg-purple-600">
                  Notes
                </TabsTrigger>
                <TabsTrigger value="discussion" className="data-[state=active]:bg-purple-600">
                  Discussion
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">{currentLesson.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">{currentLesson.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {currentLesson.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        Lesson {currentLesson.id} of {courseData.totalLessons}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        Like
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white bg-transparent">
                        <Share className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white bg-transparent">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Lesson Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {currentLesson.resources.map((resource, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-purple-600/20">
                            <FileText className="h-5 w-5 text-purple-400" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{resource.name}</h4>
                            <p className="text-gray-400 text-sm">
                              {resource.type.toUpperCase()} • {resource.size}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="border-white/20 text-white bg-transparent">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">My Notes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Add a note at current timestamp..."
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                      />
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                        Add Note
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {currentLesson.notes.map((note, index) => (
                        <div key={index} className="p-3 rounded-lg bg-white/5">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="border-purple-500/30 text-purple-300 text-xs">
                              {note.timestamp}
                            </Badge>
                          </div>
                          <p className="text-gray-300 text-sm">{note.note}</p>
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
                      Discussion (24 comments)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Ask a question or share your thoughts..."
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                      />
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                        Post Comment
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {[
                        {
                          user: "Sarah Chen",
                          avatar: "/placeholder-user.jpg",
                          time: "2 hours ago",
                          comment:
                            "Great explanation of character motivation! The AI prompting examples were really helpful.",
                        },
                        {
                          user: "Mike Johnson",
                          avatar: "/placeholder-user.jpg",
                          time: "5 hours ago",
                          comment: "I'm struggling with the three-layer approach. Could you provide more examples?",
                        },
                        {
                          user: "Alex Rivera",
                          avatar: "/placeholder-user.jpg",
                          time: "6 hours ago",
                          comment: "Thanks for the feedback! I'll add more examples in the next lesson.",
                          instructor: true,
                        },
                      ].map((comment, index) => (
                        <div key={index} className="flex gap-3 p-4 rounded-lg bg-white/5">
                          <Avatar>
                            <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{comment.user[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-white font-medium">{comment.user}</span>
                              {comment.instructor && (
                                <Badge className="bg-purple-600 text-white text-xs">Instructor</Badge>
                              )}
                              <span className="text-gray-400 text-sm">{comment.time}</span>
                            </div>
                            <p className="text-gray-300 text-sm">{comment.comment}</p>
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
            {/* Course Progress */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">Course Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white">{courseData.progress}%</span>
                  </div>
                  <Progress value={courseData.progress} className="h-2" />
                </div>
                <div className="text-sm text-gray-400">
                  Lesson {courseData.currentLesson} of {courseData.totalLessons}
                </div>
              </CardContent>
            </Card>

            {/* Course Content */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">Course Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {courseData.chapters.map((chapter) => (
                  <div key={chapter.id} className="space-y-2">
                    <h4 className="text-white font-medium text-sm">{chapter.title}</h4>
                    <div className="space-y-1">
                      {chapter.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                            lesson.current ? "bg-purple-600/20 border border-purple-500/30" : "hover:bg-white/5"
                          }`}
                        >
                          <div className="flex-shrink-0">
                            {lesson.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-400" />
                            ) : lesson.current ? (
                              <Play className="h-4 w-4 text-purple-400" />
                            ) : (
                              <Circle className="h-4 w-4 text-gray-400" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div
                              className={`text-sm truncate ${
                                lesson.current ? "text-white font-medium" : "text-gray-300"
                              }`}
                            >
                              {lesson.title}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <span>{lesson.duration}</span>
                              <span>•</span>
                              <span className="capitalize">{lesson.type}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 border-white/20 text-white bg-transparent">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600">
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
