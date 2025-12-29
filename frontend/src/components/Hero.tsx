import { ArrowRight, TrendingUp, Shield, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(107 155 209 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`
      }} />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-primary/20">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground/80">Financial Planning Made Simple</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl">
                Your First Step to
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Financial Freedom
                </span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl">
                Welcome to MyFirstPlan! We help young adults aged 18-30 navigate their financial journey with personalized plans, simple guides, and expert advice.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                Start Planning Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Watch How It Works
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm">Secure</p>
                  <p className="text-xs text-muted-foreground">100% Private</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20">
                  <Lightbulb className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm">Smart</p>
                  <p className="text-xs text-muted-foreground">AI-Powered</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758272960256-45397872790b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHlvdW5nJTIwcGVvcGxlJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzYxNjE4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy young people planning their finances"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
