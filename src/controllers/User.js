import { User } from '../models'

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const fetchUsers = async (req, res, next) => {
  const { limit, offset } = req.pagination()
  await User.findAll({ limit, offset })
    .then(users => {
      return res.status(200).json(users)
    })
    .catch(err => console.error(err))
}
