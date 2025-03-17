
// Type definitions for Jest
/// <reference types="jest" />
/// <reference types="@jest/globals" />

// Add Testing Library custom matchers
import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string): R;
      toHaveClass(className: string): R;
    }
  }
}
