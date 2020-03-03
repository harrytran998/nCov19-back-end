'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'userSessions',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          references: {
            key: 'id',
            model: 'users',
          },
          type: Sequelize.INTEGER,
        },
        expiresAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        charset: 'utf8',
      },
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userSessions')
  },
}
