import mongoose from "mongoose";

const LabSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    name: { type: String, required: true },
    photo: { type: String },
    role: { type: String, default: "company" },
},
{ timestamps: true }
);

export default mongoose.model("Lab", LabSchema)
