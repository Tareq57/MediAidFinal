import express from 'express'
import { authenticate, restrict } from '../auth/verifyToken.js'
import {

} from '../Controllers/labapptController.js'

const router = express.Router({mergeParams: true})



export default router