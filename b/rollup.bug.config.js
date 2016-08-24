export default {
  sourceMap: false,
  external: ['a'],
  entry: 'index.js',
  targets: [
    {
      format: 'umd',
      moduleName: 'b',
      dest: 'lib/index.umd.js'
    },
    {
      format: 'es',
      dest: 'lib/index.bug.mjs'
    }
  ]
};
