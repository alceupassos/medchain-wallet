
import { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Medication } from '@/components/profile/types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface MedicationCalendarProps {
  medications: Medication[];
}

const MedicationCalendar = ({ medications }: MedicationCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Create dates with medication counts for calendar highlighting
  const getDayMedicationCount = (day: Date): number => {
    return medications.filter(med => 
      med.status === 'Ativo' || med.status === 'Conforme necessário'
    ).length;
  };

  // The selected day's medications
  const selectedDayMedications = date 
    ? medications.filter(med => med.status === 'Ativo' || med.status === 'Conforme necessário')
    : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="md:col-span-1 glass-card">
        <CardHeader>
          <CardTitle className="text-xl">Calendário</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            locale={ptBR}
            className="rounded-md border"
            components={{
              DayContent: ({ day }) => {
                const count = getDayMedicationCount(day);
                return (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {format(day, 'd')}
                    {count > 0 && (
                      <div className="absolute bottom-0 w-full flex justify-center">
                        <div className={cn(
                          "h-1 rounded-full",
                          count >= 5 ? "w-5 bg-medical" : 
                          count >= 3 ? "w-4 bg-medical/80" : 
                          "w-3 bg-medical/60"
                        )}/>
                      </div>
                    )}
                  </div>
                );
              }
            }}
          />
        </CardContent>
      </Card>

      <Card className="md:col-span-2 glass-card">
        <CardHeader>
          <CardTitle className="text-xl">
            Medicamentos para {date ? format(date, "d 'de' MMMM", { locale: ptBR }) : 'Hoje'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {selectedDayMedications.length > 0 ? (
              selectedDayMedications.map((med, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between border rounded-lg p-4">
                  <div className="flex-1">
                    <div className="font-medium">{med.name} - {med.dose}</div>
                    <div className="text-sm text-muted-foreground">{med.frequency}</div>
                  </div>
                  
                  <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                    <div className="text-sm font-medium">
                      {med.nextDose?.split(', ')[1] || '08:00'}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {med.instructions?.split(', ')[0] || 'Sem instruções específicas'}
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-3 sm:mt-0 sm:ml-3">
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-medical/10 text-medical hover:bg-medical/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Não há medicamentos agendados para {date ? format(date, "d 'de' MMMM", { locale: ptBR }) : 'hoje'}.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicationCalendar;
