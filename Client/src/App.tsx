// Default Import

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import { Toaster } from "react-hot-toast";

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

            </Route>

            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/create" element={<CreatePage />} />

            <Route path="*" element={<NotFoundPage />} />

          </Routes>

        )}

      </AnimatePresence>

      <Toaster position="top-center" />

    </BrowserRouter>

  );
}

export default App;
