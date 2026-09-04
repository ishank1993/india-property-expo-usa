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
  title = "India Property Expo America 2026 | Multi-City US Tour | RSVP Free",
  description = "RSVP free for America's premier India Property Expo tour across major US metropolitan hubs (SF Bay Area, New York/NJ, Dallas, Houston, Chicago, Seattle, Atlanta). Meet 35+ trusted developers, explore 500+ verified projects across Mumbai, Bangalore, Delhi NCR and 35+ cities, with 1-on-1 US-India NRI tax, legal and home-loan consultations booked in advance.",
  keywords = "India property expo America 2026, NRI property exhibition USA, property India from USA, India real estate exhibition America, NRI property developers US, Indian real estate expo Bay Area New York Dallas Chicago Seattle, NRI home loan assistance, residential apartments India, luxury villas India NRI, commercial property India, GIFT City NRI information, NRI tax planning India US, NRI estate planning, Mumbai property for NRI, Bangalore property for NRI, Delhi NCR property",
  canonical = "https://www.indiapropertyexpousa.com/",
  ogImage = "https://www.indiapropertyexpousa.com/og-image.jpg",
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
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:site_name', content: 'NRI Nivesh - India Property Expo America' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: canonical },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      
      // Additional SEO
      { name: 'geo.region', content: 'US' },
      { name: 'geo.placename', content: 'United States' },
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
      "name": "India Property Expo 2026 - America Multi-City Tour",
      "description": description,
      "image": ogImage,
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Major US Metropolitan Hubs (Venue addresses released to registered guests)",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "United States",
          "addressCountry": "US"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "NRI Nivesh",
        "url": "https://www.indiapropertyexpousa.com"
      },
      "offers": {
        "@type": "Offer",
        "url": canonical,
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-01-01"
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
      "url": "https://www.indiapropertyexpousa.com",
      "logo": "https://www.indiapropertyexpousa.com/logo.png",
      "description": "Leading NRI property investment platform connecting global Indians in the US with premium real estate opportunities in India",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "areaServed": ["US", "IN", "CA", "GB", "AE", "SG"],
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
          "item": "https://www.indiapropertyexpousa.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Property Expo America 2026",
          "item": canonical
        }
      ]
    };

    // Add WebSite schema for search box
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "NRI Nivesh",
      "url": "https://www.indiapropertyexpousa.com",
      "description": "Leading NRI property investment platform for global Indians in America",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.indiapropertyexpousa.com/search?q={search_term_string}",
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