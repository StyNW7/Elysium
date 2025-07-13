import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useNavigate, Outlet } from "react-router-dom"
import { LoadingScreen } from "@/pages/Utility/LoadingScreen"

export default function ProtectedRoute() {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session) {
          navigate("/auth")
        } else {
          setAuthenticated(true)
        }
      } catch (error) {
        console.error("Authentication check failed:", error)
        navigate("/auth")
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [navigate])

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />
  }

  return authenticated ? <Outlet /> : null
}