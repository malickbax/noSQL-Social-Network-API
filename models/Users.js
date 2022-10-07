// Requiring mongoose for the User model
const { Schema, model } = require("mongoose");

// CREDIT: Section below worked on with collaboration from coder colleague Brams Lo
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,

//   Creating restrictions for email address caracters
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Invalid email address. Please try again.",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
});

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
const User = model("User", userSchema);

module.exports = User;