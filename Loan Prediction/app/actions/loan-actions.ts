"use server"

import type { LoanApplicationData, LoanPredictionResult } from "../types/loan-types"

export async function predictLoanEligibility(data: LoanApplicationData): Promise<LoanPredictionResult> {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Calculate eligibility based on various factors
  let isEligible = true
  const reasons: string[] = []

  // Credit score check
  if (data.creditScore < 650) {
    isEligible = false
    reasons.push("low_credit_score")
  }

  // Income to loan amount ratio check (simplified)
  const incomeToLoanRatio = data.loanAmount / data.income
  if (incomeToLoanRatio > 0.5) {
    isEligible = false
    reasons.push("high_loan_to_income_ratio")
  }

  // Employment status check
  if (data.employmentStatus === "unemployed") {
    isEligible = false
    reasons.push("unemployed")
  }

  // Age check (simplified)
  if (data.age < 21 || data.age > 65) {
    isEligible = false
    reasons.push("age_outside_range")
  }

  // Existing loans check
  if (data.existingLoans > 2) {
    isEligible = false
    reasons.push("too_many_existing_loans")
  }

  // Calculate approved amount (if eligible)
  // For ineligible applications, we'll still calculate what they might get if they were eligible
  let approvedAmount = data.loanAmount
  if (data.creditScore < 700) {
    approvedAmount = Math.floor(data.loanAmount * 0.8) // Reduce by 20% for lower credit scores
  }

  // Cap the loan amount based on income
  const maxLoanBasedOnIncome = data.income * 0.4
  if (approvedAmount > maxLoanBasedOnIncome) {
    approvedAmount = Math.floor(maxLoanBasedOnIncome)
  }

  return {
    isEligible,
    approvedAmount: isEligible ? approvedAmount : 0,
    requestedAmount: data.loanAmount,
    creditScore: data.creditScore,
    income: data.income,
    employmentStatus: data.employmentStatus,
    age: data.age,
    existingLoans: data.existingLoans,
    rejectionReasons: isEligible ? [] : reasons,
  }
}

