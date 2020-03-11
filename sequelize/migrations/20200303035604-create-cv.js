'use strict'

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'curriculumVitaes',
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.literal('uuid_generate_v4()'),
          primaryKey: true,
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
        charset: 'utf-8',
      },
    )
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('curriculumVitaes')
  },
}
