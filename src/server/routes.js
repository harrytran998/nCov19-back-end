import { postSignUp, hello, postLogin, logout } from '@controllers/User'
import validator from '@middleware/validator'
import { userValidationRules } from '@libs/validateRules'
import { isAuthenticated } from '@middleware/auth'

/**
 *
 * @param {import("express").Application} app
 */
const setupRoutes = app => {
  app.get('/hello', hello)
  app.post('/signUp', validator, postSignUp)
  app.post('/logIn', validator, postLogin)
  app.get('/logout', logout)
}

export default setupRoutes
