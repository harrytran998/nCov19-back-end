import { postSignUp, testIsAdmin, postLogin, logout } from '@controllers/User'
import validator from '@middleware/validator'
import { userValidationRules } from '@libs/validateRules'
import { isAdmind, checkTokenSetUser } from '@middleware/auth'
import { setCorsHeader } from '@middleware/cors'

/**
 *
 * @param {import("express").Application} app
 */
const setupRoutes = app => {
  app.all('/api/*', (req, res, next) => checkTokenSetUser(req, res, next))
  app.all('/*', (req, res, next) => setCorsHeader(req, res, next))

  app.post('/signUp', userValidationRules(), validator, postSignUp)
  app.post('/logIn', userValidationRules(), validator, postLogin)
  app.get('/logout', logout)

  app.get('/api/v1/checkAdmin', isAdmind, testIsAdmin)
}

export default setupRoutes
