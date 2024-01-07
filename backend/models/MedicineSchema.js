import mongoose from "mongoose"

const medicineSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true},
        description : { type: String, required: true },
        image: {type: String},
        prices: [{
            price: {type: Number, required: true},
            unit: {type: String, required: true}
        }]
    }
)

export default mongoose.model("Medicine", medicineSchema)