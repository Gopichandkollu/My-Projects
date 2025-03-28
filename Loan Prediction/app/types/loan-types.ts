export interface LoanApplicationData {
  fullName: string
  age: number
  income: number
  creditScore: number
  loanAmount: number
  employmentStatus: string
  existingLoans: number
}

export interface LoanPredictionResult {
  isEligible: boolean
  approvedAmount: number
  requestedAmount: number
  creditScore: number
  income: number
  employmentStatus: string
  age: number
  existingLoans: number
  rejectionReasons: string[]
}

