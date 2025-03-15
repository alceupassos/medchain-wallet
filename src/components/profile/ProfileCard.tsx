
import { useState } from 'react';
import { Pencil, Plus, ChevronDown, ChevronUp, FileText, Pill, Calendar, Activity, Lock, QrCode, Share2, UserCog } from 'lucide-react';
import { cn } from '@/lib/utils';
import AppButton from '../ui/AppButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ProfileSection {
  id: string;
  title: string;
  fields: {
    id: string;
    label: string;
    value: string | string[];
    isArray?: boolean;
  }[];
}

interface ProfileCardProps {
  sections: ProfileSection[];
  className?: string;
}

const ProfileCard = ({ sections, className }: ProfileCardProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    sections.reduce((acc, section) => ({ ...acc, [section.id]: true }), {})
  );
  
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const [activeTab, setActiveTab] = useState("dados-pessoais");

  // Dados para as novas seções
  const medicalRecords = [
    { id: "rec1", date: "10/05/2023", type: "Consulta Geral", doctor: "Dr. Antônio Ferreira", notes: "Exame de rotina, sem problemas identificados." },
    { id: "rec2", date: "22/07/2023", type: "Exame de Sangue", doctor: "Dra. Mariana Santos", notes: "Níveis de colesterol ligeiramente elevados." },
    { id: "rec3", date: "15/09/2023", type: "Consulta Cardiologista", doctor: "Dr. Ricardo Mendes", notes: "Eletrocardiograma normal. Recomendação para atividade física." },
  ];
  
  const medications = [
    { id: "med1", name: "Lisinopril", dose: "10mg", frequency: "Uma vez ao dia", startDate: "15/01/2022", endDate: "Contínuo" },
    { id: "med2", name: "Metformina", dose: "500mg", frequency: "Duas vezes ao dia", startDate: "10/03/2022", endDate: "Contínuo" },
    { id: "med3", name: "Atorvastatina", dose: "20mg", frequency: "Uma vez ao dia antes de dormir", startDate: "05/08/2023", endDate: "Contínuo" },
  ];
  
  const appointments = [
    { id: "apt1", date: "15/12/2023", time: "14:30", doctor: "Dra. Carla Oliveira", specialty: "Endocrinologia", location: "Clínica Saúde Total" },
    { id: "apt2", date: "27/12/2023", time: "09:00", doctor: "Dr. Paulo Gomes", specialty: "Cardiologia", location: "Hospital Santa Cruz" },
    { id: "apt3", date: "10/01/2024", time: "11:15", doctor: "Dr. Antônio Ferreira", specialty: "Clínica Geral", location: "Clínica Saúde Total" },
  ];
  
  const healthMetrics = [
    { name: "Pressão Arterial", value: "130/85", date: "10/11/2023", status: "Alerta" },
    { name: "Glicose", value: "110 mg/dL", date: "10/11/2023", status: "Normal" },
    { name: "IMC", value: "24.7", date: "10/11/2023", status: "Normal" },
    { name: "Colesterol Total", value: "195 mg/dL", date: "22/09/2023", status: "Normal" },
  ];
  
  const accessLogs = [
    { id: "log1", date: "05/12/2023", time: "09:45", user: "Dr. Antônio Ferreira", action: "Visualização de prontuário" },
    { id: "log2", date: "10/11/2023", time: "14:30", user: "Dra. Mariana Santos", action: "Atualização de medicamentos" },
    { id: "log3", date: "22/10/2023", time: "11:20", user: "Sistema", action: "Backup automático de dados" },
  ];
  
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  
  const handleGenerateQrCode = () => {
    setQrCodeGenerated(true);
    // Simulação de código de acesso
    setAccessCode("MED-" + Math.random().toString(36).substring(2, 10).toUpperCase());
  };

  return (
    <div className={cn("glass-card rounded-xl overflow-hidden", className)}>
      <div className="p-5 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <h3 className="text-lg font-medium">Perfil Médico</h3>
        <AppButton 
          variant="outline" 
          size="sm"
          icon={<Pencil size={14} />}
          iconPosition="left"
        >
          Editar Perfil
        </AppButton>
      </div>
      
      <div className="px-5 py-4">
        <Tabs defaultValue="dados-pessoais" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full overflow-x-auto flex flex-nowrap justify-start mb-4 bg-transparent space-x-1">
            <TabsTrigger value="dados-pessoais" className="whitespace-nowrap">
              <Pencil size={16} className="mr-2" />
              Dados Pessoais
            </TabsTrigger>
            <TabsTrigger value="prontuarios" className="whitespace-nowrap">
              <FileText size={16} className="mr-2" />
              Prontuários
            </TabsTrigger>
            <TabsTrigger value="medicamentos" className="whitespace-nowrap">
              <Pill size={16} className="mr-2" />
              Medicamentos
            </TabsTrigger>
            <TabsTrigger value="consultas" className="whitespace-nowrap">
              <Calendar size={16} className="mr-2" />
              Consultas
            </TabsTrigger>
            <TabsTrigger value="metricas" className="whitespace-nowrap">
              <Activity size={16} className="mr-2" />
              Métricas de Saúde
            </TabsTrigger>
            <TabsTrigger value="acesso" className="whitespace-nowrap">
              <Lock size={16} className="mr-2" />
              Controle de Acesso
            </TabsTrigger>
            <TabsTrigger value="emergencia" className="whitespace-nowrap">
              <QrCode size={16} className="mr-2" />
              QR Emergência
            </TabsTrigger>
          </TabsList>
          
          {/* Conteúdo da Aba Dados Pessoais */}
          <TabsContent value="dados-pessoais" className="space-y-4">
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {sections.map((section) => (
                <div key={section.id} className="overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
                  >
                    <span className="font-medium">{section.title}</span>
                    {expandedSections[section.id] ? (
                      <ChevronUp size={18} className="text-gray-500" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-500" />
                    )}
                  </button>
                  
                  {expandedSections[section.id] && (
                    <div className="px-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.fields.map((field) => (
                        <div key={field.id} className="space-y-1">
                          <div className="text-sm text-gray-500">{field.label}</div>
                          {field.isArray ? (
                            <div className="space-y-1">
                              {(field.value as string[]).map((item, index) => (
                                <div 
                                  key={index}
                                  className="bg-gray-100 dark:bg-gray-800 text-sm py-1 px-2 rounded"
                                >
                                  {item}
                                </div>
                              ))}
                              <button className="text-xs text-primary flex items-center mt-1">
                                <Plus size={12} className="mr-1" />
                                Adicionar {field.label}
                              </button>
                            </div>
                          ) : (
                            <div className="text-sm font-medium">
                              {field.value || <span className="text-gray-400 italic">Não especificado</span>}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Conteúdo da Aba Prontuários */}
          <TabsContent value="prontuarios">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <CardTitle className="text-xl">Prontuários Médicos</CardTitle>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Buscar prontuário..." className="w-auto" />
                    <AppButton size="sm" icon={<Plus size={16} />} iconPosition="left">
                      Novo Prontuário
                    </AppButton>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Médico</TableHead>
                      <TableHead>Observações</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {medicalRecords.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className="font-medium">{record.date}</TableCell>
                        <TableCell>{record.type}</TableCell>
                        <TableCell>{record.doctor}</TableCell>
                        <TableCell className="max-w-[250px] truncate">{record.notes}</TableCell>
                        <TableCell className="text-right">
                          <AppButton
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2"
                          >
                            Ver detalhes
                          </AppButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Conteúdo da Aba Medicamentos */}
          <TabsContent value="medicamentos">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <CardTitle className="text-xl">Medicamentos Atuais</CardTitle>
                  <AppButton size="sm" icon={<Plus size={16} />} iconPosition="left">
                    Adicionar Medicamento
                  </AppButton>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Dosagem</TableHead>
                      <TableHead>Frequência</TableHead>
                      <TableHead>Início</TableHead>
                      <TableHead>Término</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {medications.map((medication) => (
                      <TableRow key={medication.id}>
                        <TableCell className="font-medium">{medication.name}</TableCell>
                        <TableCell>{medication.dose}</TableCell>
                        <TableCell>{medication.frequency}</TableCell>
                        <TableCell>{medication.startDate}</TableCell>
                        <TableCell>{medication.endDate}</TableCell>
                        <TableCell className="text-right">
                          <AppButton
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2"
                          >
                            Editar
                          </AppButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Conteúdo da Aba Consultas */}
          <TabsContent value="consultas">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <CardTitle className="text-xl">Consultas Agendadas</CardTitle>
                  <AppButton size="sm" icon={<Plus size={16} />} iconPosition="left">
                    Nova Consulta
                  </AppButton>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Horário</TableHead>
                      <TableHead>Médico</TableHead>
                      <TableHead>Especialidade</TableHead>
                      <TableHead>Local</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {appointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell className="font-medium">{appointment.date}</TableCell>
                        <TableCell>{appointment.time}</TableCell>
                        <TableCell>{appointment.doctor}</TableCell>
                        <TableCell>{appointment.specialty}</TableCell>
                        <TableCell>{appointment.location}</TableCell>
                        <TableCell className="text-right">
                          <AppButton
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2"
                          >
                            Reagendar
                          </AppButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Conteúdo da Aba Métricas de Saúde */}
          <TabsContent value="metricas">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <CardTitle className="text-xl">Métricas de Saúde</CardTitle>
                  <AppButton size="sm" icon={<Plus size={16} />} iconPosition="left">
                    Nova Medição
                  </AppButton>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {healthMetrics.map((metric, index) => (
                    <div key={index} className="bg-card rounded-lg p-4 border border-border">
                      <div className="text-sm font-medium text-gray-500 mb-1">{metric.name}</div>
                      <div className="text-2xl font-semibold">{metric.value}</div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">{metric.date}</span>
                        <span className={cn(
                          "px-1.5 py-0.5 rounded-full text-xs font-medium",
                          metric.status === "Normal" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" :
                          metric.status === "Alerta" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400" :
                          "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                        )}>
                          {metric.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Histórico de Métricas</h3>
                  <div className="bg-card rounded-lg p-4 border border-border h-72 flex items-center justify-center">
                    <p className="text-muted-foreground">Visualização de gráficos em desenvolvimento</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Conteúdo da Aba Controle de Acesso */}
          <TabsContent value="acesso">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Controle de Acesso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Gerenciar Acesso</h3>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <AppButton
                      icon={<UserCog size={16} />}
                      iconPosition="left"
                    >
                      Adicionar Profissional
                    </AppButton>
                    <AppButton
                      variant="outline"
                      icon={<Share2 size={16} />}
                      iconPosition="left"
                    >
                      Compartilhar Perfil
                    </AppButton>
                  </div>
                  
                  <div className="border rounded-lg border-border overflow-hidden">
                    <div className="bg-muted/50 px-4 py-3 text-sm font-medium">
                      Profissionais com Acesso
                    </div>
                    <div className="divide-y divide-border">
                      <div className="flex items-center justify-between px-4 py-3">
                        <div>
                          <div className="font-medium">Dr. Antônio Ferreira</div>
                          <div className="text-sm text-muted-foreground">Clínico Geral</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Ativo
                          </span>
                          <AppButton
                            variant="ghost"
                            size="sm"
                            className="h-8"
                          >
                            Revogar
                          </AppButton>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between px-4 py-3">
                        <div>
                          <div className="font-medium">Dra. Mariana Santos</div>
                          <div className="text-sm text-muted-foreground">Cardiologista</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Ativo
                          </span>
                          <AppButton
                            variant="ghost"
                            size="sm"
                            className="h-8"
                          >
                            Revogar
                          </AppButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Registro de Acessos</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Hora</TableHead>
                        <TableHead>Usuário</TableHead>
                        <TableHead>Ação</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {accessLogs.map((log) => (
                        <TableRow key={log.id}>
                          <TableCell>{log.date}</TableCell>
                          <TableCell>{log.time}</TableCell>
                          <TableCell>{log.user}</TableCell>
                          <TableCell>{log.action}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Conteúdo da Aba QR Emergência */}
          <TabsContent value="emergencia">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">QR Code de Emergência</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  O QR Code de emergência permite que profissionais de saúde acessem suas informações médicas essenciais em caso de emergência.
                </p>
                
                <div className="border border-border rounded-lg p-5">
                  {qrCodeGenerated ? (
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-48 h-48 bg-white flex items-center justify-center">
                        <div className="bg-black w-36 h-36 flex items-center justify-center text-white">
                          QR Code Simulado
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm font-medium mb-1">Código de Acesso Emergencial</div>
                        <div className="font-mono text-lg font-semibold">{accessCode}</div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <AppButton size="sm" variant="outline">
                          Baixar
                        </AppButton>
                        <AppButton size="sm" variant="outline">
                          Compartilhar
                        </AppButton>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center py-10">
                      <p className="text-center mb-4">
                        Gere um QR code único que contém acesso às suas informações médicas essenciais para situações de emergência.
                      </p>
                      <AppButton onClick={handleGenerateQrCode}>
                        Gerar QR Code de Emergência
                      </AppButton>
                    </div>
                  )}
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Informações incluídas no QR Code:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Nome completo e data de nascimento</li>
                    <li>Contato de emergência</li>
                    <li>Tipo sanguíneo</li>
                    <li>Alergias e condições críticas</li>
                    <li>Medicamentos atuais</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileCard;
