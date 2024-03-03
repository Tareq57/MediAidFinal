import express from 'express'
import { authenticate, restrict } from '../auth/verifyToken.js'
const router = express.Router({mergeParams: true})
import {
    createNewTest,
    deleteTest,
    fetchSingleTest,
    searchTest,
    createReview,
    deleteReview,
    fetchReviews,
    createSlot,
    deleteSlot,
    fetchSlots
} from '../Controllers/testController.js'

router.put('/createnew', createNewTest)
router.delete('/deleteone/:testid', deleteTest)

router.get('/getone/:testid', fetchSingleTest)
router.get('/search', searchTest)

router.put('/review/create/:testid', authenticate, createReview)
router.delete('/review/deleteone/:reviewid', deleteReview)

router.get('/review', fetchReviews)

router.post('/slot/create', createSlot)
router.delete('/slot/:slotid', deleteSlot)
router.get('/slot/fetch', fetchSlots)

export default router