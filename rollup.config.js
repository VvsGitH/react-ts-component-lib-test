const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const json = require("@rollup/plugin-json");
const external = require("rollup-plugin-peer-deps-external");
const postcss = require("rollup-plugin-postcss");
const sourcemaps = require('rollup-plugin-sourcemaps');

const pkg = require("./package.json");

module.exports = [
  {
    input: pkg.source,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      external(),
      postcss(),
      json(),
      typescript({ tsconfig: './tsconfig.json' }),
      resolve(),
      sourcemaps(),
      terser({
        output: { comments: false },
        compress: { drop_console: true }
      }),
    ],
    external: ['react', 'react-dom'],
  },
];
