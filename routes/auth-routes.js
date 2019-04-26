const router = require("express").Router();
const passport = require("passport");
const usersController = require("../controllers/users");

router.post("/", usersController.logIn);
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/login" }),
  usersController.googleOAuth
);

//router.get('/facebook', passport.authenticate('facebook'))

module.exports = router;
