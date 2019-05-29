module.exports = {
  preset: "jest-react-native",
  testMatch: ["**/?(*.)+(spec|test).js"],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageDirectory: "coverage"
};
