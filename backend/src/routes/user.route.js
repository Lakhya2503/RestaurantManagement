import {
  loginUser,
   logoutUser,
   registerUser,
   verifyEmail
  } from "../controller/user.controller.js"
import {Router} from 'express'
import { VerifyJWT } from "../middleware/auth.middelware.js"
import passport from "../passport/index.js"

const router = Router()


router.route("/user/register").post(registerUser)

router.route("/user/login").post(loginUser)

router.route("/user/logout").post(VerifyJWT,logoutUser)

router.route("/user/email-verify").post(VerifyJWT, verifyEmail)




router.route("/google").get(
    passport.authenticate('google',{
        scope : ["profile","email"]
    }),
)


export default router;
