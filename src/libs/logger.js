import winston, { format } from 'winston'

const winstonLevel = 'info'
const winstonFormat = winston.format.combine(format.colorize(), format.splat(), format.simple())

const winstonConsole = new winston.transports.Console({
  level: winstonLevel,
  format: winstonFormat,
})

const logger = winston.createLogger({
  level: winstonLevel,
  format: winstonFormat,
  transports: [new winston.transports.Console()],
  exceptionHandlers: winstonConsole,
})

export default logger
