import taxRules from './taxRules';

export function calcTaxableIncome(income: number, investment: number): number {
  let taxable = income - investment;
  return taxable;
}

interface DetailsForTaxRanges {
  year: string;
  taxableIncome: number;
}
function taxRebateOnAge(age: number, year: string, taxableIncome: number): number {
  if (taxRules.get(year)['age'] !== null && age >= taxRules.get(year)['age']['minimum']) {
    taxableIncome = taxableIncome - taxRules.get(year)['age']['rebate'];
  }
  return taxableIncome;
}
export function calculateTaxOnIncomeRanges({ year, taxableIncome }: DetailsForTaxRanges): number {
  let totalTax = 0;
  //arr of income slots
  let incomeRanges = taxRules.get(year)['incomeRanges'];

  let diffIncomeSlots = incomeRanges.length - 1;

  incomeRanges.forEach((income: { maxLimit: number; percent: number }, index: number) => {
    //if the taxable income is greater that current range of tax amount
    if (taxableIncome >= income.maxLimit) {
      //check if we have not reached to the maximum limit of tax ranges
      if (index !== diffIncomeSlots) {
        totalTax = totalTax + (income.maxLimit * income.percent) / 100;
        taxableIncome = taxableIncome - income.maxLimit;
      } else {
        totalTax = totalTax + (taxableIncome * income.percent) / 100;
        taxableIncome = 0;
      }
    } else {
      //else calculate the tax on entire money which is less than the current limit
      if (taxableIncome !== 0) {
        totalTax = totalTax + (taxableIncome * income.percent) / 100;
        taxableIncome = 0;
      }
    }
  });

  return totalTax;
}
function calcCess(totalTax: number, year: string): number {
  if (totalTax > taxRules.get(year).cess.tax) {
    let cess = (totalTax * taxRules.get(year).cess.percent) / 100;
    totalTax = totalTax + cess;
    return totalTax;
  } else {
    return totalTax;
  }
}
interface TaxDetails {
  age: string;
  income: string;
  investment: string;
  year: string;
}
export function calculateTax({ age, income, investment, year }: TaxDetails): number {
  //tax save on investment
  let taxableIncome = calcTaxableIncome(parseInt(income), parseInt(investment));
  // tax rebate on age
  taxableIncome = taxRebateOnAge(parseInt(age), year, taxableIncome);
  //calculate tax on net ranges
  let totalTax = calculateTaxOnIncomeRanges({ year, taxableIncome });
  // check the cess
  totalTax = calcCess(totalTax, year);
  return totalTax;
}
