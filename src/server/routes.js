import { postSignUp, hello } from '@controllers/User'
import validator from '@middleware/validator'
import { userValidationRules } from '@libs/validateRules'

/**
 *
 * @param {import("express").Application} app
 */
const setupRoutes = app => {
  app.get('/hello', hello), app.post('/account/signup', userValidationRules(), validator, postSignUp)
}

export default setupRoutes
