/**
 * Login Required middleware.
 */

import { UNAUTHORIZED } from 'http-status-codes'
import { IS_NOT_AUTHENTICATED } from '@constants/errorsMessage'

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  return res.status(UNAUTHORIZED).json({ message: IS_NOT_AUTHENTICATED })
}
