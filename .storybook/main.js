module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // svg import config
    config.module.rules.push({
      test: /\.svgr$/i,
      issuer: /\.[jt]sx$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    console.dir(config.module.rules);

    // Return the altered config
    return config;
  },
};
