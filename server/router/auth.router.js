const express = require("express")
const router = express.Router();
const {home, register, login, user } = require("../controllers/auth.controllers")
const {signupSchema, loginSchima} = require("../validators/auth.validata")
const validate = require("../middlewares/walidate.middelevare")
const authMiddleware = require("../middlewares/auth.middleware")

router.get("/", home)
router.route("/register").post(validate(signupSchema), register)
router.route("/login").post(validate(loginSchima), login)

router.route("/user").get(authMiddleware, user)

module.exports = router;