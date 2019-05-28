const _nested = require("postcss-nested"),
  _cssvars = require("postcss-simple-vars"),
  _autoprefixer = require("autoprefixer"),
  _import = require("postcss-import");

module.exports = {
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
      exclude: [/\.map$/, /manifest\.json$/]
    },
    themeColor: "#1da025"
  },
  css: {
    loaderOptions: {
      postcss: {
        // options here will be passed to postcss-loader
        plugins: [_import(), _cssvars(), _nested(), _autoprefixer()]
      }
    }
  }
};
