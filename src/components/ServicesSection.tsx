import { useState } from "react";

interface ServicesSectionProps {
  onInquire: (serviceName: string) => void;
}

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  deliverables: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "FULL-STACK WEB DEVELOPMENT",
    description:
      "End-to-end full-stack web engineering with PHP, MySQL, Python, and Flask backends connected to responsive, accessible, high-performance React and TypeScript client interfaces.",
    deliverables: "RESPONSIVE CLIENT APPS, RESTFUL APIS, RELATIONAL SCHEMAS, SECURE AUTHENTICATION",
  },
  {
    id: 2,
    title: "AI & MACHINE LEARNING INTEGRATION",
    description:
      "Practical machine learning application development utilizing Scikit-learn, Random Forest algorithms, and real-time telemetry processing pipelines for automated threat detection and predictive classification.",
    deliverables: "ML CLASSIFICATION ENGINES, MODEL EVALUATION, REAL-TIME FEATURE ANALYSIS, FLASK INTEGRATION",
  },
  {
    id: 3,
    title: "CYBERSECURITY & SYSTEMS DEFENSE",
    description:
      "Network security analysis, intrusion detection system (IDS) architectures, traffic pattern inspection, and defensive system hardening adhering to security-first modern web development practices.",
    deliverables: "INTRUSION DETECTION SYSTEMS, TRAFFIC LOGGING, EVENT MONITORING CONSOLES, THREAT MITIGATION",
  },
];

export default function ServicesSection({ onInquire }: ServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      data-purpose="services-section"
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-20 select-none"
    >
      {/* Centered Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-[10px] font-semibold tracking-widest uppercase text-neutral-700 mb-3">
          <span>TECHNICAL SPECIALIZATION</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mb-4">
          THE SERVICES WE PROVIDE
        </h2>
        <p className="text-xs md:text-xs uppercase font-medium leading-relaxed tracking-wider text-neutral-500">
          ENGINEERING RELIABLE, FAST, AND VISUALLY ENGAGING DIGITAL SYSTEMS TAILORED TO REAL-WORLD NEEDS AND ACADEMIC RIGOR.
        </p>
      </div>

      {/* Service Pill Rows Accordion */}
      <div className="max-w-4xl mx-auto flex flex-col space-y-3.5">
        {servicesData.map((service, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={service.id}
              onClick={() => setActiveIndex(isActive ? -1 : idx)}
              className={`w-full flex flex-col px-6 py-4 rounded-3xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-black text-white shadow-xl scale-[1.01] border border-black"
                  : "bg-white text-neutral-800 border border-neutral-300 hover:border-black"
              }`}
            >
              {/* Header row */}
              <div className="flex items-center justify-between">
                <span
                  className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-medium transition-colors ${
                    isActive
                      ? "border-neutral-700 text-neutral-300"
                      : "border-neutral-300 text-neutral-700"
                  }`}
                >
                  {service.id}
                </span>

                <span
                  className={`text-xs md:text-sm font-bold tracking-widest uppercase transition-colors ${
                    isActive ? "text-white" : "text-neutral-800"
                  }`}
                >
                  {service.title}
                </span>

                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                    isActive
                      ? "border-neutral-700 rotate-90 text-white"
                      : "border-neutral-300 rotate-0 text-neutral-700"
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-out ${
                  isActive ? "max-h-[250px] opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className={`text-xs leading-relaxed max-w-2xl mb-4 ${
                    isActive ? "text-neutral-300" : "text-neutral-500"
                  }`}
                >
                  {service.description}
                </p>

                <div
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between border-t pt-3 gap-2 ${
                    isActive ? "border-neutral-800" : "border-neutral-200"
                  }`}
                >
                  <span className="text-[10px] font-mono text-neutral-400 tracking-wider">
                    DELIVERABLES: {service.deliverables}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onInquire(service.title);
                    }}
                    className={`text-xs font-bold underline cursor-pointer shrink-0 transition-colors ${
                      isActive ? "text-white hover:text-neutral-300" : "text-black hover:text-neutral-600"
                    }`}
                  >
                    INQUIRE ↗
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

