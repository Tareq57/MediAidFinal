import mongoose from "mongoose"

const TestSlotSchema = new mongoose.Schema({
    test: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test",
        required: true
    },

    starthr: Number, 
    startmin: Number, 
    endhr: Number, 
    endmin: Number, 
    date: Date,
    patientCount: {
        type: Number,
        default: 1
    },
    occupied: {
        type: Number,
        default: 0
    },
    done: {
        type: Number,
        default: 0
    },
    location: {
        type: String,
        default: ""
    }
},
{ timestamps: true }
)

export default mongoose.model("TestSlot", TestSlotSchema)