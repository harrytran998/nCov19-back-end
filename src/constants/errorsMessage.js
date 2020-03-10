import {
  NOT_FOUND,
  UNPROCESSABLE_ENTITY,
  UNAUTHORIZED,
  CONFLICT,
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
} from 'http-status-codes'

// Server errors
export const DEFAULT = `${INTERNAL_SERVER_ERROR}/server-error`

// Tokens
export const MISSING_TOKEN = `${UNPROCESSABLE_ENTITY}/missing-token`
export const REVOKED_TOKEN = `${UNAUTHORIZED}/revoked-token`
export const INVALID_TOKEN = `${UNAUTHORIZED}/invalid-token`
export const EXPIRED_TOKEN = `${UNAUTHORIZED}/expired-token`

// Invalid user inputs
export const INVALID_INPUT = `${UNPROCESSABLE_ENTITY}/invalid-input`
export const MISSING_USERNAME = `${UNPROCESSABLE_ENTITY}/missing-username`
export const MISSING_EMAIL = `${UNPROCESSABLE_ENTITY}/missing-email`
export const MISSING_PASSWORD = `${UNPROCESSABLE_ENTITY}/missing-password`
export const MISSING_FIELD = `${UNPROCESSABLE_ENTITY}/missing-field`

// Not found
export const RESOURCE_NOT_FOUND = `${NOT_FOUND}/resource-not-found`
export const USER_NOT_FOUND = `${NOT_FOUND}/user-not-found`

// Conflicts
export const EMAIL_EXISTS = `${CONFLICT}/email-exists`
export const INVALID_LOGIN = `${UNAUTHORIZED}/invalid-login`

// Authentication & authorization
export const INCORRECT_PASSWORD = `${UNAUTHORIZED}/incorrect-password`
export const IS_NOT_AUTHENTICATED = `${UNAUTHORIZED}/not-authenticated`
export const INSUFFICIENT_PERMISSION = `${FORBIDDEN}/insufficient-permission`
export const UNVERIFIED_EMAIL = `${UNAUTHORIZED}/unverified-email`
export const INVALID_API_KEY_SECRET = `${UNAUTHORIZED}/invalid-api-key-secret`
