import babel from 'rollup-plugin-babel';
import license from 'rollup-plugin-license';
import { banner, external, babelrc, globals } from '../../tools/rollup-utils';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  sourcemap: true,
  output: [
    { file: pkg.main, format: 'umd', name: pkg.globalName },
    { file: pkg.module, format: 'es' },
  ],
  globals: globals(),
  external: external(__dirname),
  plugins: [
    babel(Object.assign({
      babelrc: false,
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }, babelrc(__dirname))),
    license({
      banner,
    }),
  ],
};
