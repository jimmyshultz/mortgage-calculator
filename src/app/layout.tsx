import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Link from 'next/link'
import MobileNavigation from '../components/MobileNavigation'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://themortgageestimator.com'),
  title: 'Mortgage Calculator - Plan Your Home Financing',
  description: 'Free online mortgage calculator to help plan your home financing. Calculate monthly payments and see amortization schedules.',
  keywords: 'mortgage calculator, home loan calculator, mortgage payment, home financing',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mortgage Calculator - Plan Your Home Financing',
    description: 'Free online mortgage calculator to help plan your home financing. Calculate monthly payments and see amortization schedules.',
    url: '/',
    siteName: 'TheMortgageEstimator.com',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Calculator - Plan Your Home Financing',
    description: 'Free online mortgage calculator to help plan your home financing. Calculate monthly payments and see amortization schedules.',
    creator: '@themortgageest',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  verification: {
    // Replace with the actual verification code when provided by Google
    google: 'qJxImXtWKCx0gJs07pGpujP9oAZfKXruwZcuy-sF3cY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5443760017915120"
          crossOrigin="anonymous"
        />
        
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MGN0W9YGNF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MGN0W9YGNF');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="absolute z-50 opacity-0 focus:opacity-100 bg-white text-blue-600 p-3 m-3 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          Skip to main content
        </a>
        
        <header className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold">TheMortgageEstimator.com</div>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-blue-200">Home</Link></li>
                <li><Link href="/preapproval-calculator" className="hover:text-blue-200">Preapproval</Link></li>
                <li><Link href="/about" className="hover:text-blue-200">About</Link></li>
                <li><Link href="/blog" className="hover:text-blue-200">Blog</Link></li>
              </ul>
            </nav>
            
            {/* Mobile Navigation Component */}
            <MobileNavigation />
          </div>
        </header>
        
        {children}
        
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">TheMortgageEstimator.com</h3>
                <p className="text-gray-300">
                  Helping you make informed decisions about your mortgage and home financing options.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/blog/first-time-homebuyer" className="hover:text-blue-300">First-Time Homebuyer Guide</Link></li>
                  <li><Link href="/blog/mortgage-types" className="hover:text-blue-300">Types of Mortgages</Link></li>
                  <li><Link href="/blog/refinancing-guide" className="hover:text-blue-300">Refinancing Guide</Link></li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/privacy-policy" className="hover:text-blue-300">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="hover:text-blue-300">Terms of Service</Link></li>
                  <li><Link href="/disclaimer" className="hover:text-blue-300">Disclaimer</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
              <p>© {new Date().getFullYear()} TheMortgageEstimator.com. All rights reserved.</p>
              <p className="mt-2 text-sm">
                This calculator is for informational purposes only. Consult with a financial advisor before making any financial decisions.
              </p>
            </div>
          </div>
        </footer>
        
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
