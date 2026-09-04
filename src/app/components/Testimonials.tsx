import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    location: "NRI, San Jose, CA",
    text: "The NRI Nivesh Expo was a revelation. I found exactly the sea-facing apartment in Mumbai I was looking for without having to travel from California to India. The due diligence was impressive.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    rating: 5
  },
  {
    name: "Priya Kapoor",
    location: "NRI, New Jersey",
    text: "Very well organized. The team helped me navigate the legalities of buying property in India while sitting here in the US. The direct access to developers made all the difference.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200",
    rating: 5
  },
  {
    name: "Suresh Reddy",
    location: "Business Owner, Dallas, TX",
    text: "I've attended many expos, but the quality of developers at NRI Nivesh is unmatched. I booked a premium villa in Goa with complete confidence.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200",
    rating: 5
  },
  {
    name: "Deepak Chawla",
    location: "Investment Banker, New York",
    text: "A seamless experience. The advisory on US-India taxation for NRIs and the specific information about GIFT City property options was incredibly helpful for understanding available choices.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    rating: 4
  },
  {
    name: "Anjali Nair",
    location: "Architect, Chicago, IL",
    text: "A must-visit for any US-based NRI looking to invest back home. Transparent, professional, and zero-pressure environment. Highly recommended.",
    img: "https://images.unsplash.com/photo-1573496359-136d9220c473?q=80&w=200",
    rating: 5
  },
  {
    name: "Rohan Gupta",
    location: "Tech Lead, Seattle, WA",
    text: "Found a great pre-launch offer in Bengaluru that wasn't available anywhere else online. The exclusive expo-only deals are definitely real.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-red-50/40 to-white relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-600 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase mb-4">
            Client Stories
          </div>
          <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">Global Indians</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto rounded-full" aria-hidden="true" />
        </header>

        <div className="px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="h-full pb-4 px-1">
                    <div className="bg-white p-8 rounded-2xl border-2 border-red-100 h-full flex flex-col relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-red-300">
                      
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                         <Quote className="text-red-600 w-8 h-8 rotate-180" />
                      </div>
                      
                      {/* User Profile */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="relative">
                            <img 
                              src={item.img} 
                              alt={`${item.name} - ${item.location}`} 
                              width="56"
                              height="56"
                              loading="lazy"
                              decoding="async"
                              className="w-14 h-14 rounded-full object-cover border-2 border-red-400 group-hover:border-amber-400 transition-colors" 
                            />
                            <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-red-500 to-amber-500 rounded-full p-1" aria-hidden="true">
                                <Quote className="w-2 h-2 text-white fill-white" />
                            </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">{item.name}</h4>
                          <p className="text-xs text-red-600 font-medium uppercase tracking-wide">{item.location}</p>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex space-x-1 mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-red-500 fill-red-500" />
                        ))}
                      </div>
                      
                      {/* Text */}
                      <p className="text-gray-700 italic leading-relaxed text-sm flex-grow">
                        "{item.text}"
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="bg-white/90 border-red-300 text-red-600 hover:bg-red-600 hover:text-white transition-colors -left-4 lg:-left-8 shadow-lg" 
              aria-label="View previous testimonial" 
            />
            <CarouselNext 
              className="bg-white/90 border-red-300 text-red-600 hover:bg-red-600 hover:text-white transition-colors -right-4 lg:-right-8 shadow-lg" 
              aria-label="View next testimonial" 
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}