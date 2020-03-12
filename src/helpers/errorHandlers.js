import { ValidationError } from 'sequelize'
import { UNPROCESSABLE_ENTITY } from 'http-status-codes'
import logger from '@libs/logger'

/**
 *
 * @param {import('express').Response} res
 * @param {Number} statusCode
 * @param {String} message
 */
export const generalErrors = (res, statusCode, message) => {
  logger.error(message)
  return res.status(statusCode).json({ message })
}

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
export const modelValidationErrors = (err, res) => {
  logger.error(err)
  const extractedErrors = []
  if (err instanceof ValidationError) {
    err.errors.forEach(error => {
      extractedErrors.push({ [error.path]: error.message })
    })
    return res.status(UNPROCESSABLE_ENTITY).json({
      status: UNPROCESSABLE_ENTITY,
      errors: extractedErrors,
    })
  }
}
