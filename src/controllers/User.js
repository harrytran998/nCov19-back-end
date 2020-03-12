import { User } from '@models'
import { EMAIL_EXISTS, INCORRECT_CREDENTIALS, EMAIL_NOT_FOUND, SOMETHING_WRONG } from '@constants/errorsMessage'
import { generalErrors } from '@helpers/errorHandlers'
import { OK, CONFLICT, UNAUTHORIZED, INTERNAL_SERVER_ERROR, NO_CONTENT } from 'http-status-codes'
// import _ from '@helpers/lodash'
// import sequelize from '@db'

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const testIsAdmin = (req, res, next) => {
  return res.status(OK).json({ message: 'Secrete ' })
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const postLogin = (req, res, next) => {
  const { email, password } = req.body
  return User.findOne({ logging: true, where: { email } })
    .then(user => {
      console.log(user)
      return user.verifyPassword(password, user.passwordHash).then(isMach => {
        if (isMach) return res.status(OK).json(user.generateToken())
        return generalErrors(res, UNAUTHORIZED, INCORRECT_CREDENTIALS)
      })
    })
    .catch(err => next(err))
  // generalErrors(res, UNAUTHORIZED, EMAIL_NOT_FOUND)
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
export const logout = (req, res) => {
  return User.update({ acceptTokenAfter: new Date() }).then(() => {
    return res.status(NO_CONTENT).json({ message: 'Log out successfully' })
  })
}
