import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Compass, Home, Layers } from "lucide-react";
import SEO from "@/components/SEO";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main
      data-purpose="page-not-found"
      className="min-h-[75vh] flex-1 flex items-center justify-center bg-[#070709] text-[#F2EFE9] px-6 py-20 select-none"
    >
      <SEO
        title="404 Page Not Found | Rahul Mahanta"
        description="The requested page could not be found on Rahul Mahanta's portfolio."
        noIndex={true}
      />
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Monospace System Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono tracking-widest uppercase text-[#A89AC9]">
          <Compass className="w-3.5 h-3.5 text-[#A89AC9]" />
          <span>404 &mdash; ROUTE NOT FOUND</span>
        </div>

        {/* Editorial Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F2EFE9] leading-[1.05]">
            PAGE NOT FOUND
            <span className="text-[#A89AC9]">.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A7A39C] max-w-lg mx-auto leading-relaxed">
            The page you are looking for does not exist, has been moved, or the URL address was entered incorrectly.
          </p>
        </div>

        {/* Editorial Route Navigation Action Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-[#F2EFE9] text-[#0B0B0D] hover:bg-white text-xs font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>RETURN HOME</span>
            <span>↗</span>
          </Link>

          <Link
            to="/projects"
            className="px-6 py-3 rounded-full border border-white/20 hover:border-white text-xs font-mono tracking-wider uppercase text-[#F2EFE9] hover:bg-white/[0.05] transition-colors inline-flex items-center gap-2"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>PROJECT ARCHIVE</span>
            <span>↗</span>
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-5 py-3 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono tracking-wider uppercase text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>GO BACK</span>
          </button>
        </div>
      </div>
    </main>
  );
}

