'use strict'

import userRoles from '@constants/roles'

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'users',
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        passwordHash: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        avatar: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        bio: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        role: {
          type: DataTypes.ENUM(Object.values(userRoles)),
          allowNull: false,
          defaultValue: Object.values(userRoles)[0],
        },
        isActive: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
        acceptTokenAfter: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        googleID: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        facebookID: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        linkedInId: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        tokensOAuth: {
          type: DataTypes.ARRAY(DataTypes.JSON()),
          allowNull: true,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        deletedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        charset: 'utf8',
      },
    )
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('users')
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "public"."enum_users_role"', { raw: true })
  },
}
