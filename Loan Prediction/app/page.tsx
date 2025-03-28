import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Loan Eligibility Predictor</h1>
          <p className="text-lg text-muted-foreground">
            Find out if you qualify for a loan and get personalized guidance
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome to the Loan Eligibility Predictor</CardTitle>
            <CardDescription>
              Our advanced algorithm will analyze your information and determine your loan eligibility. If you're not
              eligible, we'll provide personalized instructions to help you improve your chances.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-medium">1</span>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-base font-medium">Complete the application</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the loan application form with your personal and financial information.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-medium">2</span>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-base font-medium">Get instant results</h3>
                  <p className="text-sm text-muted-foreground">
                    Our system will instantly analyze your information and determine your eligibility.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-base font-medium">Receive personalized guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    If you're not eligible, we'll provide specific instructions to help improve your chances.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/application" className="w-full">
              <Button className="w-full">
                Start Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

