
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import MetricsSummary from "../MetricsSummary";

describe("MetricsSummary", () => {
  it("renders all health metrics correctly", () => {
    render(<MetricsSummary />);
    
    // Check if all three metrics are rendered
    expect(screen.getByText("Pressão Arterial")).toBeInTheDocument();
    expect(screen.getByText("Glicemia")).toBeInTheDocument();
    expect(screen.getByText("Frequência Cardíaca")).toBeInTheDocument();
    
    // Check if values are displayed
    expect(screen.getByText("120/80")).toBeInTheDocument();
    expect(screen.getByText("105")).toBeInTheDocument();
    expect(screen.getByText("72")).toBeInTheDocument();
    
    // Check if units are displayed
    expect(screen.getByText("mmHg")).toBeInTheDocument();
    expect(screen.getByText("mg/dL")).toBeInTheDocument();
    expect(screen.getByText("bpm")).toBeInTheDocument();
  });
});
