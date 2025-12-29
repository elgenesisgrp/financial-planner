import { Card } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CheckCircle2, TrendingUp, ExternalLink, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface Policy {
  id: string;
  name: string;
  category: string;
  priority: "High" | "Medium" | "Low";
  monthlyContribution: number;
  potentialReturn: string;
  timeframe: string;
  description: string;
  matchScore: number;
}

interface ResultsTableProps {
  visible: boolean;
}

export function ResultsTable({ visible }: ResultsTableProps) {
  const policies: Policy[] = [
    {
      id: "1",
      name: "High-Yield Savings Account",
      category: "Emergency Fund",
      priority: "High",
      monthlyContribution: 200,
      potentialReturn: "4.5% APY",
      timeframe: "Immediate",
      description: "Build a safety net for unexpected expenses",
      matchScore: 98
    },
    {
      id: "2",
      name: "Roth IRA",
      category: "Retirement",
      priority: "High",
      monthlyContribution: 500,
      potentialReturn: "7-10% annually",
      timeframe: "Long-term",
      description: "Tax-free retirement growth",
      matchScore: 95
    },
    {
      id: "3",
      name: "Index Fund Portfolio",
      category: "Investment",
      priority: "Medium",
      monthlyContribution: 300,
      potentialReturn: "8-12% annually",
      timeframe: "5+ years",
      description: "Diversified market exposure",
      matchScore: 88
    },
    {
      id: "4",
      name: "529 Education Plan",
      category: "Education",
      priority: "Low",
      monthlyContribution: 150,
      potentialReturn: "6-8% annually",
      timeframe: "Long-term",
      description: "Tax-advantaged education savings",
      matchScore: 75
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "";
    }
  };

  if (!visible) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">Step 2</span>
            </div>
            <h2 className="text-3xl sm:text-4xl mb-4">
              Your Personalized Financial Plan
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Based on your profile, here are the financial policies we recommend. Each option is tailored to help you reach your goals.
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl border-2">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Policy Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Monthly</TableHead>
                    <TableHead>Expected Return</TableHead>
                    <TableHead>Timeframe</TableHead>
                    <TableHead className="text-center">Match</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {policies.map((policy) => (
                    <TableRow key={policy.id} className="hover:bg-muted/30 transition-colors">
                      <TableCell>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">{policy.name}</p>
                            <p className="text-sm text-muted-foreground">{policy.description}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground border-secondary/30">
                          {policy.category}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getPriorityColor(policy.priority)}>
                          {policy.priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        ${policy.monthlyContribution}
                      </TableCell>
                      <TableCell className="text-primary">
                        {policy.potentialReturn}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {policy.timeframe}
                      </TableCell>
                      <TableCell className="text-center">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10">
                                <span className="text-sm text-primary">{policy.matchScore}%</span>
                                <Info className="h-3 w-3 text-primary" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>How well this matches your profile</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                          Learn More
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 flex-shrink-0">
                <Info className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg">Next Steps</h3>
                <p className="text-sm text-foreground/70">
                  Review each recommendation and explore our learning hub below to understand how these policies work. 
                  Our AI advisor is also here to answer any questions you have!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
