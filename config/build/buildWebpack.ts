import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildDevServer } from "./buildDevServer.ts";
import { buildLoaders } from "./buildLoaders.ts";
import { buildPlugins } from "./buildPlugins.ts";
import { buildResolvers } from "./buildResolvers.ts";
import type { BuildOptions } from "./types/types.ts";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === "development";
  return {
    mode: options.mode ?? "development",
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev ? "eval-cheap-module-source-map" : "source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
