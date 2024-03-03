import Test from "../models/TestSchema.js"
import Lab from "../models/LabSchema.js"
import TestReview from "../models/TestReviewSchema.js"
import Labappt from "../models/LabapptSchema.js"
import TestSlot from "../models/TestSlotSchema.js"

export const createNewTest = async (req, res) => {
    const newTest = new Test(req.body)

    try {
        await newTest.save()
        const savedTest = await Test.findOne({_id: newTest._id}).populate('lab', '-password')
        res.status(200).json({success: true, data: savedTest})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Internal Server Error"})
    }
}

export const deleteTest = async (req, res) => {
    const testid = req.params.testid

    try {
        await Test.deleteOne({_id: testid})
        res.status(200).json({success: true, msg: "Test deleted"})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Internal Server Error"})
    }
}

export const fetchSingleTest = async(req, res) => {
    const testid = req.params.testid

    try {
        const test = await Test.findOne({_id: testid}).populate('lab', '-password')
        res.status(200).json({success: true, data: test})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Internal Server Error"})
    }
}

export const searchTest = async(req, res) => {
    let name = req.query.name
    let labname = req.query.labname
    let labid = req.query.labid
    let location = req.query.location
    let feelower = req.query.feelower
    let feeupper = req.query.feeupper
    let rating = req.query.rating

    try {
        const obj = []
        if (name) obj.push({name: {$regex: name, $options: "i"}})
        if (labname) {
            const labs = await Lab.find({name: {$regex: labname, $options: "i"}})
            const labids = labs.map(lab => lab._id)
            obj.push({lab: {$in: labids}})
        }
        if (labid) obj.push({lab: labid})
        if (location) obj.push({location: {$regex: location, $options: "i"}})
        if (feelower) obj.push({price: {$gte: feelower}})
        if (feeupper) obj.push({price: {$lte: feeupper}})
        if (rating) obj.push({avgStars: {$gte: rating}})

        let tests = null
        if (obj.length == 0) tests = await Test.find().populate('lab', '-password')
        else tests = await Test.find({ $and: obj }).populate('lab', '-password')
        res.status(200).json({success: true, data: tests})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Internal Server Error"})
    }
}

export const createReview = async(req, res) => {
    const testid = req.params.testid
    const user = req.userId
    const reviewText = req.body.reviewText
    const rating = req.body.rating

    try {
        const newReview = new TestReview({
            test: testid,
            user: user,
            reviewText: reviewText,
            rating: rating
        })
        await newReview.save()

        const test = await Test.findOne({_id: testid})
        let avg = test.avgStars
        let count = test.reviewCount
        let newAvg = (avg * count + rating) / (count + 1)
        count += 1
        test.avgStars = newAvg
        test.reviewCount = count
        await test.save()

        res.status(200).json({success: true, data: newReview})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Internal server error", error: err})
    }
}

export const deleteReview = async(req, res) => {
    const reviewid = req.params.reviewid

    try {
        const review = await TestReview.findOne({_id: reviewid})
        const testid = review.test
        const rating = review.rating

        const test = await Test.findOne({_id: testid})
        let avg = test.avgStars
        let count = test.reviewCount

        let newAvg = 0
        if(count > 1) newAvg = (avg * count - rating) / (count - 1)
        else newAvg = 0
        count -= 1

        test.avgStars = newAvg
        test.reviewCount = count
        await test.save()
        await TestReview.deleteOne({_id: reviewid})
        res.status(200).json({success: true, msg: "Review deleted"})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Internal server error", error: err})
    }
}

export const fetchReviews = async(req, res) => {
    const testid = req.query.testid
    const user = req.query.userid
    let obj = []
    if(testid) obj.push({test: testid})
    if(user) obj.push({user: user})

    try {
        let reviews = null
        if(obj.length == 0) reviews = await TestReview.find().populate('test').populate('user', '-password')
        else reviews = await TestReview.find({ $and: obj }).populate('test').populate('user', '-password')
        res.status(200).json({success: true, data: reviews})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Internal server error", error: err})
    }
}

export const createSlot = async(req, res) => {
    let {testid, starthr, endhr, startmin, endmin, slotDate, patientCount, location} = req.body
    
    try {
        slotDate = new Date(slotDate)
        slotDate.setDate(slotDate.getDate() + 1)
        slotDate.setHours(0, 0, 0)

        const newSlot = new TestSlot({
            test: testid,
            starthr, 
            endhr, 
            startmin, 
            endmin, 
            date: slotDate,
            patientCount,
            location
        })
        await newSlot.save()
        res.status(200).json({success: true, data: newSlot})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "slot creation failed", error: err})
    }
}

export const deleteSlot = async(req, res) => {
    const remId = req.params.slotid

    try {
        await Slot.findByIdAndDelete(remId)
        res.status(200).json({success: true, msg: "Time slot deleted successfully"})
    } catch(error) {
        console.log(error)
        res.status(500).json({success: false, msg: "Time slot deletion failed"})
    }
}

export const fetchSlots = async(req, res) => {
    const testid = req.query.testid
    const slotid = req.query.slotid

    let date = new Date(req.query.date)
    date.setDate(date.getDate() + 1)
    date.setHours(0, 0, 0)

    try {
        let obj = {}
        if(testid) obj.test = testid
        if(slotid) obj._id = slotid
        if(req.query.date) obj.date = date
        const slots = await TestSlot.find(obj).sort({date: -1})

        if(slotid) {
            for(let i=0; i<slots.length; i++) {
                const appointments = await Labappt.find({
                    testSlot: slots[i]._id,
                    status: {$in: ["pending", "approved"]}
                })
                slots[i] = slots[i].toObject()
                slots[i] = {...slots[i], appointments}
            }
        }

        res.status(200).json({success: true, data: slots})
    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, msg: "Internal server error", error: err})
    }
}