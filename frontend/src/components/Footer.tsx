import { Sparkles, Mail, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold">MyFirstPlan</span>
            </div>
            <p className="text-sm text-foreground/70">
              Empowering young adults to take control of their financial future with simple, personalized guidance.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Learning Hub</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Glossary</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © 2025 MyFirstPlan. All rights reserved. Built with ❤️ for young adults.
            </p>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:hello@myfirstplan.com" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                hello@myfirstplan.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
