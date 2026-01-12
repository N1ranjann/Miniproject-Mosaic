import { Users, Clock, TrendingUp, MapPin } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { HeatmapContainer } from "@/components/dashboard/HeatmapContainer";

export default function Dashboard() {
  return (
    <MainLayout title="Dashboard">
      {/* Metric Tiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard title="Total Footfall" icon={Users} />
        <MetricCard title="Average Dwell Time" icon={Clock} />
        <MetricCard title="Conversion Rate" icon={TrendingUp} />
        <MetricCard title="Active Zones" icon={MapPin} />
      </div>

      {/* Heatmap Section */}
      <HeatmapContainer />
    </MainLayout>
  );
}
