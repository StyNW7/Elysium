// Default Import

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";

// Layout

import Layout from "@/layouts/root-layout";

// Utility Pages / Components

import ScrollToTop from "./utility/ScrollToTop";
import CustomCursor from "./utility/CustomCursor";
import ScrollToTopFunction from "./utility/ScrollToTopFunction";
import NotFoundPage from "./pages/Utility/NotFound404";
import {LoadingScreen} from "./pages/Utility/LoadingScreen";
import ComingSoonPage from "./pages/Utility/ComingSoon";

// Pages

import LandingPage from "@/pages/Landing/page";
import AuthPage from "./pages/Auth/page";
import ExplorePage from "./pages/Explore/page";


// Dashboard Pages

import CreatePage from "./pages/Dashboard/Create/page";
import DashboardPage from "./pages/Dashboard/page";
import AnalyticsPage from "./pages/Dashboard/Analytics/page";
import SettingsPage from "./pages/Dashboard/Settings/page";
import ContentPage from "./pages/Dashboard/Content/page";

// Content Detail Pages

import MusicDetailPage from "./pages/Content/Music/page";
import VideoDetailPage from "./pages/Content/Video/page";
import PodcastDetailPage from "./pages/Content/Podcast/page";
import GameDetailPage from "./pages/Content/Game/page";
import StoryDetailPage from "./pages/Content/Story/page";


function App() {

  const [loading, setLoading] = useState(true);

  return (

    // Providers, Router, Scroll to Top Function and Button, and Custom Cursor

    <BrowserRouter>
      <ScrollToTopFunction />
      <ScrollToTop />
      <CustomCursor />

      {loading && (
        <LoadingScreen onComplete={() => setLoading(false)} />
      )}

      <AnimatePresence mode="wait">

        {!loading && (

          <Routes>

            <Route path="/" element={<Layout />}>
              
                <Route index element={<LandingPage/>} />
                <Route path="/coming-soon" element={<ComingSoonPage />} />

                <Route path="/auth" element={<AuthPage />} />

                <Route path="/explore" element={<ExplorePage />} />

                {/* Content Detail */}

                <Route path="/video/:id" element={<VideoDetailPage />} />
                <Route path="/music/:id" element={<MusicDetailPage />} />
                <Route path="/podcast/:id" element={<PodcastDetailPage />} />
                <Route path="/game/:id" element={<GameDetailPage />} />
                <Route path="/story/:id" element={<StoryDetailPage />} />

            </Route>

            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/create" element={<CreatePage />} />
            <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
            <Route path="/dashboard/content" element={<ContentPage />} />
            <Route path="/dashboard/settings" element={<SettingsPage />} />

            <Route path="*" element={<NotFoundPage />} />

          </Routes>

        )}

      </AnimatePresence>

      <Toaster position="top-center" />

    </BrowserRouter>

  );
}

export default App;
