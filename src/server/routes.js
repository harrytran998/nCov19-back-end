import { fetchUsers } from '@controllers/User'

/**
 *
 * @param {import("express").Application} app
 */
const setupRoutes = app => {
  app.get('/users', fetchUsers)
}

export default setupRoutes
