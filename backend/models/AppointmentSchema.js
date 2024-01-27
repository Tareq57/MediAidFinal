import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: { type: Number, required: true },

    slot: {
      type: mongoose.Types.ObjectId,
      ref: "Slot",
      required: true,
    },
    serial: {
      type: Number,
      required: true,
      default: -1,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "cancelled", "finished"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: false,
    },

    prescription: {
      weight: { type: Number },
      prescribedMeds: [
        {
          medicineName: { type: String, required: true },
          dosage: { type: String },
          details: { type: String },
        }
      ],
      // appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", required: true },
      symptoms: [{ type: String }],
      diagnosis: [{ type: String }],
      advice: [{ type: String }],
      tests: [{ type: String }],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
