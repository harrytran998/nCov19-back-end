'use strict'
import { userRoles } from '@constants'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        username: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        passwordHash: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        bio: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        role: {
          type: Sequelize.ENUM(Object.values(userRoles)),
          allowNull: false,
          defaultValue: Object.values(userRoles)[0], // normal USER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8',
      },
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "public"."enum_users_role"', { raw: true })
    return queryInterface.dropTable('users')
  },
}
