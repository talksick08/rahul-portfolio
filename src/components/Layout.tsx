import { ReactNode, createContext, useContext, useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import Toast from "@/components/Toast";

interface LayoutContextType {
  openContact: (serviceName?: string) => void;
  closeContact: () => void;
  showToast: (message: string) => void;
}

const LayoutContext = createContext<LayoutContextType | null>(null);

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a Layout provider");
  }
  return context;
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Full-Stack Web Development");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const openContact = useCallback((serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsContactOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setIsContactOpen(false);
  }, []);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
  }, []);

  return (
    <LayoutContext.Provider value={{ openContact, closeContact, showToast }}>
      <div className="min-h-screen flex flex-col w-full selection:bg-neutral-800 selection:text-white">
        {/* Persistent Multi-Page Navigation Header */}
        <Navigation onOpenContact={() => openContact()} />

        {/* Page Main Content Area */}
        <div className="flex-1 w-full flex flex-col">
          {children}
        </div>

        {/* Persistent Multi-Page Footer */}
        <Footer onOpenContact={() => openContact()} />

        {/* Overlays Mounted Only Once at the Root Layout Level */}
        <ContactModal
          isOpen={isContactOpen}
          initialService={selectedService}
          onClose={closeContact}
          onSubmitSuccess={(msg) => showToast(msg)}
        />

        <Toast
          message={toastMessage}
          onDismiss={() => setToastMessage(null)}
        />
      </div>
    </LayoutContext.Provider>
  );
}

