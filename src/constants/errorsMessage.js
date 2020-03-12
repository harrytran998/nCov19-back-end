import {
  NOT_FOUND,
  UNPROCESSABLE_ENTITY,
  UNAUTHORIZED,
  CONFLICT,
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
} from 'http-status-codes'

// Server errors
export const DEFAULT = `${INTERNAL_SERVER_ERROR} - Server error`
export const SOMETHING_WRONG = `${INTERNAL_SERVER_ERROR} - Oops! Somthing went wrong!`

// Tokens
export const MISSING_TOKEN = `${UNPROCESSABLE_ENTITY} - Missing token`
export const REVOKED_TOKEN = `${UNAUTHORIZED} - Revoked token`
export const INVALID_TOKEN = `${UNAUTHORIZED} - Invalid token`
export const EXPIRED_TOKEN = `${UNAUTHORIZED} - Expired token`

// Invalid user inputs
export const INVALID_INPUT = `${UNPROCESSABLE_ENTITY} - Invalid input`
export const MISSING_USERNAME = `${UNPROCESSABLE_ENTITY} - Missing username`
export const MISSING_EMAIL = `${UNPROCESSABLE_ENTITY} - Missing email`
export const MISSING_PASSWORD = `${UNPROCESSABLE_ENTITY} - Missing password`
export const MISSING_FIELD = `${UNPROCESSABLE_ENTITY} - Missing field`

// Not found
export const RESOURCE_NOT_FOUND = `${NOT_FOUND} - Resource not found`
export const USER_NOT_FOUND = `${NOT_FOUND} - User not found`
export const EMAIL_NOT_FOUND = `${NOT_FOUND} - Email not found`

// Conflicts
export const EMAIL_EXISTS = `${CONFLICT} - Email exists`
export const INVALID_LOGIN = `${UNAUTHORIZED}- Invalid login`

// Authentication & authorization
export const INCORRECT_CREDENTIALS = `${UNAUTHORIZED} - Incorrect email or password`
export const IS_NOT_AUTHENTICATED = `${UNAUTHORIZED} - Not authenticated`
export const INSUFFICIENT_PERMISSION = `${FORBIDDEN} Insufficient permission`
export const UNVERIFIED_EMAIL = `${UNAUTHORIZED} - Unverified email`
export const INVALID_API_KEY_SECRET = `${UNAUTHORIZED} - Invalid api key secret`
