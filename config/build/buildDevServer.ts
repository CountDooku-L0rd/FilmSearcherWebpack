import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import type {BuildOptions} from "./types/types.ts";

export function buildDevServer(options: BuildOptions):DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
    }
}