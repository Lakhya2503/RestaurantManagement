import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/user.models.js';
import ApiError from '../utils/ApiError.js';
import {
              AvailbleSocialLogins,
              AvailbleUserRole,
          }
           from '../utils/constants.js';
import { googleCallbackUrL, googleClientId, googleClientSecret } from '../utils/config.js';



passport.serializeUser((user,done)=>{
  done(null, user._id)
})

passport.deserializeUser((async(id, done)=>{
  try {
      if(id) return done(null, false)
      const user = await User.findById(id)
        return done(null, user || false)
  } catch (error) {
      return done(error, null)
  }
}))



passport.use(
      new GoogleStrategy(
          {
              clientID : googleClientId,
              clientSecret : googleClientSecret,
              callbackURL : googleCallbackUrL,
              scope : ["profile", "email"]
          },

          async(accessToken, refreshToken, profile, done) => {
            try {
                const email =await profile.emails?.[0]?.value;
                if(!email) {
                    return done(
                         new ApiError(400, "Google account does not have an email"),
                        null
                    )
                }

                user = await User.findOne({email})
                  if(user.loginType !== AvailbleSocialLogins.GOOGLE)
                        {
                              if(user) {
                      return done (
                        new ApiError(
                            400,
                              "Previous register using this email"
                        ),
                        null
                      )
                    }
                    return done(null, user)
                  }

                  const user = await User.create({
                    email,
                    fullName : profile.name,
                    password : profile.id,
                    isEmailVerified : true,
                    role : AvailbleUserRole.User,
                    avatar :  profile.photos?.[0]?.value,
                    loginType : AvailbleSocialLogins.GOOGLE
                  })

                  return done(null, user)

            } catch (error) {
                return done(error, null)
            }
          }


      )
)

export default passport;
