import mongoose from "mongoose"

const reportSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", default: null },
        test: { type: mongoose.Schema.Types.ObjectId, ref: "Test", required: true },
        fileUrl: { type: String, required: true },
    },
    { timestamps: true }
)

export default mongoose.model("Report", reportSchema)