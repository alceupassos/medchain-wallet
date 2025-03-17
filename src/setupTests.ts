
// This file is used by Jest to setup the test environment
// It's automatically executed before running tests

// Import jest-dom to add custom DOM element matchers
import '@testing-library/jest-dom';

// Make sure jest-dom matchers are properly integrated with Jest
import { expect } from '@jest/globals';
import matchers from '@testing-library/jest-dom/matchers';

// Extend Jest's expect with custom matchers
expect.extend(matchers);

// Configure testing library
import { configure } from '@testing-library/react';
configure({
  testIdAttribute: 'data-testid',
});
