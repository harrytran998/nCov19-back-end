import passport from 'passport'
import { User } from '@models'
import _ from '@helpers/lodash'
import { EMAIL_EXISTS, IS_NOT_AUTHENTICATED } from '@constants/errorsMessage'
import { modelValidationErrors } from '@helpers/errorHandlers'
import sequelize from '@db'
import { UNAUTHORIZED } from 'http-status-codes'

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const testAuthenticated = (req, res, next) => {
  return res.status(200).json({ message: 'authenticated router' })
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const postLogin = (req, res, next) => {
  passport.authenticate('local', (err, user, _) => {
    if (err) return next(err)
    if (!user) return res.status(UNAUTHORIZED).json({ message: IS_NOT_AUTHENTICATED })
    req.logIn(user, err => {
      if (err) return next(err)
    })
  })(req, res, next)
}

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
        return res.status(409).json({ message: EMAIL_EXISTS })
      }
      console.log(User.doSomthing())
      return User.create({ email, password }).then(user => {
        delete user.dataValues.password
        delete user.dataValues.passwordHash
        req.logIn(user, err => {
          console.log(req.user)
          if (err) next(err)
        })
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
export const logout = (req, res, next) => {
  req.logout()
  req.session.destroy(err => {
    if (err) console.info('Error : Failed to destroy the session during logout.', err)
    req.user = null
    return res.status(200).json({ message: 'Logout Success' })
  })
}

// https://github.com/zachgoll/express-jwt-authentication-starter/blob/final/config/passport.js
// https://zachgoll.github.io/blog/2019/choosing-authentication-strategy/#Authentication-Choices
