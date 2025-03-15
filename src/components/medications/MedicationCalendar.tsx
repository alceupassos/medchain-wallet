
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Pill } from "lucide-react";
import { useState } from "react";
import { Medication } from "@/components/profile/types";

interface MedicationCalendarProps {
  medications: Medication[];
}

const MedicationCalendar = ({ medications }: MedicationCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Simulated data - in a real app, this would be generated from the medication schedule
  const medicationDays = [1, 5, 12, 15, 20, 22, 25, 26, 27, 28];

  const getMedicationsForDate = (date: Date | undefined) => {
    if (!date) return [];
    
    // This is a simplified example. In a real app, you would calculate based on medication frequency
    return medications.filter(med => med.status === "Ativo");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Calendário de Medicamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="border rounded-md p-3"
            modifiers={{
              hasMeds: (date) => {
                const day = date.getDate();
                return medicationDays.includes(day);
              },
            }}
            modifiersClassNames={{
              hasMeds: "bg-primary/10 font-bold",
            }}
          />
        </CardContent>
      </Card>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>
              {date ? (
                `Medicamentos para ${date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}`
              ) : (
                'Selecione uma data'
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {getMedicationsForDate(date).length > 0 ? (
              <div className="space-y-4">
                {getMedicationsForDate(date).map((med, index) => (
                  <DailyMedicationCard key={index} medication={med} time="08:00" />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <Pill className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-3" />
                <p>Nenhum medicamento para esta data</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const DailyMedicationCard = ({ medication, time }: { medication: Medication, time: string }) => {
  return (
    <div className="flex items-center p-3 border rounded-lg">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
        <Pill size={20} className="text-primary" />
      </div>
      <div className="flex-grow">
        <h4 className="font-medium">{medication.name} - {medication.dose}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{medication.frequency}</p>
      </div>
      <div className="flex-shrink-0 text-right">
        <div className="text-sm font-medium">{time}</div>
        <div className={cn(
          "text-xs",
          "text-green-600 dark:text-green-400"
        )}>Tomado</div>
      </div>
    </div>
  );
};

export default MedicationCalendar;
