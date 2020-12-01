import { calculateTaxOnIncomeRanges, calculateTax } from './taxCalculator';

describe('calculate the taxable income for a person', () => {
  // it('calculate Net tax for 2020 ranges', () => {
  //   let person = { year: '2020', taxableIncome: 3700000 };
  //   expect(calculateTaxOnIncomeRanges(person)).toBe(791250);
  // });
  // it('calculate Net tax for 2019 ranges', () => {
  //   let person = { year: '2019', taxableIncome: 750000 };
  //   expect(calculateTaxOnIncomeRanges(person)).toBe(80000);
  // });
  // it('calculate Net tax for 400000 in year 2018', () => {
  //   let person = { year: '2018', taxableIncome: 400000 };
  //   expect(calculateTaxOnIncomeRanges(person)).toBe(30000);
  // });
  test('calc tax with invest, age, and cess eligibility', () => {
    let person = { year: '2020', income: '3800000', age: '65', investment: '100000' };
    expect(calculateTax({ ...person })).toBe(830812.5);
  });
});
