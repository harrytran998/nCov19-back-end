import bcrypt from 'bcryptjs'

const SALT_WORK_FACTORY = 12

const _salt = bcrypt.genSaltSync(SALT_WORK_FACTORY)

export const hashPassword = password => bcrypt.hashSync(password, _salt)

export const comparePassword = (inputPassword, passwordHash) => bcrypt.compareSync(inputPassword, passwordHash)
