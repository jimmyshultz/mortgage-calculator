import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding Different Types of Mortgages | TheMortgageEstimator.com',
  description: 'Compare fixed-rate, adjustable-rate, FHA, VA, and other mortgage types to find the best option for your home purchase.',
  keywords: 'mortgage types, fixed-rate mortgage, adjustable-rate mortgage, FHA loan, VA loan, USDA loan, conventional loan',
  alternates: {
    canonical: '/blog/mortgage-types',
  },
};

export default function MortgageTypesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Understanding Different Types of Mortgages',
    datePublished: '2025-01-22',
    dateModified: '2025-01-22',
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
      '@id': 'https://themortgageestimator.com/blog/mortgage-types',
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
            <span className="text-gray-600">Types of Mortgages</span>
          </div>
          
          {/* Article Header */}
          <div className="mb-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Understanding Different Types of Mortgages
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span>Published: January 22, 2025</span>
              <span className="mx-2">•</span>
              <span>13 min read</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Education</span>
            </div>
            <div className="relative w-full h-96">
              <Image 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="Types of Mortgages" 
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
              <li>
                <a href="#introduction" className="text-blue-600 hover:text-blue-800">Introduction</a>
              </li>
              <li>
                <a href="#fixed-rate" className="text-blue-600 hover:text-blue-800">Fixed-Rate Mortgages</a>
              </li>
              <li>
                <a href="#adjustable-rate" className="text-blue-600 hover:text-blue-800">Adjustable-Rate Mortgages (ARMs)</a>
              </li>
              <li>
                <a href="#conventional" className="text-blue-600 hover:text-blue-800">Conventional Loans</a>
              </li>
              <li>
                <a href="#government" className="text-blue-600 hover:text-blue-800">Government-Backed Loans</a>
              </li>
              <li>
                <a href="#jumbo" className="text-blue-600 hover:text-blue-800">Jumbo Loans</a>
              </li>
              <li>
                <a href="#choosing" className="text-blue-600 hover:text-blue-800">How to Choose the Right Mortgage</a>
              </li>
            </ul>
          </div>
          
          {/* Article Content */}
          <div className="bg-white p-8 rounded-lg shadow-md prose prose-lg max-w-none">
            <section id="introduction" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="mb-4">
                Choosing the right mortgage is just as important as finding the right home. The type of mortgage you select will impact your monthly payments, the total cost of your loan, and how long you&apos;ll be paying it off. With numerous options available, understanding the differences between mortgage types is essential for making an informed decision.
              </p>
              <p className="mb-4">
                This guide explores the most common types of mortgages, their advantages and disadvantages, and which might be the best fit for different financial situations and homebuying goals.
              </p>
            </section>
            
            <section id="fixed-rate" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Fixed-Rate Mortgages</h2>
              <p className="mb-4">
                A fixed-rate mortgage is the most traditional type of home loan, offering a consistent interest rate and monthly payment for the entire loan term.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Key Features</h3>
                <ul className="list-disc ml-6 mb-4 space-y-1">
                  <li>Interest rate remains the same for the entire loan term</li>
                  <li>Monthly principal and interest payments stay consistent</li>
                  <li>Common terms are 15, 20, and 30 years</li>
                  <li>Typically higher initial interest rates than ARMs</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Advantages</h3>
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>Predictable payments make budgeting easier</li>
                <li>Protection from interest rate increases</li>
                <li>Simple to understand with no surprises</li>
                <li>Good for those planning to stay in their home long-term</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Disadvantages</h3>
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>Initially higher rates compared to adjustable-rate options</li>
                <li>No automatic benefit if interest rates decline</li>
                <li>Usually requires higher credit scores for the best rates</li>
              </ul>
              
              <div className="border-l-4 border-green-500 pl-4 py-2 mb-6">
                <p className="italic text-gray-700">
                  &quot;Fixed-rate mortgages provide stability and predictability, making them the most popular choice for first-time homebuyers and those who value consistent monthly payments.&quot;
                </p>
              </div>
            </section>
            
            <section id="adjustable-rate" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Adjustable-Rate Mortgages (ARMs)</h2>
              <p className="mb-4">
                Adjustable-rate mortgages feature interest rates that change over time based on market conditions, typically starting with a lower fixed rate for an initial period.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Common ARM Structures</h3>
                <p className="mb-3">ARMs are described by how long the initial fixed-rate period lasts, followed by how often the rate adjusts afterward:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>5/1 ARM:</strong> Fixed rate for 5 years, then adjusts annually</li>
                  <li><strong>7/1 ARM:</strong> Fixed rate for 7 years, then adjusts annually</li>
                  <li><strong>10/1 ARM:</strong> Fixed rate for 10 years, then adjusts annually</li>
                  <li><strong>3/6 ARM:</strong> Fixed rate for 3 years, then adjusts every 6 months</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Advantages</h3>
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>Lower initial interest rates and monthly payments</li>
                <li>Potential savings if you plan to move or refinance before the rate adjusts</li>
                <li>Rates might decrease if market rates fall</li>
                <li>Good for those expecting increased income in the future</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Disadvantages</h3>
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>Payments can increase significantly after the fixed period</li>
                <li>Budgeting becomes challenging with variable payments</li>
                <li>Complex terms and structures</li>
                <li>Risk of payment shock if rates rise dramatically</li>
              </ul>
            </section>
            
            {/* Additional sections would continue here */}
            <div className="text-center text-gray-600 my-8">
              <p>-- This article continues with detailed sections on conventional loans, government-backed loans (FHA, VA, USDA), jumbo loans, and how to choose the right mortgage for your situation --</p>
            </div>
            
            {/* Comparison Table */}
            <section id="comparison" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Mortgage Types at a Glance</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 p-3 text-left">Mortgage Type</th>
                      <th className="border border-gray-200 p-3 text-left">Best For</th>
                      <th className="border border-gray-200 p-3 text-left">Down Payment</th>
                      <th className="border border-gray-200 p-3 text-left">Credit Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium">Fixed-Rate</td>
                      <td className="border border-gray-200 p-3">Long-term stability</td>
                      <td className="border border-gray-200 p-3">3-20%</td>
                      <td className="border border-gray-200 p-3">620+</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-medium">ARM</td>
                      <td className="border border-gray-200 p-3">Short-term homeowners</td>
                      <td className="border border-gray-200 p-3">3-20%</td>
                      <td className="border border-gray-200 p-3">620+</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium">FHA</td>
                      <td className="border border-gray-200 p-3">Lower credit scores</td>
                      <td className="border border-gray-200 p-3">3.5-10%</td>
                      <td className="border border-gray-200 p-3">500-580+</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-medium">VA</td>
                      <td className="border border-gray-200 p-3">Veterans/service members</td>
                      <td className="border border-gray-200 p-3">0%</td>
                      <td className="border border-gray-200 p-3">580-620+</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-medium">USDA</td>
                      <td className="border border-gray-200 p-3">Rural homebuyers</td>
                      <td className="border border-gray-200 p-3">0%</td>
                      <td className="border border-gray-200 p-3">640+</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-medium">Jumbo</td>
                      <td className="border border-gray-200 p-3">High-value properties</td>
                      <td className="border border-gray-200 p-3">10-20%</td>
                      <td className="border border-gray-200 p-3">700+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Related Articles */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-xl font-bold mb-4">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  href="/blog/first-time-homebuyer" 
                  className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
                >
                  <h4 className="font-semibold text-blue-700">First-Time Homebuyer Guide</h4>
                  <p className="text-sm text-gray-600 mt-1">Everything you need to know as a first-time homebuyer.</p>
                </Link>
                <Link 
                  href="/blog/refinancing-guide" 
                  className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
                >
                  <h4 className="font-semibold text-blue-700">The Complete Guide to Refinancing Your Home</h4>
                  <p className="text-sm text-gray-600 mt-1">Learn when and how to refinance your mortgage.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 