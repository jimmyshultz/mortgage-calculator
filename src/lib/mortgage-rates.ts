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
  source?: string;
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
 * Fetch mortgage rates from our API endpoint or directly from FRED
 */
export async function fetchMortgageRates(): Promise<MortgageRatesData> {
  try {
    // Check if we're in a server environment during build
    if (typeof window === 'undefined') {
      // Server-side: fetch directly from FRED API
      return await fetchMortgageRatesFromFred();
    } else {
      // Client-side: use our API endpoint
      const response = await fetch('/api/mortgage-rates', {
        next: { revalidate: 3600 } // Cache for 1 hour
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Check if there's an error in the response
      if (data.error) {
        throw new Error(data.error);
      }
      
      return data;
    }
  } catch (error) {
    console.error('Error fetching mortgage rates:', error);
    // Fallback to mock data if API fails
    console.log('Falling back to mock data');
    return getMockMortgageRates();
  }
}

/**
 * Fetch mortgage rates directly from FRED API (server-side only)
 */
async function fetchMortgageRatesFromFred(): Promise<MortgageRatesData> {
  const FRED_SERIES = {
    '30_YEAR_FIXED': 'MORTGAGE30US',
    '15_YEAR_FIXED': 'MORTGAGE15US',
    '5_1_ARM': 'MORTGAGE5US',
  };

  try {
    // Fetch data from FRED API
    const fetchFredData = async (seriesId: string): Promise<string | null> => {
      try {
        const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=demo&file_type=json&limit=1&sort_order=desc`;
        
        const response = await fetch(url, {
          next: { revalidate: 3600 }
        });
        
        if (!response.ok) {
          return null;
        }
        
        const data = await response.json();
        
        if (data.observations && data.observations.length > 0) {
          const latestValue = data.observations[0].value;
          return latestValue !== '.' ? latestValue : null;
        }
        
        return null;
      } catch (error) {
        return null;
      }
    };

    const [rate30Year, rate15Year] = await Promise.all([
      fetchFredData(FRED_SERIES['30_YEAR_FIXED']),
      fetchFredData(FRED_SERIES['15_YEAR_FIXED']),
    ]);

    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const mortgageRates: MortgageRatesData = {
      lastUpdated: currentDate,
      source: 'Federal Reserve Economic Data (FRED)',
      nationalAverage: []
    };

    // Add rates if available
    if (rate30Year) {
      const rate30 = parseFloat(rate30Year);
      mortgageRates.nationalAverage.push({
        loanType: '30-Year Fixed',
        rate: rate30.toFixed(3),
        apr: (rate30 + 0.2).toFixed(3),
        points: '0.8',
        change: '+0.000'
      });

      // Add estimated rates based on 30-year fixed
      mortgageRates.nationalAverage.push({
        loanType: '30-Year FHA',
        rate: (rate30 - 0.25).toFixed(3),
        apr: (rate30 - 0.25 + 0.7).toFixed(3),
        points: '0.0',
        change: '+0.000'
      });

      mortgageRates.nationalAverage.push({
        loanType: '30-Year VA',
        rate: (rate30 - 0.5).toFixed(3),
        apr: (rate30 - 0.3).toFixed(3),
        points: '0.0',
        change: '+0.000'
      });

      mortgageRates.nationalAverage.push({
        loanType: '30-Year Jumbo',
        rate: (rate30 + 0.15).toFixed(3),
        apr: (rate30 + 0.35).toFixed(3),
        points: '0.6',
        change: '+0.000'
      });
    }

    if (rate15Year) {
      const rate15 = parseFloat(rate15Year);
      mortgageRates.nationalAverage.push({
        loanType: '15-Year Fixed',
        rate: rate15.toFixed(3),
        apr: (rate15 + 0.2).toFixed(3),
        points: '0.7',
        change: '+0.000'
      });
    }

    return mortgageRates;
  } catch (error) {
    console.error('Error fetching from FRED:', error);
    throw error;
  }
}

// Removed unused transformApiData function - can be added back when needed for other APIs

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