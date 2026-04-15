import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import { requiredField } from '../utils/helper.js';
import Reservation from '../models/reservation.models.js';
import ApiError from '../utils/ApiError.js';
import { tableReservationStatus } from '../utils/constants.js';
import User from '../models/user.models.js';
import { emailService } from '../services/email.service.js';


const newTableReservation = asyncHandler(async(req,res) => {


  const { tableNo, startTime, endTIme, date, noOfGuest, name, SpecialRequests } = req.body


    requiredField([tableNo, startTime, endTIme, date, noOfGuest])

    if(SpecialRequests === undefined) {
      SpecialRequests = ""
    }

    const tableResereve = {
      name : name ? name :  req.user?.fullName,
      phoneNumber : phoneNumber ?  phoneNumber :   req.user?.phoneNumber,
      tableNo : tableNo,
      startTime : new Date(startTime),
      endTIme : new Date(endTIme),
      date : new Date(date),
      noOfGuest : noOfGuest,
      SpecialRequests : SpecialRequests
    }

  return res.status(200).json(new ApiResponse(200, {}, "Your table was reserve will email it on confirmation"))
})

const tableReservationStatusAndSendEmailOnConfirmation = asyncHandler(async(req,res) => {

    const { tableNo, status } = req.body
    const { tableReservationId } = req.params

    requiredField([ status])

    const tableReservation = await Reservation.findById(tableReservationId)

    if(!tableReservation) {
       throw new ApiError(400, "Reservation will be not exists")
    }


    const updateData = {
        tableReservationStatus : status,
        tableNo : tableNo,
    }



          const reservation = await Reservation
          .findByIdAndUpdate(tableReservation?._id, {
                $set : {
                  updateData
                }
            }, { save : true })

              if(!reservation) {
                throw new ApiError(400, "Can't reservation update")
              }

            const reservationUser =  await User.findById(tableReservation.reservationUserId)

            if(!reservationUser) {
              throw new ApiError(400, "Resrevation user Can't find")
            }


              if(reservation.tableReservationStatus === tableReservationStatus.CONFIRM) {
                /*
              todo : email sent on user email table confirmation
                emailId : req.user?.email
                subject : req.user.fullName
                reservation.table no. table will be book on date and it's start time and end time with noOf guest
              */
                try {
                  await emailService(
                      tableReservation.reservationUserEmail ,
                      tableReservation.name,
                      status = reservation.tableReservationStatus,
                      tableNo = reservation.tableNo,
                      noOfGuest = tableReservation.noOfGuests,
                      tableReservation.date,
                      tableReservation.startTime,
                      tableReservation.endTime,
                      tableReservation?._id
                  )
                  console.log("Email for confirm your slot of no of guest on table")
                } catch (error) {
                    throw new ApiError(400, error.message || "faild to send email of user")
                }
              }
  return res.status(200).json(new ApiResponse(200, {}, "Table reservation will update"))
          })



export {
  newTableReservation,
  tableReservationStatusAndSendEmailOnConfirmation
}
