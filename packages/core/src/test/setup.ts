// Global test setup for bun:test
import { afterEach, afterAll, mock } from 'bun:test';

// Mock pino and pino-pretty globally for all tests to avoid missing dependency errors in some environments
mock.module('pino', () => ({
  default: mock(() => ({
    child: mock(() => ({
      info: mock(),
      error: mock(),
      warn: mock(),
      debug: mock(),
      trace: mock(),
      fatal: mock(),
    })),
    info: mock(),
    error: mock(),
    warn: mock(),
    debug: mock(),
    trace: mock(),
    fatal: mock(),
  })),
}));
mock.module('pino-pretty', () => ({
  default: mock(),
}));

// Clean up mocks after each test
afterEach(() => {
  // Bun uses mock.restore() for individual mocks
  // For Jest compatibility, we clear any module mocks here
});

// Restore all mocks after all tests complete
afterAll(() => {
  // Reset any global state
});
