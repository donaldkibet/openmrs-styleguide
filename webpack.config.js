const path = require("path");

module.exports = {
  entry: __dirname + "/src/root-config-dist.js",
  devtool: "sourcemap",
  output: {
    filename: "root-config.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "system"
  },
  module: {
    rules: [
      {
        parser: {
          system: false
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    disableHostCheck: true
  },
  externals: {
    "single-spa": "single-spa",
    "zone.js": "zone.js"
  },
  plugins: []
};
