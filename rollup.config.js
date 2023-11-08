const resolve = require("@rollup/plugin-node-resolve");
const terser = require("@rollup/plugin-terser");
const typescript = require("@rollup/plugin-typescript");
const copy = require("rollup-plugin-copy");
const external = require("rollup-plugin-peer-deps-external");
const scss = require("rollup-plugin-scss");
const sourcemaps = require("rollup-plugin-sourcemaps");

const pkg = require("./package.json");

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
      scss({
        output: pkg.style,
        outputStyle: "compressed",
        sourceMap: true
      }),
      copy({
        targets: [
          { src: "src/assets", dest: "dist" },
          // { src: "node_modules/bootstrap-italia/dist/fonts", dest: "dist" }
        ]
      }),
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
