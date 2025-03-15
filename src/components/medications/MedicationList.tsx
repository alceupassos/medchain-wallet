
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, Edit, Trash } from "lucide-react";
import { Medication } from "@/components/profile/types";

interface MedicationListProps {
  medications: Medication[];
}

const MedicationList = ({ medications }: MedicationListProps) => {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Dose</TableHead>
            <TableHead>Frequência</TableHead>
            <TableHead>Início</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medications.map((medication) => (
            <TableRow key={medication.id}>
              <TableCell className="font-medium">{medication.name}</TableCell>
              <TableCell>{medication.dose}</TableCell>
              <TableCell>{medication.frequency}</TableCell>
              <TableCell>{medication.startDate}</TableCell>
              <TableCell>
                <StatusBadge status={medication.status} />
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" title="Ver detalhes">
                    <Info size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" title="Editar">
                    <Edit size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" title="Excluir">
                    <Trash size={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const StatusBadge = ({ status }: { status: "Ativo" | "Finalizado" | "Conforme necessário" | "Suspenso" }) => {
  switch (status) {
    case "Ativo":
      return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Ativo</Badge>;
    case "Finalizado":
      return <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400">Finalizado</Badge>;
    case "Conforme necessário":
      return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">Conforme necessário</Badge>;
    case "Suspenso":
      return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">Suspenso</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export default MedicationList;
