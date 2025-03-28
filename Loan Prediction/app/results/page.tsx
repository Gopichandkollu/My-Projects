"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle, XCircle, ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { LoanPredictionResult } from "@/app/types/loan-types"
import { getImprovementInstructions } from "@/app/utils/loan-utils"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const [result, setResult] = useState<LoanPredictionResult | null>(null)
  const [instructions, setInstructions] = useState<string[]>([])

  useEffect(() => {
    const data = searchParams.get("data")
    if (data) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(data)) as LoanPredictionResult
        setResult(parsedData)

        if (!parsedData.isEligible) {
          setInstructions(getImprovementInstructions(parsedData))
        }
      } catch (error) {
        console.error("Error parsing data:", error)
      }
    }
  }, [searchParams])

  if (!result) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold">Loading results...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Loan Eligibility Results</CardTitle>
            <CardDescription>
              Based on the information you provided, here are your loan eligibility results.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center justify-center text-center p-6 bg-muted/20 rounded-lg">
              {result.isEligible ? (
                <>
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h2 className="text-2xl font-bold text-green-600 mb-2">Congratulations!</h2>
                  <p className="text-lg">You are eligible for a loan of ${result.approvedAmount.toLocaleString()}</p>
                </>
              ) : (
                <>
                  <XCircle className="h-16 w-16 text-red-500 mb-4" />
                  <h2 className="text-2xl font-bold text-red-600 mb-2">Not Eligible</h2>
                  <p className="text-lg">Unfortunately, you are not eligible for a loan at this time.</p>
                </>
              )}
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-4">Application Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Credit Score</p>
                  <p className="font-medium">{result.creditScore}</p>
                </div>
                <div className="p-4 bg-muted/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Annual Income</p>
                  <p className="font-medium">${result.income.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-muted/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Requested Amount</p>
                  <p className="font-medium">${result.requestedAmount.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-muted/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Employment Status</p>
                  <p className="font-medium">{result.employmentStatus}</p>
                </div>
              </div>
            </div>

            {!result.isEligible && instructions.length > 0 && (
              <>
                <Separator />

                <Alert className="bg-blue-50 border-blue-200">
                  <AlertTitle className="text-blue-800">How to improve your chances</AlertTitle>
                  <AlertDescription className="text-blue-700">
                    Follow these personalized instructions to improve your loan eligibility.
                  </AlertDescription>
                </Alert>

                <Accordion type="single" collapsible className="w-full">
                  {instructions.map((instruction, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">Improvement Step {index + 1}</AccordionTrigger>
                      <AccordionContent>
                        <p>{instruction}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </>
            )}
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4">
            <Link href="/application" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Application
              </Button>
            </Link>
            {result.isEligible ? (
              <Link href="/approved" className="w-full sm:w-auto">
                <Button className="w-full">
                  Continue to Loan Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link href="/" className="w-full sm:w-auto">
                <Button className="w-full">
                  Return to Home
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

