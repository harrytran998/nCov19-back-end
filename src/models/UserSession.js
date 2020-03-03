import { DataTypes, Model } from 'sequelize'

import sequelize from '@db/connection'

export class User extends Model {}
User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: 'id',
        model: 'users',
      },
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    modelName: 'userSessions',
    sequelize,
    paranoid: false,
    updatedAt: false,
  },
)
