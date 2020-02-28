import bcrypt from 'bcrypt'
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
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    defaultScope: {
      rawAttributes: { exclude: ['password'] },
    },
    modelName: 'users',
    sequelize,
  },
)
