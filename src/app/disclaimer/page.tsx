import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | TheMortgageEstimator.com',
  description: 'Important disclaimer information regarding the use of TheMortgageEstimator.com mortgage calculator and website.',
  keywords: 'disclaimer, mortgage calculator disclaimer, financial information disclaimer',
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Disclaimer
          </h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-8">
              Last Updated: April 1, 2025
            </p>
            
            <div className="prose prose-lg max-w-none">
              <h2>General Disclaimer</h2>
              <p>
                The information provided on TheMortgageEstimator.com is for general informational and educational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the website.
              </p>
              
              <h2>Not Financial Advice</h2>
              <p>
                The content on TheMortgageEstimator.com should not be construed as professional financial advice. The calculators and tools provided on this website are designed to give general estimates and to help users understand mortgage concepts. They are not intended to replace professional financial advice.
              </p>
              <p>
                Before making any financial decision, especially one as significant as taking on a mortgage, we strongly recommend consulting with a qualified financial advisor, mortgage broker, or lending institution. Your personal financial situation is unique, and the tools and information on this website are not tailored to individual circumstances.
              </p>
              
              <h2>Calculation Accuracy</h2>
              <p>
                While we strive for accuracy in our calculators and tools, the results provided are estimates only. The actual terms of any mortgage, including but not limited to interest rates, fees, closing costs, and qualification requirements, will be determined by lenders based on various factors including:
              </p>
              <ul>
                <li>Your credit score and history</li>
                <li>Your income and employment status</li>
                <li>Current market conditions</li>
                <li>The specific lender&apos;s policies and products</li>
                <li>Property location and type</li>
                <li>Down payment amount</li>
                <li>Loan-to-value ratio</li>
              </ul>
              <p>
                The calculations do not account for all possible fees, taxes, or costs associated with obtaining a mortgage or purchasing a home. These may include property taxes, insurance, HOA fees, closing costs, and other expenses that can significantly affect the total cost of homeownership.
              </p>
              
              <h2>Third-Party Information</h2>
              <p>
                TheMortgageEstimator.com may include links to third-party websites, articles, or other content. We do not control or monitor the content of these external sources and are not responsible for their accuracy or reliability. Inclusion of links to third-party content does not imply endorsement or verification by TheMortgageEstimator.com.
              </p>
              
              <h2>No Lender Relationships</h2>
              <p>
                TheMortgageEstimator.com is not a mortgage lender, broker, or financial institution. We do not offer mortgages or other financial products. While we may display information about various mortgage products or trends, we do not endorse specific lenders, products, or services. Any decision to engage with a particular lender or financial institution should be made based on your own research and assessment.
              </p>
              
              <h2>Changes to Market Conditions</h2>
              <p>
                The mortgage market and interest rates can change rapidly. Information on TheMortgageEstimator.com may not reflect the most current market conditions. Always verify current rates and terms with actual lenders before making decisions.
              </p>
              
              <h2>Limitation of Liability</h2>
              <p>
                Under no circumstances shall TheMortgageEstimator.com, its owners, employees, or affiliates be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from:
              </p>
              <ul>
                <li>Your use of, or inability to use, our website or tools</li>
                <li>Any decisions made based on calculators or information found on our website</li>
                <li>Any inaccuracies or errors in calculations or information</li>
                <li>Any financial loss or damages resulting from the use of our website</li>
              </ul>
              <p>
                By using TheMortgageEstimator.com, you expressly agree that your use of the website and reliance on any information is solely at your own risk.
              </p>
              
              <h2>Contact Information</h2>
              <p>
                If you have any questions about this Disclaimer, please contact us.
              </p>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-200">
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 