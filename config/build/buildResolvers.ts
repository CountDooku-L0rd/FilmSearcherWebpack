import type {Configuration} from "webpack";
import type {BuildOptions} from "./types/types.ts";

export function buildResolvers (options: BuildOptions): Configuration['resolve'] {
    return {
        extensions: [".tsx", ".ts", ".js"],
    }
}