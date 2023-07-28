const path = require("path");

module.exports = {
  mode: "production",
  entry: "./js/dashboard_main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // For CSS files
        use: ["style-loader", "css-loader"], // Using the style-loader and css-loader
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },
  mode: "development", // Setting the mode to 'development'
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // Setting the directory to serve content from
    port: 8564, // Specify the port number (in this case, 8564)
  },
};
