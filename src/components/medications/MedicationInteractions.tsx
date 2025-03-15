
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle2, HelpCircle, Search, Shield } from "lucide-react";
import { Medication } from "@/components/profile/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MedicationInteractionsProps {
  medications: Medication[];
}

const MedicationInteractions = ({ medications }: MedicationInteractionsProps) => {
  // Simulated interaction data
  const interactions = [
    { 
      id: 1, 
      med1: "Lisinopril", 
      med2: "Metformina", 
      severity: "Baixa", 
      description: "Pode causar hipoglicemia. Monitorar níveis de açúcar no sangue." 
    },
    { 
      id: 2, 
      med1: "Lisinopril", 
      med2: "Atorvastatina", 
      severity: "Média", 
      description: "Pode aumentar o risco de efeitos musculares adversos. Informe ao médico se sentir dor muscular." 
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Verificador de Interações</CardTitle>
          <CardDescription>
            Verifique possíveis interações entre seus medicamentos atuais ou com novos medicamentos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input placeholder="Digite o nome de um medicamento" className="flex-1" />
            <Button>
              <Search size={16} className="mr-2" />
              Verificar
            </Button>
          </div>
          
          <Alert className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Atenção</AlertTitle>
            <AlertDescription>
              Esta ferramenta não substitui a orientação médica. Sempre consulte seu médico ou farmacêutico sobre interações medicamentosas.
            </AlertDescription>
          </Alert>
          
          {interactions.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Medicamentos</TableHead>
                  <TableHead>Severidade</TableHead>
                  <TableHead>Descrição</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {interactions.map((interaction) => (
                  <TableRow key={interaction.id}>
                    <TableCell>
                      <div className="font-medium">{interaction.med1}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">+</div>
                      <div className="font-medium">{interaction.med2}</div>
                    </TableCell>
                    <TableCell>
                      <SeverityBadge severity={interaction.severity} />
                    </TableCell>
                    <TableCell>{interaction.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 dark:text-green-400 mb-3" />
              <p>Nenhuma interação medicamentosa detectada</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Informações Adicionais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium">Verificação Completa</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Nosso sistema verifica interações com alimentos, suplementos e outros medicamentos.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium">Consulte seu Médico</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Esta ferramenta é informativa. Sempre consulte seu médico antes de iniciar, parar ou mudar medicamentos.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const SeverityBadge = ({ severity }: { severity: string }) => {
  switch (severity) {
    case "Baixa":
      return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">Baixa</Badge>;
    case "Média":
      return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">Média</Badge>;
    case "Alta":
      return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">Alta</Badge>;
    case "Nenhuma":
      return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Nenhuma</Badge>;
    default:
      return <Badge>{severity}</Badge>;
  }
};

export default MedicationInteractions;
