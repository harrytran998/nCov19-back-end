import bcrypt from 'bcrypt'
import { DataTypes, Model } from 'sequelize'

import sequelize from '@db/connection'

/**
 * Constants.
 */
const SALT_WORK_FACTOR = 12

export class User extends Model {}
User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 50],
          msg: 'Username must be between 6 and 50 characters in length',
        },
      },
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      set(val) {
        if (val && val.toLowerCase()) {
          this.setDataValue('email', val.toLowerCase())
        }
      },
      validate: {
        len: {
          args: [6, 128],
          msg: 'Email must be between 6 and 128 characters in length',
        },
        isEmail: {
          msg: 'Email must be valid',
        },
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
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
