import mongoose from "mongoose"

const medicineSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        type: {type: String, required: true},
        category: { type: String, required: true},
        manufacturer: {type: String, required: true},
        image: {type: String},
        overview: {type: String},
        review: [
            {
                user: {type: mongoose.Types.ObjectId, ref: "User"},
                rating: {type: Number, required: true},
                review: {type: String, required: true}
            }
        ]
    }
)

export default mongoose.model("Medicine", medicineSchema)