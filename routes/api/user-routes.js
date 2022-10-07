// Importing Express
const router = require("express").Router();

const {
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  getAllUsers,
  getUserById,
} = require("../../controllers/user-controller");

// Setting CRUD for user route
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;