/**
 * Login Required middleware.
 */

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  res.redirect('/login')
}
