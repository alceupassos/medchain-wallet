
// This file is used by Jest to setup the test environment
// It's automatically executed before running tests

// Import jest-dom to add custom DOM element matchers
import '@testing-library/jest-dom';

// Configure testing library
import { configure } from '@testing-library/react';
configure({
  testIdAttribute: 'data-testid',
});

// Use the modern way to extend Jest's expect
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from '@jest/globals';

// Add custom matchers to Jest
expect.extend(matchers);
