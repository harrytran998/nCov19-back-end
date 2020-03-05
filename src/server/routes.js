/**
 *
 * @param {import("express").Application} app
 */
const setupRoutes = app => {
  app.get('/', (req, res, next) => {
    return res.status(200).json({ message: 'Hello world' })
  })
}

export default setupRoutes
