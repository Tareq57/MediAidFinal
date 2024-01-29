import mongoose from "mongoose"

const testSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description : { type: String, required: true },
        image: {type: String},
        price: {type: Number, required: true},
    }
)

export default mongoose.model("Test", testSchema)