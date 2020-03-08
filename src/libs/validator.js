import { body, matchedData, validationResult } from 'express-validator'
import { MISSING_PASSWORD, MISSING_USERNAME } from '@constants/errorsMessage'

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

/** Models */

export const userValidationRules = () => [
  body('username')
    .trim()
    .escape()
    .isEmpty()
    .withMessage(MISSING_USERNAME),
  body('password')
    .trim()
    .escape()
    .isEmpty()
    .withMessage(MISSING_PASSWORD),
]
