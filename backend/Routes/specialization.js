import express from "express"
import { getAllSpecializations, addSpecialization, deleteSpecialization } from "../Controllers/specializationController.js"

const router = express.Router({mergeParams: true})

router.get('/', getAllSpecializations)
//TODO: Restrict to admin only
router.put('/', addSpecialization)
router.put('/:id', deleteSpecialization)

export default router