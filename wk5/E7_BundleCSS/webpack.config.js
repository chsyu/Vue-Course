const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   entry: './assets/js/app.js',
   output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js',
      publicPath: './dist/'
   },
   module: {
      rules: [
         {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [
               {
                  loader: 'url-loader',
                  options: {
                     limit: 40000,
                     outputPath: './images'
                  }
               },
               'image-webpack-loader'
            ]
         },
         {
            use: ExtractTextPlugin.extract({
               use: 'css-loader'
            }),
            // use: ['style-loader', 'css-loader'],
            test: /\.css$/
         },
         {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         }
      ]
   },
   plugins: [
      new ExtractTextPlugin('./css/style.css')
   ]
}


