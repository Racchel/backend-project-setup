import { compilerOptions } from './tsconfig.json'
import { pathsToModuleNameMapper } from 'ts-jest/utils'

export default {
  // coverage
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['**/src/**/*.js'],
  clearMocks: true,

  // imports with @
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),

  preset: 'ts-jest',

  // what is the test environment
  testEnvironment: 'node',

  // where are the test files
  testMatch: [
    '**/**/*.spec.ts'
  ]
} 
