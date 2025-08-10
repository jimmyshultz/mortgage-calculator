import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HELOC vs. Home Equity Loan in 2025: Which Is Better? | TheMortgageEstimator.com',
  description: 'Compare HELOCs and home equity loans in 2025, including rate structures, use cases, pros and cons, and decision tips.',
  keywords: 'HELOC 2025, home equity loan 2025, HELOC vs home equity 2025',
};

export default function HelocVsHomeEquity2025Page() {
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
            <span className="text-gray-600">HELOC vs. Home Equity Loan</span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">HELOC vs. Home Equity Loan in 2025: Which Is Better?</h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span>Published: May 5, 2025</span>
              <span className="mx-2">•</span>
              <span>10 min read</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Finance</span>
            </div>
            <div className="relative w-full h-96">
              <Image 
                src="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop" 
                alt="House with equity graph overlay" 
                fill
                className="object-cover rounded-lg shadow-md"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Content */}
          <article className="bg-white p-8 rounded-lg shadow-md prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Key Differences</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 bg-gray-50 text-left">Feature</th>
                    <th className="border border-gray-200 px-4 py-2 bg-gray-50 text-left">HELOC</th>
                    <th className="border border-gray-200 px-4 py-2 bg-gray-50 text-left">Home Equity Loan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Rate Type</td>
                    <td className="border border-gray-200 px-4 py-2">Usually variable</td>
                    <td className="border border-gray-200 px-4 py-2">Usually fixed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">How Funds Work</td>
                    <td className="border border-gray-200 px-4 py-2">Draw as needed up to a limit</td>
                    <td className="border border-gray-200 px-4 py-2">Lump sum at closing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Best For</td>
                    <td className="border border-gray-200 px-4 py-2">Ongoing or uncertain project costs</td>
                    <td className="border border-gray-200 px-4 py-2">One-time, defined expenses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4">Pros and Cons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">HELOC</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Flexible borrowing; interest on what you use</li>
                  <li>Variable rates can increase payments</li>
                  <li>May include annual or draw fees</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Home Equity Loan</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Predictable fixed payment</li>
                  <li>Interest begins immediately on full amount</li>
                  <li>Good for one-time, fixed-cost projects</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">How to Decide</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Match the tool to the expense: flexible vs. fixed.</li>
              <li>Consider your rate risk comfort and budget stability.</li>
              <li>Compare total costs, including fees and potential discounts.</li>
            </ul>

            <div className="border-l-4 border-yellow-500 pl-4 py-2 mt-6">
              <p className="italic text-gray-700">
                Talk to your lender about current rate structures and promotional periods. This article is educational, not advice.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}