import Lab from "../models/LabSchema.js";

export const updateLab = async(req, res) => {
    const id = req.params.id
    try {
        const updatedLab = await Lab.findByIdAndUpdate(id, {$set:req.body}, {new:true})
        res.status(200).json({success: true, msg: "Lab updated successfully", data: updatedLab})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "update failed", error: err})
    }
}

export const deleteLab = async(req, res) => {
    const id = req.params.id
    try {
        await Lab.findByIdAndDelete(id)
        res.status(200).json({success: true, msg: "Lab deleted successfully"})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "delete failed", error: err})
    }
}

export const getSingleLab = async(req, res) => {
    const id = req.params.id
    try {
        const user = await Lab.findById(id).select('-password')
        if(user != null)
            res.status(200).json({success: true, msg: "Lab found", data: user})
        else
            res.status(404).json({success:false, msg: "Lab not found", data: null})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Lab not found", error: err})
    }
}

export const getAllLabs = async(req, res) => {
    try {
        const users = await Lab.find().select('-password')
        res.status(200).json({success: true, msg: "Labs found", data: users})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Labs not found", error: err})
    }
}