import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How AI Is Changing Mortgage Underwriting in 2025 | TheMortgageEstimator.com',
  description: 'A plain-English look at how lenders are using AI in underwriting and what it means for approvals, timelines, and fairness in 2025.',
  keywords: 'AI mortgage underwriting 2025, automated underwriting, mortgage technology 2025',
  alternates: {
    canonical: '/blog/ai-in-mortgage-underwriting-2025',
  },
};

export default function AIMortgageUnderwriting2025Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How AI Is Changing Mortgage Underwriting in 2025',
    datePublished: '2025-08-05',
    dateModified: '2025-08-05',
    author: {
      '@type': 'Organization',
      name: 'TheMortgageEstimator.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TheMortgageEstimator.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://themortgageestimator.com/apple-touch-icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://themortgageestimator.com/blog/ai-in-mortgage-underwriting-2025',
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm mb-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-600">AI in Mortgage Underwriting</span>
          </div>

          {/* Article Header */}
          <div className="mb-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              How AI Is Changing Mortgage Underwriting in 2025
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span>Published: August 5, 2025</span>
              <span className="mx-2">•</span>
              <span>9 min read</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Trends</span>
            </div>
            <div className="relative w-full h-96">
              <Image 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop" 
                alt="Abstract AI circuitry" 
                fill
                className="object-cover rounded-lg shadow-md"
                priority
              />
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-blue-600 hover:text-blue-800">Overview</a></li>
              <li><a href="#benefits" className="text-blue-600 hover:text-blue-800">Potential Benefits</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:text-blue-800">Important Considerations</a></li>
              <li><a href="#what-to-do" className="text-blue-600 hover:text-blue-800">What Homebuyers Can Do</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <article className="bg-white p-8 rounded-lg shadow-md prose prose-lg max-w-none">
            <section id="overview" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="mb-4">
                Many lenders continue to adopt AI-enabled tools to streamline parts of underwriting, such as document collection,
                income and asset verification, and fraud detection. These tools don&apos;t replace human oversight but can speed up
                routine checks and surface issues earlier in the process.
              </p>
            </section>

            <section id="benefits" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Potential Benefits</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Faster turn times from application to clear-to-close</li>
                <li>More consistent application of underwriting guidelines</li>
                <li>Reduced manual errors in data entry and calculations</li>
              </ul>
            </section>

            <section id="considerations" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Important Considerations</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Transparency around decisions and data sources is still essential.</li>
                <li>Fair lending and bias testing must remain a core requirement.</li>
                <li>Borrowers should understand what they&apos;re consenting to when connecting accounts or sharing data.</li>
              </ul>
              <div className="border-l-4 border-yellow-500 pl-4 py-2 mt-4">
                <p className="italic text-gray-700">
                  Technology should augment, not replace, sound underwriting judgment. Always confirm how your data is used and stored.
                </p>
              </div>
            </section>

            <section id="what-to-do" className="mb-6">
              <h2 className="text-2xl font-bold mb-4">What Homebuyers Can Do</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Ask lenders what parts of the process are automated and how exceptions are handled.</li>
                <li>Provide complete, legible documents early to minimize back-and-forth.</li>
                <li>Monitor your credit and avoid opening new accounts mid-process.</li>
              </ul>
            </section>
          </article>

          {/* Related */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/blog/mortgage-types" className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50">
                <h4 className="font-bold mb-2">Mortgage Types</h4>
                <p className="text-sm text-gray-600">Find the right fit for you</p>
              </Link>
              <Link href="/blog/homebuying-checklist-2025" className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50">
                <h4 className="font-bold mb-2">Homebuyer Checklist</h4>
                <p className="text-sm text-gray-600">Step-by-step for 2025</p>
              </Link>
              <Link href="/blog/credit-score-improvement" className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50">
                <h4 className="font-bold mb-2">Improve Your Credit</h4>
                <p className="text-sm text-gray-600">Boost approval odds</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}