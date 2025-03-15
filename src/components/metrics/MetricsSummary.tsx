
import HealthMetric from "@/components/ui/HealthMetric";
import { Activity, Heart, TrendingDown } from "lucide-react";

interface MetricsSummaryProps {
  // Empty for now, could add props for dynamic data later
}

const MetricsSummary = ({}: MetricsSummaryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <HealthMetric 
        title="Pressão Arterial"
        value="120/80" 
        unit="mmHg"
        status="normal"
        change={{ value: "-5", direction: "down" }}
        icon={<Heart className="h-4 w-4" />}
      />
      
      <HealthMetric 
        title="Glicemia"
        value="105" 
        unit="mg/dL"
        status="warning"
        change={{ value: "+8", direction: "up" }}
        icon={<Activity className="h-4 w-4" />}
      />
      
      <HealthMetric 
        title="Frequência Cardíaca"
        value="72" 
        unit="bpm"
        status="normal"
        change={{ value: "-3", direction: "down" }}
        icon={<TrendingDown className="h-4 w-4" />}
      />
    </div>
  );
};

export default MetricsSummary;
