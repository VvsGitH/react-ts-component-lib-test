const json = require("@rollup/plugin-json");
const resolve = require("@rollup/plugin-node-resolve");
const terser = require("@rollup/plugin-terser");
const typescript = require("@rollup/plugin-typescript");
const external = require("rollup-plugin-peer-deps-external");
const postcss = require("rollup-plugin-postcss");
const sourcemaps = require('rollup-plugin-sourcemaps');

const pkg = require("./package.json");
const image = require('@rollup/plugin-image');

module.exports = [
  {
    input: pkg.source,
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        exports: "named"
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
        exports: "named"
      }
    ],
    plugins: [
      external(),
      postcss(),
      image(),
      json(),
      typescript({ tsconfig: "./tsconfig.json" }),
      resolve(),
      sourcemaps(),
      terser({
        output: { comments: false },
        compress: { drop_console: true }
      })
    ],
    external: ["react", "react-dom", "bootstrap-italia"]
  }
];
