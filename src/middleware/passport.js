import passport from 'passport'
import refresh from 'passport-oauth2-refresh'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth'
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2'

import { User } from '@models'

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findByPk(id).then(user => {
    done(null, user)
  })
})

/**
 * SignIn using username + passsword
 */
passport.use(
  new LocalStrategy({ usernameField: 'username', passwordField: 'password' }, (username, password, done) => {
    User.findOne({ where: { username: username.toLowerCase() } })
      .then(user => {
        if (!user) return done(null, false, { message: `${username} not found` })
        if (!user.password) {
          return done(null, false, {
            message:
              'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.',
          })
        }
        user.verifyPassword(password).then((err, isMatch) => {
          if (err) return done(err)
          if (isMatch) return done(null, user)
          return done(null, false, { message: 'Invalid username and password' })
        })
      })

      .catch(err => done(err))
  }),
)

export default passport
