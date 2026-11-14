import { useState } from "react";
import SEO from "@/components/SEO";
import { seoConfig } from "@/data/seoData";
import AboutEditorialProfile from "@/components/AboutEditorialProfile";
import ContactModal from "@/components/ContactModal";
import Toast from "@/components/Toast";

interface AboutPageProps {
  onOpenContact?: () => void;
}

export default function AboutPage({ onOpenContact }: AboutPageProps) {
  const [internalContactOpen, setInternalContactOpen] = useState(false);
  const [selectedService] = useState("Full-Stack Web Development");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenContact = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      setInternalContactOpen(true);
    }
  };

  return (
    <main
      data-purpose="page-about"
      className="min-h-screen bg-[#0B0B0D] text-[#F2EFE9] pt-2 sm:pt-4 pb-16 select-none"
    >
      <SEO {...seoConfig.about} />
      <div className="max-w-[1400px] mx-auto">
        <AboutEditorialProfile onOpenContact={handleOpenContact} />
      </div>

      {/* Standalone Contact Modal & Notification fallback */}
      {!onOpenContact && (
        <>
          <ContactModal
            isOpen={internalContactOpen}
            initialService={selectedService}
            onClose={() => setInternalContactOpen(false)}
            onSubmitSuccess={(msg) => setToastMessage(msg)}
          />
          <Toast
            message={toastMessage}
            onDismiss={() => setToastMessage(null)}
          />
        </>
      )}
    </main>
  );
}

