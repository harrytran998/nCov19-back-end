module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@constants': './src/constants',
          '@controllers': './src/controllers',
          '@db': './src/db',
          '@graph': './src/graphql',
          '@helpers': './src/helpers',
          '@libs': './src/libs',
          '@models': './src/models',
          '@server': './src/server',
        },
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
}
