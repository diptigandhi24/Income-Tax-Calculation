import React from 'react';

interface Props {
  year: string;
  income: string;
  age: string;
  investment: string;
  totalTax: number;
}
export default function Taxcards(props) {
  const { year, income, age, investment, totalTax } = props;
  console.log('TaxCard', year, income, age, investment);
  return (
    <div>
      <p>Age:{age}</p>
      <p>Year:{year}</p>
      <p>Income:{income}</p>
      <p>Investment:{investment}</p>
      <p>totalTax:{totalTax}</p>
    </div>
  );
}
