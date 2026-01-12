import { LucideIcon } from "lucide-react";

interface ChartPlaceholderProps {
  title: string;
  type: string;
  icon: LucideIcon;
  height?: string;
  id?: string;
}

export function ChartPlaceholder({ 
  title, 
  type, 
  icon: Icon, 
  height = "h-64",
  id 
}: ChartPlaceholderProps) {
  return (
    <div className="metric-card" id={id}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-md bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-medium text-foreground">{title}</h3>
      </div>
      
      <div className={`placeholder-container ${height}`}>
        <div className="text-center">
          <Icon className="w-10 h-10 text-muted-foreground/50 mx-auto mb-3" />
          <p className="text-sm font-medium text-muted-foreground">{type}</p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Chart will mount here
          </p>
        </div>
      </div>
    </div>
  );
}
