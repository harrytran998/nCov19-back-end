import passport from 'passport'
import { User } from '@models'
import _ from '@helpers/lodash'
import { EMAIL_EXISTS } from '@constants/errorsMessage'

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getLogin = (req, res, next) => {
  if (req.user) return res.redirect('/')
  res.render('/account/login')
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const hello = (req, res, next) => {
  return res.status(200).json({ message: 'Hello world' })
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const postLogin = (req, res, next) => {
  const username = _.trim(req.body.username)
  const password = _.trim(req.body.password)

  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err)
    if (!user) return res.redirect('/account/login')
    req.logIn(user, err => {
      if (err) return next(err)
      res.redirect('/')
    })
  })(req, res, next)
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
    res.redirect('/')
  })
}

/**
 * GET /signup
 * Signup page.
 */
exports.getSignUp = (req, res) => {
  if (req.user) {
    return res.redirect('/')
  }
  res.render('account/signup', {
    title: 'Create Account',
  })
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
      if (user) throw new Error(EMAIL_EXISTS)
      return User.create({ email, password }).then(user => {
        delete user.dataValues.password
        delete user.dataValues.passwordHash
        return res.status(200).json(user)
      })
    })
    .catch(err => next(err))
}
