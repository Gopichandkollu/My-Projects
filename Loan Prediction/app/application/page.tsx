"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { predictLoanEligibility } from "@/app/actions/loan-actions"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  age: z.string().refine(
    (val) => {
      const num = Number.parseInt(val)
      return !isNaN(num) && num >= 18 && num <= 100
    },
    { message: "Age must be between 18 and 100." },
  ),
  income: z.string().refine(
    (val) => {
      const num = Number.parseInt(val)
      return !isNaN(num) && num > 0
    },
    { message: "Income must be a positive number." },
  ),
  creditScore: z.string().refine(
    (val) => {
      const num = Number.parseInt(val)
      return !isNaN(num) && num >= 300 && num <= 850
    },
    { message: "Credit score must be between 300 and 850." },
  ),
  loanAmount: z.string().refine(
    (val) => {
      const num = Number.parseInt(val)
      return !isNaN(num) && num > 0
    },
    { message: "Loan amount must be a positive number." },
  ),
  employmentStatus: z.string({
    required_error: "Please select an employment status.",
  }),
  existingLoans: z.string().refine(
    (val) => {
      const num = Number.parseInt(val)
      return !isNaN(num) && num >= 0
    },
    { message: "Existing loans must be a non-negative number." },
  ),
})

export default function ApplicationPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      age: "",
      income: "",
      creditScore: "",
      loanAmount: "",
      employmentStatus: "",
      existingLoans: "0",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const result = await predictLoanEligibility({
        fullName: values.fullName,
        age: Number.parseInt(values.age),
        income: Number.parseInt(values.income),
        creditScore: Number.parseInt(values.creditScore),
        loanAmount: Number.parseInt(values.loanAmount),
        employmentStatus: values.employmentStatus,
        existingLoans: Number.parseInt(values.existingLoans),
      })

      // Navigate to results page with the prediction data
      router.push(`/results?data=${encodeURIComponent(JSON.stringify(result))}`)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Loan Application</CardTitle>
            <CardDescription>Please fill out the form below to check your loan eligibility.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="35" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="income"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Income ($)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="50000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="creditScore"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit Score</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="700" {...field} />
                        </FormControl>
                        <FormDescription>Score between 300-850</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="loanAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Amount ($)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="25000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="employmentStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select employment status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="part-time">Part-time</SelectItem>
                            <SelectItem value="self-employed">Self-employed</SelectItem>
                            <SelectItem value="unemployed">Unemployed</SelectItem>
                            <SelectItem value="retired">Retired</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="existingLoans"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Existing Loans</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Check Eligibility"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

