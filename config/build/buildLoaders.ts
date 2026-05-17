import webpack from "webpack";
import type { BuildOptions } from "./types/types.ts";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { buildBabelLoader } from "./babel/buildBabelLoader.ts";

type ModuleOptions = webpack.Configuration;
export function buildLoaders(
  options: BuildOptions,
): NonNullable<ModuleOptions["module"]>["rules"] {
  const isDev = options.mode === "development";
  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
        namedExport: false,
      },
    },
  };
  const svgrLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };
  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };
  const scssLoader = {
    test: /\.module\.(c|sa|sc)ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      "sass-loader",
    ],
  };
  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: true,
        },
      },
    ],
  };

  const babelLoader = buildBabelLoader(options);
  return [
    assetLoader,
    scssLoader,
    //tsLoader,
    babelLoader,
    svgrLoader,
  ];
}