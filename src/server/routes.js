import { fetchAllUser } from '@controllers/User'

/**
 *
 * @param {import("express").Application} app
 */
const setupRoutes = app => {
  app.get('/users', fetchAllUser)
}

export default setupRoutes
