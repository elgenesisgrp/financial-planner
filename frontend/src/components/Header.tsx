import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-foreground">MyFirstPlan</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#how-it-works" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#learning" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Learn
            </a>
            <a href="#advisor" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Advisor
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-foreground/80 hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
