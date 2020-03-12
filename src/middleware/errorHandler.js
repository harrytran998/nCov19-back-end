import { generalErrors } from '@helpers/errorHandlers'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'

const errorHandlerMiddleware = app => {
  app.use((err, req, res) => {
    return generalErrors(res, INTERNAL_SERVER_ERROR, err.message)
  })
}

export default errorHandlerMiddleware
