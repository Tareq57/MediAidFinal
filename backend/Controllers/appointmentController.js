import Appointment from '../models/AppointmentSchema.js';

export const addAppointment = async (req, res) => {
    const id = req.userId
    try {
        const data = req.body
        const appointment = new Appointment({
            doctor: data.doctor,
            user: id,
            ticketPrice: data.ticketPrice,
            slot: data.timeSlot,
        })
        await appointment.save()
        res.status(200).json({success: true, msg: "Appointment added succesfully", appointment})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Couldn't add appointment"})
    }
}

export const getAppointments = async (req, res) => {
    const id = req.userId
    const role = req.role
    try {
        let appointments
        if (role === 'patient')
            appointments = await Appointment.find({user: id}).populate('doctor', '-password').populate('slot')
        else if (role === 'doctor')
            appointments = await Appointment.find({doctor: id}).populate('user', '-password').populate('slot')
        else
            res.status(401).json({success: false, msg: "Unauthorized"})
        res.status(200).json({success: true, appointments})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Couldn't fetch appointments"})
    }
}

export const approveAppointment = async (req, res) => {
    const id = req.params.id
    try {
        const appointment = await Appointment.findOne({_id: id})

        if(appointment.status == "cancelled")
            return res.status(200).json({success: false, msg: "Appointment cancelled by patient"})

        if(appointment.status == "approved")
            return res.status(200).json({success: true, msg: "Appointment approved successfully", data: appointment})

        const allAppointment = await Appointment.find({doctor: appointment.doctor, slot: appointment.slot})
        appointment.serial = 1
        for(let i = 0; i < allAppointment.length; i++) {
            if(allAppointment[i].status == "approved")
                appointment.serial = allAppointment[i].serial + 1
        }
        appointment.status = "approved"
        await appointment.save()
        return res.status(200).json({success: true, msg: "Appointment approved successfully", data: appointment})
    } catch (err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Couldn't approve appointment"})
    }
}