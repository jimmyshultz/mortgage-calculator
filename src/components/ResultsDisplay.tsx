"use client";

import React from 'react';

interface ResultsDisplayProps {
  monthlyPayment: number;
  loanAmount: number;
  downPayment: number;
  totalPayment: number;
  totalInterest: number;
  loanTerm: number;
}

const ResultsDisplay = ({
  monthlyPayment,
  loanAmount,
  downPayment,
  totalPayment,
  totalInterest,
  loanTerm,
}: ResultsDisplayProps) => {
  return (
    <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-800">Mortgage Summary</h3>
      
      <div className="space-y-3">
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm">Monthly Payment</span>
          <span className="text-2xl sm:text-3xl font-bold text-blue-900">
            ${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </span>
        </div>
        
        <div className="mt-4 sm:mt-6 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm sm:text-base">Loan Amount</span>
            <span className="font-medium">${(loanAmount - downPayment).toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm sm:text-base">Down Payment</span>
            <span className="font-medium">${downPayment.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm sm:text-base">Total of {loanTerm * 12} Payments</span>
            <span className="font-medium">
              ${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm sm:text-base">Total Interest</span>
            <span className="font-medium">
              ${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;