import Appointment from '../models/AppointmentSchema.js'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'

export const updateUser = async(req, res) => {
    const id = req.params.id
    
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true})
        res.status(200).json({success: true, msg: "User updated successfully", data: updatedUser})
    } catch(err) {
        res.status(500).json({success: false, msg: "User update failed", error: err})
    }
}

export const deleteUser = async(req, res) => {
    const id = req.params.id
    
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({success: true, msg: "User deleted successfully"})
    } catch(err) {
        res.status(500).json({success: false, msg: "User deletion failed", error: err})
    }
}

export const getSingleUser = async(req, res) => {
    const id = req.params.id
    
    try {
        const user = await User.findById(id).select('-password')
        if(user != null)
            res.status(200).json({success: true, msg: "User found", data: user})
        else
            res.status(404).json({success:false, msg: "User not found", data: null})
    } catch(err) {
        res.status(500).json({success: false, msg: "User not found", error: err})
    }
}

export const getAllUsers = async(req, res) => {
    try {
        const users = await User.find().select('-password')
        res.status(200).json({success: true, msg: "Users found", data: users})
    } catch(err) {
        res.status(500).json({success: false, msg: "Users not found", error: err})
    }
}

export const getAppointments = async(req, res) => {
    try {
        const bookings = await Appointment.find( {user: req.userId} )
        const doctorIds = bookings.map(booking => booking.doctor)
        const doctors = await Doctor.find( {_id: {$in: doctorIds}} ).select('-password')
        res.status(200).json({success: true, msg: "Appointments found", data: doctors})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Appointments not found"})
    }
}

export const getMyDoctors = async(req, res) => {
    try {
        const id = req.userId
        const appointments = await Appointment.find({user: id}).populate('doctor', '-password').populate('slot')
        const doctors = appointments.map(appointment => appointment.doctor)
        res.status(200).json({success: true, msg: "Doctors found", data: doctors})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Couldn't fetch doctors"})
    }
}