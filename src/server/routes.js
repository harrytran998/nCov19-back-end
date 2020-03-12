import { postSignUp, testIsAdmin, postLogin, logout } from '@controllers/User'
import validator from '@middleware/validator'
import { userValidationRules } from '@libs/validateRules'
import { isAdmind } from '@middleware/auth'

/**
 *
 * @param {import("express").Application} app
 */
const setupRoutes = app => {
  app.post('/signUp', postSignUp)
  app.post('/logIn', userValidationRules(), validator, postLogin)
  app.get('/logout', logout)

  app.get('/api/v1/checkAdmin', isAdmind, testIsAdmin)
}

export default setupRoutes
