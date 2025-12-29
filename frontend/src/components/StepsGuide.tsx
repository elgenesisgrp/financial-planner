import { ClipboardList, LineChart, GraduationCap, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";

export function StepsGuide() {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Enter Your Info",
      description: "Tell us about yourself - your age, income, goals, and what you want to achieve financially.",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      number: "02",
      icon: LineChart,
      title: "Get Your Plans",
      description: "Receive personalized financial policy recommendations tailored to your unique situation and goals.",
      color: "from-cyan-400 to-cyan-600",
      bgColor: "bg-cyan-50"
    },
    {
      number: "03",
      icon: GraduationCap,
      title: "Learn & Apply",
      description: "Access simple guides and resources to understand your options and take action with confidence.",
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-foreground/70">
            Getting started with your financial journey is simple. Follow these three easy steps to build your personalized plan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -z-10" 
               style={{ width: 'calc(100% - 12rem)', left: '6rem' }} />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {step.number}
                    </span>
                    <h3 className="text-xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70">
                    {step.description}
                  </p>
                </div>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-primary">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
