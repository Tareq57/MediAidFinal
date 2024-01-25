import express from 'express'
import { authenticate, restrict } from '../auth/verifyToken.js'
import {addAppointment, getAppointments, approveAppointment, getCombo, finishAppointment} from '../Controllers/appointmentController.js'

const router = express.Router({mergeParams: true})

router.put('/', authenticate, restrict(['patient']), addAppointment)
router.get('/', authenticate, restrict(['patient', 'doctor']), getAppointments)
router.patch('/:id', authenticate, restrict(['doctor']), approveAppointment)
router.get('/combo', authenticate, getCombo)
router.post('/finish/:id', authenticate, restrict(['doctor']), finishAppointment)

export default router