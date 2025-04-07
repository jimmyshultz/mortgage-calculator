"use client";

import React, { useState, useEffect, useCallback } from 'react';

const PreapprovalCalculator = () => {
  // State for user inputs
  const [annualIncome, setAnnualIncome] = useState(80000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [creditScore, setCreditScore] = useState(720);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);
  
  // State for calculated results
  const [maxLoanAmount, setMaxLoanAmount] = useState(0);
  const [maxHomePrice, setMaxHomePrice] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [frontEndRatio, setFrontEndRatio] = useState(0);
  const [backEndRatio, setBackEndRatio] = useState(0);

  const calculatePreapproval = useCallback(() => {
    // Monthly income
    const monthlyIncome = annualIncome / 12;
    
    // Calculate front-end and back-end DTI ratios based on credit score
    let maxFrontEndRatio = 0.28; // Default 28% for housing costs
    let maxBackEndRatio = 0.36;  // Default 36% for total debt
    
    // Adjust ratios based on credit score
    if (creditScore >= 760) {
      maxFrontEndRatio = 0.35;
      maxBackEndRatio = 0.45;
    } else if (creditScore >= 700) {
      maxFrontEndRatio = 0.32;
      maxBackEndRatio = 0.43;
    } else if (creditScore >= 660) {
      maxFrontEndRatio = 0.30;
      maxBackEndRatio = 0.41;
    } else if (creditScore >= 620) {
      maxFrontEndRatio = 0.28;
      maxBackEndRatio = 0.38;
    } else {
      maxFrontEndRatio = 0.25;
      maxBackEndRatio = 0.36;
    }
    
    // Calculate max monthly housing payment using front-end ratio
    const maxHousingPayment = monthlyIncome * maxFrontEndRatio;
    
    // Calculate max monthly housing payment using back-end ratio
    const maxTotalDebtPayment = monthlyIncome * maxBackEndRatio;
    const maxHousingWithDebts = maxTotalDebtPayment - monthlyDebts;
    
    // Use the more conservative (lower) of the two calculations
    const maxMonthlyPayment = Math.min(maxHousingPayment, maxHousingWithDebts);
    
    // Calculate max loan amount based on payment, interest rate, and term
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    let maxLoan = 0;
    if (monthlyRate === 0) {
      maxLoan = maxMonthlyPayment * numberOfPayments;
    } else {
      // Using the formula: P = PMT * [(1 - (1 + r)^-n) / r]
      // Where P = loan principal, PMT = monthly payment, r = monthly interest rate, n = number of payments
      maxLoan = maxMonthlyPayment * ((1 - Math.pow(1 + monthlyRate, -numberOfPayments)) / monthlyRate);
    }
    
    // Calculate max home price (loan amount + down payment)
    const calculatedMaxHomePrice = maxLoan + downPayment;
    
    // Calculate monthly payment for the max loan
    let monthly = 0;
    if (monthlyRate === 0) {
      monthly = maxLoan / numberOfPayments;
    } else {
      const x = Math.pow(1 + monthlyRate, numberOfPayments);
      monthly = (maxLoan * x * monthlyRate) / (x - 1);
    }
    
    // Calculate actual front-end and back-end ratios
    const actualFrontEndRatio = (monthly / monthlyIncome) * 100;
    const actualBackEndRatio = ((monthly + monthlyDebts) / monthlyIncome) * 100;
    
    // Update state with calculated values
    setMaxLoanAmount(maxLoan);
    setMaxHomePrice(calculatedMaxHomePrice);
    setMonthlyPayment(monthly);
    setFrontEndRatio(actualFrontEndRatio);
    setBackEndRatio(actualBackEndRatio);
  }, [annualIncome, monthlyDebts, creditScore, downPayment, interestRate, loanTerm]);

  useEffect(() => {
    calculatePreapproval();
  }, [calculatePreapproval]);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">Mortgage Preapproval Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Annual Income (${annualIncome.toLocaleString()})
            </label>
            <input
              type="range"
              min="30000"
              max="500000"
              step="5000"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>$30,000</span>
              <span>$500,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Debt Payments (${monthlyDebts.toLocaleString()})
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={monthlyDebts}
              onChange={(e) => setMonthlyDebts(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>$0</span>
              <span>$5,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Credit Score ({creditScore})
            </label>
            <input
              type="range"
              min="500"
              max="850"
              step="10"
              value={creditScore}
              onChange={(e) => setCreditScore(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>500</span>
              <span>850</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Down Payment (${downPayment.toLocaleString()})
            </label>
            <input
              type="range"
              min="0"
              max="200000"
              step="5000"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>$0</span>
              <span>$200,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interest Rate ({interestRate}%)
            </label>
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>0.1%</span>
              <span>10%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loan Term ({loanTerm} years)
            </label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="10">10 years</option>
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="25">25 years</option>
              <option value="30">30 years</option>
            </select>
          </div>
        </div>

        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mt-4 md:mt-0">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-800">Preapproval Estimate</h3>
          
          <div className="space-y-3">
            <div className="flex flex-col">
              <span className="text-gray-600 text-sm">Estimated Maximum Loan Amount</span>
              <span className="text-2xl sm:text-3xl font-bold text-blue-900">
                ${maxLoanAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
            
            <div className="flex flex-col mt-3 sm:mt-4">
              <span className="text-gray-600 text-sm">Estimated Home Price You Can Afford</span>
              <span className="text-2xl sm:text-3xl font-bold text-blue-900">
                ${maxHomePrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
            
            <div className="mt-4 sm:mt-6 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm sm:text-base">Estimated Monthly Payment</span>
                <span className="font-medium">
                  ${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm sm:text-base">Housing-to-Income Ratio</span>
                <span className="font-medium">
                  {frontEndRatio.toFixed(1)}%
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm sm:text-base">Debt-to-Income Ratio</span>
                <span className="font-medium">
                  {backEndRatio.toFixed(1)}%
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm sm:text-base">Down Payment</span>
                <span className="font-medium">
                  ${downPayment.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm sm:text-base">Down Payment Percentage</span>
                <span className="font-medium">
                  {maxHomePrice > 0 ? ((downPayment / maxHomePrice) * 100).toFixed(1) : "0"}%
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-blue-200">
            <p className="text-xs sm:text-sm text-gray-600 italic">
              This is an estimate only. Actual preapproval amounts depend on lender criteria, your credit history, and other factors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreapprovalCalculator; 