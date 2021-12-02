module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
    "\\.svgr": "<rootDir>/__mocks__/svgr.js"
  },
};
