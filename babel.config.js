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
          '@helpers': './src/helpers',
          '@libs': './src/libs',
          '@models': './src/models',
          '@server': './src/server',
          '@mutation': './src/graphql/resolvers/mutation',
          '@query': './src/graphql/resolvers/query',
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
