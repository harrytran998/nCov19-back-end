import validator from '@middleware/validator'
import { userValidationRules } from '@libs/validateRules'
import { isAdmind, checkTokenSetUser } from '@middleware/auth'
import { postSignUp, logout, postLogin } from '@controllers/Auth'
import { testIsAdmin, getCurrentUser } from '@controllers/User'

/**
 *
 * @param {import("express").Application} app
 */
const setupRoutes = app => {
  app.all('/api/*', checkTokenSetUser)

  app.post('/signUp', postSignUp)
  app.post('/logIn', userValidationRules(), validator, postLogin)

  app.get('/api/v1/users/me', getCurrentUser)
  app.post('/api/v1/users/logout', logout)
  app.get('/api/v1/checkAdmin', isAdmind, testIsAdmin)
}

export default setupRoutes
