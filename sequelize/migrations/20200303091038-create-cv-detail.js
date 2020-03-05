'use strict'

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'cvDetails',
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: DataTypes.literal('uuid_generate_v4()'),
        },
        cvId: {
          allowNull: false,
          type: DataTypes.UUID,
          references: {
            key: 'id',
            model: 'curriculumVitaes',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        /**
         * Contains 2 value [X,Y] in cordinate system
         */
        coordinateAxis: {
          allowNull: false,
          type: DataTypes.ARRAY(DataTypes.TEXT),
        },
        detailInformation: {
          allowNull: false,
          type: DataTypes.JSON(),
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
      },
      {
        charset: 'utf-8',
      },
    )
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('cvDetails')
  },
}
