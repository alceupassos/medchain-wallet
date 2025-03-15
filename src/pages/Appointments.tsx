
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, List, MapPin, PlusCircle } from "lucide-react";
import { appointments } from '@/data/profileData';
import AppointmentList from '@/components/appointments/AppointmentList';
import AppointmentCalendar from '@/components/appointments/AppointmentCalendar';
import AppointmentPreparation from '@/components/appointments/AppointmentPreparation';
import AppointmentMap from '@/components/appointments/AppointmentMap';

const AppointmentsPage = () => {
  return (
    <MainLayout>
      <div className="pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Consultas</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Gerencie suas consultas médicas, veja o histórico e planeje as próximas visitas.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="flex items-center">
                <PlusCircle size={16} className="mr-2" />
                Agendar Consulta
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <AppointmentSummary />
            </div>
            <div className="lg:col-span-3">
              <Tabs defaultValue="proximas" className="w-full">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="proximas">Próximas</TabsTrigger>
                  <TabsTrigger value="calendario">Calendário</TabsTrigger>
                  <TabsTrigger value="preparacao">Preparação</TabsTrigger>
                  <TabsTrigger value="locais">Locais</TabsTrigger>
                </TabsList>
                <TabsContent value="proximas" className="mt-0">
                  <AppointmentList appointments={appointments} />
                </TabsContent>
                <TabsContent value="calendario" className="mt-0">
                  <AppointmentCalendar appointments={appointments} />
                </TabsContent>
                <TabsContent value="preparacao" className="mt-0">
                  <AppointmentPreparation nextAppointment={appointments[0]} />
                </TabsContent>
                <TabsContent value="locais" className="mt-0">
                  <AppointmentMap appointments={appointments} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const AppointmentSummary = () => {
  // Simulated data
  const nextAppointment = appointments[0];
  const totalUpcoming = appointments.length;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Próxima Consulta</CardTitle>
        </CardHeader>
        <CardContent>
          {nextAppointment ? (
            <div className="space-y-3">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-primary" />
                <span className="text-sm font-medium">{nextAppointment.date} às {nextAppointment.time}</span>
              </div>
              <div>
                <div className="font-medium">{nextAppointment.doctor}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{nextAppointment.specialty}</div>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">{nextAppointment.location}</span>
              </div>
              <div className="pt-2 flex space-x-2">
                <Button size="sm" variant="default" className="flex-1">Confirmar</Button>
                <Button size="sm" variant="outline" className="flex-1">Reagendar</Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-4 text-gray-500 dark:text-gray-400">
              <p>Nenhuma consulta agendada</p>
              <Button size="sm" variant="outline" className="mt-2">
                Agendar Agora
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Resumo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Total agendadas</span>
              <span className="font-medium">{totalUpcoming}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Consultas neste mês</span>
              <span className="font-medium">2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Última consulta</span>
              <span className="font-medium">10/11/2023</span>
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
            Ver agenda completa
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <List size={16} className="mr-2" />
            Histórico de consultas
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <MapPin size={16} className="mr-2" />
            Meus locais favoritos
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentsPage;
