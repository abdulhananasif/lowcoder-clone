const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const JSEntryWebpackPlugin = require('./plugins/JSEntryWebpackPlugin.cjs');

const { buildVars } = require("./src/dev-utils/buildVars.cjs");

const define = {};
buildVars.forEach(({ name, defaultValue }) => {
  define[name] = JSON.stringify(process.env[name] || defaultValue);
});

const apiBaseUrl = "http://localhost:8000";

module.exports = {
  // stats: 'verbose',
  mode: 'production',
  entry: "./index-bundle.jsx",
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  // entry: {
  //   index: "./src/index.jsx",
  //   another: "./node_modules/lowcoder-sdk/dist/index.js",
  // },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                svgo: false,
              },
            },
          },
          'url-loader'
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|ico)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ],
  },
  resolve: {
    extensions: [".*", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "lowcoder-sdk": path.resolve(__dirname, "../lowcoder/src/index.sdk"),
      "@lowcoder-ee": path.resolve(__dirname, "../lowcoder/src"),
    },
    plugins: [new TsconfigPathsPlugin({
      configFile: "../lowcoder/tsconfig.json"
    })]
  },
  output: {
    path: path.resolve(__dirname, 'bundle'),
    // publicPath: "https://sdk.lowcoder.cloud/",
    publicPath: "/",
    // filename: "bundle.js",
    filename: '[name].bundle.js',
    clean: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      ...define,
      REACT_APP_API_HOST: JSON.stringify(apiBaseUrl),
      REACT_APP_BUNDLE_TYPE: JSON.stringify("sdk"),
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /.test.(ts|tsx)$/,
    }),
    new JSEntryWebpackPlugin({
      path: path.resolve(__dirname, 'bundle'),
      filename: 'bundle.js'
    }),
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      // Your customization if any
    })],
    sideEffects: true,
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
