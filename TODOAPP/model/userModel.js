import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  assigned_To: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  due_date: {
    type: Date,
    require: true,
    default: Date.now,
  },
  priority: {
    type: String,
    require: true,
  },
  comments: {
    type: String,
    require: true,
  },
});

export default mongoose.model("users", userSchema);

