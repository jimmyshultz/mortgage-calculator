"use client";

import React, { useState, useEffect } from 'react';
import ResultsDisplay from './ResultsDisplay';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [downPayment, setDownPayment] = useState(60000);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    calculateMortgage();
  }, [loanAmount, interestRate, loanTerm, downPayment]);

  const calculateMortgage = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // Calculate monthly payment using the mortgage formula
    let monthly = 0;
    if (monthlyRate === 0) {
      monthly = principal / numberOfPayments;
    } else {
      const x = Math.pow(1 + monthlyRate, numberOfPayments);
      monthly = (principal * x * monthlyRate) / (x - 1);
    }

    // Set monthly payment
    setMonthlyPayment(monthly);
    
    // Calculate total payment and total interest using the calculated monthly value
    // Rather than using the state value which hasn't updated yet
    const calculatedTotalPayment = monthly * numberOfPayments;
    setTotalPayment(calculatedTotalPayment);
    setTotalInterest(calculatedTotalPayment - principal);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Mortgage Calculator</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Home Price (${loanAmount.toLocaleString()})
            </label>
            <input
              type="range"
              min="50000"
              max="1000000"
              step="5000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>$50,000</span>
              <span>$1,000,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Down Payment (${downPayment.toLocaleString()})
            </label>
            <input
              type="range"
              min="0"
              max={loanAmount * 0.5}
              step="5000"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>$0</span>
              <span>${(loanAmount * 0.5).toLocaleString()}</span>
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

        <ResultsDisplay
          monthlyPayment={monthlyPayment}
          loanAmount={loanAmount}
          downPayment={downPayment}
          totalPayment={totalPayment}
          totalInterest={totalInterest}
          loanTerm={loanTerm}
        />
      </div>
    </div>
  );
};

export default Calculator; 