import crypto from 'crypto'
import { User } from './User'
import { hashPassword, comparePassword } from '@libs/handlePassword'

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
 * Instance Method
 */
User.prototype.verifyPassword = inputPassword => {
  return comparePassword(inputPassword, this.passwordHash)
}

/**
 * Class Method
 */

// User.doSomthing = something => {
//   console.log(`User do ${something}`)
// }

export default User
