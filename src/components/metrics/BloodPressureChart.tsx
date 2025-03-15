
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend 
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingDown } from 'lucide-react';

interface BloodPressureDataPoint {
  date: string;
  systolic: number;
  diastolic: number;
}

interface BloodPressureChartProps {
  data: BloodPressureDataPoint[];
}

const BloodPressureChart = ({ data }: BloodPressureChartProps) => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Pressão Arterial</CardTitle>
          <CardDescription>
            Histórico e tendências da sua pressão arterial
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="systolic" 
                name="Sistólica"
                stroke="#f97316" 
                fill="#f97316" 
                fillOpacity={0.3} 
              />
              <Area 
                type="monotone" 
                dataKey="diastolic" 
                name="Diastólica"
                stroke="#0ea5e9" 
                fill="#0ea5e9" 
                fillOpacity={0.3} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Dentro da Meta
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Suas leituras estão dentro da faixa recomendada (&lt;130/80 mmHg) em 85% das medições.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              <div className="flex items-center">
                <TrendingDown className="h-4 w-4 text-primary mr-2" />
                Tendência de Melhora
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Redução média de 5 mmHg na sistólica em comparação com o mês anterior.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BloodPressureChart;
