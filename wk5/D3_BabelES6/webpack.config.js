let path = require('path');

module.exports = {
   entry: './assets/js/app.js',
   output: {
      path: path.join(__dirname, './dist/js'),
      filename: 'bundle.js'
   },
   module: {
      rules: [{
         test: /\.(js)$/,
         exclude: /(node_modules)/,
         use: {
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env']
            }
         }
      }]
   }
}


