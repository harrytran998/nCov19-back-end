'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'cvDetails',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
        },
        cvId: {
          allowNull: false,
          type: Sequelize.UUID,
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
          type: Sequelize.ARRAY(Sequelize.TEXT),
        },
        detailInformation: {
          allowNull: false,
          type: Sequelize.JSON(),
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        charset: 'utf-8',
      },
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cvDetails')
  },
}
