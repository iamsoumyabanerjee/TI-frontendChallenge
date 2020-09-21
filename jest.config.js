const collectCoverageFrom = [
  'src/**/*.js',
  '!src/config.js',
  '!src/state/*.js',
  '!src/pages/BaseComponents/**/*.js',
  '!src/i18n/*.js',
  '!src/constants/**/*.js'
]

const coverageDirectory = 'coverage'

const coverageReporters = ['text', 'html']

const moduleDirectories = ['node_modules']

const moduleFileExtensions = ['js']

const testPathIgnorePatterns = ['/node_modules/','/dist']

const testEnvironment = 'node'

const modulePathIgnorePatterns = ['<rootDir>/dist/']

const testRegex = '(/__tests__/.*|(\\.|/)(test|spec))\\.js$'

const transform = {
  "^.+\\.js$": "babel-jest"
}

const moduleNameMapper = {
  "^.+\\.(css|less|scss)$": "identity-obj-proxy"
}

const globals = { "API_ENV": "-dev" }

const setupFiles = [
  './src/setup-tests.js'
]

module.exports = {
  collectCoverageFrom,
  coverageDirectory,
  coverageReporters,
  moduleDirectories,
  moduleFileExtensions,
  modulePathIgnorePatterns,
  testEnvironment,
  testPathIgnorePatterns,
  testRegex,
  setupFiles,
  transform,
  moduleNameMapper,
  globals
}