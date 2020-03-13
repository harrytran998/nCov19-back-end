import User from './UserModel'
import { hashPassword } from '@libs/handlePassword'
import crypto from 'crypto'
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
    user.avatar = `https://www.gravatar.com/avatar/${md5}?d=404`
  }
})

/**
 * Associations
 */

export default User
