import { postSignUp, hello } from '@controllers/User'
import validateFormat, { userValidationRules } from '@libs/validator'

/**
 *
 * @param {import("express").Application} app
 */
const setupRoutes = app => {
  app.get('/hello', userValidationRules(), validateFormat, hello), app.post('/account/signup', postSignUp)
}

export default setupRoutes
