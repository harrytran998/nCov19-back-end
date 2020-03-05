import { User } from '../models'
/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const fetchAllUser = async (req, res, next) => {
  await User.findAll()
    .then(users => {
      return res.status(200).json(users)
    })
    .catch(err => console.error(err))
}
