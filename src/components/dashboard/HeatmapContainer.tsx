import { Map } from "lucide-react";

export function HeatmapContainer() {
  return (
    <div className="metric-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-md bg-accent/10">
          <Map className="w-5 h-5 text-accent" />
        </div>
        <h3 className="font-medium text-foreground">Store Heatmap</h3>
      </div>
      
      <div className="placeholder-container h-80" id="heatmap-container">
        <div className="text-center">
          <Map className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">
            Heatmap visualization will render here
          </p>
        </div>
      </div>
    </div>
  );
}
