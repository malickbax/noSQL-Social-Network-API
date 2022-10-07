// Setting express as requirement for routes and importing additional routes
const router = require("express").Router();
const apiRoutes = require("./api");
router.use("/api", apiRoutes);

// Setting request and response for use
router.use((req, res) => {
  res.status(404).send("<h1>Error 404</h1>");
});

module.exports = router;