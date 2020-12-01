import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TaxCalcForm from './taxCalcForm';
import '@testing-library/jest-dom/extend-expect';
// import userEvent from '@testing-library/user-event';
// import { calculateTax } from '../TaxCalculator/taxCalculator';

describe('Render and test the form functionality', () => {
  it('All the form feilds are empty', () => {
    //render form
    const { getByTestId } = render(<TaxCalcForm />);
    const income = getByTestId('income');
    const age = getByTestId('age');
    const investment = getByTestId('investment');
    const year = getByTestId('year');
    const calculateTax = getByTestId('calculateTax');
    //check for empty feilds
    expect(income).toHaveTextContent('');

    expect(age).toHaveTextContent('');

    expect(investment).toHaveTextContent('');

    expect(year).toHaveTextContent('');

    //Fill up the form
    fireEvent.change(income, { target: { value: 3800000 } });
    expect(income).toHaveValue(3800000);

    fireEvent.change(investment, { target: { value: 100000 } });
    expect(investment).toHaveValue(100000);

    fireEvent.change(age, { target: { value: 65 } });
    expect(age).toHaveValue(65);

    fireEvent.change(year, { target: { value: 2020 } });
    expect(year).toHaveValue(2020);

    //calculate taxes
    fireEvent.click(calculateTax);

    //Total Tax
    const totalTax = getByTestId('totalTax');
    expect(totalTax).toHaveTextContent(830812.5);
  });
});
