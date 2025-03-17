
// This file is used by Jest to setup the test environment
// It's automatically executed before running tests

// Import @testing-library/jest-dom to add custom matchers
import '@testing-library/jest-dom';

// Explicitly extend expect with jest-dom matchers
import { expect } from '@jest/globals';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Jest's expect
expect.extend(matchers);

// We need to make this more explicit for TypeScript
import { configure } from '@testing-library/react';

// Configure testing library
configure({
  testIdAttribute: 'data-testid',
});
