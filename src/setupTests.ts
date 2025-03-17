
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

// We're not redefining expect globally as it causes type errors
// Instead, ensure the types are properly imported in jest.d.ts and vite-env.d.ts
