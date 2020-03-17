import { UNAUTHORIZED, NOT_FOUND, FORBIDDEN } from 'http-status-codes'
import { User } from '@models'
import { INVALID_TOKEN, EXPIRED_TOKEN, USER_NOT_FOUND, INSUFFICIENT_PERMISSION } from '@constants/errorsMessage'
import { generalErrors } from '@helpers/errorHandlers'
import { verifyJWT } from '@libs/jwt'

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const checkTokenSetUser = async (req, res, next) => {
  let token = req.get('Authorization')
  if (token) {
    token = token.split(' ')[1]
    const payload = await verifyJWT(token)
    return User.validateUserToken(payload)
      .then(user => {
        // If no user in the payload exists, respond back with a 401
        if (!user) {
          return generalErrors(res, NOT_FOUND, USER_NOT_FOUND)
        }
        // Authenticate user and PASS it to next middleware
        req.user = user
        next()
      })
      .catch(err => {
        if (err.name === EXPIRED_TOKEN) {
          return generalErrors(res, UNAUTHORIZED, EXPIRED_TOKEN)
        } else if (err.name === 'JsonWebTokenError') {
          return generalErrors(res, UNAUTHORIZED, INVALID_TOKEN)
        } else {
          return next(err)
          // generalErrors(res, INTERNAL_SERVER_ERROR, SOMETHING_WRONG) => Production Env
        }
      })
  } else {
    return generalErrors(res, UNAUTHORIZED, INVALID_TOKEN)
  }
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const isAdmind = (req, res, next) => {
  if (req.user.role === 'ADMIN') return next()
  return generalErrors(res, FORBIDDEN, INSUFFICIENT_PERMISSION)
}
