// src/policyData.ts

export interface Policy {
  id: number;
  name: string;
  type: string; // e.g., "Investment", "Health", "Savings"
  minAge: number;
  minIncome: number;
  minBudget: number; // Monthly budget
  description: string;
}

export const policies: Policy[] = [
  {
    id: 1,
    name: "Young Starter Life",
    type: "Life Insurance",
    minAge: 18,
    minIncome: 0, 
    minBudget: 50,
    description: "Affordable term life coverage for students and first-jobbers."
  },
  {
    id: 2,
    name: "Wealth Builder Plus",
    type: "Investment",
    minAge: 21,
    minIncome: 2500,
    minBudget: 200,
    description: "A unit-trust based plan for long term capital growth."
  },
  {
    id: 3,
    name: "Fresh Grad Medical",
    type: "Health",
    minAge: 18,
    minIncome: 1500,
    minBudget: 100,
    description: "Comprehensive medical card with low deductible."
  }
];