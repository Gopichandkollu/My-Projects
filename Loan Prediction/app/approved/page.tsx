"use client"

import Link from "next/link"
import { CheckCircle, Download, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ApprovedPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Loan Approved!</CardTitle>
            <CardDescription>
              Congratulations! Your loan application has been approved. Here are the next steps.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-2">Loan Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Loan Amount</p>
                  <p className="font-medium">$25,000.00</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Interest Rate</p>
                  <p className="font-medium">5.75% APR</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Term</p>
                  <p className="font-medium">60 months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Payment</p>
                  <p className="font-medium">$479.70</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-4">Next Steps</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Review and sign your loan agreement</p>
                    <p className="text-sm text-muted-foreground">
                      Check your email for the loan agreement document. Review all terms and conditions before signing.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Provide additional documentation</p>
                    <p className="text-sm text-muted-foreground">
                      Submit proof of identity, income verification, and bank statements through our secure portal.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Receive your funds</p>
                    <p className="text-sm text-muted-foreground">
                      Once all documentation is verified, funds will be deposited into your account within 2-3 business
                      days.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="flex justify-center">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download Approval Letter
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/" className="w-full">
              <Button variant="secondary" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

