import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { LazyImage } from "@/components/common/LazyImage";

interface GalleryImage {
  url: string;
  title: string;
  category: "event" | "singapore" | "networking";
}

const galleryImages: GalleryImage[] = [
  {
    url: "/images/gallery/singapore-3.jpg",
    title: "Singapore Landmark",
    category: "singapore"
  },
  {
    url: "/images/gallery/event-1.jpg",
    title: "Property Expo Event",
    category: "event"
  },
  {
    url: "/images/gallery/networking-2.jpg",
    title: "Business Networking",
    category: "networking"
  },
  {
    url: "/images/gallery/singapore-7.jpg",
    title: "Singapore Views",
    category: "singapore"
  },
  {
    url: "/images/gallery/event-5.jpg",
    title: "Exhibition Hall",
    category: "event"
  },
  {
    url: "/images/gallery/singapore-1.jpg",
    title: "Marina Bay",
    category: "singapore"
  },
  {
    url: "/images/gallery/networking-4.jpg",
    title: "Developer Consultation",
    category: "networking"
  },
  {
    url: "/images/gallery/event-8.jpg",
    title: "Expo Venue",
    category: "event"
  },
  {
    url: "/images/gallery/singapore-11.jpg",
    title: "Singapore Cityscape",
    category: "singapore"
  },
  {
    url: "/images/gallery/networking-1.jpg",
    title: "Professional Meeting",
    category: "networking"
  },
  {
    url: "/images/gallery/event-3.jpg",
    title: "Property Showcase",
    category: "event"
  },
  {
    url: "/images/gallery/singapore-5.jpg",
    title: "Gardens by the Bay",
    category: "singapore"
  },
  {
    url: "/images/gallery/event-10.jpg",
    title: "Exhibition Booths",
    category: "event"
  },
  {
    url: "/images/gallery/singapore-9.jpg",
    title: "Sentosa Island",
    category: "singapore"
  },
  {
    url: "/images/gallery/networking-6.jpg",
    title: "Networking Session",
    category: "networking"
  },
  {
    url: "/images/gallery/singapore-2.jpg",
    title: "Singapore Skyline",
    category: "singapore"
  },
  {
    url: "/images/gallery/event-7.jpg",
    title: "Past NRI Expo",
    category: "event"
  },
  {
    url: "/images/gallery/singapore-12.jpg",
    title: "Little India",
    category: "singapore"
  },
  {
    url: "/images/gallery/networking-3.jpg",
    title: "Business Discussion",
    category: "networking"
  },
  {
    url: "/images/gallery/event-2.jpg",
    title: "Property Event",
    category: "event"
  },
  {
    url: "/images/gallery/singapore-4.jpg",
    title: "Chinatown",
    category: "singapore"
  },
  {
    url: "/images/gallery/event-9.jpg",
    title: "Trade Show",
    category: "event"
  },
  {
    url: "/images/gallery/singapore-6.jpg",
    title: "Singapore Architecture",
    category: "singapore"
  },
  {
    url: "/images/gallery/networking-5.jpg",
    title: "Client Meeting",
    category: "networking"
  },
  {
    url: "/images/gallery/event-4.jpg",
    title: "Exhibition Space",
    category: "event"
  },
  {
    url: "/images/gallery/singapore-8.jpg",
    title: "Singapore at Night",
    category: "singapore"
  },
  {
    url: "/images/gallery/event-6.jpg",
    title: "Property Fair",
    category: "event"
  },
  {
    url: "/images/gallery/singapore-10.jpg",
    title: "Merlion Park",
    category: "singapore"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "event" | "singapore" | "networking">("all");
  const [showAll, setShowAll] = useState(false);

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  // Show only 4 images on mobile initially, all on desktop
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 4);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((_, i) => i === selectedImage);
    const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(newIndex);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((_, i) => i === selectedImage);
    const newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(newIndex);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FF6B35_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase mb-4">
            <Camera className="w-4 h-4" />
            Photo Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">India-Singapore Connection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Glimpses from our past expos and the beautiful city of Singapore
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { key: "all", label: "All Photos" },
            { key: "event", label: "Past Events" },
            { key: "singapore", label: "Singapore" },
            { key: "networking", label: "Networking" }
          ].map(filter => (
            <button
              key={filter.key}
              onClick={() => {
                setActiveFilter(filter.key as any);
                setShowAll(false); // Reset to show limited images when filter changes
              }}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-orange-600 to-green-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border-2 border-orange-200 hover:border-orange-400 hover:scale-105"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayedImages.map((image, index) => (
            <motion.div
              key={image.url}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square"
              onClick={() => setSelectedImage(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(index);
                }
              }}
              aria-label={`View ${image.title}`}
            >
              {/* Image */}
              <LazyImage
                src={image.url}
                alt={`${image.title} - India Property Expo Singapore 2026`}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <div className="mt-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      image.category === "event" 
                        ? "bg-orange-500 text-white" 
                        : image.category === "singapore"
                        ? "bg-green-500 text-white"
                        : "bg-gradient-to-r from-orange-500 to-green-500 text-white"
                    }`}>
                      {image.category === "event" ? "Past Event" : image.category === "singapore" ? "Singapore" : "Networking"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Orange-Green Border on Hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-orange-500 transition-all duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button - Only show if there are more images to display */}
        {!showAll && filteredImages.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>View All {filteredImages.length} Photos</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            📸 More photos will be added from the upcoming <span className="font-bold text-orange-600">January 31st & February 1st</span> event!
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].url}
                alt={`${filteredImages[selectedImage].title} - India Property Expo Singapore 2026`}
                width="1200"
                height="800"
                loading="eager"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  filteredImages[selectedImage].category === "event" 
                    ? "bg-orange-500 text-white" 
                    : filteredImages[selectedImage].category === "singapore"
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-orange-500 to-green-500 text-white"
                }`}>
                  {filteredImages[selectedImage].category === "event" ? "Past Event" : filteredImages[selectedImage].category === "singapore" ? "Singapore" : "Networking"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}