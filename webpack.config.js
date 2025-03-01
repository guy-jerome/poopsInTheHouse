const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app/app.js", // Entry point for your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/, // Load HTML files as strings
        use: {
          loader: "html-loader",
          options: {
            minimize: true, // Optional: Minify the HTML
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use this HTML file as a template
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve files from the dist directory
    },
    compress: true,
    port: 9000, // Port for the development server
  },
};
