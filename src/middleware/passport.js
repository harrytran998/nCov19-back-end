import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
// import refresh from 'passport-oauth2-refresh'
// import { Strategy as FacebookStrategy } from 'passport-facebook'
// import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth'
// import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2'

import { User } from '@models'

/**
 *
 * @param {String} email
 * @param {String} password
 * @param {*} done
 */
const localVerifyCallback = (email, password, done) => {
  User.findOne({ where: { email: email.toLowerCase() } })
    .then(user => {
      if (!user) return done(null, false, { message: `Email ${email} not found` })
      if (!user.password) {
        return done(null, false, {
          message:
            'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.',
        })
      }
      user.verifyPassword(password).then((err, isMatch) => {
        if (err) return done(err)
        if (isMatch) return done(null, user)
        return done(null, false, { message: 'Invalid email and password' })
      })
    })
    .catch(err => done(err))
}
const locaStrategy = new LocalStrategy({ usernameField: 'email' }, localVerifyCallback)

passport.use(locaStrategy)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then(user => {
      done(null, user)
    })
    .catch(err => done(err))
})
