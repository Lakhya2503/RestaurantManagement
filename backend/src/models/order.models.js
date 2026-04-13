import mongoose from 'mongoose'
import { orderTypeEnums } from '../utils/constants.js'

const orderSchema = new mongoose.Schema(
  {
      orderType : {
        type : String,
        default : orderTypeEnums.HOMEDELIVERY ,
        enum : orderTypeEnums
      },
      userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
      },
      items : [
        {
            itemId : {
              type : mongoose.Schema.Types.ObjectId,
              ref : "Menu"
            }
        }
      ],
      orderStatus : {
        type : String,
        default : OrderStatusEnums.PENDING,
        enums : OrderStatusEnums
      }
  }, { timestamps : true }
)

const Order = mongoose.model("Order", orderSchema)
export default Order;
