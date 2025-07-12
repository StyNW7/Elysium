/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Mail,
  Lock,
  Bell,
  Shield,
  Palette,
  Globe,
  CreditCard,
  Download,
  Upload,
  Camera,
  Eye,
  EyeOff,
  Save,
  X,
  Check,
  AlertTriangle,
  Crown,
  Moon,
  Sun,
  Plus,
} from "lucide-react"
import { DashboardSidebar } from "@/components/Dashboard/dashboard-sidebar"

export default function SettingsPage() {
  const [profileData, setProfileData] = useState({
    displayName: "Elysian Creator",
    username: "elysian_creator",
    email: "creator@elysium.com",
    bio: "Digital artist crafting immersive experiences across multiple mediums. Passionate about creating content that inspires and connects people.",
    location: "San Francisco, CA",
    website: "https://elysian-creator.com",
    birthDate: "1995-06-15",
  })

  const [preferences, setPreferences] = useState({
    theme: "dark",
    language: "en",
    timezone: "PST",
    emailNotifications: true,
    pushNotifications: true,
    soundEffects: true,
    autoPlay: false,
    showOnlineStatus: true,
    allowDirectMessages: true,
    contentVisibility: "public",
  })

  const [security, setSecurity] = useState({
    twoFactorEnabled: true,
    loginAlerts: true,
    sessionTimeout: "30",
    passwordLastChanged: "2024-01-15",
  })

  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSaveProfile = () => {
    // Handle profile save
    console.log("Profile saved:", profileData)
  }

  const handleSavePreferences = () => {
    // Handle preferences save
    console.log("Preferences saved:", preferences)
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-elysium-black to-elysium-black/95">
      <DashboardSidebar />

      <main className="flex-1 lg:ml-64 p-6 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-elysium-gold via-elysium-blue to-elysium-purple bg-clip-text text-transparent">
              Account Settings
            </h1>
            <p className="text-white/60 text-lg mt-2">Manage your account preferences and security</p>
          </div>

          <div className="flex items-center gap-3">
            <Badge className="bg-elysium-gold/20 text-elysium-gold border-elysium-gold/30">
              <Crown className="h-3 w-3 mr-1" />
              Pro Account
            </Badge>
            <Button className="bg-gradient-to-r from-elysium-blue to-elysium-purple hover:from-elysium-blue/80 hover:to-elysium-purple/80">
              <Save className="h-4 w-4 mr-2" />
              Save All Changes
            </Button>
          </div>
        </motion.div>

        {/* Settings Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="bg-white/5 border-white/10 grid grid-cols-2 lg:grid-cols-6 w-full">
              <TabsTrigger value="profile" className="data-[state=active]:bg-elysium-blue">
                <User className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="account" className="data-[state=active]:bg-elysium-blue">
                <Mail className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-elysium-blue">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-elysium-blue">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="preferences" className="data-[state=active]:bg-elysium-blue">
                <Palette className="h-4 w-4 mr-2" />
                Preferences
              </TabsTrigger>
              <TabsTrigger value="billing" className="data-[state=active]:bg-elysium-blue">
                <CreditCard className="h-4 w-4 mr-2" />
                Billing
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <User className="h-5 w-5 text-elysium-gold" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Picture */}
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <Avatar className="h-24 w-24 border-4 border-elysium-gold/30">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" />
                        <AvatarFallback className="bg-elysium-gold text-elysium-black text-2xl font-bold">
                          EC
                        </AvatarFallback>
                      </Avatar>
                      <Button
                        size="sm"
                        className="absolute -bottom-2 -right-2 rounded-full bg-elysium-blue hover:bg-elysium-blue/80"
                      >
                        <Camera className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white font-semibold">Profile Picture</h3>
                      <p className="text-white/60 text-sm">Upload a new profile picture. Recommended size: 400x400px</p>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Upload className="h-3 w-3 mr-2" />
                          Upload New
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-400 hover:bg-red-500/10">
                          <X className="h-3 w-3 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-white/10" />

                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="displayName" className="text-white">
                        Display Name
                      </Label>
                      <Input
                        id="displayName"
                        value={profileData.displayName}
                        onChange={(e) => setProfileData({ ...profileData, displayName: e.target.value })}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-white">
                        Username
                      </Label>
                      <Input
                        id="username"
                        value={profileData.username}
                        onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-white">
                        Location
                      </Label>
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-white">
                        Website
                      </Label>
                      <Input
                        id="website"
                        value={profileData.website}
                        onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthDate" className="text-white">
                        Birth Date
                      </Label>
                      <Input
                        id="birthDate"
                        type="date"
                        value={profileData.birthDate}
                        onChange={(e) => setProfileData({ ...profileData, birthDate: e.target.value })}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-white">
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      rows={4}
                      className="bg-white/5 border-white/20 text-white"
                      placeholder="Tell us about yourself..."
                    />
                    <p className="text-white/40 text-sm">{profileData.bio.length}/500 characters</p>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSaveProfile} className="bg-elysium-blue hover:bg-elysium-blue/80">
                      <Save className="h-4 w-4 mr-2" />
                      Save Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Account Tab */}
            <TabsContent value="account" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Account Status */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Crown className="h-5 w-5 text-elysium-gold" />
                      Account Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white">Account Type</span>
                      <Badge className="bg-elysium-gold/20 text-elysium-gold border-elysium-gold/30">Pro Creator</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Member Since</span>
                      <span className="text-white/60">January 2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Creator Level</span>
                      <span className="text-elysium-blue font-medium">Level 15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Verification Status</span>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-400" />
                        <span className="text-green-400">Verified</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Account Actions */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Download className="h-5 w-5 text-elysium-blue" />
                      Account Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download My Data
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Import Content
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Export Portfolio
                    </Button>
                    <Separator className="bg-white/10" />
                    <Button
                      variant="destructive"
                      className="w-full justify-start bg-red-500/20 border-red-500/30 text-red-400 hover:bg-red-500/30"
                    >
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Password Settings */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Lock className="h-5 w-5 text-elysium-purple" />
                      Password & Authentication
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword" className="text-white">
                        Current Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="currentPassword"
                          type={showCurrentPassword ? "text" : "password"}
                          className="bg-white/5 border-white/20 text-white pr-10"
                          placeholder="Enter current password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 text-white/60 hover:text-white"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        >
                          {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="newPassword" className="text-white">
                        New Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="newPassword"
                          type={showNewPassword ? "text" : "password"}
                          className="bg-white/5 border-white/20 text-white pr-10"
                          placeholder="Enter new password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 text-white/60 hover:text-white"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-white">
                        Confirm New Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          className="bg-white/5 border-white/20 text-white pr-10"
                          placeholder="Confirm new password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 text-white/60 hover:text-white"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="text-sm text-white/60">
                      <p>Password last changed: {new Date(security.passwordLastChanged).toLocaleDateString()}</p>
                    </div>

                    <Button className="w-full bg-elysium-purple hover:bg-elysium-purple/80">Update Password</Button>
                  </CardContent>
                </Card>

                {/* Security Settings */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Shield className="h-5 w-5 text-elysium-gold" />
                      Security Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Two-Factor Authentication</h4>
                        <p className="text-white/60 text-sm">Add an extra layer of security</p>
                      </div>
                      <Switch
                        checked={security.twoFactorEnabled}
                        onCheckedChange={(checked) => setSecurity({ ...security, twoFactorEnabled: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Login Alerts</h4>
                        <p className="text-white/60 text-sm">Get notified of new logins</p>
                      </div>
                      <Switch
                        checked={security.loginAlerts}
                        onCheckedChange={(checked) => setSecurity({ ...security, loginAlerts: checked })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Session Timeout</Label>
                      <Select
                        value={security.sessionTimeout}
                        onValueChange={(value) => setSecurity({ ...security, sessionTimeout: value })}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-elysium-black border-white/20">
                          <SelectItem value="15" className="text-white hover:bg-white/10">
                            15 minutes
                          </SelectItem>
                          <SelectItem value="30" className="text-white hover:bg-white/10">
                            30 minutes
                          </SelectItem>
                          <SelectItem value="60" className="text-white hover:bg-white/10">
                            1 hour
                          </SelectItem>
                          <SelectItem value="never" className="text-white hover:bg-white/10">
                            Never
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      View Active Sessions
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Bell className="h-5 w-5 text-elysium-blue" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-white font-medium">Email Notifications</h4>
                    {[
                      { id: "newFollower", label: "New Followers", description: "When someone follows you" },
                      { id: "contentLike", label: "Content Likes", description: "When someone likes your content" },
                      {
                        id: "contentComment",
                        label: "New Comments",
                        description: "When someone comments on your content",
                      },
                      { id: "contentShare", label: "Content Shares", description: "When someone shares your content" },
                      { id: "weeklyReport", label: "Weekly Reports", description: "Weekly analytics summary" },
                      { id: "monthlyReport", label: "Monthly Reports", description: "Monthly performance report" },
                    ].map((notification) => (
                      <div key={notification.id} className="flex items-center justify-between">
                        <div>
                          <h5 className="text-white">{notification.label}</h5>
                          <p className="text-white/60 text-sm">{notification.description}</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </div>

                  <Separator className="bg-white/10" />

                  <div className="space-y-4">
                    <h4 className="text-white font-medium">Push Notifications</h4>
                    {[
                      { id: "liveStream", label: "Live Streams", description: "When creators you follow go live" },
                      {
                        id: "newContent",
                        label: "New Content",
                        description: "When creators you follow post new content",
                      },
                      { id: "mentions", label: "Mentions", description: "When someone mentions you" },
                      { id: "directMessages", label: "Direct Messages", description: "When you receive a message" },
                    ].map((notification) => (
                      <div key={notification.id} className="flex items-center justify-between">
                        <div>
                          <h5 className="text-white">{notification.label}</h5>
                          <p className="text-white/60 text-sm">{notification.description}</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Appearance */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Palette className="h-5 w-5 text-elysium-purple" />
                      Appearance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-white">Theme</Label>
                      <Select
                        value={preferences.theme}
                        onValueChange={(value) => setPreferences({ ...preferences, theme: value })}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-elysium-black border-white/20">
                          <SelectItem value="dark" className="text-white hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Moon className="h-4 w-4" />
                              Dark Mode
                            </div>
                          </SelectItem>
                          <SelectItem value="light" className="text-white hover:bg-white/10">
                            <div className="flex items-center gap-2">
                              <Sun className="h-4 w-4" />
                              Light Mode
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Sound Effects</h4>
                        <p className="text-white/60 text-sm">Play sounds for interactions</p>
                      </div>
                      <Switch
                        checked={preferences.soundEffects}
                        onCheckedChange={(checked) => setPreferences({ ...preferences, soundEffects: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Auto-play Videos</h4>
                        <p className="text-white/60 text-sm">Automatically play videos in feed</p>
                      </div>
                      <Switch
                        checked={preferences.autoPlay}
                        onCheckedChange={(checked) => setPreferences({ ...preferences, autoPlay: checked })}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Language & Region */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Globe className="h-5 w-5 text-elysium-gold" />
                      Language & Region
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-white">Language</Label>
                      <Select
                        value={preferences.language}
                        onValueChange={(value) => setPreferences({ ...preferences, language: value })}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-elysium-black border-white/20">
                          <SelectItem value="en" className="text-white hover:bg-white/10">
                            English
                          </SelectItem>
                          <SelectItem value="es" className="text-white hover:bg-white/10">
                            Español
                          </SelectItem>
                          <SelectItem value="fr" className="text-white hover:bg-white/10">
                            Français
                          </SelectItem>
                          <SelectItem value="de" className="text-white hover:bg-white/10">
                            Deutsch
                          </SelectItem>
                          <SelectItem value="ja" className="text-white hover:bg-white/10">
                            日本語
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Timezone</Label>
                      <Select
                        value={preferences.timezone}
                        onValueChange={(value) => setPreferences({ ...preferences, timezone: value })}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-elysium-black border-white/20">
                          <SelectItem value="PST" className="text-white hover:bg-white/10">
                            Pacific Standard Time
                          </SelectItem>
                          <SelectItem value="EST" className="text-white hover:bg-white/10">
                            Eastern Standard Time
                          </SelectItem>
                          <SelectItem value="GMT" className="text-white hover:bg-white/10">
                            Greenwich Mean Time
                          </SelectItem>
                          <SelectItem value="CET" className="text-white hover:bg-white/10">
                            Central European Time
                          </SelectItem>
                          <SelectItem value="JST" className="text-white hover:bg-white/10">
                            Japan Standard Time
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Privacy Settings */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Eye className="h-5 w-5 text-elysium-blue" />
                    Privacy Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Show Online Status</h4>
                      <p className="text-white/60 text-sm">Let others see when you're online</p>
                    </div>
                    <Switch
                      checked={preferences.showOnlineStatus}
                      onCheckedChange={(checked) => setPreferences({ ...preferences, showOnlineStatus: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Allow Direct Messages</h4>
                      <p className="text-white/60 text-sm">Allow others to send you direct messages</p>
                    </div>
                    <Switch
                      checked={preferences.allowDirectMessages}
                      onCheckedChange={(checked) => setPreferences({ ...preferences, allowDirectMessages: checked })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Content Visibility</Label>
                    <Select
                      value={preferences.contentVisibility}
                      onValueChange={(value) => setPreferences({ ...preferences, contentVisibility: value })}
                    >
                      <SelectTrigger className="bg-white/5 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-elysium-black border-white/20">
                        <SelectItem value="public" className="text-white hover:bg-white/10">
                          Public
                        </SelectItem>
                        <SelectItem value="followers" className="text-white hover:bg-white/10">
                          Followers Only
                        </SelectItem>
                        <SelectItem value="private" className="text-white hover:bg-white/10">
                          Private
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing Tab */}
            <TabsContent value="billing" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Current Plan */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Crown className="h-5 w-5 text-elysium-gold" />
                      Current Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-6 bg-gradient-to-r from-elysium-gold/20 to-elysium-blue/20 rounded-xl border border-elysium-gold/30">
                      <Crown className="h-8 w-8 text-elysium-gold mx-auto mb-2" />
                      <h3 className="text-xl font-bold text-white mb-1">Pro Creator</h3>
                      <p className="text-white/60 mb-4">Unlimited uploads and advanced analytics</p>
                      <div className="text-3xl font-bold text-elysium-gold mb-2">$29.99</div>
                      <p className="text-white/60 text-sm">per month</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Next billing date</span>
                        <span className="text-white">February 15, 2024</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Payment method</span>
                        <span className="text-white">•••• •••• •••• 4242</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        Change Plan
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10 bg-transparent"
                      >
                        Cancel Plan
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Methods */}
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-elysium-purple" />
                      Payment Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                            VISA
                          </div>
                          <span className="text-white">•••• •••• •••• 4242</span>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Primary</Badge>
                      </div>
                      <p className="text-white/60 text-sm">Expires 12/2027</p>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Payment Method
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Billing History */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Download className="h-5 w-5 text-elysium-blue" />
                    Billing History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { date: "Jan 15, 2024", amount: "$29.99", status: "Paid", invoice: "INV-001" },
                      { date: "Dec 15, 2023", amount: "$29.99", status: "Paid", invoice: "INV-002" },
                      { date: "Nov 15, 2023", amount: "$29.99", status: "Paid", invoice: "INV-003" },
                      { date: "Oct 15, 2023", amount: "$29.99", status: "Paid", invoice: "INV-004" },
                    ].map((bill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-white font-medium">{bill.invoice}</p>
                            <p className="text-white/60 text-sm">{bill.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-white font-medium">{bill.amount}</span>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{bill.status}</Badge>
                          <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  )
}
