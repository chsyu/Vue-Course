const _nested = require("postcss-nested"),
  _cssvars = require("postcss-simple-vars"),
  _autoprefixer = require("autoprefixer"),
  _import = require("postcss-import");

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        // options here will be passed to postcss-loader
        plugins: [
           _import(), 
           _cssvars(), 
           _nested(), 
           _autoprefixer()
         ]
      }
    }
  }
};
