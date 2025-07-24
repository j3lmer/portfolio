const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: path.join(__dirname, "src/main.js"),
    devtool: isDevelopment ? "source-map" : false,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
            "postcss-loader",
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[contenthash].css',
      }),
      new Dotenv({
        path: `./.env${isDevelopment ? '.development' : '.production'}`,
        safe: true,
        allowEmptyValues: true,
        systemvars: true,
        silent: true,
        defaults: false
      }),
      new webpack.DefinePlugin({
        // Define your IS_DEBUG variable here
        'process.env.APP_API_URL': JSON.stringify(process.env.APP_API_URL),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.IS_DEBUG': JSON.stringify(process.env.IS_DEBUG), // <-- Add this line
      }),
    ],
    devServer: {
      open: true,
      hot: true,
      devMiddleware: {
        writeToDisk: true,
      },
      static: {
        directory: path.join(__dirname, 'public'),
        watch: true,
      },
      port: 8080,
    },
    optimization: {
      minimizer: [
        "...",
        new CssMinimizerPlugin(),
      ],
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
  };
};
