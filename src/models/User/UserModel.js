import { DataTypes } from 'sequelize'
import sequelize from '@db'
import User from './UserDetail'
import userRoles from '@constants/roles'
import { hashPassword } from '@libs/handlePassword'

User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    passwordHash: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.VIRTUAL,
      set(val) {
        const password = String(val)
        this.setDataValue('password', password)
        this.setDataValue('passwordHash', hashPassword(password))
      },
      validate: {
        len: {
          args: [6, 128],
          msg: 'Password must be between 6 and 128 characters in length',
        },
      },
    },
    avatar: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    bio: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.ENUM(Object.values(userRoles)),
      defaultValue: Object.values(userRoles)[0],
    },
    googleID: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    facebookID: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    linkedInId: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    tokensOAuth: {
      allowNull: true,
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
  },
  {
    modelName: 'users',
    sequelize,
    /**
     * Exclude passwordHash attribute when handle with model User
     */
    defaultScope: {
      attributes: {
        exclude: ['password'],
      },
    },
  },
)

export default User
