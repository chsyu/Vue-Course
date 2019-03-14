let path = require('path');

module.exports = {
   entry: './assets/js/app.js',
   output: {
      path: path.join(__dirname, './dist/js'),
      filename: 'bundle.js'
   }
}


