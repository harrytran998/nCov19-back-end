'use strict'

module.exports = {
  /**
   * @param {import('sequelize/types').QueryInterface} queryInterface
   */
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'vaccins',
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
        forVirusId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            key: 'id',
            model: 'virus',
          },
          onUpdate: 'NULL',
          onDelete: 'NULL',
        },
        dateOfPublished: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        dateOfManufacture: {
          type: DataTypes.DATE,
          allowNull: false,
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
    return queryInterface.dropTable('vaccins')
  },
}
