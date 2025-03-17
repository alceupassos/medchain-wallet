
/// <reference types="vite/client" />
/// <reference types="jest" />
/// <reference types="@jest/globals" />
/// <reference types="@testing-library/jest-dom" />

// Ensure compatibility with @testing-library/jest-dom
import '@testing-library/jest-dom';

// This file extends the TypeScript definitions for Vite and Jest
// It ensures that the TypeScript compiler recognizes the extended Jest matchers

// Add explicit type definitions for jest-dom matchers to global namespace
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveClass(className: string): R;
      toBeVisible(): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toHaveAttribute(attr: string, value?: string | RegExp): R;
      toHaveStyle(css: Record<string, any>): R;
      toHaveValue(value: string | string[] | number | null): R;
      // Add any other matchers used in tests
      toContainElement(element: HTMLElement | null): R;
      toContainHTML(html: string): R;
      toHaveFocus(): R;
    }

    // Also add to any specific element types
    interface Matchers<R, T> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveClass(className: string): R;
    }
  }
}

// Required for module augmentation
export {};
