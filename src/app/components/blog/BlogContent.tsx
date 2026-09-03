import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { blogPosts, type ContentBlock } from "../../content/blogPosts";

// Supports **bold** and [label](href).
// Internal hrefs (starting "/") route through react-router so they stay SPA
// navigations; external ones open in a new tab. Deliberately NOT nofollow —
// these are genuine citations to primary sources (RBI, the Income Tax
// department, RERA), which is what earns topical trust.
function renderInline(text: string, keyPrefix: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-bold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      const className =
        "text-red-700 underline underline-offset-2 hover:text-red-800 font-medium";
      if (href.startsWith("/")) {
        return (
          <Link key={key} to={href} className={className}>
            {label}
          </Link>
        );
      }
      return (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {label}
        </a>
      );
    }

    return <Fragment key={key}>{part}</Fragment>;
  });
}

interface BlogContentProps {
  blocks: ContentBlock[];
  onRegisterClick: () => void;
}

export function BlogContent({ blocks, onRegisterClick }: BlogContentProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        const key = `block-${index}`;

        switch (block.type) {
          case "h2":
            return (
              <h2
                key={key}
                className="text-2xl md:text-3xl font-bold text-gray-900 pt-6 mb-2"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3 key={key} className="text-xl font-bold text-gray-900 pt-2 mb-1">
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p key={key} className="text-lg text-gray-700 leading-relaxed">
                {renderInline(block.text, key)}
              </p>
            );

          case "ul":
            return (
              <ul key={key} className="space-y-3 pl-1">
                {block.items.map((item, i) => (
                  <li key={`${key}-${i}`} className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-br from-red-500 to-amber-500 mt-2.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700 leading-relaxed">
                      {renderInline(item, `${key}-${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "table":
            return (
              <div key={key} className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-50 to-amber-50">
                      {block.headers.map((h, i) => (
                        <th
                          key={`${key}-h-${i}`}
                          className="px-5 py-3 text-sm font-bold text-gray-900 border-b border-gray-200 whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={`${key}-r-${ri}`} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        {row.map((cell, ci) => (
                          <td
                            key={`${key}-r-${ri}-c-${ci}`}
                            className="px-5 py-3 text-sm text-gray-700 border-b border-gray-100 align-top"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "quote":
            return (
              <p
                key={key}
                className="text-sm text-gray-500 italic border-l-4 border-red-300 pl-4 py-1"
              >
                {block.text}
              </p>
            );

          case "cta":
            return (
              <div
                key={key}
                className="my-8 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 p-8 text-center shadow-lg"
              >
                <p className="text-white text-lg font-semibold mb-4">{block.text}</p>
                <Button
                  onClick={onRegisterClick}
                  className="bg-white text-red-700 hover:bg-red-50 font-bold px-8 py-6 rounded-full shadow-md"
                >
                  Register Free for NRI Investment Expo <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            );

          case "crosslink": {
            const target = blogPosts.find((p) => p.slug === block.slug);
            return (
              <div
                key={key}
                className="rounded-2xl bg-red-50 border border-red-200 p-6"
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  {renderInline(block.text, key)}
                </p>
                {target && (
                  <Link
                    to={`/blog/${block.slug}`}
                    className="inline-flex items-center font-semibold text-red-700 hover:text-red-800"
                  >
                    Read: {target.title} <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </div>
            );
          }

          case "internallink":
            return (
              <div key={key} className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  {renderInline(block.text, key)}
                </p>
                <a
                  href={block.href}
                  className="inline-flex items-center font-semibold text-amber-700 hover:text-amber-800"
                >
                  Explore the GIFT City Knowledge Pavilion <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
