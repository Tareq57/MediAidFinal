import express from 'express'
import { authenticate, restrict } from '../auth/verifyToken.js'
const router = express.Router({mergeParams: true})
import {createNewMedicine, prescriptionSearch, searchMedicine} from '../Controllers/medicineController.js'

router.put('/', createNewMedicine)
router.get('/search', searchMedicine)
router.get('/presc/:apptid', prescriptionSearch)

export default router