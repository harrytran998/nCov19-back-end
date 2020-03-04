'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'userSessions',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
        },
        userId: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            key: 'id',
            model: 'users',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
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
