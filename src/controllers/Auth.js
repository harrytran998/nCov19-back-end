import { User } from '@models'
import { EMAIL_EXISTS, INCORRECT_CREDENTIALS, EMAIL_NOT_FOUND, SOMETHING_WRONG } from '@constants/errorsMessage'
import { generalErrors } from '@helpers/errorHandlers'
import { OK, CONFLICT, UNAUTHORIZED, INTERNAL_SERVER_ERROR } from 'http-status-codes'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const postLogin = (req, res, next) => {
  const { email, password } = req.body
  return User.findOne({ where: { email } })
    .then(user => {
      if (user) {
        return user.verifyPassword(password, user.passwordHash).then(isMach => {
          if (isMach) return res.status(OK).json(user.generateToken())
          return generalErrors(res, UNAUTHORIZED, INCORRECT_CREDENTIALS)
        })
      }
      return generalErrors(res, UNAUTHORIZED, EMAIL_NOT_FOUND)
    })
    .catch(err => next(err))
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const postSignUp = (req, res, next) => {
  const { email, password } = req.body
  return User.findOne({ where: { email } })
    .then(user => {
      if (user) {
        return generalErrors(res, CONFLICT, EMAIL_EXISTS)
      }
      return User.create({ email, password }).then(user => {
        delete user.dataValues.password
        return res.status(200).json(user.generateToken())
      })
    })
    .catch(err => generalErrors(res, INTERNAL_SERVER_ERROR, SOMETHING_WRONG))
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const logout = (req, res, next) => {
  return User.findByPk(req.user.id)
    .then(user => {
      user.update({ acceptTokenAfter: new Date() }).then(() => {
        return res.status(OK).json({ message: 'Log out successfully' })
      })
    })
    .catch(err => next(err))
}
