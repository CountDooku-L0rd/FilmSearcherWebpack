import webpack from "webpack";
import type {BuildOptions} from "./types/types.ts";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type ModuleOptions = webpack.Configuration;
export function buildLoaders(options: BuildOptions): NonNullable<ModuleOptions['module']>['rules'] {
    const isDev = options.mode === 'development';
    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
        },
    }
    const scssLoader = {
        test: /\.module\.(c|sa|sc)ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            "sass-loader",
        ],
    }
    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }
    return [
        scssLoader,
        tsLoader,
    ]
}