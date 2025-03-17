
// This file is used by Jest to setup the test environment
// It's automatically executed before running tests

// Import jest-dom to add custom DOM element matchers
import '@testing-library/jest-dom';

// Explicitly extend Jest's expect with all matchers from testing-library
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from '@jest/globals';
expect.extend(matchers);

// Configure testing library
import { configure } from '@testing-library/react';
configure({
  testIdAttribute: 'data-testid',
});
