import cors from 'cors'

const corsMiddleware = () => {
  return cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
}

export default corsMiddleware
