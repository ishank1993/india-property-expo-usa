import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function SEOHead({
  title = "India Property Expo 2026 Bahrain | 23\u201324 Oct, Manama | RSVP Free",
  description = "RSVP free for Bahrain's largest India property exhibition, 23\u201324 October 2026 in Manama. Meet 35+ trusted developers, explore 500+ verified projects across Mumbai, Bangalore, Delhi NCR and 35+ cities, and get a shortlist matched to your city and budget before you arrive \u2014 plus NRI tax, legal and home-loan consultations booked in advance.",
  keywords = "India property expo Bahrain 2026, NRI property exhibition Bahrain, property India from Bahrain, India real estate exhibition Bahrain, NRI property developers Bahrain, property information India for NRI, Indian real estate expo Bahrain, NRI home loan assistance, residential apartments India, luxury villas India NRI, commercial property India, GIFT City NRI information, NRI tax planning India, NRI estate planning, Mumbai property for NRI, Bangalore property for NRI, Delhi NCR property, Pune Goa Hyderabad property NRI, property exhibition Bahrain 2026, NRI wealth management Bahrain, India information NRI",
  canonical = "https://www.indiapropertyexpobahrain.com/",
  ogImage = "https://www.indiapropertyexpobahrain.com/og-image.jpg",
  noindex = false
}: SEOHeadProps) {

  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: 'NRI Nivesh' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#CE1126' },
      
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:locale', content: 'en_BH' },
      { property: 'og:site_name', content: 'NRI Nivesh - India Property Expo' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: canonical },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      
      // Additional SEO
      { name: 'geo.region', content: 'SG' },
      { name: 'geo.placename', content: 'Bahrain' },
      { name: 'language', content: 'English' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },
      { name: 'revisit-after', content: '7 days' },
    ];
    
    metaTags.forEach(({ name, property, content }) => {
      const attribute = property ? 'property' : 'name';
      const value = property || name;
      
      let meta = document.querySelector(`meta[${attribute}="${value}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, value!);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });
    
    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
    
    // Add structured data (JSON-LD) for rich snippets - EVENT SCHEMA
    const eventSchema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "India Property Expo 2026 - Bahrain Edition",
      "description": description,
      "image": ogImage,
      "startDate": "2026-10-23T10:00:00+03:00",
      "endDate": "2026-10-24T19:00:00+03:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Manama, Kingdom of Bahrain (venue announced to registered guests)",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Manama",
          "addressCountry": "BH"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "NRI Nivesh",
        "url": "https://www.indiapropertyexpobahrain.com"
      },
      "offers": {
        "@type": "Offer",
        "url": canonical,
        "price": "0",
        "priceCurrency": "BHD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-03-18"
      },
      "performer": {
        "@type": "Organization",
        "name": "35+ Premium Real Estate Developers from India"
      }
    };
    
    // Add ORGANIZATION schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NRI Nivesh",
      "url": "https://www.indiapropertyexpobahrain.com",
      "logo": "https://www.indiapropertyexpobahrain.com/logo.png",
      "description": "Leading NRI property investment platform connecting global Indians with premium real estate opportunities in India",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "areaServed": ["BH", "IN", "AE", "GB", "US", "CA"],
        "availableLanguage": ["English", "Hindi"]
      }
    };
    
    // Add BREADCRUMB schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.indiapropertyexpobahrain.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Property Expo Bahrain 2026",
          "item": canonical
        }
      ]
    };
    
    // NOTE: no FAQPage schema here on purpose. Google requires FAQ markup to
    // match FAQs visibly present on that page. This component renders on every
    // route, so a generic FAQ block was also being emitted on blog posts and
    // legal pages that don't show those questions — and it duplicated the
    // FAQPage that FAQSection/BlogPostPage already emit. Those own it now.

    // Add WebSite schema for search box
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "NRI Nivesh",
      "url": "https://www.indiapropertyexpobahrain.com",
      "description": "Leading NRI property investment platform for global Indians",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.indiapropertyexpobahrain.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
    
    // Combine all schemas
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [eventSchema, organizationSchema, breadcrumbSchema, websiteSchema]
    };
    
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
    
  }, [title, description, keywords, canonical, ogImage, noindex]);
  
  return null;
}