import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxLength: 50,
    minLength: 5,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    maxLength: 100,
    minLength: 5,
  },
  displayName: {
    type: String,
    required: true,
    maxLength: 50,
    minLength: 5,
  },
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  chapter: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
    },
  ],
  salt: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
