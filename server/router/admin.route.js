const express = require("express");
const {
  getAllUsers,
  getAllContect,
  adminUserById,
  getUserById,
  updateUserById,
  deleteContectById,
} = require("../controllers/admin.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddlware = require("../middlewares/admin.middeware");
const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddlware, getAllUsers);

router.route("/users/:id").get(authMiddleware, adminMiddlware, getUserById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddlware, updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddlware, adminUserById);

router.route("/contect").get(authMiddleware, adminMiddlware, getAllContect);

router
  .route("/contects/delete/:id")
  .delete(authMiddleware, adminMiddlware, deleteContectById);
module.exports = router;
