import ApiResponse from "../utils/ApiResponse";
import asyncHandler from "../utils/asyncHandler";




const selectOrder = asyncHandler(async(req,res)=>{

  const  { typeOfOrder,  } = req.body






  return res.status(201).json(new ApiResponse(201, {} , "  Order create sucessfully"))
})
