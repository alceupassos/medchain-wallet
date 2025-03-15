
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Pill, 
  Search, 
  PlusCircle, 
  Bell, 
  Calendar, 
  AlertTriangle, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle 
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const medications = [
  {
    id: "1",
    name: "Losartana Potássica",
    dose: "50mg",
    frequency: "1x ao dia",
    startDate: "10/01/2023",
    endDate: "Contínuo",
    stock: 23,
    totalDoses: 30,
    nextDose: "Hoje, 20:00",
    status: "Ativo",
    adherence: 95,
    instructions: "Tomar após o jantar com água",
    category: "Anti-hipertensivo"
  },
  {
    id: "2",
    name: "Atorvastatina",
    dose: "20mg",
    frequency: "1x ao dia",
    startDate: "15/02/2023",
    endDate: "Contínuo",
    stock: 14,
    totalDoses: 30,
    nextDose: "Hoje, 21:00",
    status: "Ativo",
    adherence: 88,
    instructions: "Tomar à noite antes de dormir",
    category: "Redutor de Colesterol"
  },
  {
    id: "3",
    name: "Metformina",
    dose: "850mg",
    frequency: "2x ao dia",
    startDate: "22/03/2023",
    endDate: "Contínuo",
    stock: 42,
    totalDoses: 60,
    nextDose: "Hoje, 13:00",
    status: "Ativo",
    adherence: 76,
    instructions: "Tomar após as refeições",
    category: "Antidiabético"
  },
  {
    id: "4",
    name: "Amoxicilina",
    dose: "500mg",
    frequency: "3x ao dia",
    startDate: "05/05/2023",
    endDate: "12/05/2023",
    stock: 0,
    totalDoses: 21,
    nextDose: "Finalizado",
    status: "Finalizado",
    adherence: 100,
    instructions: "Tomar a cada 8 horas com alimentos",
    category: "Antibiótico"
  },
  {
    id: "5",
    name: "Ibuprofeno",
    dose: "600mg",
    frequency: "A cada 8h se necessário",
    startDate: "01/06/2023",
    endDate: "Conforme necessário",
    stock: 10,
    totalDoses: null,
    nextDose: "Quando necessário",
    status: "Conforme necessário",
    adherence: null,
    instructions: "Tomar se sentir dor, não exceder 3 comprimidos por dia",
    category: "Anti-inflamatório"
  }
];

const MedicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredMedications = medications.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeMedications = filteredMedications.filter(med => med.status === "Ativo");
  const otherMedications = filteredMedications.filter(med => med.status !== "Ativo");

  // Calcula doses do dia
  const totalDosesToday = 6;
  const completedDosesToday = 4;
  const percentComplete = (completedDosesToday / totalDosesToday) * 100;

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Medicamentos</h1>
            <p className="text-muted-foreground">
              Gerencie seus medicamentos e acompanhe seus tratamentos
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="gap-2">
              <PlusCircle size={16} />
              Adicionar Medicamento
            </Button>
            <Button variant="outline" className="gap-2">
              <Bell size={16} />
              Configurar Alertas
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="md:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>Medicamentos de Hoje</CardTitle>
              <CardDescription>Planejamento diário de medicações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Progresso de hoje</span>
                  <span className="text-sm font-medium">{completedDosesToday}/{totalDosesToday} doses</span>
                </div>
                <Progress value={percentComplete} className="h-2" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-amber-100 dark:bg-amber-900 p-2">
                      <Clock className="h-5 w-5 text-amber-600 dark:text-amber-300" />
                    </div>
                    <div>
                      <p className="font-medium">Metformina 850mg</p>
                      <p className="text-sm text-muted-foreground">Em 15 minutos (13:00)</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <XCircle size={14} /> Pular
                    </Button>
                    <Button size="sm" className="h-8 gap-1">
                      <CheckCircle size={14} /> Tomado
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 dark:bg-green-900 p-2">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                    </div>
                    <div>
                      <p className="font-medium">Losartana Potássica 50mg</p>
                      <p className="text-sm text-muted-foreground">Tomado às 08:15</p>
                    </div>
                  </div>
                  <Badge variant="outline">Concluído</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
                      <Clock className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <p className="font-medium">Atorvastatina 20mg</p>
                      <p className="text-sm text-muted-foreground">Hoje às 21:00</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                    Pendente
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Alertas</CardTitle>
              <CardDescription>Alertas e avisos importantes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-red-800 dark:text-red-300">Estoque Baixo</p>
                  <p className="text-sm text-red-700 dark:text-red-400">Atorvastatina: Restam apenas 14 comprimidos (14 dias)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-800 dark:text-amber-300">Interação Medicamentosa</p>
                  <p className="text-sm text-amber-700 dark:text-amber-400">Losartana e Ibuprofeno podem diminuir o efeito anti-hipertensivo</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-muted rounded-lg border">
                <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Renovação de Receita</p>
                  <p className="text-sm text-muted-foreground">Metformina: Receita vence em 30 dias</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Meus Medicamentos</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar medicamento..."
                  className="pl-8 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="ativos" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="ativos">Ativos</TabsTrigger>
                <TabsTrigger value="finalizados">Finalizados/Sob Demanda</TabsTrigger>
                <TabsTrigger value="todos">Todos</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ativos">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Medicamento</TableHead>
                        <TableHead>Dosagem</TableHead>
                        <TableHead className="hidden md:table-cell">Frequência</TableHead>
                        <TableHead className="hidden lg:table-cell">Início</TableHead>
                        <TableHead className="hidden lg:table-cell">Adesão</TableHead>
                        <TableHead className="hidden md:table-cell">Estoque</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {activeMedications.map((med) => (
                        <TableRow key={med.id}>
                          <TableCell>
                            <div className="font-medium">{med.name}</div>
                            <div className="text-xs text-muted-foreground">{med.category}</div>
                          </TableCell>
                          <TableCell>{med.dose}</TableCell>
                          <TableCell className="hidden md:table-cell">{med.frequency}</TableCell>
                          <TableCell className="hidden lg:table-cell">{med.startDate}</TableCell>
                          <TableCell className="hidden lg:table-cell">
                            {med.adherence !== null ? (
                              <div className="flex items-center gap-2">
                                <Progress value={med.adherence} className="h-2 w-16" />
                                <span className="text-xs">{med.adherence}%</span>
                              </div>
                            ) : "-"}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {med.stock !== null ? (
                              <Badge variant={med.stock < 5 ? "destructive" : med.stock < 10 ? "outline" : "secondary"}>
                                {med.stock} un
                              </Badge>
                            ) : "-"}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end space-x-2">
                              <Button variant="outline" size="sm">Editar</Button>
                              <Button variant="ghost" size="sm">Histórico</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {activeMedications.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-8">
                            <div className="flex flex-col items-center">
                              <Pill className="h-8 w-8 text-muted-foreground mb-2" />
                              <p className="text-muted-foreground mb-2">Nenhum medicamento ativo encontrado</p>
                              <Button className="gap-2">
                                <PlusCircle size={16} />
                                Adicionar Medicamento
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="finalizados">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Medicamento</TableHead>
                        <TableHead>Dosagem</TableHead>
                        <TableHead className="hidden md:table-cell">Frequência</TableHead>
                        <TableHead className="hidden lg:table-cell">Período</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {otherMedications.map((med) => (
                        <TableRow key={med.id}>
                          <TableCell>
                            <div className="font-medium">{med.name}</div>
                            <div className="text-xs text-muted-foreground">{med.category}</div>
                          </TableCell>
                          <TableCell>{med.dose}</TableCell>
                          <TableCell className="hidden md:table-cell">{med.frequency}</TableCell>
                          <TableCell className="hidden lg:table-cell">
                            {med.startDate} {med.endDate !== "Conforme necessário" ? `a ${med.endDate}` : ""}
                          </TableCell>
                          <TableCell>
                            <Badge variant={med.status === "Finalizado" ? "outline" : "secondary"}>
                              {med.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end space-x-2">
                              <Button variant="outline" size="sm">Reativar</Button>
                              <Button variant="ghost" size="sm">Histórico</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {otherMedications.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8">
                            <p className="text-muted-foreground">Nenhum medicamento finalizado ou sob demanda encontrado</p>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="todos">
                {/* Combina os medicamentos ativos e finalizados */}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default MedicationsPage;
