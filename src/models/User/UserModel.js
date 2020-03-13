import { DataTypes } from 'sequelize'
import sequelize from '@db'
import User from './UserDetail'
import userRoles from '@constants/roles'
import { hashPassword } from '@libs/handlePassword'

User.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.STRING,
      allowNull: true,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM(Object.values(userRoles)),
      allowNull: false,
      defaultValue: Object.values(userRoles)[0],
    },
    acceptTokenAfter: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    googleID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facebookID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedInId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tokensOAuth: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
      allowNull: true,
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
