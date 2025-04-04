import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | TheMortgageEstimator.com',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information when you use TheMortgageEstimator.com.',
  keywords: 'privacy policy, data protection, mortgage calculator privacy',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Privacy Policy
          </h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-8">
              Last Updated: April 1, 2025
            </p>
            
            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                TheMortgageEstimator.com ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected to TheMortgageEstimator.com.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when using our calculator and services:
              </p>
              <ul>
                <li><strong>Personal Information:</strong> We may ask for personal information, such as your name and email address if you sign up for our newsletter or contact us.</li>
                <li><strong>Financial Information:</strong> When using our mortgage calculator, you may input information such as loan amounts, interest rates, down payment amounts, etc. This information is used solely for calculation purposes.</li>
                <li><strong>Usage Data:</strong> We automatically collect certain information about your device and how you interact with our website, including your browser type, IP address, pages viewed, time spent on pages, and links clicked.</li>
                <li><strong>Cookies and Similar Technologies:</strong> We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities.</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process your mortgage calculations and provide accurate results</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Analyze usage patterns and trends to improve user experience</li>
                <li>Display relevant advertising based on your interests and online behavior</li>
                <li>Protect against, identify, and prevent fraud and other illegal activity</li>
              </ul>
              
              <h2>Sharing Your Information</h2>
              <p>
                We may share your information in the following contexts:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services for us.</li>
                <li><strong>Analytics Partners:</strong> We use analytics services such as Google Analytics that use cookies and similar technologies to collect and analyze information about your use of the website.</li>
                <li><strong>Advertising Partners:</strong> We work with third-party advertising companies to display ads on our website. These companies may use cookies to collect information about your visits to provide relevant advertisements.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              </ul>
              
              <h2>Your Choices</h2>
              <p>
                You have several choices regarding the information we collect:
              </p>
              <ul>
                <li><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject browser cookies.</li>
                <li><strong>Communications:</strong> You may opt out of receiving promotional emails from us by following the instructions in those emails.</li>
                <li><strong>Do Not Track:</strong> Some browsers have "do not track" features that you can enable. We do our best to honor these requests when possible.</li>
              </ul>
              
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2>Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us.
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