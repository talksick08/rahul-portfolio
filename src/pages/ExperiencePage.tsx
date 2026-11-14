import SEO from "@/components/SEO";
import { seoConfig } from "@/data/seoData";
import ExperienceSection from "@/components/ExperienceSection";

export default function ExperiencePage() {
  return (
    <main
      data-purpose="page-experience"
      className="min-h-screen bg-[#0B0B0D] text-[#F2EFE9] pt-4 sm:pt-6 pb-20 select-none"
    >
      <SEO {...seoConfig.experience} />
      <div className="max-w-[1400px] mx-auto">
        <ExperienceSection compact={false} />
      </div>
    </main>
  );
}
