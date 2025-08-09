import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Blog - Guides & Resources | TheMortgageEstimator.com',
  description: 'Explore articles, guides, and expert advice on mortgages, home buying, refinancing, and more from TheMortgageEstimator.com.',
  keywords: 'mortgage blog, mortgage advice, home buying tips, mortgage calculator blog, refinancing guides',
};

// Blog post data
const blogPosts = [
  {
    id: 'mortgage-rates-2025-outlook',
    title: 'Mortgage Rates in 2025: Outlook and Strategies',
    date: 'August 8, 2025',
    excerpt: 'What today\'s mortgage rate environment means for buyers and homeowners, plus practical strategies to navigate 2025.',
    category: 'Market',
    imageUrl: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'ai-in-mortgage-underwriting-2025',
    title: 'How AI Is Changing Mortgage Underwriting in 2025',
    date: 'August 5, 2025',
    excerpt: 'A plain-English look at how lenders are using AI in underwriting and what it means for approvals, timelines, and fairness.',
    category: 'Trends',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'down-payment-assistance-2025',
    title: 'Down Payment Assistance Programs in 2025: What to Know',
    date: 'July 10, 2025',
    excerpt: 'An overview of common assistance options in 2025 and how to determine eligibility without the jargon.',
    category: 'Programs',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'homebuying-checklist-2025',
    title: 'First-Time Homebuyer Checklist for 2025',
    date: 'June 20, 2025',
    excerpt: 'A step-by-step, up-to-date checklist to go from browsing to closing this year.',
    category: 'Guides',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'heloc-vs-home-equity-2025',
    title: 'HELOC vs. Home Equity Loan in 2025: Which Is Better?',
    date: 'May 5, 2025',
    excerpt: 'Compare HELOCs and home equity loans in 2025 to decide which borrowing tool fits your needs.',
    category: 'Finance',
    imageUrl: 'https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'first-time-homebuyer',
    title: 'First-Time Homebuyer Guide',
    date: 'March 15, 2025',
    excerpt: 'Everything you need to know as a first-time homebuyer, from pre-approval to closing.',
    category: 'Guides',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'mortgage-types',
    title: 'Understanding Different Types of Mortgages',
    date: 'January 22, 2025',
    excerpt: 'Compare fixed-rate, adjustable-rate, FHA, VA, and other mortgage types to find the best option for you.',
    category: 'Education',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'refinancing-guide',
    title: 'The Complete Guide to Refinancing Your Home',
    date: 'November 10, 2024',
    excerpt: 'Learn when and how to refinance your mortgage to save money or access home equity.',
    category: 'Guides',
    imageUrl: 'https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 'credit-score-improvement',
    title: '5 Strategies to Improve Your Credit Score Before Applying for a Mortgage',
    date: 'August 12, 2024',
    excerpt: 'Boost your credit score and qualify for better mortgage rates with these effective tactics.',
    category: 'Tips',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'down-payment-options',
    title: 'Down Payment Options: How Much Should You Put Down?',
    date: 'June 3, 2024',
    excerpt: 'Explore the pros and cons of different down payment amounts and find what works for your situation.',
    category: 'Finance',
    imageUrl: 'https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 'housing-market-trends',
    title: 'Current Housing Market Trends and Predictions',
    date: 'April 18, 2024',
    excerpt: "Analysis of today's housing market and what potential homebuyers and sellers can expect.",
    category: 'Market',
    imageUrl: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
];

export default function BlogPage() {
  return (
    <main id="main-content" className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
          Mortgage Blog
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Expert advice, guides, and resources to help you navigate the world of mortgages and home financing.
        </p>
        
        <div className="max-w-6xl mx-auto">
          {/* Featured post - latest article */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image 
                  src={blogPosts[0].imageUrl} 
                  alt={blogPosts[0].title} 
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                  {blogPosts[0].category} • {blogPosts[0].date}
                </div>
                <Link 
                  href={`/blog/${blogPosts[0].id}`}
                  className="block mt-2 text-2xl font-semibold text-gray-800 hover:text-blue-600 transition"
                >
                  {blogPosts[0].title}
                </Link>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="mt-6">
                  <Link 
                    href={`/blog/${blogPosts[0].id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title} 
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="uppercase tracking-wide text-xs text-indigo-600 font-semibold">
                    {post.category} • {post.date}
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="block mt-2 text-xl font-semibold text-gray-800 hover:text-blue-600 transition"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-3 text-gray-600 text-sm">{post.excerpt}</p>
                </div>
                <div className="px-6 pb-6">
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 