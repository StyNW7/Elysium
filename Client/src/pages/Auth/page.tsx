/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, Sparkles } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import { useNavigate } from "react-router"

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: ""
  })
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      })

      if (error) throw error

      toast.success("Logged in successfully!")
      navigate("/dashboard") // Redirect to dashboard after login
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match")
      return
    }

    setIsLoading(true)

    try {
      // First sign up the user
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.username
          }
        }
      })

      if (signUpError) throw signUpError

      // If email confirmation is enabled, inform user to check their email
      toast.success("Account created! Please check your email for confirmation.")
      
      // Optional: Automatically log them in after signup
      // const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
      //   email: formData.email,
      //   password: formData.password
      // })
      // if (loginError) throw loginError
      // navigate("/dashboard")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Sign up failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden py-14">
      {/* ... (keep all your existing background and decorative elements) ... */}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border-white/20 shadow-2xl">
            <CardHeader className="text-center space-y-4">
              {/* ... (keep your card header content) ... */}
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="login" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 bg-white/10 border border-white/20">
                  {/* ... (keep your tabs list) ... */}
                </TabsList>

                <AnimatePresence mode="wait">
                  <TabsContent value="login" className="space-y-4">
                    <motion.form
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      onSubmit={handleLogin}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/90">
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6a75f1]"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-white/90">
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6a75f1]"
                            required
                            value={formData.password}
                            onChange={handleChange}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="w-4 h-4 text-white/50" />
                            ) : (
                              <Eye className="w-4 h-4 text-white/50" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#6a75f1] to-[#a28ad6] hover:from-[#5a65e1] hover:to-[#927ac6] text-white font-semibold py-2.5"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          "Sign In"
                        )}
                      </Button>

                      <div className="text-center">
                        <Button 
                          variant="link" 
                          className="text-[#f5d87a] hover:text-[#f5d87a]/80"
                          onClick={async () => {
                            const email = prompt("Please enter your email for password reset:")
                            if (email) {
                              const { error } = await supabase.auth.resetPasswordForEmail(email)
                              if (error) {
                                toast.error(error.message)
                              } else {
                                toast.success("Password reset link sent to your email!")
                              }
                            }
                          }}
                        >
                          Forgot your password?
                        </Button>
                      </div>
                    </motion.form>
                  </TabsContent>

                  <TabsContent value="register" className="space-y-4">
                    <motion.form
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleSignUp}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="username" className="text-white/90">
                          Username
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                          <Input
                            id="username"
                            type="text"
                            placeholder="Choose a username"
                            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6a75f1]"
                            required
                            value={formData.username}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-email" className="text-white/90">
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                          <Input
                            id="email" // Changed from register-email to email for consistency
                            type="email"
                            placeholder="Enter your email"
                            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6a75f1]"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-password" className="text-white/90">
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                          <Input
                            id="password" // Changed from register-password to password for consistency
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6a75f1]"
                            required
                            value={formData.password}
                            onChange={handleChange}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="w-4 h-4 text-white/50" />
                            ) : (
                              <Eye className="w-4 h-4 text-white/50" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-white/90">
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 w-4 h-4 text-white/50" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#6a75f1]"
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="w-4 h-4 text-white/50" />
                            ) : (
                              <Eye className="w-4 h-4 text-white/50" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#a28ad6] to-[#f5d87a] hover:from-[#927ac6] hover:to-[#f0d070] text-black font-semibold py-2.5"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                          />
                        ) : (
                          "Create Account"
                        )}
                      </Button>
                    </motion.form>
                  </TabsContent>
                </AnimatePresence>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}