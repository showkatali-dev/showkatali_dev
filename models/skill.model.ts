import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export const SkillModel =
  mongoose.models.Skill || mongoose.model("Skill", skillSchema);
