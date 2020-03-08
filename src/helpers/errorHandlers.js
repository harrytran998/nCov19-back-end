import logger from '@libs/logger'

/**
 *
 * @param {Array} errors
 * @param {import("express").Response} res
 */
export const responseValidatorErrors = (errors, res) => {
  logger.error(errors)
  let errorList = {}
  errors.forEach(err => {
    errorList[err.param] = {
      message: err.msg,
    }
  })
  return res.status(400).json({
    status: 400,
    errors: errorList,
  })
}
