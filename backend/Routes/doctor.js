import {updateDoctor, deleteDoctor, getAllDoctors, getSingleDoctor} from '../Controllers/doctorController.js'
import express from 'express'

import { authenticate, restrict } from '../auth/verifyToken.js'

// import reviewRouter from './review.js'

const router = express.Router({mergeParams: true})

// router.use("/:doctorId/review", reviewRouter)

router.get('/:id', authenticate, getSingleDoctor)
router.get('/', authenticate, getAllDoctors)
router.put('/:id', authenticate, restrict(['doctor', 'admin']), updateDoctor)
router.delete('/:id', authenticate, restrict(['doctor', 'admin']), deleteDoctor)

export default router