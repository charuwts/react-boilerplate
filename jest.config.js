module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  bail: true,
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__tests__/StyleMock.js',
    '\\.(css|sass)$': 'identity-obj-proxy',
  },
  roots: ['<rootDir>/src/__tests__/'],
  testMatch: ['<rootDir>/src/__tests__/**/*.test.{js,jsx,ts,tsx}'],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupEnv.js'],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
}
