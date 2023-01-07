const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
    mode:"production",
    entry:"./src/index.js",
    experiments: {
      outputModule: true,
    },      
    output:{
        path:path.resolve(__dirname, "dist"),
        library: {
          type: "module",
        },
        clean: true
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    }
}