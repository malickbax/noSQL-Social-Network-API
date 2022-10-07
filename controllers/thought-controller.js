// Adding the required models
const { Thought, User } = require("../models");
const thoughtController = {
    getAllThoughts(req, res) {
    Thought.find({})
    .populate({
    path: "reactions",
    select: "",
      })
      .populate({
        path: "thoughts",
            select: "",
      })
      .select("")
.then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
// Message below will be displayed in Insomnia if no thought is found
        res.status(404).json({ message: "No thought found" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  createThought({ body }, res) {
    console.log(body);
    Thought.create(body)
      .then((thoughtData) => {
// CREDIT: Section worked on with collaboration from coder colleague Brams Lo
    return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: thoughtData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
    // Message below will be displayed in Insomnia if no user is found
          res.status(404).json({ message: "No user found" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then((dbThoughtData) => {
        if (!dbThoughtData) {
        // Message below will be displayed in Insomnia if no thought is found
          res.status(404).json({ message: "No thought found" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
        .then((dbThoughtData) => {
        if (!dbThoughtData) {
        // Message below will be displayed in Insomnia if no thought is found
          res.status(404).json({ message: "No thought found" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $addToSet: { reactions: body } },
        { new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
        // Message below will be displayed in Insomnia if no thought is found
          res.status(404).json({ message: "No though found" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },

deleteReaction({ params }, res) {
Thought.findOneAndUpdate(
    { _id: params.thoughtId },
    { $pull: { reactions: { reactionId: params.reactionId } } },
    { new: true }
)
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;