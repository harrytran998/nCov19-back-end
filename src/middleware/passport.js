import passport from 'passport'
import refresh from 'passport-oauth2-refresh'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth'
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2'

import { User } from '../models'
