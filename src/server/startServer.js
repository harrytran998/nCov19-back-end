import bodyParser from 'body-parser'
import express from 'express'
import passport from 'passport'

import accessEnv from '@helpers/accessEnv'
import setupRoutes from '@server/routes'
import pagination from '@middleware/pagination'
import cors from '@middleware/cors'
import errorHandler from '@middleware/errorHandler'

const PORT = accessEnv('PORT', 6969)
const app = express()

/**
 * List of middleware
 * - Pagination
 * - Cors
 * - Body parser
 * - Passport
 * - Error Handler
 */
app.use(pagination)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(passport.initialize())
// app.use(passport.session())

errorHandler(app)
setupRoutes(app)

app.listen(PORT, '0.0.0.0', () => {
  console.info(`Server listinging on PORT: ${PORT}`)
})
