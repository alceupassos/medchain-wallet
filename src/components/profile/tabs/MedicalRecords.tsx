
import { Plus } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import AppButton from '@/components/ui/AppButton';

interface MedicalRecord {
  id: string;
  date: string;
  type: string;
  doctor: string;
  notes: string;
}

interface MedicalRecordsProps {
  records: MedicalRecord[];
}

const MedicalRecords = ({ records }: MedicalRecordsProps) => {
  return (
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
            {records.map((record) => (
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
  );
};

export default MedicalRecords;
