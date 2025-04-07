import React from 'react';
import PreapprovalCalculator from '../../components/PreapprovalCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Preapproval Calculator - Estimate How Much You Can Borrow',
  description: 'Use our mortgage preapproval calculator to estimate how much house you can afford based on your income, debts, credit score, and down payment.',
  keywords: 'mortgage preapproval calculator, home loan prequalification, how much can I borrow, mortgage affordability, debt-to-income ratio',
};

export default function PreapprovalCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
          Mortgage Preapproval Calculator
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Estimate how much you might be preapproved for based on your income, debts, credit score, and other factors lenders consider.
        </p>
        
        {/* Preapproval Calculator component */}
        <PreapprovalCalculator />
        
        {/* Educational Content */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Understanding Mortgage Preapproval</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Mortgage preapproval is an important first step in the home buying process. It gives you a clear picture of how much home you can afford and shows sellers you&apos;re a serious buyer.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-800">What Lenders Look At</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              When determining how much to preapprove you for, lenders typically evaluate these key factors:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-700">Income</div>
                <p className="text-sm text-gray-600">Your gross monthly income from all sources</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-700">Debt-to-Income Ratio</div>
                <p className="text-sm text-gray-600">Your monthly debt payments relative to your income</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-700">Credit Score</div>
                <p className="text-sm text-gray-600">Your credit history and FICO score</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-700">Down Payment</div>
                <p className="text-sm text-gray-600">How much money you can put down upfront</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-700">Employment History</div>
                <p className="text-sm text-gray-600">Stability of your employment and income</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-700">Assets</div>
                <p className="text-sm text-gray-600">Savings, investments, and other assets you own</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Debt-to-Income Ratios Explained</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Lenders use two types of debt-to-income (DTI) ratios to determine how much mortgage you can afford:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 font-semibold p-1 rounded mr-2">1</span>
                  <div>
                    <strong className="font-medium">Front-End Ratio:</strong> 
                    <span className="text-gray-600"> The percentage of your gross monthly income that goes toward housing costs. Most lenders prefer this to be 28% or less.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 font-semibold p-1 rounded mr-2">2</span>
                  <div>
                    <strong className="font-medium">Back-End Ratio:</strong> 
                    <span className="text-gray-600"> The percentage of your gross monthly income that goes toward all debt payments, including housing. Lenders typically prefer this to be 36-43% or less.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Preapproval vs. Prequalification</h2>
            <div className="border-l-4 border-blue-500 pl-4 py-2 mb-6">
              <p className="text-gray-600">
                <strong>Prequalification</strong> is an informal, preliminary estimate of how much you might be able to borrow based on information you provide.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2 mb-8">
              <p className="text-gray-600">
                <strong>Preapproval</strong> is a more formal process where the lender verifies your financial information and credit, resulting in a conditional commitment to lend a specific amount.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-800">Important Note</h3>
              <p className="text-gray-700 mb-2">
                This calculator provides an estimate based on typical lending criteria. Actual preapproval amounts may vary based on:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>The specific lender you choose</li>
                <li>Current market conditions</li>
                <li>A detailed review of your complete financial picture</li>
                <li>Property-specific considerations</li>
              </ul>
              <p className="mt-4 text-gray-700">
                For an official preapproval, contact a mortgage lender who will perform a detailed analysis of your finances and credit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 