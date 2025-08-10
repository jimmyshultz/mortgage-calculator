import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'First-Time Homebuyer Checklist for 2025 | TheMortgageEstimator.com',
  description: 'A concise, up-to-date checklist to go from browsing to closing in 2025: budgeting, pre-approval, home search, and closing steps.',
  keywords: 'homebuyer checklist 2025, first-time homebuyer 2025, buy a home 2025',
};

export default function HomebuyerChecklist2025Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm mb-6 text-gray-500">
            <ol className="flex">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><span className="mx-2" aria-hidden="true">›</span></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><span className="mx-2" aria-hidden="true">›</span></li>
              <li><span className="text-gray-700" aria-current="page">Homebuyer Checklist 2025</span></li>
            </ol>
          </nav>

          <article className="bg-white rounded-lg shadow-md p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">First-Time Homebuyer Checklist for 2025</h1>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>Published: June 20, 2025</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Guides</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700">
              <ol className="list-decimal ml-6 space-y-4">
                <li>
                  <strong>Set a realistic budget</strong>
                  <p>Consider total monthly payment, including taxes, insurance, and HOA if applicable. Build a small buffer.</p>
                </li>
                <li>
                  <strong>Check your credit and debts</strong>
                  <p>Pay down revolving balances, avoid new credit, and correct any report errors before pre-approval.</p>
                </li>
                <li>
                  <strong>Get pre-approved</strong>
                  <p>Compare two or three lenders on rate, closing costs, and service. Ask about points and credits.</p>
                </li>
                <li>
                  <strong>Define needs vs. wants</strong>
                  <p>Prioritize location, commute, schools, home type, and must-have features.</p>
                </li>
                <li>
                  <strong>Start the search</strong>
                  <p>Tour a range of homes to calibrate expectations. Watch days-on-market and price adjustments.</p>
                </li>
                <li>
                  <strong>Make a competitive offer</strong>
                  <p>Lean on your agent for comps, terms, and contingencies that balance risk and competitiveness.</p>
                </li>
                <li>
                  <strong>Complete inspections and appraisal</strong>
                  <p>Use findings to negotiate repairs or credits. Confirm loan approval timeline.</p>
                </li>
                <li>
                  <strong>Close and move</strong>
                  <p>Review the Closing Disclosure carefully. Set up utilities and change of address ahead of keys.</p>
                </li>
              </ol>

              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Quick Tips</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Stick to your budget; emotions can run high during bidding.</li>
                  <li>Rate locks have expiration dates—time your lock to your closing.</li>
                  <li>Keep large deposits documented to avoid underwriting delays.</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}