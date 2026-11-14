import SEO from "@/components/SEO";
import { seoConfig } from "@/data/seoData";
import Hero from "@/components/Hero";
import ScrollExpandMedia from "@/components/ScrollExpandMedia";
import ExperienceSection from "@/components/ExperienceSection";
import WorksWheel from "@/components/WorksWheel";
import TechnicalArsenal from "@/components/TechnicalArsenal";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

interface HomePageProps {
  onOpenContact?: () => void;
  onSelectService?: (serviceName: string) => void;
  showNavigation?: boolean;
  showFooter?: boolean;
}

export default function HomePage({ onOpenContact }: HomePageProps) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#FAFAFA] text-[#121212] select-none">
      <SEO {...seoConfig.home} />
      {/* =========================================================
          1. HERO SECTION
          - Animated introduction and oversized typography
          - Silhouette portrait reveal
          - Direct navigation links to /projects and /about
      ========================================================= */}
      <Hero />

      {/* =========================================================
          2. ABOUT SECTION
          - Pinned 200vh scroll-expanding media theater
          - Unblurring floating light & outward title splitting ("ABOUT" / "ME")
          - Short bio, small portrait avatar & link to /about
      ========================================================= */}
      <ScrollExpandMedia
        onOpenContact={onOpenContact}
        showDetailedProfile={false}
      />

      {/* =========================================================
          3. EXPERIENCE SECTION (Compact Preview)
          - Kinetic typography header ("THE JOURNEY SO FAR")
          - Vertical gradient spine with staggered milestone reveals
          - Two compact milestone previews (Galgotias & Cybrexus)
          - Link to dedicated /experience page
      ========================================================= */}
      <ExperienceSection compact={true} />

      {/* =========================================================
          4. PROJECTS SECTION (Interactive 3D Cylindrical Drum Reel)
          - Spatial CSS 3D reel with touch/drag inertia
          - Two authentic projects (Expense Tracker & THREATNEX)
          - Interactive card inspection modal & link to /projects
      ========================================================= */}
      <WorksWheel />

      {/* =========================================================
          5. SKILLS SECTION (Compact Animated Core Selection)
          - Animated selection of 8 core technologies with hover physics
          - Glowing category indicators & proficiency tags
          - Link to dedicated /skills page
      ========================================================= */}
      <TechnicalArsenal compact={true} />

      {/* =========================================================
          6. CERTIFICATIONS SECTION (Compact Preview)
          - Two verified industry credentials (Deloitte & Tata)
          - Reveal animation & CertificateModal inspection
          - Link to dedicated /certifications page
      ========================================================= */}
      <CertificationsSection compact={true} />

      {/* =========================================================
          7. CONTACT SECTION (Compact Dramatic Dark "LET'S TALK")
          - Glowing ambient halos & matrix pattern
          - Direct Gmail compose dispatch (privacy protected, zero text exposure)
          - Social channels & link to dedicated /contact page
      ========================================================= */}
      <ContactSection compact={true} />
    </main>
  );
}
