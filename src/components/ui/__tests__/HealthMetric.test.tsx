
import { render, screen } from "@testing-library/react";
import HealthMetric from "../../ui/HealthMetric";

describe("HealthMetric", () => {
  const defaultProps = {
    icon: <span data-testid="test-icon">Icon</span>,
    title: "Test Metric",
    value: "100",
    unit: "units",
    status: "normal" as const,
    change: {
      value: "+5",
      direction: "up" as const
    }
  };

  it("renders with all props correctly", () => {
    render(<HealthMetric {...defaultProps} />);
    
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
    expect(screen.getByText("Test Metric")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("units")).toBeInTheDocument();
    expect(screen.getByText("Normal")).toBeInTheDocument();
    expect(screen.getByText("+5")).toBeInTheDocument();
  });

  it("renders with different status colors", () => {
    const { rerender } = render(<HealthMetric {...defaultProps} />);
    
    // Normal status (default from defaultProps)
    let statusIndicator = screen.getByText("Normal").previousSibling;
    expect(statusIndicator).toHaveClass("text-health-green");
    
    // Warning status
    rerender(<HealthMetric {...defaultProps} status="warning" />);
    statusIndicator = screen.getByText("Atenção").previousSibling;
    expect(statusIndicator).toHaveClass("text-health-yellow");
    
    // Critical status
    rerender(<HealthMetric {...defaultProps} status="critical" />);
    statusIndicator = screen.getByText("Crítico").previousSibling;
    expect(statusIndicator).toHaveClass("text-health-red");
  });

  it("renders with different change directions", () => {
    const { rerender } = render(<HealthMetric {...defaultProps} />);
    
    // Up direction (default from defaultProps)
    let changeValue = screen.getByText("+5");
    expect(changeValue.parentElement).toHaveClass("text-health-green");
    
    // Down direction
    rerender(<HealthMetric 
      {...defaultProps} 
      change={{ value: "-5", direction: "down" }} 
    />);
    changeValue = screen.getByText("-5");
    expect(changeValue.parentElement).toHaveClass("text-health-red");
    
    // Neutral direction
    rerender(<HealthMetric 
      {...defaultProps} 
      change={{ value: "0", direction: "neutral" }} 
    />);
    changeValue = screen.getByText("0");
    expect(changeValue.parentElement).toHaveClass("text-gray-500");
  });

  it("renders without optional props", () => {
    render(<HealthMetric 
      icon={<span>Icon</span>}
      title="Simple Metric"
      value="75"
    />);
    
    expect(screen.getByText("Simple Metric")).toBeInTheDocument();
    expect(screen.getByText("75")).toBeInTheDocument();
    expect(screen.queryByText("Normal")).toBeInTheDocument(); // Default status
    expect(screen.queryByText("+5")).not.toBeInTheDocument(); // No change info
  });
});
