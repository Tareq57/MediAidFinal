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
    fetchReviews
} from '../Controllers/testController.js'

router.put('/createnew', createNewTest)
router.delete('/deleteone/:testid', deleteTest)

router.get('/getone/:testid', fetchSingleTest)
router.get('/search', searchTest)

router.put('/review/create/:testid', authenticate, createReview)
router.delete('/review/deleteone/:reviewid', deleteReview)

router.get('/review', fetchReviews)

export default router