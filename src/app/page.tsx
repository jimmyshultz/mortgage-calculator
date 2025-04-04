import React from 'react';
import Calculator from '../components/Calculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Calculator - Plan Your Home Loan',
  description: 'Free mortgage calculator to help you plan your home loan. Calculate monthly payments, interest rates, and see exactly what your mortgage will cost you.',
  keywords: 'mortgage calculator, home loan calculator, mortgage payment calculator, house payment calculator',
};

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
          Mortgage Calculator
        </h1>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          Plan your home loan with our free calculator. See monthly payments, total costs, and make informed decisions about your mortgage.
        </p>
        
        {/* Calculator component */}
        <Calculator />
        
        {/* Educational Content */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">How to Use This Mortgage Calculator</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mortgage calculator helps you estimate your monthly mortgage payments. Adjust the home price, down payment, interest rate, and loan term to see how each affects your monthly payment.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding Mortgage Payments</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A typical mortgage payment consists of four components, often referred to as PITI:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 font-semibold p-1 rounded mr-2">P</span>
                  <div>
                    <strong className="font-medium">Principal:</strong> 
                    <span className="text-gray-600"> The amount you borrowed from the lender</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 font-semibold p-1 rounded mr-2">I</span>
                  <div>
                    <strong className="font-medium">Interest:</strong> 
                    <span className="text-gray-600"> The cost of borrowing the money</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 font-semibold p-1 rounded mr-2">T</span>
                  <div>
                    <strong className="font-medium">Taxes:</strong> 
                    <span className="text-gray-600"> Property taxes assessed by your local government</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 font-semibold p-1 rounded mr-2">I</span>
                  <div>
                    <strong className="font-medium">Insurance:</strong> 
                    <span className="text-gray-600"> Homeowners insurance and possibly mortgage insurance</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Factors Affecting Your Mortgage</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Several factors can affect your mortgage payment and the total amount you'll pay over the life of the loan:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-700">Loan Amount</div>
                <p className="text-sm text-gray-600">The total amount you're borrowing</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-700">Down Payment</div>
                <p className="text-sm text-gray-600">The initial payment you make upfront</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-700">Interest Rate</div>
                <p className="text-sm text-gray-600">The percentage charged for borrowing</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-700">Loan Term</div>
                <p className="text-sm text-gray-600">The time period to repay the loan</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-700">Property Taxes</div>
                <p className="text-sm text-gray-600">Annual taxes based on property value</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-700">Homeowners Insurance</div>
                <p className="text-sm text-gray-600">Insurance that protects your property</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                <div className="font-medium text-gray-700">Private Mortgage Insurance (PMI)</div>
                <p className="text-sm text-gray-600">Required if your down payment is less than 20% of the home's value</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Types of Mortgages</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              There are several types of mortgages available:
            </p>
            <div className="space-y-4 mb-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800">Fixed-rate mortgages</h3>
                <p className="text-gray-600">The interest rate remains the same for the entire term</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800">Adjustable-rate mortgages (ARMs)</h3>
                <p className="text-gray-600">The interest rate may change after an initial fixed period</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800">FHA loans</h3>
                <p className="text-gray-600">Insured by the Federal Housing Administration</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800">VA loans</h3>
                <p className="text-gray-600">Guaranteed by the Department of Veterans Affairs</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-bold text-gray-800">USDA loans</h3>
                <p className="text-gray-600">Offered by the U.S. Department of Agriculture for rural homebuyers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
