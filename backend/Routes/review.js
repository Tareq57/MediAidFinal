import express from "express"
import { getAllReviews, createReview } from "../Controllers/reviewController.js"
import { authenticate, restrict } from "../auth/verifyToken.js"

const router = express.Router()
router.get('/', authenticate, getAllReviews)
router.post('/', authenticate, restrict(['patient']), createReview)
export default router