
// This file is used by Jest to setup the test environment
// It's automatically executed before running tests

// Import @testing-library/jest-dom to add custom matchers
import '@testing-library/jest-dom';

// Import needed testing libraries
import { expect } from '@jest/globals';
import * as matchers from '@testing-library/jest-dom/matchers';
import { configure } from '@testing-library/react';

// Explicitly extend Jest's expect with all the matchers
expect.extend(matchers);

// Configure testing library
configure({
  testIdAttribute: 'data-testid',
});

// Make sure the global expect includes jest-dom matchers
// Properly defining the global expect without redeclaration
declare global {
  namespace jest {
    interface Expect {
      (actual: any): any;
    }
  }
}
