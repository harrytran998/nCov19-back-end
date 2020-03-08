import passport from 'passport'
import { User } from '../models'
import _ from '@helpers/lodash'
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
 * #TODO: Add validation body params
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
export const getSignup = (req, res, next) => {
  if (req.user) return res.redirect('/')
}
