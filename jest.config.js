module.exports = {
  testEnvironment: 'node',
  setupFiles: ['./jest.setup.js'],
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|expo(nent)?|@expo(nent)?/.*|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|react-clone-referenced-element)/)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'screens/**/*.{js,jsx}',
    'utils/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/__tests__/**',
  ],
  coverageReporters: ['text', 'lcov', 'html'],
  coverageDirectory: 'coverage',
};
