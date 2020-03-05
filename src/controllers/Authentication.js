import _ from '@helpers/lodash'

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const localLogin = (req, res, next) => {
  const username = _.trim(req.body.username)
  const password = _.trim(req.body.password)
}
