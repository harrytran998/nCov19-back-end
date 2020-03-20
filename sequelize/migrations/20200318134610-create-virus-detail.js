'use strict'

module.exports = {
  /**
   * @param {import('sequelize/types').QueryInterface} queryInterface
   */
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'virusDetails',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        virusId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            key: 'id',
            model: 'virus',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        symptoms: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: false,
        },
        precautions: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: true,
        },
        images: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: true,
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
    return queryInterface.dropTable('virusDetails')
  },
}
