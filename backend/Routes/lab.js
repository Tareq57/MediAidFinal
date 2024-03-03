import express from 'express'
import { authenticate, restrict } from '../auth/verifyToken.js'
import {
    updateLab,
    deleteLab,
    getAllLabs,
    getSingleLab,
} from '../Controllers/labController.js'
const router = express.Router({mergeParams: true})

router.get('/one/:id', getSingleLab)
router.get('/all', getAllLabs)
router.delete('/:id', deleteLab)
router.put('/update/:id', updateLab)

export default router