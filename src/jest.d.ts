
// Type definitions for Jest
/// <reference types="jest" />

// Import @testing-library/jest-dom types
import '@testing-library/jest-dom';

declare global {
  namespace jest {
    // Base interface with common matchers
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

// Extended matcher interfaces for specific element types
declare global {
  namespace jest {
    // Specific Node and HTMLElement - These are crucial for element-specific testing
    interface Matchers<R, T extends HTMLElement | Node | ChildNode> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveClass(className: string): R;
      toHaveStyle(css: Record<string, any>): R;
      toBeVisible(): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
    }
    
    // For JestMatchers (used in some test functions)
    interface JestMatchers<T> {
      toBeInTheDocument(): T;
      toHaveTextContent(text: string | RegExp): T;
      toHaveClass(className: string): T;
      toHaveStyle(css: Record<string, any>): T;
    }

    // For asymmetric matchers
    interface AsymmetricMatchers {
      toBeInTheDocument(): void;
      toHaveTextContent(text: string | RegExp): void;
      toHaveClass(className: string): void;
      toHaveStyle(css: Record<string, any>): void;
    }
  }
}

export {};
