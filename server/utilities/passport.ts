import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport, { Profile } from 'passport';
import { ENV } from '../config/dotenv';


passport.use(new GoogleStrategy({
	clientID: ENV.CLIENT_ID,
	clientSecret: ENV.CLIENT_SECRET,
	callbackURL: `/auth/google/callback`,
	scope: ["profile", "email"]
}, function (accessToken, refreshToken, profile: Profile, done) {
	done(null, profile);
}));

passport.serializeUser((user, done) => {
	done(null, user)
})

passport.deserializeUser((user, done) => {
	done(null, user as Express.User)
})