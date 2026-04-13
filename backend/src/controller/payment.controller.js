import Order from "../models/order.models.js";
import Payment from "../models/payment.models.js";
import paymentService from "../services/payment.service.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { paymentType } from "../utils/constants.js";
import { requredField } from '../utils/helper.js';



const newPayment = asyncHandler(async(req,res) => {

  const { orderId } = req.params
  const { paymentAmount, typeOfPayment } = req.body

  const order = await Order.findById(orderId)

  if(!order) {
      throw new ApiError(400, "Order can't find")
  }

    requredField([paymentAmount, typeOfPayment])

    if(typeOfPayment === paymentType.ONLINE) {
        const payId =  await paymentService(paymentAmount)

        const paymentId =  await Payment.create({
                orderId : order._id,
                userId : req.user._id,
                typeOfPayment : paymentType.ONLINE,
                paymentAmount : paymentAmount,
                rozarPayId : payId
          })

          await Order.findByIdAndUpdate(order._id, {
            $set : {
                paymentId : paymentId?._id
            }
          }, { save : true })

          console.log(paymentId)

          return res.status(201).json(new ApiResponse(201, {paymentId}, ""))

    }





  return res.status(201).json(new ApiResponse(201, {}, ""))
})


export default newPayment;
