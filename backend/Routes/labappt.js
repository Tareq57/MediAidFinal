import express from 'express'
import { authenticate, restrict } from '../auth/verifyToken.js'
import {
    addAppointment,
    getTestGroup,
    getPatientGroup,
    addReport
} from '../Controllers/labapptController.js'

const router = express.Router({mergeParams: true})

router.put('/new', authenticate, addAppointment)
router.get('/test/:id', getTestGroup)
router.get('/patient/:id', getPatientGroup)
router.post('/report/:apptid', addReport)

export default router