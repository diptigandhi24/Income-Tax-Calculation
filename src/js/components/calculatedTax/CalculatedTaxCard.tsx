import React from 'react';
import { calculateTax } from '../TaxCalculator/taxCalculator';
interface TaxDetails {
  age: number;
  income: number;
  investment: number;
  year: string;
}
function CalculatedTaxCard({ age, income, investment, year }: TaxDetails) {
  return (
    <div>
      <h2>{year} year</h2>
      <p>{age}</p>
      <p>{income}</p>
      <p>{investment}</p>
      <p>Tax Paid :</p>
    </div>
  );
}
