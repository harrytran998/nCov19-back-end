import { User } from '../models'

/**
 *
 * @param {import("express").Application} app
 */
const setupRoutes = app => {
  app.get('/', (req, res, next) => {
    return res.status(200).json({ message: 'Hello world' })
  })
  app.get('/users', async (req, res, next) => {
    await User.findAll()
      .then(users => {
        return res.status(200).json(users)
      })
      .catch(err => console.log(err))
    next()
  })
}

export default setupRoutes
