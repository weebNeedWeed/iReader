import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 200,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  description: {
    type: String,
    maxLength: 1000,
  },
  slug: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
    },
  ],
  tag: {
    type: String,
    required: true,
    default: "",
  },
});

export default mongoose.models.Book || mongoose.model("Book", BookSchema);
