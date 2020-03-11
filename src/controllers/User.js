import { User } from '@models'
import { EMAIL_EXISTS } from '@constants/errorsMessage'
import { modelValidationErrors, generalErrors } from '@helpers/errorHandlers'
import { OK, CONFLICT } from 'http-status-codes'
// import { UNAUTHORIZED } from 'http-status-codes'
// import _ from '@helpers/lodash'
// import sequelize from '@db'

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const testAuthenticated = (req, res) => {
  return generalErrors(res, OK, 'Authenticated router')
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
// export const postLogin = (req, res, next) => {}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const postSignUp = (req, res, next) => {
  const { email, password } = req.body
  return User.findOne({
    where: { email },
  })
    .then(user => {
      if (user) {
        return generalErrors(res, CONFLICT, EMAIL_EXISTS)
      }
      return User.create({ email, password }).then(user => {
        delete user.dataValues.password
        delete user.dataValues.passwordHash
        return res.status(200).json(user)
      })
    })
    .catch(err => modelValidationErrors(err, res))
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const logout = (req, res) => {}
