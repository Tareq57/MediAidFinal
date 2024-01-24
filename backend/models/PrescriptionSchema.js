import mongoose from "mongoose"

const prescriptionSchema = new mongoose.Schema(
    {
        prescribedMeds: [
            {
                medicineName: { type: String, required: true },
                dosage: { type: String },
                details: { type: String },
            }
        ],
        appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", required: true },
        symptoms: [{ type: Array }],
        diagnosis: { type: String },
    },
    { timestamps: true }
)

export default mongoose.model("Prescription", prescriptionSchema)