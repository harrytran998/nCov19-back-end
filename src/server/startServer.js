import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import passport from 'passport'

import accessEnv from '@helpers/accessEnv'
import setupRoutes from '@server/routes'

const PORT = accessEnv('PORT', 6969)
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(passport.initialize())
// app.use(passport.session())

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  }),
)

setupRoutes(app)

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message,
  })
})

app.listen(PORT, '0.0.0.0', () => {
  console.info(`Server listinging on PORT: ${PORT}`)
})
