import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: "website" | "profile";
  image?: string;
  noIndex?: boolean;
  structuredData?: object | object[];
}

const DOMAIN = "https://rahul08.vercel.app";
const DEFAULT_IMAGE = `${DOMAIN}/assets/og-image.jpg`;

export default function SEO({
  title,
  description,
  canonicalPath,
  type = "website",
  image = DEFAULT_IMAGE,
  noIndex = false,
  structuredData,
}: SEOProps) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${DOMAIN}${currentPath === "/" ? "" : currentPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (attribute: "name" | "property", attrValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Helper to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // 2. Standard Metadata & Robots Directive
    setMetaTag("name", "description", description);
    setLinkTag("canonical", canonicalUrl);

    if (noIndex) {
      setMetaTag("name", "robots", "noindex, follow");
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) robotsMeta.remove();
    }

    // 3. Open Graph Tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:site_name", "Rahul Mahanta Portfolio");
    setMetaTag("property", "og:locale", "en_US");

    // 4. Twitter / X Cards
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    // 5. JSON-LD Structured Data
    const scriptId = "json-ld-route";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = scriptId;
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalUrl, type, image, structuredData]);

  return null;
}
