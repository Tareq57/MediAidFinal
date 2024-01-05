import express from 'express'
import { authenticate, restrict } from '../auth/verifyToken.js'
import {addAppointment, getAppointments, approveAppointment} from '../Controllers/appointmentController.js'

const router = express.Router({mergeParams: true})

router.put('/', authenticate, restrict(['patient']), addAppointment)
router.get('/', authenticate, restrict(['patient', 'doctor']), getAppointments)
router.patch('/:id', authenticate, restrict(['doctor']), approveAppointment)

export default router