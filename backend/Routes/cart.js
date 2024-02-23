import express from 'express'
import { authenticate, restrict } from '../auth/verifyToken.js'
import {
    modifyCart,
    clearCart
} from '../Controllers/cartController.js'
const router = express.Router({mergeParams: true})

router.post('/modify/:userid', modifyCart)
router.post('/clear/:userid', clearCart)

export default router