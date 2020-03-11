import bodyParser from 'body-parser'
import express from 'express'
import { config } from 'dotenv'
import accessEnv from '@helpers/accessEnv'
import setupRoutes from '@server/routes'
import pagination from '@middleware/pagination'
import cors from '@middleware/cors'
import errorHandler from '@middleware/errorHandler'

config({ encoding: 'utf-8' })

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
app.disable('x-powered-by')
app.use((req, res, next) => {
  console.log(req.user)
  res.locals.user = req.user
  next()
})

errorHandler(app)
setupRoutes(app)

app.listen(PORT, '0.0.0.0', () => {
  console.info(`Server listinging on PORT: ${PORT}`)
})
