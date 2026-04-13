import ApiError from './ApiError.js';
import User from '../models/user.models.js';

export const requredField = (requiredField = []) => {
   try {
         requiredField.some((field) => String(field).trim === "" || field === undefined)
   } catch (error) {
       throw new ApiError(404, "all fields are required")
   }
}

export const removeRefreshTokenAndPassword = async(userId) => {
    await User.findById(userId).select("-password -refreshToken")
}
