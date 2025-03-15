import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { AreaChart, BarChart, LineChart } from "recharts";
import { 
  Activity, 
  AlertCircle, 
  BarChart4, 
  CheckCircle, 
  Heart, 
  Plus, 
  TrendingDown, 
  TrendingUp 
} from 'lucide-react';
import HealthMetric from "@/components/ui/HealthMetric";
import { ResponsiveContainer, Area, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const Metrics = () => {
  const [timeRange, setTimeRange] = useState("7d");
  const [selectedMetricType, setSelectedMetricType] = useState(null);

  const addForm = useForm({
    defaultValues: {
      metricType: null,
      value: null,
      date: null,
      notes: null,
    },
  });

  const onAddMetric = (data) => {
    console.log(data);
  };

  const getMetricUnit = (metricType) => {
    switch (metricType) {
      case 'bloodPressure':
        return 'mmHg';
      case 'bloodGlucose':
        return 'mg/dL';
      case 'heartRate':
        return 'bpm';
      case 'cholesterol':
        return 'mg/dL';
      case 'oxygenSaturation':
        return '%';
      default:
        return '';
    }
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
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-1">
                  <Plus size={16} />
                  Nova Medição
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Nova Medição</DialogTitle>
                  <DialogDescription>
                    Registre um novo valor para uma de suas métricas de saúde
                  </DialogDescription>
                </DialogHeader>
                
                <Form {...addForm}>
                  <form onSubmit={addForm.handleSubmit(onAddMetric)} className="space-y-4">
                    <FormField
                      control={addForm.control}
                      name="metricType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Métrica</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione a métrica" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="weight">Peso</SelectItem>
                              <SelectItem value="bloodPressure">Pressão Arterial</SelectItem>
                              <SelectItem value="bloodGlucose">Glicemia</SelectItem>
                              <SelectItem value="heartRate">Frequência Cardíaca</SelectItem>
                              <SelectItem value="cholesterol">Colesterol</SelectItem>
                              <SelectItem value="oxygenSaturation">Saturação de Oxigênio</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    
                    {selectedMetricType === 'bloodPressure' ? (
                      <>
                        <FormField
                          control={addForm.control}
                          name="systolic"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Sistólica (mmHg)</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="120" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={addForm.control}
                          name="diastolic"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Diastólica (mmHg)</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="80" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </>
                    ) : (
                      <FormField
                        control={addForm.control}
                        name="value"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Valor {getMetricUnit(selectedMetricType)}</FormLabel>
                            <FormControl>
                              <Input type="number" step="0.1" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    )}
                    
                    <FormField
                      control={addForm.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data da Medição</FormLabel>
                          <FormControl>
                            <Input type="datetime-local" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={addForm.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Observações</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Após exercício, em jejum, etc." />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancelar</Button>
                      </DialogClose>
                      <Button type="submit">Salvar</Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <HealthMetric 
            title="Pressão Arterial"
            value="120/80" 
            unit="mmHg"
            status="normal"
            change="-5"
            icon={<Heart className="h-4 w-4" />}
          />
          
          <HealthMetric 
            title="Glicemia"
            value="105" 
            unit="mg/dL"
            status="warning"
            change="+8"
            icon={<Activity className="h-4 w-4" />}
          />
          
          <HealthMetric 
            title="Frequência Cardíaca"
            value="72" 
            unit="bpm"
            status="normal"
            change="-3"
            icon={<TrendingDown className="h-4 w-4" />}
          />
        </div>
        
        <Tabs defaultValue="blood-pressure" className="w-full">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="blood-pressure">Pressão Arterial</TabsTrigger>
            <TabsTrigger value="blood-glucose">Glicemia</TabsTrigger>
            <TabsTrigger value="heart-rate">Freq. Cardíaca</TabsTrigger>
            <TabsTrigger value="weight">Peso</TabsTrigger>
          </TabsList>
          
          <TabsContent value="blood-pressure" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pressão Arterial</CardTitle>
                <CardDescription>
                  Histórico e tendências da sua pressão arterial
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={bloodPressureData}
                    margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="systolic" 
                      name="Sistólica"
                      stroke="#f97316" 
                      fill="#f97316" 
                      fillOpacity={0.3} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="diastolic" 
                      name="Diastólica"
                      stroke="#0ea5e9" 
                      fill="#0ea5e9" 
                      fillOpacity={0.3} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Dentro da Meta
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Suas leituras estão dentro da faixa recomendada (&lt;130/80 mmHg) em 85% das medições.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">
                    <div className="flex items-center">
                      <TrendingDown className="h-4 w-4 text-primary mr-2" />
                      Tendência de Melhora
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Redução média de 5 mmHg na sistólica em comparação com o mês anterior.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="blood-glucose" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Glicemia</CardTitle>
                <CardDescription>
                  Histórico e tendências da sua glicose sanguínea
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={glucoseData}
                    margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="glucose" 
                      name="Glicose"
                      stroke="#f97316" 
                      strokeWidth={2}
                      dot={{ stroke: '#f97316', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">
                    <div className="flex items-center">
                      <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                      Atenção
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Suas leituras estão na faixa de pré-diabetes (100-125 mg/dL) em 60% das medições.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-destructive mr-2" />
                      Tendência de Aumento
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Aumento médio de 8 mg/dL em comparação com o mês anterior. Considere consultar seu médico.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="heart-rate" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Frequência Cardíaca</CardTitle>
                <CardDescription>
                  Histórico e tendências da sua frequência cardíaca
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={heartRateData}
                    margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="rest" 
                      name="Em Repouso" 
                      fill="#0ea5e9" 
                      barSize={20}
                    />
                    <Bar 
                      dataKey="activity" 
                      name="Em Atividade" 
                      fill="#f97316" 
                      barSize={20}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Dentro da Meta
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sua frequência cardíaca em repouso se mantém na faixa ideal (60-80 bpm).
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">
                    <div className="flex items-center">
                      <BarChart4 className="h-4 w-4 text-primary mr-2" />
                      Boa Recuperação
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Seu tempo de recuperação após exercícios melhorou em 12% no último mês.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="weight" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Peso</CardTitle>
                <CardDescription>
                  Histórico e tendências do seu peso
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={weightData}
                    margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="weight" 
                      name="Peso (kg)"
                      stroke="#0ea5e9" 
                      strokeWidth={2}
                      dot={{ stroke: '#0ea5e9', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">
                    <div className="flex items-center">
                      <TrendingDown className="h-4 w-4 text-green-500 mr-2" />
                      Tendência de Redução
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Redução gradual de 1.5kg no último mês, mantendo um ritmo saudável.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Meta Próxima
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Você está a apenas 2.5kg da sua meta de peso. Continue assim!
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Metrics;
