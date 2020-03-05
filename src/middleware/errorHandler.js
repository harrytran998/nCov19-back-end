import errorHandler from 'errorhandler'

const errorHandlerMiddleware = app => {
  if (process.env.NODE_ENV == 'development') {
    // ONLY use in dev
    app.use(errorHandler())
  } else {
    app.use((err, req, res, next) => {
      return res.status(500).json({
        message: err.message,
      })
    })
  }
}

export default errorHandlerMiddleware
