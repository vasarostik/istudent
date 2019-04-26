const router = require("express").Router();
const profileController = require("../controllers/profile");

router.get("/", profileController.getAllUser);
router.get("/me", profileController.getCurrentUser)

module.exports = router;