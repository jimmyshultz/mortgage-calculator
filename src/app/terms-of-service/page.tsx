import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | MortgageCalc.io',
  description: 'Our terms of service outline the rules, guidelines, and legal terms that govern your use of MortgageCalc.io.',
  keywords: 'terms of service, terms and conditions, legal terms, mortgage calculator terms',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Terms of Service
          </h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-8">
              Last Updated: March 1, 2023
            </p>
            
            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                Welcome to MortgageCalc.io. These Terms of Service ("Terms") govern your access to and use of the MortgageCalc.io website and all services provided through it (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
              </p>
              
              <h2>2. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. If we make changes, we will provide notice by updating the date at the top of these Terms and by maintaining a current version of the Terms on this website. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
              </p>
              
              <h2>3. Using Our Service</h2>
              <p>
                MortgageCalc.io provides a mortgage calculator and related tools to help users estimate mortgage payments, interest, and other loan-related calculations. All calculations are estimates only and should not be relied upon as financial advice.
              </p>
              
              <h2>4. Accuracy of Information</h2>
              <p>
                While we strive to provide accurate information and calculations, we make no representations or warranties about the accuracy, reliability, completeness, or timeliness of the content on our Service. The mortgage calculator and associated tools are for educational and informational purposes only.
              </p>
              <p>
                You acknowledge that mortgage rates, terms, fees, and other factors vary widely and change frequently. Our calculator provides estimates based on the information you input, but actual loan terms may differ. You should always consult with a qualified financial professional before making financial decisions.
              </p>
              
              <h2>5. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
              
              <h2>6. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL MORTGAGECALC.IO, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul>
                <li>THE USE OR INABILITY TO USE THE SERVICE</li>
                <li>ANY DECISIONS MADE BASED ON INFORMATION OR CALCULATIONS PROVIDED BY THE SERVICE</li>
                <li>UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA</li>
                <li>STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICE</li>
                <li>ANY OTHER MATTER RELATING TO THE SERVICE</li>
              </ul>
              
              <h2>7. Intellectual Property Rights</h2>
              <p>
                The Service and its content, features, and functionality are owned by MortgageCalc.io and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Service without our express written permission.
              </p>
              
              <h2>8. User Conduct</h2>
              <p>
                You agree not to:
              </p>
              <ul>
                <li>Use the Service in any way that violates any applicable laws or regulations</li>
                <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with any person or entity</li>
                <li>Attempt to gain unauthorized access to the Service or computer systems connected to the Service</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                <li>Use any robot, spider, or other automatic device to access the Service for any purpose</li>
                <li>Introduce any viruses, trojan horses, worms, or other material which is malicious or technologically harmful</li>
              </ul>
              
              <h2>9. Links to Third-Party Websites</h2>
              <p>
                Our Service may contain links to third-party websites or services that are not owned or controlled by MortgageCalc.io. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any such websites or services.
              </p>
              
              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States and the State of New York, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within New York County, New York.
              </p>
              
              <h2>11. Severability</h2>
              <p>
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, the balance of the Terms shall remain in effect, and the invalid, illegal, or unenforceable provision shall be deemed modified so that it is valid, legal, and enforceable to the maximum extent permitted by law.
              </p>
              
              <h2>12. Entire Agreement</h2>
              <p>
                These Terms constitute the entire agreement between you and MortgageCalc.io regarding your use of the Service, superseding any prior agreements between you and MortgageCalc.io.
              </p>
              
              <h2>13. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: legal@mortgagecalc.io<br />
                Address: 123 Financial Street, Suite 400<br />
                New York, NY 10001
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