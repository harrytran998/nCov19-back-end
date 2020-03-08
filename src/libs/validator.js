import { body, matchedData, validationResult } from 'express-validator'
import { errorsMessage } from '@constants'

/** Models */

export const userValidationRules = () => {
  return [
    body('username')
      .isEmpty({ ignore_whitespace: true })
      .withMessage(errorsMessage.MISSING_USERNAME),
    body('password')
      .isEmpty({ ignore_whitespace: true })
      .withMessage(errorsMessage.MISSING_PASSWORD),
  ]
}

/** Core */
const validateFormat = (req, res, next) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    req.matchedData = matchedData(req)
    return next()
  }

  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

export default validateFormat
