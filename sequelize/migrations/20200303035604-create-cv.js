'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'curriculumVitaes',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
        },
        avatarImage: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        userInfo: {
          type: Sequelize.ARRAY(Sequelize.JSON()),
          allowNull: false,
        },
      },
      {
        charset: 'utf-8',
      },
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('curriculumVitaes')
  },
}
