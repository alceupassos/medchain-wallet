
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Bell, Plus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TimePicker } from "@/components/medications/TimePicker";
import { useState } from "react";

const MedicationReminders = () => {
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [selectedTime, setSelectedTime] = useState("08:00");

  // Simulated reminders data
  const reminders = [
    { id: 1, medication: "Lisinopril", time: "08:00", active: true, days: "Todos os dias" },
    { id: 2, medication: "Metformina", time: "13:00", active: true, days: "Todos os dias" },
    { id: 3, medication: "Metformina", time: "20:00", active: true, days: "Todos os dias" },
    { id: 4, medication: "Atorvastatina", time: "22:00", active: true, days: "Todos os dias" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Configuração de Lembretes</CardTitle>
            <Switch 
              checked={reminderEnabled} 
              onCheckedChange={setReminderEnabled} 
              aria-label="Ativar lembretes"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Tipo de notificação</label>
                <select className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm">
                  <option>Push e SMS</option>
                  <option>Apenas Push</option>
                  <option>Apenas SMS</option>
                  <option>E-mail</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Som de alerta</label>
                <select className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm">
                  <option>Sino</option>
                  <option>Campainha</option>
                  <option>Bipe</option>
                  <option>Vibração</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium">Antecedência do lembrete</label>
              <select className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm">
                <option>5 minutos antes</option>
                <option>15 minutos antes</option>
                <option>30 minutos antes</option>
                <option>1 hora antes</option>
              </select>
            </div>
            
            <div className="flex items-center mt-4 justify-between">
              <span className="text-sm font-medium">Lembretes repetidos</span>
              <Switch 
                aria-label="Ativar lembretes repetidos"
              />
            </div>
            
            <div className="flex items-center mt-2 justify-between">
              <span className="text-sm font-medium">Relatar automaticamente doses perdidas</span>
              <Switch 
                aria-label="Relatar doses perdidas"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Meus Lembretes</CardTitle>
            <Button size="sm">
              <Plus size={16} className="mr-2" />
              Novo Lembrete
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medicamento</TableHead>
                <TableHead>Horário</TableHead>
                <TableHead>Dias</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reminders.map((reminder) => (
                <TableRow key={reminder.id}>
                  <TableCell>{reminder.medication}</TableCell>
                  <TableCell>{reminder.time}</TableCell>
                  <TableCell>{reminder.days}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={reminder.active 
                      ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-gray-50 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
                    }>
                      {reminder.active ? 'Ativo' : 'Inativo'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">Editar</Button>
                      <Button variant="ghost" size="sm" className="text-red-500 dark:text-red-400">Remover</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicationReminders;
