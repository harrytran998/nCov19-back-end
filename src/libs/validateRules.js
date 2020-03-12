import { check } from 'express-validator'
import { MISSING_PASSWORD, INVALID_INPUT } from '@constants/errorsMessage'

export const userValidationRules = () => [
  check('email')
    .escape()
    .trim()
    .isEmail()
    .withMessage(INVALID_INPUT),
  check('password', MISSING_PASSWORD)
    .escape()
    .trim(),
  // .isEmpty({ ignore_whitespace: true })
]
