module.exports = {
    preset: 'jest-expo',
    transformIgnorePatterns: [
      "node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo(nent)?/.*|@expo/vector-icons|expo-linear-gradient|expo-status-bar)"
    ],
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  };
  








