import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 200,
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
});

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
