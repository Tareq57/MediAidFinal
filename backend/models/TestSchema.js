import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: "A lab test" },
    price: { type: Number, required: true, default: 0},
    photo: { type: String },
    lab: { type: mongoose.Schema.Types.ObjectId, ref: "Lab" },

    avgStars: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    patientCount: { type: Number, default: 0 },
},
{ timestamps: true }
);

export default mongoose.model("Test", TestSchema)
