'use strict'
import { userRoles } from '@constants'

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.literal('uuid_generate_v4()'),
        },
        username: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        passwordHash: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        avatar: DataTypes.STRING,
        bio: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        role: {
          type: DataTypes.ENUM(Object.values(userRoles)),
          allowNull: false,
          defaultValue: Object.values(userRoles)[0], // normal USER
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        deletedAt: {
          allowNull: true,
          type: DataTypes.DATE,
        },
      },
      {
        charset: 'utf8',
      },
    )
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.DataTypes.query('DROP TYPE IF EXISTS "public"."enum_users_role"', { raw: true })
    return queryInterface.dropTable('users')
  },
}
