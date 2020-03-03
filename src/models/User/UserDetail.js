import { User } from './User'
import { hashPassword } from '@libs/handlePassword'

/**
 * Hooks
 */
User.addHook('beforeUpdate', (user, option) => {
  if (!user.changed('password')) return
  return hashPassword(user.password)
})

/**
 * Instance Method
 */
User.prototype.helloUser = something => {
  console.log(`Hello ${something}`)
}

/**
 * Class Method
 */

// User.doSomthing = something => {
//   console.log(`User do ${something}`)
// }

export default User
