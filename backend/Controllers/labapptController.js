import Labappt from "../models/LabapptSchema.js";
import TestSlot from "../models/TestSlotSchema.js";
import Test from "../models/TestSchema.js";

export const addAppointment = async (req, res) => {
    const id = req.userId;
    try {
        const data = req.body
        const labappt = new Labappt({
            test: data.test,
            user: id,
            testSlot: data.testSlot,
        })

        const allAppointments = await Labappt.find({test: labappt.test, testSlot: labappt.testSlot})
        labappt.serial = 1
        for(let i = 0; i < allAppointments.length; i++) {
            if(allAppointments[i].status != "cancelled")
                labappt.serial = labappt.serial + 1
        }
        labappt.status = "approved"
        await labappt.save()

        const testSlot = await TestSlot.findOne({_id: labappt.testSlot})
        testSlot.occupied = testSlot.occupied + 1
        await testSlot.save()

        const test = await Test.findOne({_id: labappt.test})
        test.patientCount = test.patientCount + 1
        await test.save()

        res.status(200).json({success: true, msg: "Appointment added succesfully", data: labappt})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Couldn't add appointment", error: err})
    }
}

export const getTestGroup = async(req, res) => {
    const testId = req.params.id
    const group = req.query.group
    const date = new Date(req.query.date)

    date.setDate(date.getDate() + 1)
    date.setHours(0, 0, 0)

    try {
        let query = {test: testId}
        if(group == "current")
            query.date = date
        else if(group == "upcoming")
            query.date = {$gt: date}
        else if(group == "past") {
            query.date = {$lt: date}
            query.status = "finished"
        }

        let testSlots = await TestSlot.find(query).populate('test').sort({date: -1})
        for(let i=0; i < testSlots.length; i++) {
            let appointments = await Labappt.find({test: testId, testSlot: testSlots[i]._id})
            testSlots[i] = testSlots[i].toObject()
            testSlots[i] = {...testSlots[i], appointments}
        }

        res.status(200).json({success: true, msg: "Test slots found", data: testSlots})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Couldn't fetch test slots"})
    }
}

export const getPatientGroup = async(req, res) => {
    const patientId = req.params.id
    const group = req.query.group
    const date = new Date(req.query.date)

    date.setDate(date.getDate() + 1)
    date.setHours(0, 0, 0)

    try {
        let labappts = await Labappt.find({user: patientId}).populate('testSlot').sort({createdAt: -1})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Couldn't fetch appointments"})
    }
}