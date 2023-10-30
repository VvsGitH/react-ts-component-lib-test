const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const json = require("@rollup/plugin-json");
// const dts = require("rollup-plugin-dts");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const postcss = require("rollup-plugin-postcss");

const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        // plugins: [terser()],
        exports: "auto",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        // plugins: [terser()],
        exports: "auto",
      },
      // {
      //   file: "dist/index.js",
      //   format: "cjs",
      //   sourcemap: true,
      //   exports: "auto",
      // },
    ],
    plugins: [
      peerDepsExternal(),
      postcss(),
      json(),
      typescript({ tsconfig: "./tsconfig.json" }),
      resolve(),
      commonjs(),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  // {
  //   input: "src/index.ts",
  //   output: [{ file: "dist/types.d.ts", format: "es" }],
  //   plugins: [dts()],
  // },
];
