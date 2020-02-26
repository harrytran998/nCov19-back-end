module.exports = {
  development: {
    dialect: 'postgres',
    seederStorage: 'sequelize',
    url: process.env.DB_URI,
  },
  test: {
    dialect: 'postgres',
    seederStorage: 'sequelize',
    url: process.env.DB_URI,
  },
  production: {
    seederStorage: 'sequelize',
    url: process.env.DB_URI,
  },
}
