import crypto from 'crypto'
import { DataTypes, Model } from 'sequelize'

import { hashPassword, comparePassword } from '@libs/handlePassword'

class User extends Model {
  /// Class level method

  static doSomthing() {
    console.log('Hello mother fucker', this.getDataValue('passwordHash'))
    console.log(this.passwordHash)
  }
  /// Instance level method

  verifyPassword(inputPassword) {
    return comparePassword(inputPassword, this.passwordHash)
  }
}

/**
 * Hooks
 */
User.addHook('beforeUpdate', (user, option) => {
  if (!user.changed('passwordHash')) return
  return hashPassword(user.passwordHash)
})

User.addHook('beforeCreate', (user, option) => {
  const md5 = crypto
    .createHash('md5')
    .update(user.email)
    .digest('hex')
  if (user.avatar === undefined && user.email) {
    user.avatar = `https://secure.gravatar.com/avatar/${md5}?s=200&d=identicon`
  }
})

/**
 * Associations
 */

export default User
