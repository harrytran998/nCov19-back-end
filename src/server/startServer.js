import bodyParser from 'body-parser'
import express from 'express'
import session from 'express-session'
import passport from 'passport'
import accessEnv from '@helpers/accessEnv'
import setupRoutes from '@server/routes'
import pagination from '@middleware/pagination'
import cors from '@middleware/cors'
import errorHandler from '@middleware/errorHandler'
import '@middleware/passport'

const PORT = accessEnv('PORT', 6969)
const SESSION_SECRET = accessEnv('SESSION_SECRET', 'nCov-19')
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
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
  }),
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())
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
