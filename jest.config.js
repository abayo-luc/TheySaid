module.exports = {
  preset: "jest-expo",
  setupFiles: ["<rootDir>/__test__/jest.setup.js"],
  testMatch: ["**/?(*.)+(spec|test).js"],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageDirectory: "coverage",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|sentry-expo|native-base))"
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/__tests__/**"
  ]
};
