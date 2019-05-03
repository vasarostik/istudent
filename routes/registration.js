const router = require('express').Router();
const regController = require("../controllers/registration");

router.post('/student', regController.signUp);

module.exports = router;
