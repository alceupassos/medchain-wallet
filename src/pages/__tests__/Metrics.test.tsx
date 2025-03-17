
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import Metrics from "../../pages/Metrics";

// Mock the MainLayout component since we're testing Metrics component in isolation
jest.mock("@/components/layout/MainLayout", () => {
  return {
    __esModule: true,
    default: ({ children }) => <div data-testid="main-layout">{children}</div>,
  };
});

describe("Metrics Page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Metrics />
      </BrowserRouter>
    );
  });

  it("renders the metrics page title", () => {
    expect(screen.getByText("Métricas de Saúde")).toBeInTheDocument();
    expect(screen.getByText("Monitore seus indicadores de saúde e visualize tendências")).toBeInTheDocument();
  });

  it("renders the period selector", () => {
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Período")).toBeInTheDocument();
  });

  it("renders the add metric button", () => {
    expect(screen.getByRole("button", { name: /nova medição/i })).toBeInTheDocument();
  });

  it("renders the metrics summary section", () => {
    expect(screen.getByText("Pressão Arterial")).toBeInTheDocument();
    expect(screen.getByText("Glicemia")).toBeInTheDocument();
    expect(screen.getByText("Frequência Cardíaca")).toBeInTheDocument();
  });

  it("renders the tabs for different metrics", () => {
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(4);
    expect(tabs[0]).toHaveTextContent("Pressão Arterial");
    expect(tabs[1]).toHaveTextContent("Glicemia");
    expect(tabs[2]).toHaveTextContent("Freq. Cardíaca");
    expect(tabs[3]).toHaveTextContent("Peso");
  });

  it("displays the blood pressure tab content by default", () => {
    // The Blood Pressure tab should be active by default
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Pressão Arterial");
    expect(screen.getByText("Histórico e tendências da sua pressão arterial")).toBeInTheDocument();
  });
});
