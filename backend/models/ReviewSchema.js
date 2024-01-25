import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
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
    reviewText: {
      type: String,
      // required: true,
      default: null,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 5,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
