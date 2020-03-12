import { format, createLogger, transports } from 'winston'

const { colorize, combine, splat, printf, timestamp, label } = format

const winstonLevel = 'info'
const loggFile = 'aggregated.log'
const labelName = 'NAME_PROJECT errors'
const formatDate = 'DD-MM-YYYY T HH:mm:ss'

const myFormat = printf(info => {
  return `[${timestamp({ format: formatDate })}] [${info.level}] => ${info.message}`
})
const combineFormat = combine(colorize(), splat(), myFormat, label({ label: labelName }))

const winstonConsole = transports.Console({
  level: winstonLevel,
  format: combineFormat,
})

const logger = createLogger({
  level: winstonLevel,
  format: combineFormat,
  transports: [new transports.Console(), new transports.File({ filename: loggFile })],
  exceptionHandlers: winstonConsole,
})

export default logger
