
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText, PlusCircle, RefreshCw, AlertCircle } from "lucide-react";
import { medications } from '@/data/profileData';
import MedicationList from '@/components/medications/MedicationList';
import MedicationCalendar from '@/components/medications/MedicationCalendar';
import MedicationReminders from '@/components/medications/MedicationReminders';
import MedicationInteractions from '@/components/medications/MedicationInteractions';

const MedicationsPage = () => {
  return (
    <MainLayout>
      <div className="pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Medicamentos</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Gerencie seus medicamentos, acompanhe o histórico e configure lembretes.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <Button className="flex items-center">
                <PlusCircle size={16} className="mr-2" />
                Novo Medicamento
              </Button>
              <Button variant="outline">
                <RefreshCw size={16} className="mr-2" />
                Sincronizar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <MedicationSummary />
            </div>
            <div className="lg:col-span-3">
              <Tabs defaultValue="lista" className="w-full">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="lista">Lista</TabsTrigger>
                  <TabsTrigger value="calendario">Calendário</TabsTrigger>
                  <TabsTrigger value="lembretes">Lembretes</TabsTrigger>
                  <TabsTrigger value="interacoes">Interações</TabsTrigger>
                </TabsList>
                <TabsContent value="lista" className="mt-0">
                  <MedicationList medications={medications} />
                </TabsContent>
                <TabsContent value="calendario" className="mt-0">
                  <MedicationCalendar medications={medications} />
                </TabsContent>
                <TabsContent value="lembretes" className="mt-0">
                  <MedicationReminders />
                </TabsContent>
                <TabsContent value="interacoes" className="mt-0">
                  <MedicationInteractions medications={medications} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const MedicationSummary = () => {
  const activeCount = medications.filter(med => med.status === "Ativo").length;
  const needRefill = 2; // Simulado - seria calculado com base no estoque

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Resumo de Medicamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Ativos</span>
              <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400">{activeCount}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Precisam reabastecimento</span>
              <Badge variant="outline" className="bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">{needRefill}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Próxima dose</span>
              <span className="text-sm font-medium">13:00 (Metformina)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Aderência ao Tratamento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1 text-xs">
                <span>Este mês</span>
                <span className="font-medium">92%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-xs">
                <span>Semana atual</span>
                <span className="font-medium">87%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            <Calendar size={16} className="mr-2" />
            Ver hoje
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Clock size={16} className="mr-2" />
            Configurar lembretes
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <FileText size={16} className="mr-2" />
            Histórico de medicamentos
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <AlertCircle size={16} className="mr-2" />
            Reportar efeito colateral
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicationsPage;
