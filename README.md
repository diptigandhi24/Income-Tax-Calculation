# Income Tax Calculator

## Context

As it's been few years since mankind has been living, earning and spending in the country of **Coderland**, governing body of the country have come up with rules and regulations for paying annual income tax for all individuals.

Now that they have successfully implemented it manually for some years, they are confident that the system will sustain. Though, to reduce the manual effort, they now want to automate it.

## Background

In the country of **Coderland**, the annual income tax for an individual is calculated based on their total earnings and investments for a given financial year according to rules that are predefined for financial year.

### Notes

- <span style="color:blue"> Luckily, Coderland's Financial Year is aligned to Calendar Year i.e. Jan-Dec. </span>
- <span style="color:blue"> Coincidentally, Coderland's Currency is INR (₹) </span>

### Rules

Here are rules for last three consecutive years:

##### 2018:

| Income Range             | Tax Percentage |
| ------------------------ | :------------- |
| < ₹ 1,00,000             | 0%             |
| ₹ 1,00,001 - ₹ 5,00,000  | 10%            |
| ₹ 5,00,001 - ₹ 10,00,000 | 20%            |
| > ₹ 10,00,000            | 30%            |

- <span style="color:blue"> One can reduce taxable income by investing in tax free Government Bonds up to ₹1,00,000. </span>
- <span style="color:blue"> If individual’s total tax is above ₹ 5,00,000 then they are charged cess of 1% on total tax amount. </span>

##### 2019:

| Income Range             | Tax Percentage |
| ------------------------ | :------------- |
| < ₹ 1,00,000             | 0%             |
| ₹ 1,00,001 - ₹ 6,00,000  | 10%            |
| ₹ 6,00,001 - ₹ 12,00,000 | 20%            |
| > ₹ 12,00,000            | 30%            |

- <span style="color:blue"> One can reduce taxable income by investing in tax free Government Bonds up to ₹1,50,000. </span>
- <span style="color:blue"> If individual’s total tax is above ₹ 5,00,000 then they are charged cess of 2% on total tax amount. </span>
- <span style="color:blue"> For Taxpayers above age 60, taxable income is reduced by 50,000 for purpose of calculations </span>

##### 2020:

| Income Range             | Tax Percentage |
| ------------------------ | :------------- |
| < ₹ 1,00,000             | 0%             |
| ₹ 1,00,001 - ₹ 10,00,000 | 15%            |
| > ₹ 10,00,000            | 25%            |

- <span style="color:blue"> One can reduce taxable income by investing in tax free Government Bonds up to ₹2,00,000. </span>
- <span style="color:blue"> If individual’s total tax is above ₹ 5,00,000 then they are charged cess of 5% on total tax amount. </span>
- <span style="color:blue"> For Taxpayers above age 60, taxable income is reduced by 75,000 for purpose of calculations </span>

### Examples

- <span style="color:green">Example 1:</span>

    <div style="color:green">

  For Duke (aged 25), who earns ₹ 8,25,000 per annum and invests ₹75,000 in tax free govt bonds his 2019 payable tax will be calculated as follows:

  After investment deduction

  net taxable income = ₹8,25,000 - ₹75,000 = ₹7,50,000

  out of which on first ₹1,00,00, tax is ₹0

  on next ₹5,00,000 tax is 10% i.e. ₹50,000

  and on remaining ₹1,50,000 tax is 20% i.e. ₹30,000

  so total tax payable would be ₹80,000

  total cess = ₹ 0

    </div>

- <span style="color:green">Example 2:</span>

    <div style="color:green">

  For Gopher (aged 65), who earns ₹ 38,00,000 per annum and invests ₹1,00,000 in tax free govt bonds. His 2020 payable tax will be calculated as follows:

  After investment deduction

  net taxable income = ₹38,00,000 - ₹1,00,000 = ₹37,00,000

  Because he is above 60, he is eligible for additional deduction

  net taxable income = ₹37,00,000 - ₹75,000 = ₹36,25,000

  out of which on first ₹1,00,00, tax is ₹0

  on next ₹9,00,000 tax is 15% i.e. ₹1,35,000

  and on remaining ₹26,25,000 tax is 25% i.e. ₹6,56,250

  so total tax payable would be ₹7,91,250

  since tax is above ₹5,00,000 additional 5% cess will be added

  so cess = ₹7,91,250 \* 5% = 39,562.5

  total tax + cess payable = ₹8,30,812.5

    </div>

## Problem Statement

For a given year, age of user, user's taxable income and total tax free investments, write a web application that can accept these as a user input:

`year,age,income,investment`

The application will return the calculated tax output to user on change of any input field. Please consider these talks when you are building this application,

- Do not use third part component library to build the UI. UI design should be material styled.
- Tax calculation should be visible on every change. User can save a calculation.
- The app should contain three screens.
  - Register/Login screen (Username & Password)
  - A dashboard shows last four tax calculation when they are saved (even when tabs are closed)
  - Tax calculation screen
- Choice of database is yours

## Important Points About Coding:

- The submission must have full unit test coverage.
- Prefer React with functional components. Building using typescript is good to have.
- Use webpack to build project.
- Design the solution considering future use case (as if writing production grade code, avoid if-else waterfalls).
- You would be asked to enhance the same solution for in-office interview.
- Ideally it should take 3-4 days to implement, if you need more time to inform us upfront.
- Accompany a Readme with instructions to execute your program.

**We value integrity the most in our potential candidates. Please do not share the coding problem or solution with any one. Avoid publishing your code in any public forum.**

## Submitting your solution

Please push your changes to the `master branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Complete task` link on <a href="https://app.codescreen.dev/#/codescreentestb2443a1b-d843-456e-85c5-5ebf716fc949" target="_blank">this screen</a>.

## Submitting your solution

Please push your changes to the `master branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Complete task` link on <a href="https://app.codescreen.dev/#/codescreentest3f4c3707-e9a7-445f-ae0e-f5a50cf82023" target="_blank">this screen</a>.
