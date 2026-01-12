import { Lightbulb } from "lucide-react";

export function InsightPane() {
  return (
    <div className="metric-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-md bg-accent/10">
          <Lightbulb className="w-5 h-5 text-accent" />
        </div>
        <h3 className="font-medium text-foreground">AI Insights</h3>
      </div>
      
      <div className="insight-pane min-h-[300px]" id="insights-container">
        <div className="flex items-center justify-center h-full text-center">
          <div>
            <Lightbulb className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">
              Insights will populate here based on analytics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
