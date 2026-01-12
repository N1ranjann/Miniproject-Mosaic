import { BarChart3, PieChart, TrendingUp, Activity } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ChartPlaceholder } from "@/components/analytics/ChartPlaceholder";

export default function Analytics() {
  return (
    <MainLayout title="Analytics">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartPlaceholder
          title="Footfall Distribution"
          type="Bar Chart Placeholder"
          icon={BarChart3}
          id="bar-chart-container"
          height="h-72"
        />
        
        <ChartPlaceholder
          title="Zone Performance"
          type="Pie Chart Placeholder"
          icon={PieChart}
          id="pie-chart-container"
          height="h-72"
        />
        
        <ChartPlaceholder
          title="Conversion Trends"
          type="Line Chart Placeholder"
          icon={TrendingUp}
          id="line-chart-container"
          height="h-72"
        />
        
        <ChartPlaceholder
          title="Real-time Activity"
          type="Area Chart Placeholder"
          icon={Activity}
          id="area-chart-container"
          height="h-72"
        />
      </div>
    </MainLayout>
  );
}
