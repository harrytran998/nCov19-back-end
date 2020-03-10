import { postSignUp, testAuthenticated, postLogin, logout } from '@controllers/User'
import validator from '@middleware/validator'
import { userValidationRules } from '@libs/validateRules'
import { isAuthenticated } from '@middleware/auth'

/**
 *
 * @param {import("express").Application} app
 */
const setupRoutes = app => {
  app.get('/authenticated', isAuthenticated, testAuthenticated)
  app.post('/signUp', userValidationRules(), validator, postSignUp)
  app.post('/logIn', userValidationRules(), validator, postLogin)
  app.get('/logout', logout)
}

export default setupRoutes
