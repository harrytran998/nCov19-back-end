'use strict'

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'cvDetails',
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.literal('uuid_generate_v4()'),
          primaryKey: true,
        },
        cvId: {
          type: DataTypes.UUID,
          allowNull: false,
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
          type: DataTypes.ARRAY(DataTypes.TEXT),
          allowNull: false,
        },
        detailInformation: {
          type: DataTypes.JSON(),
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
