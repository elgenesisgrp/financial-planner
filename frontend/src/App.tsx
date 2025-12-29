import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StepsGuide } from "./components/StepsGuide";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { ResultsTable } from "./components/ResultsTable";
import { LearningHub } from "./components/LearningHub";
import { ChatbotAdvisor } from "./components/ChatbotAdvisor";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

interface FormData {
  age: string;
  income: number;
  savings: number;
  goal: string;
  riskTolerance: string;
}

export default function App() {
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = (data: FormData) => {
    toast.success("Plan Generated!", {
      description: "We've created a personalized financial plan based on your information.",
    });
    
    // Scroll to results after a brief delay
    setTimeout(() => {
      setShowResults(true);
      const resultsSection = document.getElementById("results");
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <StepsGuide />
        <PersonalInfoForm onSubmit={handleFormSubmit} />
        <div id="results">
          <ResultsTable visible={showResults} />
        </div>
        <LearningHub />
        <ChatbotAdvisor />
      </main>

      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
