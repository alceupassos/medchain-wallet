
/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

// This type definition file ensures TypeScript recognizes the custom matchers
// added by @testing-library/jest-dom
declare namespace jest {
  interface Matchers<R, T> {
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

// Add global augmentation for @testing-library/jest-dom
declare global {
  namespace jest {
    interface Matchers<R, T = {}> {
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

export {};
