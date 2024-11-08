const User = require("../models/user.model");
const Contect = require("../models/contect.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log("admin user", users);

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;

    const updateData = await User.updateOne(
      { _id: id },
      { $set: updateUserData }
    );
    return res.status(200).json(updateData)
  } catch (error) {
    next(error);
  }
};

const adminUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successful" });
  } catch (error) {
    next(error);
  }
};

const getAllContect = async (req, res) => {
  try {
    const contect = await Contect.find();
    console.log(contect);
    if (!contect || contect.length === 0) {
      return res.status(404).json({ message: "No Contect Found" });
    }
    return res.status(200).json(contect);
  } catch (error) {
    next(error);
  }
};

const deleteContectById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contect.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contect Deleted Successful" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContect,
  adminUserById,
  getUserById,
  updateUserById,
  deleteContectById
};
