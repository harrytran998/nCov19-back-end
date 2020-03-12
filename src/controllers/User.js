import { OK } from 'http-status-codes'
import { User } from '@models'
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
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getCurrentUser = (req, res, next) => {
  if (req.user) {
    return User.findByPk(req.user.id)
      .then(user => {
        return res.status(OK).json(user.toJSON())
      })
      .catch(err => next(err))
  }
}
