import Test from "../models/TestSchema.js"
import Lab from "../models/LabSchema.js"
import TestReview from "../models/TestReviewSchema.js"

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

    try {
        const obj = []
        if (name) obj.push({name: {$regex: name, $options: "i"}})
        if (labname) {
            const labs = await Lab.find({name: {$regex: labname, $options: "i"}})
            const labids = labs.map(lab => lab._id)
            obj.push({lab: {$in: labids}})
        }
        if (labid) obj.push({lab: labid})

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