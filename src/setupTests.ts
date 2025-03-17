
// This file is used by Jest to setup the test environment
// It's automatically executed before running tests

// Import @testing-library/jest-dom to add custom matchers
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Jest's expect with all the matchers
expect.extend(matchers);

// Configure testing library
import { configure } from '@testing-library/react';
configure({
  testIdAttribute: 'data-testid',
});
