import typescript from 'rollup-plugin-typescript2';
//import nodeResolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    // {
    //   file: pkg.module,
    //   format: 'esm',
    //   exports: 'named',
    // },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  // external: [
  //   'react',
  //   'react-dom',
  //   'react-dnd',
  //   'prop-types',
  //   'react-dnd-html5-backend',
  //   'frontend-collective-react-dnd-scrollzone',
  //   'react-virtualized',
  //   'lodash.isequal',
  // ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      check: false,
    }),
    //    nodeResolve(),
    postcss({ name: './style.css' }),
    // commonjs({
    //   include: 'node_modules/**',
    // }),
    // babel({
    //   exclude: 'node_modules/**',
    // }),
  ],
};
