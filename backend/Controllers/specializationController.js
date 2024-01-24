import Specialization from '../models/SpecializationSchema.js'

export const getAllSpecializations = async(req, res) => {
    try {
        const specializations = await Specialization.find()
        res.status(200).json({success: true, msg: "Specializations found", data: specializations})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Specializations not found", error: err})
    }
}

export const addSpecialization = async(req, res) => {
    try {
        const specialization = await Specialization.create(req.body)
        res.status(200).json({success: true, msg: "Specialization added successfully", data: specialization})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Specialization addition failed", error: err})
    }
}

export const deleteSpecialization = async(req, res) => {
    try {
        const {id} = req.params
        await Specialization.findByIdAndDelete(id)
        res.status(200).json({success: true, msg: "Specialization deleted successfully"})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Specialization deletion failed", error: err})
    }
}