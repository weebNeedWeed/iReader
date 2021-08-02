import mongoose from "mongoose";

const ChapterSchema = new mongoose.Schema({
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
  slug: {
    type: String,
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Book",
  },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

export default mongoose.models.Chapter ||
  mongoose.model("Chapter", ChapterSchema);
