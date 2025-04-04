import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Complete Guide to Refinancing Your Home | MortgageCalc.io',
  description: 'Learn when and how to refinance your mortgage to save money or access home equity. Understand the process, costs, and benefits of refinancing.',
  keywords: 'mortgage refinancing, home refinance, refinance guide, cash-out refinance, refinance process, refinance costs',
};

export default function RefinancingGuidePage() {
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
            <span className="text-gray-600">Refinancing Guide</span>
          </div>
          
          {/* Article Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              The Complete Guide to Refinancing Your Home
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span>Published: November 10, 2024</span>
              <span className="mx-2">•</span>
              <span>14 min read</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Guides</span>
            </div>
            <img 
              src="https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Refinancing Mortgage Documents and Calculator" 
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          
          {/* Table of Contents */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li>
                <a href="#what-is-refinancing" className="text-blue-600 hover:text-blue-800">What is Mortgage Refinancing?</a>
              </li>
              <li>
                <a href="#reasons" className="text-blue-600 hover:text-blue-800">Reasons to Refinance</a>
              </li>
              <li>
                <a href="#types" className="text-blue-600 hover:text-blue-800">Types of Refinancing</a>
              </li>
              <li>
                <a href="#process" className="text-blue-600 hover:text-blue-800">The Refinancing Process</a>
              </li>
              <li>
                <a href="#costs" className="text-blue-600 hover:text-blue-800">Costs of Refinancing</a>
              </li>
              <li>
                <a href="#when-right" className="text-blue-600 hover:text-blue-800">Is Refinancing Right for You?</a>
              </li>
              <li>
                <a href="#alternatives" className="text-blue-600 hover:text-blue-800">Alternatives to Refinancing</a>
              </li>
            </ul>
          </div>
          
          {/* Article Content */}
          <div className="bg-white p-8 rounded-lg shadow-md prose prose-lg max-w-none">
            <section id="what-is-refinancing" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">What is Mortgage Refinancing?</h2>
              <p className="mb-4">
                Mortgage refinancing is the process of replacing your existing mortgage with a new one, typically with different terms. When you refinance, you're essentially taking out a new loan to pay off your current mortgage. The new loan may have a different interest rate, term length, or other features that differ from your original mortgage.
              </p>
              <p className="mb-4">
                Refinancing can be a strategic financial move if market conditions or your personal circumstances have changed since you took out your original mortgage. However, it's not always the right choice for everyone, and it comes with costs and considerations that should be carefully evaluated.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Key Refinancing Statistics</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Homeowners who refinanced in 2020 saved an average of $2,800 annually</li>
                  <li>The average cost to refinance is 2-5% of the loan amount</li>
                  <li>Most experts suggest you should be able to recoup refinancing costs within 24-36 months</li>
                  <li>Nearly 20 million homeowners could benefit from refinancing in a low-rate environment</li>
                </ul>
              </div>
            </section>
            
            <section id="reasons" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Reasons to Refinance</h2>
              <p className="mb-4">
                There are several motivations for refinancing your mortgage, each with potential benefits depending on your financial goals and circumstances:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Lower Interest Rate</h3>
                  </div>
                  <p className="text-gray-600">
                    Securing a lower interest rate can reduce your monthly payments and the total amount of interest paid over the life of the loan.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Change Loan Term</h3>
                  </div>
                  <p className="text-gray-600">
                    Shortening your loan term can help you pay off your mortgage faster, while extending it can lower monthly payments.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Cash-Out Equity</h3>
                  </div>
                  <p className="text-gray-600">
                    Access the equity in your home to fund major expenses like home improvements, education, or debt consolidation.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <div className="bg-yellow-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Switch Loan Type</h3>
                  </div>
                  <p className="text-gray-600">
                    Convert from an adjustable-rate mortgage (ARM) to a fixed-rate mortgage or vice versa based on your financial needs.
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2 mb-6">
                <p className="italic text-gray-700">
                  "Refinancing is not a one-size-fits-all solution. The best refinancing strategy depends on your specific financial goals, how long you plan to stay in your home, and the current economic environment."
                </p>
              </div>
            </section>
            
            <section id="types" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Types of Refinancing</h2>
              <p className="mb-4">
                There are several types of mortgage refinancing options, each designed to meet different financial needs:
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Rate-and-Term Refinance</h3>
                <p className="mb-2">
                  The most common type of refinance, where you change your interest rate, loan term, or both, without changing the amount of the loan. The primary goal is typically to save money through a lower interest rate or by changing the loan duration.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Example:</strong> Refinancing from a 30-year fixed-rate mortgage at 5% to a 15-year fixed-rate mortgage at 3.5% to save on interest and pay off the loan faster.
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Cash-Out Refinance</h3>
                <p className="mb-2">
                  This option allows you to borrow more than you currently owe on your mortgage and receive the difference in cash. It's a way to tap into your home's equity while potentially adjusting your loan's terms.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Example:</strong> If your home is worth $400,000 and you owe $200,000 on your mortgage, you might get a new loan for $250,000 and receive $50,000 in cash (minus closing costs).
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Cash-In Refinance</h3>
                <p className="mb-2">
                  The opposite of a cash-out refinance, where you bring cash to closing to pay down your loan balance. This can help you qualify for better rates, eliminate private mortgage insurance (PMI), or improve your loan-to-value ratio.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Example:</strong> Paying $20,000 at closing to reduce your loan balance and achieve 20% equity, thereby eliminating PMI requirements.
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Streamline Refinance</h3>
                <p className="mb-2">
                  Available for FHA, VA, and USDA loans, these programs offer simplified application processes with reduced documentation, costs, and potentially no appraisal requirement.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Example:</strong> Using an FHA Streamline Refinance to lower your interest rate with minimal paperwork and potentially no new home appraisal.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Additional sections would continue here */}
            <div className="text-center text-gray-600 my-8">
              <p>-- This article continues with detailed sections on the refinancing process, costs involved, determining if refinancing is right for you, and alternatives to refinancing --</p>
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
                  href="/blog/credit-score-improvement" 
                  className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
                >
                  <h4 className="font-semibold text-blue-700">5 Strategies to Improve Your Credit Score</h4>
                  <p className="text-sm text-gray-600 mt-1">Better credit scores can help you qualify for lower refinance rates.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 