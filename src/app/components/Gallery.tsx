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
    url: "/images/gallery/event-1.jpg",
    title: "Past NRI Property Expo",
    category: "event"
  },
  {
    url: "/images/gallery/event-2.jpg",
    title: "Exhibition Booths",
    category: "event"
  },
  {
    url: "/images/gallery/singapore-1.jpg",
    title: "Singapore Merlion",
    category: "singapore"
  },
  {
    url: "/images/gallery/singapore-2.jpg",
    title: "Marina Bay Singapore",
    category: "singapore"
  },
  {
    url: "/images/gallery/singapore-3.jpg",
    title: "Gardens by the Bay",
    category: "singapore"
  },
  {
    url: "/images/gallery/singapore-4.jpg",
    title: "Singapore Chinatown",
    category: "singapore"
  },
  {
    url: "/images/gallery/singapore-5.jpg",
    title: "Singapore at Night",
    category: "singapore"
  },
  {
    url: "/images/gallery/singapore-6.jpg",
    title: "Little India Singapore",
    category: "singapore"
  },
  {
    url: "/images/gallery/singapore-7.jpg",
    title: "Sentosa Island",
    category: "singapore"
  },
  {
    url: "/images/gallery/networking-1.jpg",
    title: "Networking Sessions",
    category: "networking"
  },
  {
    url: "/images/gallery/networking-2.jpg",
    title: "Developer Meetings",
    category: "networking"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "event" | "singapore" | "networking">("all");

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

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
              onClick={() => setActiveFilter(filter.key as any)}
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
          {filteredImages.map((image, index) => (
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
                alt={image.title}
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
                alt={filteredImages[selectedImage].title}
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