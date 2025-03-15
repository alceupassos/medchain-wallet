import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import BloodPressureChart from '@/components/metrics/BloodPressureChart';
import GlucoseChart from '@/components/metrics/GlucoseChart';
import HeartRateChart from '@/components/metrics/HeartRateChart';
import WeightChart from '@/components/metrics/WeightChart';
import MetricsSummary from '@/components/metrics/MetricsSummary';
import AddMetricForm from '@/components/metrics/AddMetricForm';
import MetricGoals from '@/components/metrics/MetricGoals';
import MetricCorrelation from '@/components/metrics/MetricCorrelation';
import MetricsControlPanel from '@/components/metrics/MetricsControlPanel';
import ImportMetricsModal from '@/components/metrics/ImportMetricsModal';
import { HealthGoal, HealthMetric } from '@/components/profile/types';
import { bloodPressureData, glucoseData, heartRateData, weightData } from '@/data/metricsData';
import { Download, FileUp, BarChart3, Goal, Share2, Bell, Plus } from 'lucide-react';

const Metrics = () => {
  const { toast } = useToast();
  const [timeRange, setTimeRange] = useState("7d");
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [selectedCorrelation, setSelectedCorrelation] = useState({
    primary: "heartRate",
    secondary: "bloodPressure"
  });
  
  const correlationData = Array.from({ length: 14 }, (_, i) => ({
    date: `${i+1}/06`,
    metric1Value: 75 + Math.random() * 10,
    metric2Value: 120 + Math.random() * 20
  }));
  
  const healthGoals: HealthGoal[] = [
    {
      id: "1",
      metricName: "Peso",
      currentValue: "82 kg",
      targetValue: "75 kg",
      startDate: "01/05/2023",
      targetDate: "01/08/2023",
      progress: 40,
      status: "Em andamento"
    },
    {
      id: "2",
      metricName: "Pressão Arterial",
      currentValue: "130/85",
      targetValue: "120/80",
      startDate: "15/05/2023",
      targetDate: "15/07/2023",
      progress: 60,
      status: "Em andamento"
    },
    {
      id: "3",
      metricName: "Passos Diários",
      currentValue: "8.000",
      targetValue: "10.000",
      startDate: "01/06/2023",
      targetDate: "30/06/2023",
      progress: 80,
      status: "Em andamento"
    },
  ];
  
  const availableMetrics = [
    { id: "heartRate", name: "Frequência Cardíaca" },
    { id: "bloodPressure", name: "Pressão Arterial" },
    { id: "glucose", name: "Glicemia" },
    { id: "weight", name: "Peso" },
    { id: "steps", name: "Passos" },
    { id: "sleep", name: "Horas de Sono" }
  ];
  
  const onAddMetric = (data: any) => {
    toast({
      title: "Métrica adicionada",
      description: `${data.metric}: ${data.value} ${data.unit}`,
    });
  };
  
  const handleImportMetrics = (source: string, metrics: string[]) => {
    toast({
      title: "Dados importados com sucesso",
      description: `Importados ${metrics.length} métricas de ${source}`,
    });
  };
  
  const handleGenerateReport = () => {
    toast({
      title: "Relatório gerado",
      description: "O relatório foi gerado e está disponível para download",
    });
  };
  
  const handleSetGoal = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "A definição de novas metas estará disponível em breve",
    });
  };
  
  const handleSetAlert = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "A configuração de alertas estará disponível em breve",
    });
  };
  
  const handleShareMetrics = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "O compartilhamento de métricas estará disponível em breve",
    });
  };
  
  const handleCorrelationChange = (metricId: string, position: 'primary' | 'secondary') => {
    setSelectedCorrelation(prev => ({
      ...prev,
      [position]: metricId
    }));
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
            <AddMetricForm onAddMetric={onAddMetric} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-6">
          <div className="space-y-6">
            <MetricsSummary />
            
            <Tabs defaultValue="blood-pressure" className="w-full">
              <TabsList className="w-full md:w-auto mb-4">
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
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <MetricGoals 
                goals={healthGoals} 
                onAddGoal={handleSetGoal}
              />
              
              <Card>
                <CardHeader>
                  <CardTitle>Tendências Recentes</CardTitle>
                  <CardDescription>
                    Análise automatizada das suas métricas de saúde
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Insights</h4>
                    <ul className="space-y-2">
                      <li className="text-sm bg-muted p-2 rounded-md">
                        Sua pressão arterial sistólica está 5% mais baixa que o mês anterior.
                      </li>
                      <li className="text-sm bg-muted p-2 rounded-md">
                        Sua frequência cardíaca média está dentro da faixa ideal para sua idade.
                      </li>
                      <li className="text-sm bg-muted p-2 rounded-md">
                        Seu nível de glicose apresenta padrão estável nos últimos 15 dias.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Sugestões</h4>
                    <ul className="space-y-2">
                      <li className="text-sm bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 p-2 rounded-md">
                        Continue com a atividade física regular para manter os níveis de pressão.
                      </li>
                      <li className="text-sm bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 p-2 rounded-md">
                        Considere medir a glicemia antes e depois das refeições para análise mais detalhada.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <MetricCorrelation
              data={correlationData}
              metrics={availableMetrics}
              selectedMetrics={selectedCorrelation}
              onMetricChange={handleCorrelationChange}
              correlationStrength={0.65}
              correlationDirection="positive"
            />
          </div>
          
          <div className="space-y-6">
            <MetricsControlPanel
              onTimeRangeChange={setTimeRange}
              onGenerateReport={handleGenerateReport}
              onSetGoal={handleSetGoal}
              onSetAlert={handleSetAlert}
              onShareMetrics={handleShareMetrics}
            />
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Últimas Medições</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2">
                {heartRateData.slice(0, 3).map((data, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2 text-sm border-b last:border-0">
                    <div>
                      <div className="font-medium">Freq. Cardíaca</div>
                      <div className="text-xs text-muted-foreground">{data.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono">{data.rest} bpm</div>
                      <div className="text-xs text-green-600 dark:text-green-400">Normal</div>
                    </div>
                  </div>
                ))}
                
                {bloodPressureData.slice(0, 2).map((data, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2 text-sm border-b last:border-0">
                    <div>
                      <div className="font-medium">Pressão Arterial</div>
                      <div className="text-xs text-muted-foreground">{data.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono">{data.systolic}/{data.diastolic} mmHg</div>
                      <div className="text-xs text-yellow-600 dark:text-yellow-400">Alerta</div>
                    </div>
                  </div>
                ))}
                
                <Button variant="ghost" size="sm" className="w-full mt-2 text-xs">
                  Ver todas as medições
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Conectar Dispositivos</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-3">
                <div className="flex items-start justify-between p-2 text-sm rounded-md border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div>Apple Watch</div>
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    Conectado
                  </div>
                </div>
                
                <div className="flex items-start justify-between p-2 text-sm rounded-md border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div>Medidor de Pressão</div>
                  </div>
                  <div className="text-xs text-red-600 dark:text-red-400">
                    Desconectado
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full mt-2" onClick={() => setImportModalOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Dispositivo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <ImportMetricsModal 
        open={importModalOpen}
        onOpenChange={setImportModalOpen}
        onImport={handleImportMetrics}
      />
    </MainLayout>
  );
};

export default Metrics;
