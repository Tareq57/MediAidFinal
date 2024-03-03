import mongoose from "mongoose";

const labapptSchema = new mongoose.Schema(
  {
    test: {
      type: mongoose.Types.ObjectId,
      ref: "Test",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: { type: Number, required: true },

    testSlot: {
      type: mongoose.Types.ObjectId,
      ref: "TestSlot",
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

    reportLink: {type: String, default: ""},
  },
  { timestamps: true }
);

export default mongoose.model("Labappt", labapptSchema);
