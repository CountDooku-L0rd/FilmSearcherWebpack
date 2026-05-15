import webpack from 'webpack';
import path from "node:path";
import { fileURLToPath } from 'url';
import {buildWebpack} from "./config/build/buildWebpack.ts";
import type {BuildMode, BuildPaths} from "./config/build/types/types.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface EnvVariables {
    mode: BuildMode;
    port: number;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
    });
    return config;
}