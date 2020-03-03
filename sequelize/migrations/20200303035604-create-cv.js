'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('curriculumVitaes', {
      id: {
        type: Sequelize.INTERGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      avatarImage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userInfo: {
        type: Sequelize.ARRAY(Sequelize.JSON()),
        allowNull: false,
      },
      cvDetail: {
        type: Sequelize.ARRAY(Sequelize.JSON()),
        allowNull: false,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('curriculumVitaes')
  },
}
