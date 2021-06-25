const rollup = require('rollup');
import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import typescript from 'rollup-plugin-typescript2';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'src/main.ts',
  output:{
      sourcemap: true,
      file: 'example/js/bundle.js',
      format: 'umd',
      name:"weed"
    },
  plugins: [
    scss(
      {
        sourceMap: true,
        sourceMapEmbed: true,
        include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
        failOnError: true,
        watch: 'src/',
      }
    ),
    sourcemaps(),
    typescript(),
    serve({
      contentBase:"example"
    }),
    livereload("example"),
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
};


