module.exports = {
  entry: './src/client/scripts/client.js',
  output: {
    path: '../app/assets/javascripts',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /src[/\\].*\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }
    ]
  }
};
