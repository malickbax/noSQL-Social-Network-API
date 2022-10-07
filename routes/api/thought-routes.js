// Importing express
const router = require("express").Router();

// Setting CRUD for thoughts + reaction
const {
  addReaction,
  deleteReaction,
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

// Setting routes for thoughts - GET, add, create, delete 
router.route("/").get(getAllThoughts).post(createThought);
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);
router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

// Exporting thought route
module.exports = router;