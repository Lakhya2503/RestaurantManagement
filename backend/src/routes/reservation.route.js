import Router from 'express'
import {
  newTableReservation,
   tableReservationStatusAndSendEmailOnConfirmation
   } from '../controller/reservation.controller.js'

const router = Router()

router.route("/new-reserve").post(newTableReservation)

router.route("/update-reservation/:tableReservationId").post(tableReservationStatusAndSendEmailOnConfirmation)



export default router
