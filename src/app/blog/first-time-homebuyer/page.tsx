import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'First-Time Homebuyer Guide | MortgageCalc.io',
  description: 'Everything you need to know as a first-time homebuyer, from pre-approval to closing. Tips, advice, and step-by-step guidance.',
  keywords: 'first-time homebuyer, home buying guide, mortgage pre-approval, home buying process, first home',
};

export default function FirstTimeHomebuyerPage() {
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
            <span className="text-gray-600">First-Time Homebuyer Guide</span>
          </div>
          
          {/* Article Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              First-Time Homebuyer Guide: Everything You Need to Know
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span>Published: March 15, 2025</span>
              <span className="mx-2">•</span>
              <span>16 min read</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Guides</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
              alt="First-Time Homebuyer" 
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          
          {/* Table of Contents */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li>
                <a href="#introduction" className="text-blue-600 hover:text-blue-800">Introduction to Home Buying</a>
              </li>
              <li>
                <a href="#preparation" className="text-blue-600 hover:text-blue-800">Preparing Your Finances</a>
              </li>
              <li>
                <a href="#pre-approval" className="text-blue-600 hover:text-blue-800">Getting Pre-Approved for a Mortgage</a>
              </li>
              <li>
                <a href="#house-hunting" className="text-blue-600 hover:text-blue-800">House Hunting Tips</a>
              </li>
              <li>
                <a href="#making-offer" className="text-blue-600 hover:text-blue-800">Making an Offer</a>
              </li>
              <li>
                <a href="#closing" className="text-blue-600 hover:text-blue-800">The Closing Process</a>
              </li>
              <li>
                <a href="#after-purchase" className="text-blue-600 hover:text-blue-800">After the Purchase</a>
              </li>
            </ul>
          </div>
          
          {/* Article Content */}
          <div className="bg-white p-8 rounded-lg shadow-md prose prose-lg max-w-none">
            <section id="introduction" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Introduction to Home Buying</h2>
              <p className="mb-4">
                Buying your first home is an exciting milestone, but it can also be overwhelming. This comprehensive guide will walk you through each step of the home buying process, from initial preparation to closing and beyond.
              </p>
              <p className="mb-4">
                Understanding what to expect can make the journey less stressful and more enjoyable. As a first-time homebuyer, you may also qualify for special programs and incentives designed to help you enter the housing market.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">First-Time Homebuyer Definition</h3>
                <p className="text-gray-700">
                  For most assistance programs, a first-time homebuyer is someone who has not owned a principal residence in the past three years. This means you might qualify even if you owned a home previously, but not recently.
                </p>
              </div>
            </section>
            
            <section id="preparation" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Preparing Your Finances</h2>
              <p className="mb-4">
                Before you start looking at homes, it's crucial to get your finances in order. This preparation will help you understand how much house you can afford and improve your chances of mortgage approval.
              </p>
              <h3 className="text-xl font-semibold mb-3">Key financial steps to take:</h3>
              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>Check and improve your credit score (aim for 620+ at minimum, 740+ for best rates)</li>
                <li>Calculate your debt-to-income ratio (aim to keep it below 43%)</li>
                <li>Save for a down payment (typically 3-20% of home price)</li>
                <li>Budget for closing costs (2-5% of loan amount)</li>
                <li>Create an emergency fund for unexpected expenses</li>
                <li>Gather financial documents (tax returns, pay stubs, bank statements)</li>
              </ul>
              <div className="border-l-4 border-yellow-500 pl-4 py-2 mb-6">
                <p className="italic text-gray-700">
                  "The better prepared you are financially, the smoother your home buying journey will be. Take time to strengthen your financial position before house hunting."
                </p>
              </div>
            </section>
            
            <section id="pre-approval" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Getting Pre-Approved for a Mortgage</h2>
              <p className="mb-4">
                Mortgage pre-approval is an essential early step in the home buying process. It gives you a clear idea of what you can afford and shows sellers you're a serious buyer.
              </p>
              <p className="mb-4">
                During pre-approval, lenders will review your financial information and provide a letter stating how much they're willing to lend you. This amount is based on factors like your income, debts, assets, and credit score.
              </p>
              <h3 className="text-xl font-semibold mb-3">Types of mortgages to consider:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800">Conventional Loans</h4>
                  <p className="text-sm text-gray-600">Not backed by government, typically require higher credit scores and down payments of 3-20%.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800">FHA Loans</h4>
                  <p className="text-sm text-gray-600">Government-backed with down payments as low as 3.5% and more flexible credit requirements.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800">VA Loans</h4>
                  <p className="text-sm text-gray-600">For veterans and service members, often with no down payment required.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800">USDA Loans</h4>
                  <p className="text-sm text-gray-600">For rural properties, can offer no down payment options for eligible buyers.</p>
                </div>
              </div>
            </section>
            
            {/* Additional sections would continue here */}
            <div className="text-center text-gray-600 my-8">
              <p>-- This article continues with more detailed sections on house hunting, making offers, closing, and post-purchase tips --</p>
            </div>
            
            {/* Related Articles */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-xl font-bold mb-4">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  href="/blog/mortgage-types" 
                  className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
                >
                  <h4 className="font-semibold text-blue-700">Understanding Different Types of Mortgages</h4>
                  <p className="text-sm text-gray-600 mt-1">Compare mortgage options to find the best fit for your situation.</p>
                </Link>
                <Link 
                  href="/blog/down-payment-options" 
                  className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
                >
                  <h4 className="font-semibold text-blue-700">Down Payment Options: How Much Should You Put Down?</h4>
                  <p className="text-sm text-gray-600 mt-1">Explore the pros and cons of different down payment amounts.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 