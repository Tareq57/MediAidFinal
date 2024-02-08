import Medicine from "../models/MedicineSchema.js"
import Appointment from "../models/AppointmentSchema.js"

export const createNewMedicine = async (req, res) => {
    const newMedicine = new Medicine(req.body)

    try {
        const savedMedicine = await newMedicine.save()
        res.status(200).json({success: true, data: savedMedicine})
    } catch (err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Internal Server Error"})
    }
}

export const searchMedicine = async (req, res) => {
    let name = req.query.name
    let category = req.query.category
    let type = req.query.type
    let manufacturer = req.query.manufacturer

    try {
        const obj = []
        if (name) obj.push({name: {$regex: name, $options: "i"}})
        if (category) obj.push({category: {$regex: category, $options: "i"}})
        if (type) obj.push({type: {$regex: type, $options: "i"}})
        if (manufacturer) obj.push({manufacturer: {$regex: manufacturer, $options: "i"}})

        const medicine = await Medicine.find({ $and: obj })
        res.status(200).json({success: true, data: medicine})
    } catch (err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Internal Server Error"})
    }
}

export const prescriptionSearch = async (req, res) => {
    const apptID = req.query.apptid
    try {
        const appt = await Appointment.findOne({_id: apptID})
        const meds = appt.prescription.prescribedMeds
        const results = []
        for( let i = 0; i < meds.length; i++) {
            let curr = await Medicine.findOne({name: meds[i].medicineName}).select('-overview')
            results.push(curr)
        }
        console.log(results)
        res.status(200).json({success: true, data: results})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Internal Server Error"})
    }
}