
import { render, screen } from "@testing-library/react";
import BloodPressureChart from "../BloodPressureChart";

const mockData = [
  { date: 'Jan 1', systolic: 120, diastolic: 80 },
  { date: 'Jan 2', systolic: 118, diastolic: 78 },
];

describe("BloodPressureChart", () => {
  it("renders chart with correct title and description", () => {
    render(<BloodPressureChart data={mockData} />);
    
    expect(screen.getByText("Pressão Arterial")).toBeInTheDocument();
    expect(screen.getByText("Histórico e tendências da sua pressão arterial")).toBeInTheDocument();
  });
  
  it("renders info cards correctly", () => {
    render(<BloodPressureChart data={mockData} />);
    
    expect(screen.getByText("Dentro da Meta")).toBeInTheDocument();
    expect(screen.getByText("Tendência de Melhora")).toBeInTheDocument();
    expect(screen.getByText("Suas leituras estão dentro da faixa recomendada (<130/80 mmHg) em 85% das medições.")).toBeInTheDocument();
    expect(screen.getByText("Redução média de 5 mmHg na sistólica em comparação com o mês anterior.")).toBeInTheDocument();
  });
});
