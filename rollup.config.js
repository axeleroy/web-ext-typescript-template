import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

/** @type {import("rollup").RollupOptions[]} */
export default [
    {
        input: "src/background.ts",
        output: {
            file: "src/background.js",
            format: "iife",
        },
        plugins: [typescript(), commonjs(), nodeResolve()],
    },
    {
        input: "src/content-script.ts",
        output: {
            file: "src/content-script.js",
            format: "iife",
        },
        plugins: [typescript(), commonjs(), nodeResolve()],
    },
];
