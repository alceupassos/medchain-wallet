
// Type definitions for Jest
/// <reference types="jest" />

// Import @testing-library/jest-dom types
import '@testing-library/jest-dom';

// Extend Jest's expect to include DOM testing matchers
declare global {
  namespace jest {
    interface Matchers<R, T> {
      // DOM Testing Library matchers
      toBeInTheDocument(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveClass(className: string): R;
      toBeVisible(): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toBeChecked(): R;
      toHaveAttribute(attr: string, value?: string | RegExp): R;
      toHaveValue(value: string | string[] | number | null): R;
      toBeEmpty(): R;
      toHaveStyle(css: Record<string, any>): R;
      toContainElement(element: HTMLElement | null): R;
      toContainHTML(html: string): R;
      toHaveFocus(): R;
      toHaveFormValues(values: Record<string, any>): R;
    }
  }
}

// To make this file a module
export {};
