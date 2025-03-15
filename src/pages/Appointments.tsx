
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Video, 
  Search, 
  PlusCircle, 
  Filter, 
  Calendar as CalendarIcon,
  CheckCircle, 
  AlertCircle,
  FileText,
  Trash2, 
  Clock4
} from 'lucide-react';

const appointments = [
  {
    id: "1",
    date: "22/06/2023",
    time: "14:30",
    doctor: "Dra. Ana Silva",
    specialty: "Cardiologia",
    location: "Hospital São Lucas - Consultório 302",
    type: "Presencial",
    status: "Agendada",
    notes: "Trazer exames de sangue e eletrocardiograma."
  },
  {
    id: "2",
    date: "05/07/2023",
    time: "10:15",
    doctor: "Dr. Carlos Mendes",
    specialty: "Cardiologia",
    location: "Consulta Online",
    type: "Telemedicina",
    status: "Agendada",
    notes: "Retorno para avaliação dos exames."
  },
  {
    id: "3",
    date: "15/05/2023",
    time: "16:00",
    doctor: "Dr. Roberto Almeida",
    specialty: "Pneumologia",
    location: "Clínica Respire Bem - Sala 12",
    type: "Presencial",
    status: "Realizada",
    notes: "Manter o uso das medicações prescritas."
  },
  {
    id: "4",
    date: "02/04/2023",
    time: "09:30",
    doctor: "Dra. Márcia Oliveira",
    specialty: "Dermatologia",
    location: "Centro Dermatológico - Bloco B",
    type: "Presencial",
    status: "Realizada",
    notes: "Retorno em 3 meses para acompanhamento."
  },
  {
    id: "5",
    date: "10/03/2023",
    time: "11:45",
    doctor: "Dr. Paulo Ribeiro",
    specialty: "Ortopedia",
    location: "Hospital Central - Torre 2, 5º andar",
    type: "Presencial",
    status: "Cancelada",
    notes: "Cancelada por indisponibilidade do médico."
  }
];

const AppointmentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredAppointments = appointments.filter(appt => 
    appt.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appt.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appt.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const futureAppointments = filteredAppointments.filter(appt => appt.status === "Agendada");
  const pastAppointments = filteredAppointments.filter(appt => appt.status !== "Agendada");

  // Próxima consulta
  const nextAppointment = futureAppointments[0];

  // Calcular dias para próxima consulta
  const nextApptDate = nextAppointment ? new Date(`${nextAppointment.date.split('/').reverse().join('-')}T${nextAppointment.time}:00`) : null;
  const today = new Date();
  const daysUntil = nextApptDate ? Math.ceil((nextApptDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) : null;

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Consultas</h1>
            <p className="text-muted-foreground">
              Gerencie e acompanhe suas consultas médicas
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="gap-2">
              <PlusCircle size={16} />
              Nova Consulta
            </Button>
            <Button variant="outline" className="gap-2">
              <CalendarIcon size={16} />
              Ver Calendário
            </Button>
          </div>
        </div>

        {nextAppointment && (
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-100 dark:border-blue-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-blue-800 dark:text-blue-300">Próxima Consulta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-900/60 p-4 w-16 h-16 flex items-center justify-center">
                      {nextAppointment.type === "Presencial" ? (
                        <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <Video className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
                        {nextAppointment.doctor} - {nextAppointment.specialty}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-700 dark:text-blue-400" />
                          <span className="text-blue-800 dark:text-blue-300">
                            {nextAppointment.date} ({daysUntil === 0 ? 'Hoje' : daysUntil === 1 ? 'Amanhã' : `Em ${daysUntil} dias`})
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-700 dark:text-blue-400" />
                          <span className="text-blue-800 dark:text-blue-300">{nextAppointment.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-700 dark:text-blue-400" />
                          <span className="text-blue-800 dark:text-blue-300">{nextAppointment.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-blue-700 dark:text-blue-400" />
                          <span className="text-blue-800 dark:text-blue-300">(11) 3456-7890</span>
                        </div>
                      </div>
                      
                      {nextAppointment.notes && (
                        <div className="mt-3 p-2 bg-blue-100/60 dark:bg-blue-900/30 rounded border border-blue-200 dark:border-blue-800">
                          <p className="text-sm text-blue-800 dark:text-blue-300">
                            <AlertCircle className="h-4 w-4 inline-block mr-1" />
                            {nextAppointment.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center gap-2">
                  {nextAppointment.type === "Telemedicina" && (
                    <Button className="w-full gap-2">
                      <Video size={16} />
                      Acessar Consulta Online
                    </Button>
                  )}
                  {nextAppointment.type === "Presencial" && (
                    <Button className="w-full gap-2">
                      <MapPin size={16} />
                      Ver Rota no Mapa
                    </Button>
                  )}
                  <Button variant="outline" className="w-full gap-2">
                    <Clock4 size={16} />
                    Reagendar
                  </Button>
                  <Button variant="outline" className="w-full gap-2 bg-red-50 border-red-200 text-red-700 hover:bg-red-100 dark:bg-red-950/30 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/50">
                    <Trash2 size={16} />
                    Cancelar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="md:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>Resumo</CardTitle>
              <CardDescription>Visão geral das suas consultas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card rounded-lg p-3 border border-border">
                  <div className="text-sm font-medium text-muted-foreground">Total de Consultas</div>
                  <div className="text-2xl font-semibold mt-1">{appointments.length}</div>
                </div>
                <div className="bg-card rounded-lg p-3 border border-border">
                  <div className="text-sm font-medium text-muted-foreground">Agendadas</div>
                  <div className="text-2xl font-semibold mt-1 text-blue-600 dark:text-blue-400">
                    {appointments.filter(a => a.status === "Agendada").length}
                  </div>
                </div>
                <div className="bg-card rounded-lg p-3 border border-border">
                  <div className="text-sm font-medium text-muted-foreground">Realizadas</div>
                  <div className="text-2xl font-semibold mt-1 text-green-600 dark:text-green-400">
                    {appointments.filter(a => a.status === "Realizada").length}
                  </div>
                </div>
                <div className="bg-card rounded-lg p-3 border border-border">
                  <div className="text-sm font-medium text-muted-foreground">Canceladas</div>
                  <div className="text-2xl font-semibold mt-1 text-red-600 dark:text-red-400">
                    {appointments.filter(a => a.status === "Cancelada").length}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Lembretes</CardTitle>
              <CardDescription>Preparação para próximas consultas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {nextAppointment ? (
                <>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Resultados dos Exames</p>
                      <p className="text-sm text-muted-foreground">
                        Leve os resultados dos exames de sangue e eletrocardiograma
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Jejum Necessário</p>
                      <p className="text-sm text-muted-foreground">
                        É necessário jejum de 8 horas para esta consulta
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Lista de Medicamentos</p>
                      <p className="text-sm text-muted-foreground">
                        Prepare uma lista de todos os medicamentos em uso
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <p className="text-muted-foreground">
                    Nenhuma consulta agendada
                  </p>
                  <Button className="mt-2 gap-2">
                    <PlusCircle size={16} />
                    Agendar Consulta
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Histórico de Consultas</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar consulta..."
                  className="pl-8 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="futuras" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="futuras">Consultas Futuras</TabsTrigger>
                <TabsTrigger value="passadas">Consultas Passadas</TabsTrigger>
                <TabsTrigger value="todas">Todas as Consultas</TabsTrigger>
              </TabsList>
              
              <TabsContent value="futuras">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Horário</TableHead>
                        <TableHead>Médico</TableHead>
                        <TableHead className="hidden md:table-cell">Tipo</TableHead>
                        <TableHead className="hidden lg:table-cell">Local</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {futureAppointments.map((appt) => (
                        <TableRow key={appt.id}>
                          <TableCell>{appt.date}</TableCell>
                          <TableCell>{appt.time}</TableCell>
                          <TableCell>
                            <div className="font-medium">{appt.doctor}</div>
                            <div className="text-xs text-muted-foreground">{appt.specialty}</div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge variant={appt.type === "Presencial" ? "default" : "outline"}>
                              {appt.type}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell max-w-[200px] truncate">
                            {appt.location}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end space-x-2">
                              {appt.type === "Telemedicina" && (
                                <Button variant="outline" size="sm" className="gap-1">
                                  <Video size={14} />
                                  Acessar
                                </Button>
                              )}
                              <Button variant="ghost" size="sm">Reagendar</Button>
                              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">Cancelar</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {futureAppointments.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8">
                            <div className="flex flex-col items-center">
                              <Calendar className="h-8 w-8 text-muted-foreground mb-2" />
                              <p className="text-muted-foreground mb-2">Nenhuma consulta futura encontrada</p>
                              <Button className="gap-2">
                                <PlusCircle size={16} />
                                Agendar Consulta
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="passadas">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Horário</TableHead>
                        <TableHead>Médico</TableHead>
                        <TableHead className="hidden md:table-cell">Tipo</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pastAppointments.map((appt) => (
                        <TableRow key={appt.id}>
                          <TableCell>{appt.date}</TableCell>
                          <TableCell>{appt.time}</TableCell>
                          <TableCell>
                            <div className="font-medium">{appt.doctor}</div>
                            <div className="text-xs text-muted-foreground">{appt.specialty}</div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge variant={appt.type === "Presencial" ? "default" : "outline"}>
                              {appt.type}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={
                              appt.status === "Realizada" ? "success" : 
                              appt.status === "Cancelada" ? "destructive" : 
                              "outline"
                            }>
                              {appt.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end space-x-2">
                              <Button variant="outline" size="sm" className="gap-1">
                                <FileText size={14} />
                                Prontuário
                              </Button>
                              {appt.status === "Cancelada" && (
                                <Button variant="ghost" size="sm">Reagendar</Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {pastAppointments.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8">
                            <p className="text-muted-foreground">Nenhuma consulta passada encontrada</p>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="todas">
                {/* Combina as consultas futuras e passadas */}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default AppointmentsPage;
