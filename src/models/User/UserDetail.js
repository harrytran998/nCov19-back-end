import { Model } from 'sequelize'
import { comparePassword } from '@libs/handlePassword'
class User extends Model {
  /// Class level method
  static doSomthing() {
    console.log('Hello mother fucker')
    console.log(this.email)
  }
  /// Instance level method
  verifyPassword(inputPassword) {
    return comparePassword(inputPassword, this.passwordHash)
  }
}

export default User
