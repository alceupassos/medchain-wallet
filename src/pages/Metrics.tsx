import { 
  Activity, 
  AlertCircle, 
  BarChart4, 
  CheckCircle, 
  Heart, 
  LineChart, 
  Plus, 
  TrendingDown, 
  TrendingUp 
} from 'lucide-react';
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Calendar, Activity, TrendingUp, TrendingDown, Heart, Weight, BarChart3, Droplets, Thermometer, Upload, Clock, PieChart } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

// Dados simulados de métricas
const bloodPressureData = [
  { date: "01/06", systolic: 120, diastolic: 80 },
  { date: "02/06", systolic: 118, diastolic: 78 },
  { date: "03/06", systolic: 122, diastolic: 82 },
  { date: "04/06", systolic: 125, diastolic: 85 },
  { date: "05/06", systolic: 121, diastolic: 79 },
  { date: "06/06", systolic: 119, diastolic: 77 },
  { date: "07/06", systolic: 117, diastolic: 75 },
  { date: "08/06", systolic: 115, diastolic: 76 },
  { date: "09/06", systolic: 120, diastolic: 80 },
  { date: "10/06", systolic: 123, diastolic: 83 },
];

const glucoseData = [
  { date: "01/06", glucose: 98 },
  { date: "02/06", glucose: 102 },
  { date: "03/06", glucose: 95 },
  { date: "04/06", glucose: 105 },
  { date: "05/06", glucose: 100 },
  { date: "06/06", glucose: 97 },
  { date: "07/06", glucose: 99 },
  { date: "08/06", glucose: 101 },
  { date: "09/06", glucose: 96 },
  { date: "10/06", glucose: 98 },
];

const weightData = [
  { date: "Jan", weight: 72.5 },
  { date: "Fev", weight: 72.1 },
  { date: "Mar", weight: 71.8 },
  { date: "Abr", weight: 71.2 },
  { date: "Mai", weight: 70.5 },
  { date: "Jun", weight: 70.0 },
];

const heartRateData = [
  { date: "01/06", rest: 65, activity: 105 },
  { date: "02/06", rest: 62, activity: 110 },
  { date: "03/06", rest: 64, activity: 112 },
  { date: "04/06", rest: 66, activity: 108 },
  { date: "05/06", rest: 63, activity: 115 },
  { date: "06/06", rest: 61, activity: 120 },
  { date: "07/06", rest: 62, activity: 118 },
  { date: "08/06", rest: 60, activity: 122 },
  { date: "09/06", rest: 63, activity: 117 },
  { date: "10/06", rest: 64, activity: 114 },
];

const currentMetrics = [
  {
    name: "Pressão Arterial",
    value: "120/80 mmHg",
    date: "Hoje, 08:30",
    status: "Normal",
    icon: <Activity className="h-5 w-5" />,
    trend: "stable",
    change: "2%"
  },
  {
    name: "Glicemia",
    value: "98 mg/dL",
    date: "Hoje, 08:45",
    status: "Normal",
    icon: <Droplets className="h-5 w-5" />,
    trend: "down",
    change: "3%"
  },
  {
    name: "Frequência Cardíaca",
    value: "64 bpm",
    date: "Hoje, 08:15",
    status: "Normal",
    icon: <Heart className="h-5 w-5" />,
    trend: "down",
    change: "1 bpm"
  },
  {
    name: "Peso",
    value: "70 kg",
    date: "Hoje, 07:30",
    status: "Normal",
    icon: <Weight className="h-5 w-5" />,
    trend: "down",
    change: "0.5 kg"
  },
  {
    name: "Temperatura",
    value: "36.5 °C",
    date: "Hoje, 08:00",
    status: "Normal",
    icon: <Thermometer className="h-5 w-5" />,
    trend: "stable",
    change: "0.1 °C"
  },
  {
    name: "Saturação O₂",
    value: "98%",
    date: "Hoje, 08:20",
    status: "Normal",
    icon: <Activity className="h-5 w-5" />,
    trend: "stable",
    change: "0%"
  },
  {
    name: "IMC",
    value: "22.3",
    date: "Hoje, 07:30",
    status: "Normal",
    icon: <PieChart className="h-5 w-5" />,
    trend: "stable",
    change: "0.1"
  },
  {
    name: "Colesterol",
    value: "185 mg/dL",
    date: "02/06/2023",
    status: "Normal",
    icon: <BarChart3 className="h-5 w-5" />,
    trend: "down",
    change: "5%"
  }
];

const MetricsPage = () => {
  const [timeRange, setTimeRange] = useState("7d");
  
  // Função para renderizar o ícone de tendência corretamente
  const renderTrendIcon = (trend: string) => {
    if (trend === "up") {
      return <TrendingUp className="h-4 w-4 text-red-500" />;
    } else if (trend === "down") {
      return <TrendingDown className="h-4 w-4 text-green-500" />;
    }
    return null;
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Métricas de Saúde</h1>
            <p className="text-muted-foreground">
              Monitore e analise seus indicadores de saúde
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="gap-2">
              <PlusCircle size={16} />
              Nova Medição
            </Button>
            <Button variant="outline" className="gap-2">
              <Upload size={16} />
              Importar Dados
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {currentMetrics.map((metric, index) => (
            <Card key={index} className="bg-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "rounded-full p-1.5",
                      metric.status === "Normal" ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400" :
                      metric.status === "Alerta" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400" :
                      "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400"
                    )}>
                      {metric.icon}
                    </div>
                    <CardTitle className="text-sm font-medium">{metric.name}</CardTitle>
                  </div>
                  {renderTrendIcon(metric.trend)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {metric.date}
                    </div>
                  </div>
                  <div className={cn(
                    "px-1.5 py-0.5 rounded-md text-xs font-medium",
                    metric.trend === "down" ? "text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30" :
                    metric.trend === "up" ? "text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30" :
                    "text-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800/50"
                  )}>
                    {metric.trend === "down" ? "↓" : metric.trend === "up" ? "↑" : "="} {metric.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <CardTitle>Análise de Dados</CardTitle>
                <CardDescription>Tendências e evolução dos seus indicadores</CardDescription>
              </div>
              <Select 
                defaultValue={timeRange} 
                onValueChange={setTimeRange}
              >
                <SelectTrigger className="w-[140px]">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">7 dias</SelectItem>
                  <SelectItem value="30d">30 dias</SelectItem>
                  <SelectItem value="3m">3 meses</SelectItem>
                  <SelectItem value="6m">6 meses</SelectItem>
                  <SelectItem value="1y">1 ano</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pressao" className="w-full">
              <TabsList className="mb-4 w-full max-w-lg grid grid-cols-4">
                <TabsTrigger value="pressao">Pressão Arterial</TabsTrigger>
                <TabsTrigger value="glicemia">Glicemia</TabsTrigger>
                <TabsTrigger value="peso">Peso</TabsTrigger>
                <TabsTrigger value="cardiaco">Freq. Cardíaca</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pressao" className="space-y-4">
                <div className="bg-card rounded-lg border p-4 h-[350px]">
                  <h3 className="text-lg font-medium mb-4">Pressão Arterial (mmHg)</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={bloodPressureData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.1} />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone"
                        dataKey="systolic"
                        name="Sistólica"
                        stroke="#ef4444"
                        strokeWidth={2}
                        dot={{ r: 2 }}
                        activeDot={{ r: 5 }}
                      />
                      <Line 
                        type="monotone"
                        dataKey="diastolic"
                        name="Diastólica"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ r: 2 }}
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Média Sistólica</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">120 mmHg</div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                        <span>2.5% nos últimos 7 dias</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Média Diastólica</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">79 mmHg</div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                        <span>1.9% nos últimos 7 dias</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Média Pulso Pressórico</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">41 mmHg</div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                        <span>3.4% nos últimos 7 dias</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="glicemia" className="space-y-4">
                <div className="bg-card rounded-lg border p-4 h-[350px]">
                  <h3 className="text-lg font-medium mb-4">Glicemia (mg/dL)</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={glucoseData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.1} />
                      <XAxis dataKey="date" />
                      <YAxis domain={[80, 120]} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone"
                        dataKey="glucose"
                        name="Glicemia"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ r: 2 }}
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Média de Glicemia</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">99 mg/dL</div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                        <span>1.2% nos últimos 7 dias</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Valor Máximo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">105 mg/dL</div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Registrado em 04/06</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Valor Mínimo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">95 mg/dL</div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Registrado em 03/06</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="peso" className="space-y-4">
                <div className="bg-card rounded-lg border p-4 h-[350px]">
                  <h3 className="text-lg font-medium mb-4">Peso (kg)</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={weightData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.1} />
                      <XAxis dataKey="date" />
                      <YAxis domain={[65, 75]} />
                      <Tooltip />
                      <Bar 
                        dataKey="weight"
                        name="Peso"
                        fill="#8b5cf6"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Peso Atual</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">70.0 kg</div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                        <span>-0.5 kg do mês anterior</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">IMC Atual</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">22.3</div>
                      <div className="text-sm text-green-600 dark:text-green-400 flex items-center mt-1">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span>Peso Saudável</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Variação em 6 meses</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">-2.5 kg</div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                        <span>3.4% de redução</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="cardiaco" className="space-y-4">
                <div className="bg-card rounded-lg border p-4 h-[350px]">
                  <h3 className="text-lg font-medium mb-4">Frequência Cardíaca (bpm)</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={heartRateData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.1} />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone"
                        dataKey="rest"
                        name="Em Repouso"
                        stroke="#0ea5e9"
                        strokeWidth={2}
                        dot={{ r: 2 }}
                        activeDot={{ r: 5 }}
                      />
                      <Line 
                        type="monotone"
                        dataKey="activity"
                        name="Em Atividade"
                        stroke="#f97316"
                        strokeWidth={2}
                        dot={{ r: 2 }}
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Média em Repouso</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">63 bpm</div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                        <span>-2 bpm nos últimos 10 dias</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Média em Atividade</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">114 bpm</div>
                      <div className="text-sm text-green-600 dark:text-green-400 flex items-center mt-1">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span>Zona de treinamento adequada</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Variabilidade</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">82 ms</div>
                      <div className="text-sm text-green-600 dark:text-green-400 flex items-center mt-1">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span>+5% (melhor recuperação)</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default MetricsPage;
