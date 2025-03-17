
// This file is used by Jest to setup the test environment
// It's automatically executed before running tests

// Import jest-dom to add custom DOM element matchers
import '@testing-library/jest-dom';

// Explicitly extend Jest's expect with all matchers from testing-library
import { expect } from '@jest/globals';
import * as testingLibraryMatchers from '@testing-library/jest-dom/matchers';

// Extend Jest's expect with custom matchers
expect.extend(testingLibraryMatchers as any);

// Configure testing library
import { configure } from '@testing-library/react';
configure({
  testIdAttribute: 'data-testid',
});
