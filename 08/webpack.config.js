// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      { test: /\.tsx$/, use: "babel-loader" },
      { test: /\.svg$/, use: "@svgr/webpack" },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js"],
  },
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
};
