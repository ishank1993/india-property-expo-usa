import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { ComplianceFooter } from "../ComplianceFooter";
import { WhatsAppButton } from "../WhatsAppButton";
import { SEOHead } from "../SEOHead";
import { RegistrationModal } from "../RegistrationModal";
import { Toaster } from "../ui/sonner";
import { blogPosts } from "../../content/blogPosts";

const SITE_URL = "https://nrinivesh.in";

export function BlogIndexPage() {
  const navigate = useNavigate();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="NRI Property & Investment Guides for Singapore | NRI Nivesh Blog"
        description="In-depth guides for Singapore NRIs on buying Indian property, GIFT City investing, and NRI tax filing — FEMA rules, TDS, DTAA, and Power of Attorney explained clearly."
        canonical={`${SITE_URL}/blog`}
        ogImage={`${SITE_URL}/og-image.jpg`}
      />
      <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
        <Navbar
          onRegisterClick={() => setIsRegisterOpen(true)}
          onNavigateHome={() => navigate("/")}
          onNavigateWealth={() => navigate("/#wealth")}
        />

        <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 via-white to-green-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-green-100 px-6 py-2.5 rounded-full border border-orange-200 mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-700 font-semibold tracking-wide text-sm">NRI Nivesh Blog</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Property & Investment Guides for Singapore NRIs
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Clear, practical guidance on buying Indian property, comparing GIFT City to real estate, and filing NRI property tax from Singapore — written for people who've already done the basics.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white border-2 border-gray-100 hover:border-orange-300 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.publishDate).toLocaleDateString("en-SG", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">{post.dek}</p>
                  <span className="inline-flex items-center font-semibold text-orange-600 group-hover:text-orange-700">
                    Read the guide <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <ComplianceFooter />
        <WhatsAppButton />
        <Toaster />
        <RegistrationModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          onSuccess={() => setIsRegisterOpen(false)}
        />
      </div>
    </>
  );
}
