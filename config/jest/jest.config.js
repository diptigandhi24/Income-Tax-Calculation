const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(js|jsx)',
    '!<rootDir>/src/*.(js|jsx)',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/src/**/index.(js|jsx)'
  ],
  coverageDirectory: '<rootDir>/coverage/',
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'mjs',
    'js',
    'jsx',
    'svg',
    'ts',
    'tsx'
  ],
  roots: ['<rootDir>/src/'],
  rootDir: '../../',
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupAfterEnv.js'],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/*.(spec|test).(js|jsx|ts|tsx)',
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/config/jest/__mocks__/fileMock.js',
    '\\.(sass|scss)$': '<rootDir>/config/jest/__mocks__/styleMock.js'
  }
};
