import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";

export function Location() {
  return (
    <section id="venues" className="py-20 bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden bg-white shadow-2xl border border-orange-100">
          
          {/* Info Side */}
          <div className="p-10 flex flex-col justify-center space-y-8">
            <div>
              <div className="inline-block bg-gradient-to-r from-orange-600 to-green-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase mb-3">
                Venue Details
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-2">Event Venue</h2>
              <p className="text-gray-600 text-lg">Easily accessible in the heart of Singapore.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">Novotel Kitchener Road</h3>
                  <p className="text-gray-600 mt-1">
                    180 Kitchener Road,<br />
                    Singapore 208539
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Navigation className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">How to Reach</h3>
                  <p className="text-gray-600 mt-1">
                    • Near Lavender MRT Station (5 min walk)<br />
                    • Near Farrer Park MRT Station (7 min walk)<br />
                    • Complimentary parking available
                  </p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => window.open('https://www.google.com/maps/dir//Novotel+Singapore+on+Kitchener,+180+Kitchener+Road,+Singapore+208539', '_blank')}
              className="w-fit bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all"
            >
              📍 Get Directions
            </Button>
          </div>

          {/* Map Side */}
          <div className="h-[400px] lg:h-auto w-full bg-gray-200 relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7620669445367!2d103.84874831475394!3d1.3093419990419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19bfe15bb149%3A0x8b8b8b8b8b8b8b8b!2sNovotel%20Singapore%20on%20Kitchener!5e0!3m2!1sen!2ssg!4v1629876543210!5m2!1sen!2ssg" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Map"
                className="transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}