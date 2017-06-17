
module.exports = {
  reactHotLoader: true,
  debug: false,

  modifyWebpackConfig: (baseConfig, options) => {
    baseConfig.module.rules.push({
      test: /\.otf/,
      use: [{
        loader: "url-loader",
        options: {
          limit: 65000,
          mimetype: "application/x-font-opentype"
        }
      }]
    });
    return baseConfig;
  }

};
