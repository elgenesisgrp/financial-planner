import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { MessageCircle, Send, Bot, User, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function ChatbotAdvisor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi there! 👋 I'm your AI financial advisor. I'm here to help you understand financial concepts, answer questions about your plan, and guide you on your journey to financial freedom. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "What's compound interest?",
    "How do I start saving?",
    "Explain index funds",
    "What's a good budget?"
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        "compound": "Compound interest is when you earn interest on your interest! For example, if you invest $100 at 10% annual interest, you'll have $110 after year 1. In year 2, you earn 10% on $110 (not just $100), giving you $121. It's like a snowball effect that helps your money grow faster over time. That's why starting early is so powerful! 📈",
        "saving": "Great question! Start with the 50/30/20 rule: 50% of income for needs, 30% for wants, and 20% for savings. Begin with small, automatic transfers to a high-yield savings account. Even $50/month adds up! First goal: build a $1,000 emergency fund, then work toward 3-6 months of expenses. You've got this! 💪",
        "index": "Index funds are like buying a slice of the entire market in one purchase! Instead of picking individual stocks, you own tiny pieces of hundreds or thousands of companies. They're great for beginners because they're automatically diversified, have low fees, and require minimal maintenance. Think of it as buying the whole pizza instead of trying to pick the best slice! 🍕",
        "budget": "A good budget is one you'll actually stick to! The 50/30/20 rule is popular: 50% for essentials (rent, food, utilities), 30% for lifestyle (entertainment, dining out), and 20% for savings/debt. But the key is tracking your spending first to see where your money really goes. Then adjust to fit your goals. Apps can help automate this! 📱"
      };

      const responseKey = Object.keys(responses).find(key => input.toLowerCase().includes(key));
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responseKey 
          ? responses[responseKey]
          : "That's a great question! Based on your financial profile, I'd recommend focusing on building your emergency fund first, then exploring investment options that match your risk tolerance. Would you like specific recommendations for your situation? Feel free to ask about any financial topic - I'm here to help! 😊",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <section id="advisor" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">AI-Powered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl mb-4">
              Chat with Your AI Advisor
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have questions? Our friendly AI advisor is here 24/7 to help you understand financial concepts and guide your decisions.
            </p>
          </div>

          <Card className="overflow-hidden shadow-2xl border-2">
            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg">Financial Advisor Bot</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-white/90">Online</span>
                  </div>
                </div>
              </div>
            </div>

            <ScrollArea className="h-96 p-6 bg-gradient-to-b from-muted/20 to-white">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8 bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                        <AvatarFallback className="bg-transparent">
                          <Bot className="h-4 w-4 text-white" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-sm ${
                        message.role === "user"
                          ? "bg-primary text-white"
                          : "bg-white border border-border shadow-sm"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8 bg-gradient-to-br from-accent to-secondary flex-shrink-0">
                        <AvatarFallback className="bg-transparent">
                          <User className="h-4 w-4 text-white" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <Avatar className="h-8 w-8 bg-gradient-to-br from-primary to-secondary">
                      <AvatarFallback className="bg-transparent">
                        <Bot className="h-4 w-4 text-white" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="rounded-2xl px-4 py-3 bg-white border border-border shadow-sm">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 bg-muted/30 border-t border-border">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-white hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                    >
                      <Sparkles className="mr-1 h-3 w-3" />
                      {question}
                    </Button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask me anything about finance..."
                    className="flex-1 bg-white border-primary/20 focus:border-primary"
                  />
                  <Button onClick={handleSend} className="bg-primary hover:bg-primary/90">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              💡 Tip: The AI advisor provides general guidance. Always consult with a licensed financial professional for personalized advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
