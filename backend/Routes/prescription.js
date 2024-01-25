import express from 'express'
import { authenticate, restrict } from '../auth/verifyToken.js'
import { addPrescription, deletePrescription } from '../Controllers/prescriptionController.js'

const router = express.Router({mergeParams: true})

router.post('/:appointmentId', authenticate, restrict(['doctor']), addPrescription)
router.delete('/:appointmentId', authenticate, restrict(['doctor']), deletePrescription)

export default router