import mongoose from 'mongoose'

const resevationSchema = new mongoose.Schema(
  {
    name : {
      type : String,
      require : true,
      trim : true
    },
    PhoneNumber : {
      type : Number,
      required : true
    },
    noOfGuests : {
      type : Number ,
      required : true
    },
    StartTime : {
      type : Date,
      required : true
    },
    tableNo : {
      type : Number,
      required : true
    },
    endTime : {
      type : Date,
      required : true
    },
    SpecialRequests : {
      type : String,
      default : ""
    }
   }, { timestamps : true }
)


const Reservation = mongoose.model("Reservation", resevationSchema)
export default Reservation;
