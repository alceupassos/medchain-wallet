import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, FileText, MapPin, Plus, Search, X } from "lucide-react";

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

const Appointments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredAppointments = appointments.filter(appt => 
    appt.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appt.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appt.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const futureAppointments = filteredAppointments.filter(appt => appt.status === "Agendada");
  const pastAppointments = filteredAppointments.filter(appt => appt.status !== "Agendada");

  const upcomingAppointments = futureAppointments.slice(0, 3);

  const appointmentForm = useForm({
    defaultValues: {
      title: "",
      specialty: "",
      doctor: "",
      date: null,
      time: "",
      location: "",
      notes: ""
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MainLayout>
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Consultas</h1>
            <p className="text-muted-foreground">
              Gerencie suas consultas médicas e procedimentos
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-1">
                  <Plus size={16} />
                  Nova Consulta
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Agendar Nova Consulta</DialogTitle>
                  <DialogDescription>
                    Preencha os detalhes para agendar uma nova consulta
                  </DialogDescription>
                </DialogHeader>
                
                <Form {...appointmentForm}>
                  <form onSubmit={appointmentForm.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={appointmentForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Título</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Consulta de rotina, exame, etc." />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={appointmentForm.control}
                        name="specialty"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Especialidade</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione a especialidade" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="cardiologia">Cardiologia</SelectItem>
                                <SelectItem value="dermatologia">Dermatologia</SelectItem>
                                <SelectItem value="endocrinologia">Endocrinologia</SelectItem>
                                <SelectItem value="neurologia">Neurologia</SelectItem>
                                <SelectItem value="oftalmologia">Oftalmologia</SelectItem>
                                <SelectItem value="ortopedia">Ortopedia</SelectItem>
                                <SelectItem value="pediatria">Pediatria</SelectItem>
                                <SelectItem value="psiquiatria">Psiquiatria</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={appointmentForm.control}
                        name="doctor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Médico</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Dr. Nome do Médico" />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={appointmentForm.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Data</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={`w-full pl-3 text-left font-normal ${
                                      !field.value ? "text-muted-foreground" : ""
                                    }`}
                                  >
                                    {field.value ? (
                                      format(field.value, "PP")
                                    ) : (
                                      <span>Selecione uma data</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date()}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={appointmentForm.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Horário</FormLabel>
                            <FormControl>
                              <Input type="time" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={appointmentForm.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Local</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Nome e endereço da clínica/hospital" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={appointmentForm.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Observações</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Instruções ou notas importantes" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancelar</Button>
                      </DialogClose>
                      <Button type="submit">Agendar</Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
            
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar consultas..."
                className="w-[200px] pl-8"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="w-full md:w-auto mb-2">
              <TabsTrigger value="upcoming">Próximas</TabsTrigger>
              <TabsTrigger value="past">Anteriores</TabsTrigger>
              <TabsTrigger value="all">Todas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="space-y-4">
              <Card>
                <CardHeader className="py-4">
                  <CardTitle>Consultas Agendadas</CardTitle>
                  <CardDescription>
                    Suas próximas consultas e procedimentos médicos
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data/Hora</TableHead>
                        <TableHead>Especialidade</TableHead>
                        <TableHead>Médico</TableHead>
                        <TableHead>Local</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {upcomingAppointments.map((appt) => (
                        <TableRow key={appt.id}>
                          <TableCell className="font-medium">
                            <div className="flex flex-col">
                              <span>{appt.date}</span>
                              <span className="text-sm text-muted-foreground">{appt.time}</span>
                            </div>
                          </TableCell>
                          <TableCell>{appt.specialty}</TableCell>
                          <TableCell>{appt.doctor}</TableCell>
                          <TableCell>
                            <div className="flex items-start">
                              <MapPin className="mr-1 h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                              <span className="text-sm">{appt.location}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={
                              appt.status === "Realizada" ? "default" : 
                              appt.status === "Cancelada" ? "destructive" : 
                              "outline"
                            }>
                              {appt.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">Detalhes</span>
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-destructive">
                                <X className="h-4 w-4" />
                                <span className="sr-only">Cancelar</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Preparação para Consulta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Clock className="mr-2 h-4 w-4 text-primary mt-0.5" />
                        <span>Chegue 15 minutos antes da consulta</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="mr-2 h-4 w-4 text-primary mt-0.5" />
                        <span>Leve seus exames anteriores e lista de medicamentos</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Lembretes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Você receberá lembretes por email 24h antes da consulta 
                      e por SMS 1h antes.
                    </p>
                    <Button variant="link" className="h-auto p-0 text-primary">
                      Ajustar preferências
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="past" className="space-y-4">
              <Card>
                <CardHeader className="py-4">
                  <CardTitle>Consultas Anteriores</CardTitle>
                  <CardDescription>
                    Histórico de consultas e procedimentos realizados
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data/Hora</TableHead>
                        <TableHead>Especialidade</TableHead>
                        <TableHead>Médico</TableHead>
                        <TableHead>Local</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pastAppointments.map((appt) => (
                        <TableRow key={appt.id}>
                          <TableCell className="font-medium">
                            <div className="flex flex-col">
                              <span>{appt.date}</span>
                              <span className="text-sm text-muted-foreground">{appt.time}</span>
                            </div>
                          </TableCell>
                          <TableCell>{appt.specialty}</TableCell>
                          <TableCell>{appt.doctor}</TableCell>
                          <TableCell>
                            <div className="flex items-start">
                              <MapPin className="mr-1 h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                              <span className="text-sm">{appt.location}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={
                              appt.status === "Realizada" ? "default" : 
                              appt.status === "Cancelada" ? "destructive" : 
                              "outline"
                            }>
                              {appt.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end">
                              <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">Prontuário</span>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="all">
              {/* Combina as consultas futuras e passadas */}
            </TabsContent>
          </Tabs>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Calendário</CardTitle>
                <CardDescription>
                  Visualize suas consultas no calendário
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={new Date()}
                  className="rounded-md border"
                />
                
                <div className="mt-4 space-y-2">
                  <h3 className="text-sm font-medium">Próximas Consultas</h3>
                  
                  {upcomingAppointments.slice(0, 3).map((appt) => (
                    <div key={appt.id} className="flex items-start space-x-2 text-sm p-2 rounded-md hover:bg-accent">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                      <div>
                        <p className="font-medium">{appt.specialty}</p>
                        <p className="text-muted-foreground">{appt.date} • {appt.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Appointments;
