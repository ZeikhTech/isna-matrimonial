import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
  { usePushEach: true }
);
module.exports = mongoose.models.user || mongoose.model("user", userSchema);
// let User = mongoose.model("users", userSchema);
// export default User;
