import Order from "../models/order.models.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { orderType } from "../utils/constants.js";
import { requredField } from '../utils/helper.js';


const createOrder = asyncHandler(async(req,res)=>{

     const  { typeOfOrder, tableNo, specialNotes, items, address } = req.body

   if (typeOfOrder === orderType.TABLEORDER) {

    requredField([tableNo, specialNotes])
          await  Order.create({
              orderType : typeOfOrder,
              tableNo : tableNo,
              specialNotes : specialNotes,
              userId : req.user._id,
              items : items,
              activeOrder : false
          })

  } else if  (typeOfOrder === orderType.HOMEDELIVERY) {

    console.log(typeOfOrder)

    requredField([address])
          await  Order.create({
            orderType : typeOfOrder,
              userId : req.user._id,
              items : items,
              activeOrder : false,
              address : address
          })

  }

  return res.status(201).json(new ApiResponse(201, {} , ""))
})





export {
  createOrder
}
