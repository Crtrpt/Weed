const rollup = require('rollup');
import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/main.ts',
  output:{
      file: 'docs/js/bundle.js',
      format: 'umd',
      name:"trifoliate"
    },
  plugins: [
    scss() ,
    resolve(),
    typescript(),
    babel({ babelHelpers: 'bundled' })
  ]
};


