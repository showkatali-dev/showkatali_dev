import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  technologies: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  live: {
    type: String,
    required: true,
  },
});

export const ProjectModel =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
