
// Type definitions for Jest
/// <reference types="jest" />

// Import @testing-library/jest-dom types
import '@testing-library/jest-dom';

// Augment Jest's expect
declare global {
  namespace jest {
    interface Matchers<R, T = any> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveClass(className: string): R;
      // Add other custom matchers that might be used
      toBeVisible(): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toBeChecked(): R;
      toHaveAttribute(attr: string, value?: string | RegExp): R;
      toHaveValue(value: string | string[] | number | null): R;
      toBeEmpty(): R;
    }
  }
}
