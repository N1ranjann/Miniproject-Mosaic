import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  icon: LucideIcon;
  children?: ReactNode;
}

export function MetricCard({ title, icon: Icon, children }: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-md bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-medium text-foreground">{title}</h3>
      </div>
      
      <div className="placeholder-container h-16">
        {children || (
          <span className="text-sm">Data will populate here</span>
        )}
      </div>
    </div>
  );
}
