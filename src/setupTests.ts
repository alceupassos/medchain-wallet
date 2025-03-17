
// This file is used by Jest to setup the test environment
// It's automatically executed before running tests

// Import @testing-library/jest-dom to add custom matchers
import '@testing-library/jest-dom';

// Import needed testing libraries
import { expect, jest } from '@jest/globals';
import * as matchers from '@testing-library/jest-dom/matchers';
import { configure } from '@testing-library/react';

// Explicitly extend Jest's expect with all the matchers
expect.extend(matchers);

// Configure testing library
configure({
  testIdAttribute: 'data-testid',
});

// Make sure the global expect includes jest-dom matchers
declare global {
  // Instead of redeclaring expect, we'll augment the existing namespace
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveClass(className: string): R;
      toBeVisible(): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
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
