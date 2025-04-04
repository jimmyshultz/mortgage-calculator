import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Guide for First-Time Homebuyers | TheMortgageEstimator.com',
  description: 'Everything first-time homebuyers need to know about mortgages, from pre-approval to closing. Learn about financing options, house hunting, and more.',
  keywords: 'first-time homebuyer, mortgage guide, home buying process, mortgage pre-approval, house hunting tips',
};

export default function FirstTimeHomebuyerGuide() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <div className="text-sm mb-6 text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link> &gt; <Link href="/blog" className="hover:text-blue-600">Blog</Link> &gt; <span className="text-gray-700">First-Time Homebuyer Guide</span>
        </div>
        
        <article className="bg-white rounded-lg shadow-md p-4 sm:p-8 max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Complete Guide for First-Time Homebuyers
            </h1>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>Published: June 15, 2023</span>
              <span className="mx-2">•</span>
              <span>15 min read</span>
            </div>
            <div className="w-full h-48 sm:h-64 md:h-80 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-blue-500 text-sm">Featured Image: First-Time Homebuyer Guide</span>
            </div>
          </header>
          
          {/* Table of Contents */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6 sm:mb-8">
            <h2 className="font-semibold text-lg mb-3">Table of Contents</h2>
            <ol className="space-y-1 text-sm sm:text-base">
              <li className="hover:text-blue-600"><a href="#introduction">1. Introduction to Home Buying</a></li>
              <li className="hover:text-blue-600"><a href="#preparing">2. Preparing Your Finances</a></li>
              <li className="hover:text-blue-600"><a href="#preapproval">3. Getting Pre-Approved for a Mortgage</a></li>
              <li className="hover:text-blue-600"><a href="#househunting">4. House Hunting Strategies</a></li>
              <li className="hover:text-blue-600"><a href="#making-offer">5. Making an Offer and Negotiating</a></li>
              <li className="hover:text-blue-600"><a href="#closing">6. The Closing Process</a></li>
              <li className="hover:text-blue-600"><a href="#after-purchase">7. After You Buy: Homeownership Tips</a></li>
            </ol>
          </div>
          
          {/* Article Content */}
          <div className="prose prose-sm sm:prose max-w-none text-gray-700">
            <section id="introduction" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Introduction to Home Buying</h2>
              <p className="mb-4">
                Buying your first home is one of the most exciting and significant financial decisions you'll make. It's a journey 
                that combines emotional aspects of finding a place to call your own with practical considerations about finances, 
                location, and long-term goals.
              </p>
              <p className="mb-4">
                This guide will walk you through every step of the home buying process, from preparing your finances and 
                understanding mortgage options to closing on your new home and settling in as a homeowner.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg my-6">
                <h3 className="font-medium text-blue-800 mb-2">Did You Know?</h3>
                <p className="text-sm">
                  According to the National Association of Realtors, first-time homebuyers made up about 33% of all home 
                  purchasers in recent years. The median age of first-time homebuyers is 33 years old.
                </p>
              </div>
            </section>
            
            <section id="preparing" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Preparing Your Finances</h2>
              <p className="mb-4">
                Before you start house hunting, it's essential to get your finances in order. Here's how to prepare:
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Check Your Credit Score</h3>
              <p className="mb-4">
                Your credit score plays a crucial role in determining your mortgage interest rate. Lenders typically offer the best 
                rates to borrowers with scores above 740, but you can still qualify for a mortgage with a lower score.
              </p>
              <p className="mb-4">
                Request your free credit report from annualcreditreport.com and review it for errors. If your score needs improvement, 
                focus on paying down debt, making on-time payments, and avoiding new credit applications for at least 6 months before 
                applying for a mortgage.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Save for a Down Payment</h3>
              <p className="mb-4">
                While the traditional 20% down payment isn't always required, a larger down payment can help you avoid private mortgage 
                insurance (PMI) and qualify for better loan terms. Here are some common down payment options:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Conventional loans: 3-20% down</li>
                <li>FHA loans: 3.5% down (with credit score of 580+)</li>
                <li>VA loans: 0% down for eligible veterans</li>
                <li>USDA loans: 0% down for eligible rural properties</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Budget for Additional Costs</h3>
              <p className="mb-4">
                Beyond the down payment, be prepared for other expenses including:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Closing costs (typically 2-5% of the loan amount)</li>
                <li>Moving expenses</li>
                <li>Home inspection and appraisal fees</li>
                <li>Home repairs and maintenance</li>
                <li>Furniture and appliances</li>
                <li>Property taxes and homeowners insurance</li>
              </ul>
            </section>
            
            <section id="preapproval" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Getting Pre-Approved for a Mortgage</h2>
              <p className="mb-4">
                Mortgage pre-approval is a crucial step that should come before house hunting. Here's why it matters and how to get pre-approved:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Benefits of Pre-Approval</h3>
                  <ul className="list-disc pl-4 text-sm space-y-1">
                    <li>Understand exactly how much house you can afford</li>
                    <li>Identify potential credit issues early</li>
                    <li>Show sellers you're a serious buyer</li>
                    <li>Speed up the final loan approval process</li>
                    <li>Gain negotiating leverage</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">What You'll Need</h3>
                  <ul className="list-disc pl-4 text-sm space-y-1">
                    <li>Proof of income (pay stubs, W-2s, tax returns)</li>
                    <li>Employment verification</li>
                    <li>Proof of assets (bank statements)</li>
                    <li>Good credit score</li>
                    <li>Personal identification</li>
                    <li>Debt information</li>
                  </ul>
                </div>
              </div>
              <p className="mb-4">
                Shop around and get pre-approved by multiple lenders to compare interest rates and loan terms. Pre-approvals 
                typically last 60-90 days, so time this step accordingly with your house hunting plans.
              </p>
              <p className="mb-4">
                Use our <Link href="/preapproval-calculator" className="text-blue-600 hover:underline">Mortgage Pre-Approval Calculator</Link> to 
                get a general estimate of how much you might qualify for based on your income, debts, and other factors.
              </p>
            </section>
            
            {/* Additional sections would continue here for:
            - House Hunting Strategies
            - Making an Offer and Negotiating
            - The Closing Process 
            - After You Buy: Homeownership Tips */}
            
            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-500 italic">
                This guide is for informational purposes only and should not be construed as financial advice. 
                Always consult with a qualified mortgage professional, financial advisor, or real estate agent 
                before making decisions about home purchases.
              </p>
            </div>
          </div>
        </article>
        
        {/* Related Articles */}
        <div className="max-w-4xl mx-auto mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 hover:text-blue-600">
                <Link href="/blog/mortgage-types">Understanding Different Mortgage Types</Link>
              </h3>
              <p className="text-sm text-gray-600">Compare fixed-rate, adjustable-rate, FHA, VA, and other mortgage options.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 hover:text-blue-600">
                <Link href="/blog/down-payment-options">Down Payment Strategies for First-Time Buyers</Link>
              </h3>
              <p className="text-sm text-gray-600">Explore different ways to save and fund your down payment for a home purchase.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 hover:text-blue-600">
                <Link href="/blog/credit-score-improvement">How to Improve Your Credit Score Before Applying for a Mortgage</Link>
              </h3>
              <p className="text-sm text-gray-600">Tips to boost your credit score and qualify for better mortgage rates.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 