
// Type definitions for Jest
/// <reference types="jest" />

// Import @testing-library/jest-dom types
import '@testing-library/jest-dom';

// Augment Jest's expect
declare global {
  namespace jest {
    interface Matchers<R> {
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
      
      // Make sure we have all the matchers used in tests
      toHaveStyle(css: Record<string, any>): R;
      toContainElement(element: HTMLElement | null): R;
      toContainHTML(html: string): R;
      toHaveFocus(): R;
      toHaveFormValues(values: Record<string, any>): R;
    }
  }
}

// This is crucial - we need to explicitly define matchers for different element types
declare global {
  namespace jest {
    // Generic DOM Node type
    interface Matchers<R, T> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveClass(className: string): R;
    }
    
    // Specific Node and HTMLElement
    interface Matchers<R, T extends HTMLElement | Node | ChildNode> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveClass(className: string): R;
    }
    
    // For JestMatchers
    interface JestMatchers<T> {
      toBeInTheDocument(): T;
      toHaveTextContent(text: string | RegExp): T;
      toHaveClass(className: string): T;
    }
  }
}

export {};
