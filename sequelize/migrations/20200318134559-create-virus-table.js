'use strict'

module.exports = {
  /**
   * @param {import('sequelize/types').QueryInterface} queryInterface
   */
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'virus',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        whoDangerLevel: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        discoveredAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        isSubType: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        varientFrom: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'virus',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      {
        charset: 'utf-8',
      },
    )
  },
  /**
   * @param {import('sequelize/types').QueryInterface} queryInterface
   */
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('virus')
  },
}
