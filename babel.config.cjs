module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript', // Ensure TypeScript support
  ],
  sourceType: 'module', // This is critical for ECMAScript modules
};
