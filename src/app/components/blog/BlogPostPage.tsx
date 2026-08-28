import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { ComplianceFooter } from "../ComplianceFooter";
import { WhatsAppButton } from "../WhatsAppButton";
import { SEOHead } from "../SEOHead";
import { RegistrationModal } from "../RegistrationModal";
import { Toaster } from "../ui/sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { getBlogPost, blogPosts } from "../../content/blogPosts";
import { BlogContent } from "./BlogContent";

const SITE_URL = "https://indiapropertyexpobahrain.com";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const post = slug ? getBlogPost(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!post) return;

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.publishDate,
      dateModified: post.publishDate,
      author: {
        "@type": "Organization",
        name: "NRI Nivesh",
      },
      publisher: {
        "@type": "Organization",
        name: "NRI Nivesh",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blog/${post.slug}`,
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
      ],
    };

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [articleSchema, faqSchema, breadcrumbSchema],
    };

    let scriptTag = document.getElementById("blog-post-schema");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.setAttribute("id", "blog-post-schema");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

    return () => {
      const existing = document.getElementById("blog-post-schema");
      if (existing) existing.remove();
    };
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <SEOHead
        title={`${post.metaTitle} | NRI Nivesh`}
        description={post.metaDescription}
        canonical={`${SITE_URL}/blog/${post.slug}`}
        ogImage={`${SITE_URL}/og-image.jpg`}
      />
      <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
        <Navbar
          onRegisterClick={() => setIsRegisterOpen(true)}
          onNavigateHome={() => navigate("/")}
          onNavigateWealth={() => navigate("/#wealth")}
        />

        <article className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
                <Link to="/blog" className="inline-flex items-center hover:text-red-600 font-medium">
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
                </Link>
              </nav>

              {/* Header */}
              <header className="mb-10">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  {post.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">{post.dek}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishDate).toLocaleDateString("en-SG", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readingTime}
                  </span>
                </div>
              </header>

              {/* Body */}
              <BlogContent blocks={post.content} onRegisterClick={() => setIsRegisterOpen(true)} />

              {/* FAQ */}
              <section className="mt-16" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {post.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* More reading */}
              {otherPosts.length > 0 && (
                <section className="mt-16 border-t border-gray-200 pt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Keep Reading</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {otherPosts.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/blog/${p.slug}`}
                        className="block bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-2xl p-6 transition-all"
                      >
                        <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-3">{p.dek}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </article>

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
