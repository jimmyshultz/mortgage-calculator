import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Down Payment Assistance Programs in 2025 | TheMortgageEstimator.com',
  description: 'Understand common down payment assistance options in 2025, how eligibility works, and what to ask lenders and local agencies.',
  keywords: 'down payment assistance 2025, DPA programs 2025, first-time buyer assistance 2025',
  alternates: {
    canonical: '/blog/down-payment-assistance-2025',
  },
};

export default function DPA2025Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Down Payment Assistance Programs in 2025: What to Know',
    datePublished: '2025-07-10',
    dateModified: '2025-07-10',
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
      '@id': 'https://themortgageestimator.com/blog/down-payment-assistance-2025',
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
            <span className="text-gray-600">Down Payment Assistance 2025</span>
          </div>

          {/* Article Header */}
          <div className="mb-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Down Payment Assistance Programs in 2025: What to Know
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span>Published: July 10, 2025</span>
              <span className="mx-2">•</span>
              <span>11 min read</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Programs</span>
            </div>
            <div className="relative w-full h-96">
              <Image 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop" 
                alt="Coins in a jar labeled down payment" 
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
              <li><a href="#types" className="text-blue-600 hover:text-blue-800">Common Assistance Types</a></li>
              <li><a href="#eligibility" className="text-blue-600 hover:text-blue-800">Typical Eligibility Factors</a></li>
              <li><a href="#process" className="text-blue-600 hover:text-blue-800">How to Apply</a></li>
              <li><a href="#tips" className="text-blue-600 hover:text-blue-800">Tips to Succeed</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <article className="bg-white p-8 rounded-lg shadow-md prose prose-lg max-w-none">
            <section id="types" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Common Assistance Types</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Grants that do not need to be repaid (often limited funds, first-come-first-served)</li>
                <li>Forgivable loans that phase out over a set occupancy period</li>
                <li>Deferred payment loans due upon sale or refinance</li>
                <li>Matched savings programs through community partners</li>
              </ul>
            </section>

            <section id="eligibility" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Typical Eligibility Factors</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Income limits relative to area median income (AMI)</li>
                <li>First-time buyer status or no ownership in the past 3 years</li>
                <li>Primary residence and occupancy requirements</li>
                <li>Completion of a homebuyer education course</li>
              </ul>
            </section>

            <section id="process" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Ask your lender which local, state, or national programs they work with.</li>
                <li>Confirm timelines and funding cycles; some programs run out mid-year.</li>
                <li>Gather documents early (income, assets, IDs, rental history).</li>
                <li>Complete required education prior to signing a purchase contract when possible.</li>
              </ol>
            </section>

            <section id="tips" className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Tips to Succeed</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Have a backup plan for funds in case a program is waitlisted.</li>
                <li>Consider total monthly payment impact if assistance adds a second lien.</li>
                <li>Work with an agent and lender familiar with DPA timelines and requirements.</li>
              </ul>
              <div className="border-l-4 border-yellow-500 pl-4 py-2 mt-4">
                <p className="italic text-gray-700">Programs vary by location and may change. Verify details with your lender and the administering agency.</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}