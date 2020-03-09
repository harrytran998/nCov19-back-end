import { body } from 'express-validator'
import { MISSING_PASSWORD, MISSING_USERNAME } from '@constants/errorsMessage'

export const userValidationRules = () => [
  body('username')
    .escape()
    .trim()
    .isEmpty({ ignore_whitespace: true })
    .withMessage(MISSING_USERNAME),
  body('password')
    .escape()
    .trim()
    .isEmpty({ ignore_whitespace: true })
    .withMessage(MISSING_PASSWORD),
]
