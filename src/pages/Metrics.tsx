
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BloodPressureChart from '@/components/metrics/BloodPressureChart';
import GlucoseChart from '@/components/metrics/GlucoseChart';
import HeartRateChart from '@/components/metrics/HeartRateChart';
import WeightChart from '@/components/metrics/WeightChart';
import MetricsSummary from '@/components/metrics/MetricsSummary';
import AddMetricForm from '@/components/metrics/AddMetricForm';
import { bloodPressureData, glucoseData, heartRateData, weightData } from '@/data/metricsData';

const Metrics = () => {
  const [timeRange, setTimeRange] = useState("7d");
  
  const onAddMetric = (data) => {
    console.log(data);
    // Here you would typically add the metric to your state or database
  };

  return (
    <MainLayout>
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Métricas de Saúde</h1>
            <p className="text-muted-foreground">
              Monitore seus indicadores de saúde e visualize tendências
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Select defaultValue="month">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Última Semana</SelectItem>
                <SelectItem value="month">Último Mês</SelectItem>
                <SelectItem value="year">Último Ano</SelectItem>
              </SelectContent>
            </Select>
            
            <AddMetricForm onAddMetric={onAddMetric} />
          </div>
        </div>
        
        <MetricsSummary />
        
        <Tabs defaultValue="blood-pressure" className="w-full">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="blood-pressure">Pressão Arterial</TabsTrigger>
            <TabsTrigger value="blood-glucose">Glicemia</TabsTrigger>
            <TabsTrigger value="heart-rate">Freq. Cardíaca</TabsTrigger>
            <TabsTrigger value="weight">Peso</TabsTrigger>
          </TabsList>
          
          <TabsContent value="blood-pressure">
            <BloodPressureChart data={bloodPressureData} />
          </TabsContent>
          
          <TabsContent value="blood-glucose">
            <GlucoseChart data={glucoseData} />
          </TabsContent>
          
          <TabsContent value="heart-rate">
            <HeartRateChart data={heartRateData} />
          </TabsContent>
          
          <TabsContent value="weight">
            <WeightChart data={weightData} />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Metrics;
