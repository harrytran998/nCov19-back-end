'use strict'

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'curriculumVitaes',
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: DataTypes.literal('uuid_generate_v4()'),
        },
        avatarImage: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userInfo: {
          type: DataTypes.ARRAY(DataTypes.JSON()),
          allowNull: false,
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
        charset: 'utf-8',
      },
    )
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('curriculumVitaes')
  },
}
