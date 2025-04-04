import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import MobileNavigation from '../components/MobileNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mortgage Calculator - Plan Your Home Financing',
  description: 'Free online mortgage calculator to help plan your home financing. Calculate monthly payments and see amortization schedules.',
  keywords: 'mortgage calculator, home loan calculator, mortgage payment, home financing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Auto Ads Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Script id="adsense-init" strategy="afterInteractive">
          {`
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-YOUR_ADSENSE_ID",
              enable_page_level_ads: true
            });
          `}
        </Script>
        
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ANALYTICS_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YOUR_ANALYTICS_ID');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <header className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold">TheMortgageEstimator.com</div>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-blue-200">Home</a></li>
                <li><a href="/preapproval-calculator" className="hover:text-blue-200">Preapproval</a></li>
                <li><a href="/about" className="hover:text-blue-200">About</a></li>
                <li><a href="/blog" className="hover:text-blue-200">Blog</a></li>
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
                  <li><a href="/blog/first-time-homebuyer" className="hover:text-blue-300">First-Time Homebuyer Guide</a></li>
                  <li><a href="/blog/mortgage-types" className="hover:text-blue-300">Types of Mortgages</a></li>
                  <li><a href="/blog/refinancing-guide" className="hover:text-blue-300">Refinancing Guide</a></li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/privacy-policy" className="hover:text-blue-300">Privacy Policy</a></li>
                  <li><a href="/terms-of-service" className="hover:text-blue-300">Terms of Service</a></li>
                  <li><a href="/disclaimer" className="hover:text-blue-300">Disclaimer</a></li>
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
      </body>
    </html>
  );
}
