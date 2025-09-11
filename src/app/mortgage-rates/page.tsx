import { Metadata } from 'next'
import Link from 'next/link'
import { fetchMortgageRates, formatRateChange } from '../../lib/mortgage-rates'

export const metadata: Metadata = {
  title: 'Current Mortgage Rates - Daily Updates | TheMortgageEstimator.com',
  description: 'View current mortgage rates updated daily. Compare 30-year, 15-year, FHA, VA, and jumbo loan rates to find the best mortgage option.',
  keywords: 'mortgage rates, current rates, 30 year mortgage, 15 year mortgage, FHA rates, VA rates, jumbo loan rates',
  alternates: {
    canonical: '/mortgage-rates',
  },
  openGraph: {
    title: 'Current Mortgage Rates - Daily Updates',
    description: 'View current mortgage rates updated daily. Compare 30-year, 15-year, FHA, VA, and jumbo loan rates.',
    url: '/mortgage-rates',
    siteName: 'TheMortgageEstimator.com',
    type: 'website',
  },
}

export default async function MortgageRatesPage() {
  // Fetch real mortgage rates from FRED API
  const mortgageRates = await fetchMortgageRates();
  return (
    <main id="main-content" className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Current Mortgage Rates
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay informed with the latest mortgage rates updated daily. Compare rates across different loan types to find the best option for your home financing needs.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          Last Updated: {mortgageRates.lastUpdated}
          {mortgageRates.source && (
            <div className="mt-1">
              Data Source: {mortgageRates.source}
            </div>
          )}
        </div>
      </div>

      {/* Rates Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="bg-blue-900 text-white p-4">
          <h2 className="text-2xl font-semibold">National Average Mortgage Rates</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Loan Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Interest Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  APR
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Points
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Daily Change
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mortgageRates.nationalAverage.map((rate, index) => {
                const changeFormat = formatRateChange(rate.change);
                return (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {rate.loanType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className="text-lg font-semibold text-blue-600">
                        {rate.rate}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {rate.apr}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {rate.points}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${changeFormat.className}`}>
                        {changeFormat.value}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Information Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Understanding Mortgage Rates
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Interest Rate:</strong> The annual cost of borrowing money</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>APR:</strong> Annual Percentage Rate includes fees and other costs</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Points:</strong> Upfront fees paid to lower your interest rate</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Daily Change:</strong> How rates moved compared to yesterday</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-4">
            Factors Affecting Your Rate
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span><strong>Credit Score:</strong> Higher scores typically get better rates</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span><strong>Down Payment:</strong> Larger down payments may reduce rates</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span><strong>Loan Term:</strong> Shorter terms usually have lower rates</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span><strong>Debt-to-Income:</strong> Lower ratios can improve your rate</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Ready to Calculate Your Mortgage?</h3>
        <p className="text-lg mb-6 text-blue-100">
          Use our mortgage calculator to estimate your monthly payments based on current rates.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Calculate My Mortgage
        </Link>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
        <p>
          <strong>Disclaimer:</strong> The rates displayed are for informational purposes only and may not reflect the actual rates available to you. 
          Actual rates may vary based on your credit profile, loan amount, property type, and other factors. 
          Contact a licensed mortgage professional for personalized rate quotes and advice.
        </p>
      </div>
    </main>
  )
}