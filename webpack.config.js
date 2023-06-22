module.exports = {
  mode: 'development',

  entry: './src/index',

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      options: {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "modules": false
                }
            ],
            "@babel/preset-react"
        ]
      }
    }, {
      test: /.css$/,

      use: [{
        loader: "css-loader"
      }]
    }]
  },

  infrastructureLogging: {
    level: 'info',
    debug: /webpack.buildChunkGraph/
  },

  stats: {
    logging: 'info',
    loggingDebug: /webpack.buildChunkGraph/
  },

  optimization: {
    splitChunks: false,
  }
}