
import { Activity, TrendingDown, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HealthMetricProps {
  title: string;
  value: string | number;
  unit: string;
  status: 'normal' | 'warning' | 'alert';
  icon?: React.ReactNode;
  change?: {
    value: string;
    direction: 'up' | 'down';
  };
}

const HealthMetric = ({ 
  title, 
  value, 
  unit, 
  status, 
  icon,
  change 
}: HealthMetricProps) => {
  const statusColor = {
    normal: 'text-green-400 bg-green-900/30',
    warning: 'text-yellow-400 bg-yellow-900/30',
    alert: 'text-red-400 bg-red-900/30'
  };
  
  const statusText = {
    normal: 'Normal',
    warning: 'Atenção',
    alert: 'Alerta'
  };
  
  return (
    <div className="relative bg-gray-800/50 p-4 rounded-lg border border-gray-800">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {icon || <Activity size={18} className="text-gray-400" />}
          <span className="text-sm font-medium">{title}</span>
        </div>
        
        <div className={cn(
          "text-xs px-2 py-0.5 rounded-full flex items-center",
          statusColor[status]
        )}>
          <span className="w-1.5 h-1.5 rounded-full mr-1" style={{ backgroundColor: 'currentColor' }}></span>
          <span>{statusText[status]}</span>
        </div>
      </div>
      
      <div className="flex items-baseline">
        <span className="text-2xl font-semibold">{value}</span>
        <span className="ml-1 text-xs text-gray-400">{unit}</span>
      </div>
      
      {change && (
        <div className="mt-2 flex items-center text-xs">
          {change.direction === 'down' ? (
            <>
              <TrendingDown size={14} className="text-green-400 mr-1" />
              <span className="text-green-400 mr-1">{change.value}</span>
            </>
          ) : (
            <>
              <TrendingUp size={14} className="text-red-400 mr-1" />
              <span className="text-red-400 mr-1">{change.value}</span>
            </>
          )}
          <span className="text-gray-400">
            vs. último período
          </span>
        </div>
      )}
    </div>
  );
};

export default HealthMetric;
