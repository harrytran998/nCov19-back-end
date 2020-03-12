import validator from '@middleware/validator'
import { userValidationRules } from '@libs/validateRules'
import { isAdmind } from '@middleware/auth'
import { postSignUp, logout, postLogin } from '@controllers/Auth'
import { testIsAdmin } from '@controllers/User'

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
