import {updateUser, deleteUser, getAllUsers, getSingleUser, getAppointments} from '../Controllers/userController.js'
import express from 'express'

import {authenticate, restrict} from '../auth/verifyToken.js'

const router = express.Router()
router.get('/:id', authenticate, restrict(['patient', 'admin']), getSingleUser)
router.get('/', authenticate, restrict(['admin']), getAllUsers)
router.put('/:id', authenticate, restrict(['patient', 'admin']), updateUser)
router.delete('/:id', authenticate, restrict(['patient', 'admin']), deleteUser)
router.get('/appointments', authenticate, restrict(['patient', 'admin']), getAppointments)

export default router