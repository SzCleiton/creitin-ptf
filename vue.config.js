const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    }
  },

  //Responsable config for auto import variables into vue components
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/setup/_variables.scss"; @import "~@/assets/scss/setup/_mixins.scss";'
      }
    }
  }
};