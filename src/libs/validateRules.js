import { sanitizeBody } from 'express-validator'
import { MISSING_PASSWORD, MISSING_USERNAME } from '@constants/errorsMessage'

export const userValidationRules = () => [
  sanitizeBody('username')
    .isEmpty()
    .withMessage(MISSING_USERNAME),
  sanitizeBody('password')
    .isEmpty()
    .withMessage(MISSING_PASSWORD),
]
