const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
    mode:"production",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, "public"),
        filename:"index.js",
        globalObject: 'this',
        library: {
            name: 'Poci',
            type: 'umd',
        }
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    }
}