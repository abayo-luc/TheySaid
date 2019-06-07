/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
jest.mock("TouchableOpacity", () => {
  const mockComponent = require("jest-react-native");
  return mockComponent("TouchableOpacity");
});

jest.mock("ImageBackground", () => require.requireMock("ImageBackground"));
jest.mock("ScrollView", () => require.requireMock("ScrollViewMock"));
jest.mock("Linking", () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.fn(),
  canOpenURL: jest.fn(),
  getInitialURL: jest.fn()
}));

jest.mock("NativeAnimatedHelper");
