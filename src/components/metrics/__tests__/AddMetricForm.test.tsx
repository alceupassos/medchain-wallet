
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddMetricForm from "../AddMetricForm";

describe("AddMetricForm", () => {
  const mockOnAddMetric = jest.fn();

  beforeEach(() => {
    mockOnAddMetric.mockClear();
  });

  it("renders the add metric button", () => {
    render(<AddMetricForm onAddMetric={mockOnAddMetric} />);
    
    expect(screen.getByRole("button", { name: /nova medição/i })).toBeInTheDocument();
  });

  it("opens the dialog when button is clicked", async () => {
    render(<AddMetricForm onAddMetric={mockOnAddMetric} />);
    
    await userEvent.click(screen.getByRole("button", { name: /nova medição/i }));
    
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Adicionar Nova Medição")).toBeInTheDocument();
  });

  it("shows different form fields based on selected metric type", async () => {
    render(<AddMetricForm onAddMetric={mockOnAddMetric} />);
    
    // Open dialog
    await userEvent.click(screen.getByRole("button", { name: /nova medição/i }));
    
    // Select blood pressure
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByText("Pressão Arterial"));
    
    // Check for blood pressure specific fields
    expect(screen.getByLabelText(/sistólica/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/diastólica/i)).toBeInTheDocument();
    
    // Change to another metric type
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByText("Glicemia"));
    
    // Check for single value field
    expect(screen.getByLabelText(/valor/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/sistólica/i)).not.toBeInTheDocument();
  });

  it("submits the form with correct values", async () => {
    render(<AddMetricForm onAddMetric={mockOnAddMetric} />);
    
    // Open dialog
    await userEvent.click(screen.getByRole("button", { name: /nova medição/i }));
    
    // Fill the form
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByText("Glicemia"));
    
    await userEvent.type(screen.getByLabelText(/valor/i), "110");
    
    const dateInput = screen.getByLabelText(/data da medição/i);
    await userEvent.type(dateInput, "2023-06-15T08:30");
    
    await userEvent.type(screen.getByLabelText(/observações/i), "Em jejum");
    
    // Submit the form
    await userEvent.click(screen.getByRole("button", { name: /salvar/i }));
    
    // Check if onAddMetric was called with correct values
    expect(mockOnAddMetric).toHaveBeenCalledWith(
      expect.objectContaining({
        metricType: "bloodGlucose",
        value: "110",
        date: "2023-06-15T08:30",
        notes: "Em jejum"
      }),
      expect.anything()
    );
  });
});
