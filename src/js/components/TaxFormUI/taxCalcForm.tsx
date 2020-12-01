import React, { useState } from 'react';
import { useFormFeild } from './hooksUtils';
import { InputIncomeFeild, InputFeild } from './FormInputFeilds';
import './taxForm.css';
import { UserContext } from '../context/globalState';
import { saveTaxInfo } from '../Indexdb/indexdb';
import { calculateTax } from '../TaxCalculator/taxCalculator';

export default function TaxCalcForm() {
  const { formFields, createChangeHandler } = useFormFeild({
    income: '',
    investment: '',
    age: '',
    year: ''
  });
  const [totalTax, updateTotal] = useState(0);

  function displayTotalTax() {
    let totalTax = calculateTax({ income: formFields.income, age: formFields.age, investment: formFields.investment, year: formFields.year });

    updateTotal(totalTax);
  }
  function resetFeilds() {
    console.log('Reset Begins');
    createChangeHandler('income', '');
    createChangeHandler('investment', '');
    createChangeHandler('age', '');
    createChangeHandler('year', '');
    updateTotal(0);
  }
  return (
    <UserContext.Consumer>
      {id => (
        <div className="verticalCenterwrapper">
          <form className="form-container">
            <InputIncomeFeild
              id="income"
              value={formFields.income}
              placeholder="Enter your Income"
              labelText="Income"
              handleChange={e => createChangeHandler('income', e.target.value)}
              testid="income"
            />
            <InputIncomeFeild
              id="investment"
              value={formFields.investment}
              placeholder="Enter your Investment"
              labelText="Invest"
              handleChange={e => createChangeHandler('investment', e.target.value)}
              testid="investment"
            />
            <InputFeild
              id="age"
              labelText="Age"
              value={formFields.age}
              handleChange={e => createChangeHandler('age', e.target.value)}
              placeholder="Enter your age"
              testid="age"
            />
            <InputFeild
              id="year"
              labelText="Year"
              value={formFields.year}
              handleChange={e => createChangeHandler('year', e.target.value)}
              placeholder="Enter the year"
              testid="year"
            />
            <button type="button" onClick={displayTotalTax} data-testid="calculateTax">
              calculateTax
            </button>

            <h4 data-testid="totalTax">Total Tax : {totalTax}</h4>

            <button
              type="button"
              onClick={() => {
                saveTaxInfo({
                  income: formFields.income,
                  age: formFields.age,
                  investment: formFields.investment,
                  year: formFields.year,
                  totalTax: totalTax,
                  userId: id
                });
                resetFeilds();
              }}
            >
              Save tax info
            </button>
          </form>
        </div>
      )}
    </UserContext.Consumer>
  );
}
