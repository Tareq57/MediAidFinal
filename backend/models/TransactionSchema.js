import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        type: {
            type: String,
            enum: ["appointment", "test"],
            required: true
        },
        appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
        test: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
        amount: { type: Number, required: true },
        method: {
            type: String,
            enum: ["bkash", "rocket", "nagad", "card"]
        },
        trxId: { type: String },
    },
    { timestamps: true }
)

export default mongoose.model("Transaction", transactionSchema)