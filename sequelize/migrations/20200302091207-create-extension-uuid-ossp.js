'use strict'

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.sequelize.query('DROP EXTENSION IF EXISTS "uuid-ossp" RESTRICT;')
  },
}
