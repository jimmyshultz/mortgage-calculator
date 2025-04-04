import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MortgageCalc.io - Our Mission and Purpose',
  description: 'Learn about MortgageCalc.io, a free mortgage calculator designed to help homebuyers make informed financing decisions.',
  keywords: 'about mortgage calculator, mortgage calc.io, mortgage tools, home loan calculator',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
          About MortgageCalc.io
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Helping homebuyers and homeowners make informed financial decisions.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At MortgageCalc.io, we believe that everyone deserves access to clear, accurate financial information when making one of life's biggest financial decisions: buying a home. Our mission is to provide free, easy-to-use mortgage calculation tools that help you understand the full picture of your home financing options.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We've created this platform to demystify the mortgage process and empower you to make choices that align with your financial goals and circumstances.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800">Accurate Calculations</h3>
                <p className="text-gray-600">Our mortgage calculator uses industry-standard formulas to provide accurate monthly payment estimates.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800">Educational Resources</h3>
                <p className="text-gray-600">We provide comprehensive guides and articles to help you understand all aspects of mortgage financing.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800">User-Friendly Interface</h3>
                <p className="text-gray-600">Our tools are designed to be intuitive and easy to use, regardless of your financial expertise.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800">Unbiased Information</h3>
                <p className="text-gray-600">We provide objective information without steering you toward specific lenders or products.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              MortgageCalc.io was founded in 2023 by a team of financial experts and web developers who recognized the need for better, more accessible mortgage calculation tools. After witnessing friends and family members struggle to understand their mortgage options, we set out to create a platform that would make this information available to everyone, free of charge.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, we're proud to help thousands of users each month better understand their mortgage options and make more informed decisions about their home financing.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Get In Touch</h3>
              <p className="text-gray-700 mb-4">
                We're always looking to improve our calculator and resources. If you have suggestions or feedback, we'd love to hear from you!
              </p>
              <p className="text-gray-700">
                Email us at: <a href="mailto:contact@mortgagecalc.io" className="text-blue-600 hover:underline">contact@mortgagecalc.io</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 