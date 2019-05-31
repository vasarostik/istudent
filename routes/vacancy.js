const router = require("express").Router();
const vacancy = require("../controllers/vacancy");
router.get("/", vacancy.findAll);
// router.post("/", vacancy.findVacancyByData);
// router.put("/",vacancy.updateVacancy);
// router.delete("/", vacancy.deleteVacancy());

module.exports = router;