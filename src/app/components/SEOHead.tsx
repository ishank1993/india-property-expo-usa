import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export function SEOHead({
  title = "India Property Expo 2026 Singapore | Meet 35+ Developers | 500+ Premium Projects | Free Entry",
  description = "Join Singapore's Largest India Property Exhibition 2026. Meet 35+ trusted developers face-to-face. Explore 500+ verified projects across Mumbai, Bangalore, Delhi NCR & 15+ cities. Get FREE NRI tax advisory, legal guidance & home loan assistance. Register free for exclusive pre-launch information.",
  keywords = "India property expo Singapore 2026, NRI property exhibition Singapore, property India from Singapore, India real estate exhibition Singapore, NRI property developers Singapore, property information India for NRI, Indian real estate expo Singapore, NRI home loan assistance, residential apartments India, luxury villas India NRI, commercial property India, GIFT City NRI information, NRI tax planning India, NRI estate planning, Mumbai property for NRI, Bangalore property for NRI, Delhi NCR property, Pune Goa Hyderabad property NRI, property exhibition Singapore 2026, NRI wealth management Singapore, India information NRI",
  canonical = "https://nrinivesh.in/singapore-property-expo-2026",
  ogImage = "https://nrinivesh.in/og-image.jpg"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Set or update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: 'NRI Nivesh' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#FF6B35' },
      
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:locale', content: 'en_SG' },
      { property: 'og:site_name', content: 'NRI Nivesh - India Property Expo' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: canonical },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      
      // Additional SEO
      { name: 'geo.region', content: 'SG' },
      { name: 'geo.placename', content: 'Singapore' },
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
      "name": "India Property Expo 2026 - Singapore Edition",
      "description": description,
      "image": ogImage,
      "startDate": "2026-08-01T10:00:00+08:00",
      "endDate": "2026-08-02T19:00:00+08:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Sheraton Towers Singapore",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "39 Scotts Road",
          "addressLocality": "Singapore",
          "postalCode": "228230",
          "addressCountry": "SG"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "NRI Nivesh",
        "url": "https://nrinivesh.com"
      },
      "offers": {
        "@type": "Offer",
        "url": canonical,
        "price": "0",
        "priceCurrency": "SGD",
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
      "url": "https://nrinivesh.in",
      "logo": "https://nrinivesh.in/logo.png",
      "description": "Leading NRI property investment platform connecting global Indians with premium real estate opportunities in India",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "areaServed": ["SG", "IN", "AE", "GB", "US", "CA"],
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
          "item": "https://nrinivesh.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Property Expo Singapore 2026",
          "item": canonical
        }
      ]
    };
    
    // Add FAQ schema for rich snippets
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When is the India Property Expo 2026 in Singapore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The India Property Expo 2026 will be held on August 1st and August 2nd, 2026, from 10:00 AM to 7:00 PM at Sheraton Towers Singapore."
          }
        },
        {
          "@type": "Question",
          "name": "Is registration free for the property expo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, registration is completely free. Attendees get complimentary high tea and free consultations with property developers."
          }
        },
        {
          "@type": "Question",
          "name": "How many developers will be present at the expo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Over 35 trusted real estate developers from India will be present, showcasing 500+ verified projects across 15+ cities."
          }
        }
      ]
    };
    
    // Add WebSite schema for search box
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "NRI Nivesh",
      "url": "https://nrinivesh.in",
      "description": "Leading NRI property investment platform for global Indians",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://nrinivesh.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
    
    // Combine all schemas
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [eventSchema, organizationSchema, breadcrumbSchema, faqSchema, websiteSchema]
    };
    
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
    
  }, [title, description, keywords, canonical, ogImage]);
  
  return null;
}