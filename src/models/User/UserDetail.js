import { Model } from 'sequelize'
import { comparePassword } from '@libs/handlePassword'
import { EXPIRED_TOKEN } from '@constants/errorsMessage'
import { createJWT } from '@libs/jwt'
import _ from '@libs/lodash'

class User extends Model {
  /// Class level method
  static validateUserToken(payload) {
    // JWT passed the payload containing ID of instance user
    console.log(payload)
    return User.findOne({ where: { id: payload.id } }).then(user => {
      /**
       * Check if have user + user have acceptTokenAfter + Issue At time < date of accept Token
       * Especially in case: User change password => Refresh token => Create new Token
       */
      if (user && user.acceptTokenAfter && payload.iat * 1000 < user.acceptTokenAfter) {
        let error = new Error(EXPIRED_TOKEN)
        error.name = EXPIRED_TOKEN
        return Promise.reject(error)
      }
      return Promise.resolve(user)
    })
  }
  /// Instance level method
  verifyPassword(inputPassword, passwordHash) {
    return comparePassword(inputPassword, passwordHash)
  }
  generateToken() {
    const expiresIn = 30 * 24 * 60 * 60 // 1 month
    const payload = _.pick(this, 'id')
    const token = createJWT(payload, expiresIn)
    // Return the bearer token + instance user
    return {
      token: `Bearer ${token}`,
      user: this,
    }
  }
}

export default User
