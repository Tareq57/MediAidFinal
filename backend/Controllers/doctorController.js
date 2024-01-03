import Doctor from '../models/DoctorSchema.js'
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
        const doctor = await Doctor.findById(id).select('-password')
        if(doctor != null)
            res.status(200).json({success: true, msg: "Doctor found", data: doctor})
        else
            res.status(404).json({success:false, msg: "Doctor not found", data: null})
    } catch(err) {
        res.status(500).json({success: false, msg: "Doctor not found", error: err})
    }
}

export const getAllDoctors = async(req, res) => {
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
            }).select('-password')
        }
        else {
            doctors = await Doctor.find({isApproved: "approved"}).select('-password')
        }

        res.status(200).json({success: true, msg: "Doctors found", data: doctors})
    } catch(err) {
        res.status(500).json({success: false, msg: "Doctors not found", error: err})
    }
}

export const addTimeSlot = async(req, res) => {
    const id = req.userId
    const timeSlot = req.body
    console.log(timeSlot)

    try {
        await Doctor.updateOne(
            {_id: new ObjectId(id)},
            {$push: {timeSlots: timeSlot}}
        )
        console.log("Time slot added successfully")
        const result = await Doctor.findById(id).select('timeSlots')
        res.status(200).json({success: true, msg: "Time slot added successfully", timeslots: result.timeSlots})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Time slot addition failed", error: err})
    }
}

export const deleteTimeSlot = async(req, res) => {
    const remId = req.params.id

    try {
        const doctor = await Doctor.findById(req.userId)
        await doctor.timeSlots.pull({_id: remId})
        await doctor.save()
        res.status(200).json({success: true, msg: "Time slot deleted successfully"})
    } catch(error) {
        console.log(error)
        res.status(500).json({success: false, msg: "Time slot deletion failed"})
    }
}