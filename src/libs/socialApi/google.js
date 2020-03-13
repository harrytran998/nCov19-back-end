import { google } from 'googleapis'
import 'dotenv/config'
import accessEnv from '@helpers/accessEnv'

const googleRedirectURL = 'localhost:6969/auth/google/callback'

const oauth2Client = google.auth.OAuth2(accessEnv('GOOGLE_ID'), accessEnv('GOOGLE_SECRET'), googleRedirectURL)

const getGoogleUserProfile = code => {
  const { token } = oauth2Client.getToken(code)
  oauth2Client.setCredentials(token)
}

export default getGoogleUserProfile
