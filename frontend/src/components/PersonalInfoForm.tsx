import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { Calculator, Sparkles } from "lucide-react";

interface FormData {
  age: string;
  income: number;
  savings: number;
  goal: string;
  riskTolerance: string;
}

interface PersonalInfoFormProps {
  onSubmit: (data: FormData) => void;
}

export function PersonalInfoForm({ onSubmit }: PersonalInfoFormProps) {
  const [formData, setFormData] = useState<FormData>({
    age: "",
    income: 30000,
    savings: 5000,
    goal: "",
    riskTolerance: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <Calculator className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">Step 1</span>
            </div>
            <h2 className="text-3xl sm:text-4xl mb-4">
              Tell Us About Yourself
            </h2>
            <p className="text-lg text-foreground/70">
              Help us understand your financial situation so we can create a personalized plan just for you.
            </p>
          </div>

          <Card className="p-8 sm:p-10 shadow-xl border-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="bg-input-background border-primary/20 focus:border-primary"
                    required
                    min="18"
                    max="30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goal">Primary Financial Goal</Label>
                  <Select value={formData.goal} onValueChange={(value: any) => setFormData({ ...formData, goal: value })}>
                    <SelectTrigger id="goal" className="bg-input-background border-primary/20">
                      <SelectValue placeholder="Select a goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency-fund">Build Emergency Fund</SelectItem>
                      <SelectItem value="house">Save for a House</SelectItem>
                      <SelectItem value="retirement">Start Retirement Planning</SelectItem>
                      <SelectItem value="debt">Pay Off Debt</SelectItem>
                      <SelectItem value="investment">Start Investing</SelectItem>
                      <SelectItem value="education">Further Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>Annual Income</Label>
                  <span className="text-sm bg-primary/10 px-3 py-1 rounded-full text-primary">
                    ${formData.income.toLocaleString()}
                  </span>
                </div>
                <Slider
                  value={[formData.income]}
                  onValueChange={(value: any) => setFormData({ ...formData, income: value[0] })}
                  min={15000}
                  max={150000}
                  step={5000}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$15,000</span>
                  <span>$150,000</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>Current Savings</Label>
                  <span className="text-sm bg-secondary/20 px-3 py-1 rounded-full text-secondary-foreground">
                    ${formData.savings.toLocaleString()}
                  </span>
                </div>
                <Slider
                  value={[formData.savings]}
                  onValueChange={(value: any) => setFormData({ ...formData, savings: value[0] })}
                  min={0}
                  max={50000}
                  step={1000}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$0</span>
                  <span>$50,000+</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="risk">Risk Tolerance</Label>
                <Select value={formData.riskTolerance} onValueChange={(value) => setFormData({ ...formData, riskTolerance: value })}>
                  <SelectTrigger id="risk" className="bg-input-background border-primary/20">
                    <SelectValue placeholder="How comfortable are you with risk?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">Conservative - I prefer safe, steady growth</SelectItem>
                    <SelectItem value="moderate">Moderate - I'm okay with some ups and downs</SelectItem>
                    <SelectItem value="aggressive">Aggressive - I want maximum growth potential</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 group">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Generate My Plan
                </Button>
              </div>
            </form>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              🔒 Your information is completely private and secure. We never share your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
