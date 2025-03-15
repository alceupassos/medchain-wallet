
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
  disabled?: boolean;
  className?: string;
}

export function TimePicker({ value = "12:00", onChange, disabled, className }: TimePickerProps) {
  const [time, setTime] = useState(value);
  const [hours, setHours] = useState(parseInt(value.split(':')[0]));
  const [minutes, setMinutes] = useState(parseInt(value.split(':')[1]));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const newTime = `${formattedHours}:${formattedMinutes}`;
    setTime(newTime);
    onChange?.(newTime);
  }, [hours, minutes, onChange]);

  const increaseHours = () => {
    setHours(prev => (prev + 1) % 24);
  };

  const decreaseHours = () => {
    setHours(prev => (prev - 1 + 24) % 24);
  };

  const increaseMinutes = () => {
    setMinutes(prev => (prev + 5) % 60);
  };

  const decreaseMinutes = () => {
    setMinutes(prev => (prev - 5 + 60) % 60);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn("w-[120px] justify-start text-left font-normal", className)}
        >
          <Clock className="mr-2 h-4 w-4" />
          {time}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <Button variant="ghost" size="sm" onClick={increaseHours}>
              ▲
            </Button>
            <Input
              value={hours.toString().padStart(2, '0')}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (!isNaN(val) && val >= 0 && val < 24) {
                  setHours(val);
                }
              }}
              className="w-16 text-center"
            />
            <Button variant="ghost" size="sm" onClick={decreaseHours}>
              ▼
            </Button>
          </div>
          <div className="text-2xl">:</div>
          <div className="flex flex-col items-center">
            <Button variant="ghost" size="sm" onClick={increaseMinutes}>
              ▲
            </Button>
            <Input
              value={minutes.toString().padStart(2, '0')}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (!isNaN(val) && val >= 0 && val < 60) {
                  setMinutes(val);
                }
              }}
              className="w-16 text-center"
            />
            <Button variant="ghost" size="sm" onClick={decreaseMinutes}>
              ▼
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button size="sm" onClick={() => setOpen(false)}>
            Confirmar
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
