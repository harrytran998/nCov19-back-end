import bodyParser from 'body-parser'
import express from 'express'
import helmet from 'helmet'
import { config } from 'dotenv'
import accessEnv from '@helpers/accessEnv'
import setupRoutes from '@server/routes'
import pagination from '@middleware/pagination'
import { corsMiddleware, setCorsHeader } from '@middleware/cors'
import errorHandler from '@middleware/errorHandler'
import { checkTokenSetUser } from '@middleware/auth'

config({ encoding: 'utf-8' })

const PORT = accessEnv('PORT', 6969)

const app = express()

/**
 * List of middleware
 * - Pagination
 * - Cors
 * - Body parser
 */
app.use(pagination)
app.use(corsMiddleware())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())
app.disable('x-powered-by')

app.all('/api/*', (req, res, next) => checkTokenSetUser(req, res, next))
app.all('/*', (req, res, next) => setCorsHeader(req, res, next))

errorHandler(app)
setupRoutes(app)

app.listen(PORT, '0.0.0.0', () => {
  console.info(`Server listinging on PORT: ${PORT}`)
})
