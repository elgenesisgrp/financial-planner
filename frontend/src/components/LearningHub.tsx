import { Card } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BookOpen, Video, FileText, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

export function LearningHub() {
  const guides = [
    {
      title: "Emergency Fund 101",
      category: "Beginner",
      duration: "5 min read",
      description: "Learn why an emergency fund is your first step to financial security and how to build one.",
      icon: "📊"
    },
    {
      title: "Understanding Retirement Accounts",
      category: "Intermediate",
      duration: "8 min read",
      description: "Discover the differences between 401(k), IRA, and Roth IRA accounts.",
      icon: "🎯"
    },
    {
      title: "Investing Basics for Beginners",
      category: "Beginner",
      duration: "10 min read",
      description: "A simple guide to stocks, bonds, and index funds without the jargon.",
      icon: "💰"
    },
    {
      title: "Budgeting Made Easy",
      category: "Beginner",
      duration: "6 min read",
      description: "Learn the 50/30/20 rule and create a budget that actually works.",
      icon: "📝"
    }
  ];

  const faqs = [
    {
      question: "How much should I save for an emergency fund?",
      answer: "Financial experts recommend saving 3-6 months of living expenses. As a beginner, start with $1,000 and build from there. This gives you a safety net for unexpected costs like car repairs or medical bills."
    },
    {
      question: "When should I start investing?",
      answer: "The best time to start is now! Even small amounts matter thanks to compound interest. Start with your employer's 401(k) match (it's free money!), then consider opening a Roth IRA. Begin with index funds for automatic diversification."
    },
    {
      question: "What's the difference between saving and investing?",
      answer: "Saving is for short-term goals and emergencies - money you might need soon goes in a high-yield savings account. Investing is for long-term goals (5+ years) where your money can grow through stocks, bonds, or funds, though with some risk."
    },
    {
      question: "How do I choose the right financial policy?",
      answer: "Start with your goals and timeline. Emergency funds come first, then retirement savings. Consider your risk tolerance and how long you can keep money invested. Our personalized recommendations above are tailored to your specific situation."
    },
    {
      question: "Is it safe to share my financial information?",
      answer: "We take your privacy seriously. All data is encrypted and never shared with third parties. We only use your information to generate personalized recommendations. You can delete your data at any time."
    }
  ];

  return (
    <section id="learning" className="py-20 bg-gradient-to-br from-muted/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">Step 3</span>
            </div>
            <h2 className="text-3xl sm:text-4xl mb-4">
              Learning Hub
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore simple, beginner-friendly guides to help you understand financial concepts and make informed decisions.
            </p>
          </div>

          <Tabs defaultValue="guides" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-muted/50">
              <TabsTrigger value="guides" className="gap-2">
                <FileText className="h-4 w-4" />
                Guides
              </TabsTrigger>
              <TabsTrigger value="videos" className="gap-2">
                <Video className="h-4 w-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="faqs" className="gap-2">
                <BookOpen className="h-4 w-4" />
                FAQs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {guides.map((guide, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer group">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="text-4xl">{guide.icon}</div>
                        <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground border-secondary/30">
                          {guide.category}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg group-hover:text-primary transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-foreground/70">
                          {guide.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <TrendingUp className="h-3 w-3" />
                        <span>{guide.duration}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="overflow-hidden hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer group">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1758686254415-9348b5b5df01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMGJ1ZGdldHxlbnwxfHx8fDE3NjE2MTg2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Financial planning video thumbnail"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Video className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="group-hover:text-primary transition-colors">
                        Financial Planning Video {item}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        Quick video explaining key financial concepts in simple terms.
                      </p>
                      <p className="text-xs text-muted-foreground">Duration: 3-5 minutes</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faqs">
              <Card className="p-8 shadow-lg border-2">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 last:border-0">
                      <AccordionTrigger className="text-left hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
