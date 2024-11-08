const User = require("../models/user.model");
const bcypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("home page2");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({message:"email already exists"});
    }

    const userCreate = await User.create({ username, email, phone, password });

    res.status(201).json({
      message: "registration successful",
      token: await userCreate.generateToken(),
      userId: userCreate._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error);
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log({loginEmail:userExist});
    
    if (!userExist) {
      return res.status(401).json({message:"invalid credentials"});
    }

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        message: "login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "invalid email and password" });
    }
  } catch (error) {
    res.status(500).json("internal server error 500");
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log("userData", userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
