import { format, createLogger, transports } from 'winston'

const { colorize, combine, splat, printf, timestamp, label } = format

const winstonLevel = 'info'
const loggFile = 'aggregated.log'
const labelName = 'NAME_PROJECT errors'
const formatDate = 'DD-MM-YYYY T HH:mm:ss'

const myFormat = printf(info => {
  return `[${info.level}] => ${info.message}`
})
const combineFormat = combine(
  label({ label: labelName }),
  timestamp({ format: formatDate }),
  colorize(),
  splat(),
  myFormat,
)

const winstonConsole = new transports.Console({
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
