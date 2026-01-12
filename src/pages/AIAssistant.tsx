import { Sparkles } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { InsightPane } from "@/components/ai/InsightPane";
import { ChatContainer } from "@/components/ai/ChatContainer";
import { Button } from "@/components/ui/button";

export default function AIAssistant() {
  return (
    <MainLayout title="AI Retail Assistant">
      <div className="mb-6">
        <p className="text-muted-foreground">
          Get intelligent insights and recommendations based on your store analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <InsightPane />
        <ChatContainer />
      </div>

      <div className="flex justify-center">
        <Button 
          size="lg" 
          className="gap-2"
          id="generate-suggestions-btn"
        >
          <Sparkles className="w-5 h-5" />
          Generate Suggestions
        </Button>
      </div>
    </MainLayout>
  );
}
