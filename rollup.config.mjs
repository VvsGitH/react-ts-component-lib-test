import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";
import external from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";
import sourcemaps from "rollup-plugin-sourcemaps";

import pkg from "./package.json" assert { type: "json" };

export default [
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
        targets: [{ src: "src/imgs", dest: "dist" }]
      }),
      image(),
      json(),
      resolve(),
      typescript({ tsconfig: "./tsconfig.json" }),
      sourcemaps(),
      terser({
        output: { comments: false },
        compress: { drop_console: true }
      })
    ],
    external: ["react", "react-dom", "bootstrap-italia"]
  }
];
