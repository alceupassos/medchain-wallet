
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface HealthMetricProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  unit?: string;
  status?: 'normal' | 'warning' | 'critical';
  change?: {
    value: string | number;
    direction: 'up' | 'down' | 'neutral';
  };
  className?: string;
}

const HealthMetric = ({
  icon,
  title,
  value,
  unit,
  status = 'normal',
  change,
  className
}: HealthMetricProps) => {
  const statusColors = {
    normal: 'text-health-green',
    warning: 'text-health-yellow',
    critical: 'text-health-red'
  };

  const changeColors = {
    up: 'text-health-green',
    down: 'text-health-red',
    neutral: 'text-gray-500'
  };

  const changeIcons = {
    up: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
    ),
    down: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    ),
    neutral: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"/>
      </svg>
    )
  };

  const statusLabels = {
    normal: 'Normal',
    warning: 'Atenção',
    critical: 'Crítico'
  };

  return (
    <div className={cn("glass-card rounded-xl p-4 flex flex-col", className)}>
      <div className="flex items-center space-x-2 mb-2 text-gray-500">
        <span className="text-medical">{icon}</span>
        <span className="text-xs font-medium">{title}</span>
      </div>
      
      <div className="flex items-baseline">
        <span className="text-2xl font-semibold">{value}</span>
        {unit && <span className="ml-1 text-sm text-gray-500">{unit}</span>}
      </div>
      
      <div className="mt-2 flex items-center">
        {status && (
          <span className={cn("w-2 h-2 rounded-full mr-2", statusColors[status])}></span>
        )}
        <span className={cn("text-xs", statusColors[status])}>
          {statusLabels[status]}
        </span>
        
        {change && (
          <div className={cn("ml-auto flex items-center text-xs", changeColors[change.direction])}>
            {changeIcons[change.direction]}
            <span className="ml-1">{change.value}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthMetric;
