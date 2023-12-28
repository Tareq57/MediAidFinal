import Doctor from '../models/DoctorSchema.js'

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
        res.status(500).json({success: false, msg: "Doctor update failed", error: err})
    }
}

export const getAllDoctors = async(req, res) => {
    try {
        const doctors = await Doctor.find().select('-password')
        res.status(200).json({success: true, msg: "Doctors found", data: doctors})
    } catch(err) {
        res.status(500).json({success: false, msg: "Doctors not found", error: err})
    }
}