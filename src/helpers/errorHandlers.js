import { Result } from 'express-validator'
import { ValidationError } from 'sequelize'
import logger from '@libs/logger'
import { UNPROCESSABLE_ENTITY } from 'http-status-codes'
/**
 *
 * @param {Result<ValidationError>} errors
 * @param {import("express").Response} res
 */
export const responseValidatorErrors = (errors, res) => {
  logger.error(errors)
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  return res.status(UNPROCESSABLE_ENTITY).json({
    status: UNPROCESSABLE_ENTITY,
    errors: extractedErrors,
  })
}

/**
 *
 * @param {*} err
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const modelValidationErrors = (err, res, next) => {
  logger.error(err)
  if (err instanceof ValidationError) {
    err.errors.forEach(error => {
      return res.status(UNPROCESSABLE_ENTITY).json({
        status: UNPROCESSABLE_ENTITY,
        errors: { message: error.message, validatorName: error.validatorName },
      })
    })
  }
}
