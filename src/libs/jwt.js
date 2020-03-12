import { sign, verify } from 'jsonwebtoken'
import 'dotenv/config'
import accessEnv from '@helpers/accessEnv'

const JWT_SECRET = accessEnv('JWT_SECRET')

export const createJWT = (payload, expiresIn) => {
  return sign(payload, JWT_SECRET, { expiresIn })
}

export const verifyJWT = token => {
  return verify(token, JWT_SECRET)
}
