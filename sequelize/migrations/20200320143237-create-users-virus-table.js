'use strict'

module.exports = {
  /**
   * @param {import('sequelize/types').QueryInterface} queryInterface
   */
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'usersVirus',
      {
        userId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            key: 'id',
            model: 'users',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        virusId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            key: 'id',
            model: 'virus',
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
    return queryInterface.dropTable('usersVirus')
  },
}
