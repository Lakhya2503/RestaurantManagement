import Rozarpay from 'razorpay'
import { rozarPayKeyId, rozarPayKeySecret } from '../utils/config.js';

const rozarpay = new Rozarpay({
   key_id : rozarPayKeyId,
   key_secret : rozarPayKeySecret
})


const paymentService = async(amount) => {
  const options = {
     amount : amount,
     currency : "INR",
     receipt : "receipt_" + Date.now(),
  }

  return await rozarpay.orders.create(options)
}

export default paymentService
