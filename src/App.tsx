import { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import OrbitalPreloader from "@/components/OrbitalPreloader";
import ScrollToTop from "@/components/ScrollToTop";
import Layout, { useLayout } from "@/components/Layout";
import AnimatedRouteWrapper from "@/components/AnimatedRouteWrapper";

// Route-level code splitting for performance and fast initial load
const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ExperiencePage = lazy(() => import("@/pages/ExperiencePage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const SkillsPage = lazy(() => import("@/pages/SkillsPage"));
const CertificationsPage = lazy(() => import("@/pages/CertificationsPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function RouteLoadingFallback() {
  return (
    <div
      className="min-h-[50vh] w-full bg-[#0B0B0D] flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      <div className="w-5 h-5 border-2 border-[#C5A880]/20 border-t-[#C5A880] rounded-full animate-spin" />
    </div>
  );
}

/**
 * Route wrappers to wire Layout context (Contact Modal & Toasts)
 * seamlessly without duplicating Navigation or Footers.
 */
function HomeRoute() {
  const { openContact } = useLayout();
  return (
    <HomePage
      showNavigation={false}
      showFooter={false}
      onOpenContact={() => openContact()}
      onSelectService={(service) => openContact(service)}
    />
  );
}

function AboutRoute() {
  const { openContact } = useLayout();
  return <AboutPage onOpenContact={() => openContact()} />;
}

export default function App() {
  // Preloader displays only on direct visits to the Home root route ("/")
  const [showWelcome, setShowWelcome] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname === "/";
    }
    return true;
  });

  /* =====================================================
     PREVENT SCROLL DURING INTRO
  ====================================================== */
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (showWelcome) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showWelcome]);

  return (
    <>
      {/* Scroll restoration: resets scroll to (0, 0) upon route transitions */}
      <ScrollToTop />

      {/* Cinematic Orbital Preloader (Root Landing only) */}
      <AnimatePresence mode="wait">
        {showWelcome && (
          <OrbitalPreloader onComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {/* Main Multi-Page App Architecture */}
      {!showWelcome && (
        <Layout>
          <AnimatedRouteWrapper>
            <Suspense fallback={<RouteLoadingFallback />}>
              <Routes>
                {/* 1. HOME ROUTE */}
                <Route path="/" element={<HomeRoute />} />

                {/* 2. ABOUT ROUTE */}
                <Route path="/about" element={<AboutRoute />} />

                {/* 3. EXPERIENCE ROUTE */}
                <Route path="/experience" element={<ExperiencePage />} />

                {/* 4. PROJECTS ROUTE */}
                <Route path="/projects" element={<ProjectsPage />} />

                {/* 5. SKILLS & TECHNICAL ARSENAL ROUTE */}
                <Route path="/skills" element={<SkillsPage />} />

                {/* 6. CERTIFICATIONS & STRUCTURED LEARNING ROUTE */}
                <Route path="/certifications" element={<CertificationsPage />} />

                {/* 7. CONTACT ROUTE */}
                <Route path="/contact" element={<ContactPage />} />

                {/* 8. EDITORIAL 404 CATCH-ALL ROUTE */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </AnimatedRouteWrapper>
        </Layout>
      )}
    </>
  );
}
