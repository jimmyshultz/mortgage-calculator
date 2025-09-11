// Utility functions for fetching mortgage rates data

export interface MortgageRate {
  loanType: string;
  rate: string;
  apr: string;
  points: string;
  change: string;
}

export interface MortgageRatesData {
  lastUpdated: string;
  nationalAverage: MortgageRate[];
}

/**
 * Mock data for mortgage rates - replace with real API calls
 */
export function getMockMortgageRates(): MortgageRatesData {
  return {
    lastUpdated: new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    nationalAverage: [
      {
        loanType: '30-Year Fixed',
        rate: '7.125',
        apr: '7.248',
        points: '0.8',
        change: '+0.05'
      },
      {
        loanType: '15-Year Fixed',
        rate: '6.625',
        apr: '6.798',
        points: '0.7',
        change: '+0.03'
      },
      {
        loanType: '30-Year FHA',
        rate: '6.875',
        apr: '7.652',
        points: '0.9',
        change: '+0.02'
      },
      {
        loanType: '30-Year VA',
        rate: '6.750',
        apr: '6.921',
        points: '0.0',
        change: '+0.04'
      },
      {
        loanType: '30-Year Jumbo',
        rate: '7.250',
        apr: '7.356',
        points: '0.6',
        change: '+0.06'
      }
    ]
  };
}

/**
 * Fetch mortgage rates from external API
 * This is a placeholder for future API integration
 */
export async function fetchMortgageRates(): Promise<MortgageRatesData> {
  try {
    // Example API integration - replace with actual API endpoint
    // const response = await fetch('https://api.example.com/mortgage-rates');
    // if (!response.ok) {
    //   throw new Error('Failed to fetch mortgage rates');
    // }
    // const data = await response.json();
    // return transformApiData(data);
    
    // For now, return mock data
    return getMockMortgageRates();
  } catch (error) {
    console.error('Error fetching mortgage rates:', error);
    // Fallback to mock data if API fails
    return getMockMortgageRates();
  }
}

/**
 * Transform API data to our internal format
 * Customize this based on the actual API response structure
 */
function transformApiData(apiData: any): MortgageRatesData {
  // This function would transform the API response to match our MortgageRatesData interface
  // Implementation depends on the specific API structure
  return {
    lastUpdated: apiData.date || new Date().toLocaleDateString(),
    nationalAverage: apiData.rates?.map((rate: any) => ({
      loanType: rate.loan_type || rate.type,
      rate: rate.interest_rate || rate.rate,
      apr: rate.apr,
      points: rate.points || '0.0',
      change: rate.daily_change || '+0.00'
    })) || []
  };
}

/**
 * Format rate change for display
 */
export function formatRateChange(change: string): {
  value: string;
  className: string;
} {
  const isPositive = change.startsWith('+');
  const isNegative = change.startsWith('-');
  
  return {
    value: change,
    className: isPositive 
      ? 'bg-red-100 text-red-800' 
      : isNegative
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800'
  };
}