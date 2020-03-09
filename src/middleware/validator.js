import { matchedData, validationResult } from 'express-validator'
import { responseValidatorErrors } from '@helpers/errorHandlers'
/**
 * @returns
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const validateFormat = (req, res, next) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    req.matchedData = matchedData(req)
    return next()
  }
  return responseValidatorErrors(errors, res)
}

export default validateFormat
