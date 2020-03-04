import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import passport from 'passport'

import accessEnv from '@helpers/accessEnv'
const PORT = accessEnv('PORT', 6969)
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())
