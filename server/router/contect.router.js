const express = require("express")
const router = express.Router()

const contectForm = require("../controllers/contect.controller")

router.route("/contect").post(contectForm)

module.exports = router