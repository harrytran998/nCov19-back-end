'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
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
        bio: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
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
        charset: 'utf8',
        timestamps: true,
      },
    )
  },

  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
}
