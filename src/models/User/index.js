import User from './UserDetail'
import { UserSession, CirrumculumVitae } from '@models'

/**
 * Associations
 */
User.hasMany(UserSession)
User.hasMany(CirrumculumVitae)

export default User
