import type { LoanPredictionResult } from "../types/loan-types"

export function getImprovementInstructions(result: LoanPredictionResult): string[] {
  const instructions: string[] = []

  // Generate personalized instructions based on rejection reasons
  for (const reason of result.rejectionReasons) {
    switch (reason) {
      case "low_credit_score":
        instructions.push(
          "Improve your credit score by paying bills on time, reducing credit card balances, and avoiding new credit applications. Consider requesting a free credit report to identify and address any errors. Aim for a credit score of at least 650 to improve your chances.",
        )
        break

      case "high_loan_to_income_ratio":
        const recommendedLoanAmount = Math.floor(result.income * 0.4)
        instructions.push(
          `Your requested loan amount (${result.requestedAmount.toLocaleString()}) is too high compared to your income. Consider applying for a smaller loan amount of around $${recommendedLoanAmount.toLocaleString()} or increasing your income through additional employment or side gigs.`,
        )
        break

      case "unemployed":
        instructions.push(
          "Secure stable employment before reapplying. Even part-time employment can improve your chances. Alternatively, if you have other sources of income like investments or rental properties, make sure to include these in your application.",
        )
        break

      case "age_outside_range":
        if (result.age < 21) {
          instructions.push(
            "Our loan products require applicants to be at least 21 years old. You can reapply when you reach this age, or consider having a co-signer who meets our age requirements.",
          )
        } else {
          instructions.push(
            "For applicants over 65, we recommend applying with a co-signer who is within our preferred age range (21-65) to improve your chances of approval.",
          )
        }
        break

      case "too_many_existing_loans":
        instructions.push(
          "You currently have too many existing loans. Consider paying off some of your current loans before applying again. Ideally, reduce your number of active loans to 2 or fewer to significantly improve your chances of approval.",
        )
        break

      default:
        instructions.push(
          "Review your application for accuracy and completeness. Make sure all information provided is correct and up-to-date.",
        )
    }
  }

  // Add general advice if no specific reasons were provided
  if (instructions.length === 0) {
    instructions.push(
      "While we couldn't approve your loan at this time, you can improve your chances by increasing your credit score, reducing existing debt, and ensuring stable employment.",
    )
  }

  // Add a timeframe recommendation
  instructions.push(
    "We recommend waiting at least 3 months before reapplying, giving you time to implement these improvements. During this time, avoid making multiple loan applications as this can negatively impact your credit score.",
  )

  return instructions
}

