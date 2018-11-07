const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //.dist
    filename: 'bundle.js' // cria um arquivo chamado bundle na pasta dist, depois de compilar todo o processo
  },

  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            
        }]
    }]
  }
}
