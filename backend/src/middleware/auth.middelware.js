import User from "../models/user.models.js"
import ApiError from "../utils/ApiError.js"
import jwt from 'jsonwebtoken'
import { accessTokenSecret } from "../utils/config.js"


const VerifyJWT = async(req,_,next) => {
    const token = req.cookies.accessToken


    try {

      const tokenVerify = await jwt.verify(token, accessTokenSecret)

      console.log(tokenVerify);


      if(!tokenVerify) {
        throw new ApiError(401, "Token used or Expired")
      }

      const user = await User.findById(tokenVerify._id)

      if(!user) {
        throw new ApiError(401, "token error")
      }

      req.user = user

      next()

    } catch (error) {
        throw new ApiError(400, `${error.message}`)
    }
}

const VerifyAdmin = async(req,_,next) => {
   const Admin = req.user

   if(Admin.role === "admin") {
    throw new ApiError(401, "Admin are only excute this action")
   }

}


export  {
  VerifyJWT,
  VerifyAdmin
}
