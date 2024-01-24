import Doctor from '../models/DoctorSchema.js'
import Slot from '../models/SlotSchema.js'
import { ObjectId } from "mongodb"

export const updateDoctor = async(req, res) => {
    const id = req.params.id
    
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, {$set:req.body}, {new:true})
        res.status(200).json({success: true, msg: "Doctor updated successfully", data: updatedDoctor})
    } catch(err) {
        res.status(500).json({success: false, msg: "Doctor update failed", error: err})
    }
}

export const deleteDoctor = async(req, res) => {
    const id = req.params.id
    
    try {
        await Doctor.findByIdAndDelete(id)
        res.status(200).json({success: true, msg: "Doctor deleted successfully"})
    } catch(err) {
        res.status(500).json({success: false, msg: "Doctor deletion failed", error: err})
    }
}

export const getSingleDoctor = async(req, res) => {
    const id = req.params.id
    
    try {
        const doctor = await Doctor.findById(id).select('-password').populate('specialization')
        if(doctor != null)
            res.status(200).json({success: true, msg: "Doctor found", data: doctor})
        else
            res.status(404).json({success:false, msg: "Doctor not found", data: null})
    } catch(err) {
        res.status(500).json({success: false, msg: "Doctor not found", error: err})
    }
}

export const searchDoctors = async(req, res) => {
    try {
        const {query} = req.query
        let doctors

        if(query) {
            doctors = await Doctor.find({
                // isApproved: "approved",
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: "i" } },
                ]
            }).select('-password').populate('specialization')
        }
        else {
            // doctors = await Doctor.find({isApproved: "approved"}).select('-password')
            doctors = await Doctor.find().select('-password').populate('specialization')
        }

        res.status(200).json({success: true, msg: "Doctors found", data: doctors})
    } catch(err) {
        res.status(500).json({success: false, msg: "Doctors not found", error: err})
    }
}

export const addTimeSlot = async(req, res) => {
    const id = req.userId
    const {starthr, endhr, startmin, endmin, day, month, year, patientCount} = req.body

    try {
        const newSlot = new Slot({
            doctor: id,
            starthr, 
            endhr, 
            startmin, 
            endmin, 
            day, 
            month, 
            year,
            patientCount
        })
        newSlot.save()
        res.status(200).json({success: true, msg: "Time slot added successfully", data: newSlot})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Time slot addition failed", error: err})
    }
}

export const deleteTimeSlot = async(req, res) => {
    const remId = req.params.id

    try {
        Slot.findByIdAndDelete(remId)
        res.status(200).json({success: true, msg: "Time slot deleted successfully"})
    } catch(error) {
        console.log(error)
        res.status(500).json({success: false, msg: "Time slot deletion failed"})
    }
}

export const updateTimeSlot = async(req, res) => {
    const id = req.params.id
    try {
        const updatedSlot = Slot.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).json({success: true, msg: "Time slot updated successfully", data: updatedSlot})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Time slot update failed"})
    }
}

export const getTimeSlotsById = async(req, res) => {
    let id = req.params.id
    id = new ObjectId(id)
    try {
        const slots = await Slot.find({doctor: id})
        res.status(200).json({success: true, msg: "Time slots fetched successfully", data: slots})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Time slot fetch failed"})
    }
}