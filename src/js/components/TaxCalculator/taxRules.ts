let taxRules = new Map();
taxRules.set('2018', {
  incomeRanges: [
    { maxLimit: 100000, percent: 0 },
    { maxLimit: 400000, percent: 10 },
    { maxLimit: 500000, percent: 20 },
    { maxLimit: 1000001, percent: 30 }
  ],
  age: null,
  cess: { tax: 500000, percent: 1 }
});

taxRules.set('2019', {
  incomeRanges: [
    { maxLimit: 100000, percent: 0 },
    { maxLimit: 500000, percent: 10 },
    { maxLimit: 600000, percent: 20 },
    { maxLimit: 1200001, percent: 30 }
  ],
  age: { minimum: 61, rebate: 50000 },
  cess: { tax: 500000, percent: 2 }
});

taxRules.set('2020', {
  incomeRanges: [
    { maxLimit: 100000, percent: 0 },
    { maxLimit: 900000, percent: 15 },
    { maxLimit: 1000001, percent: 25 }
  ],

  age: { minimum: 61, rebate: 75000 },
  cess: { tax: 500000, percent: 5 }
});

export default taxRules;
