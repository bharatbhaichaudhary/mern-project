const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userChema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userChema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(user.password, saltRound);
    user.password = hashPass;
  } catch (error) {
    next(error);
  }
});


userChema.methods.comparePassword = async function(password){
 return bcrypt.compare(password, this.password);
}
userChema.methods.generateToken = async function(){
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin
      },
      process.env.JWT_SECRT_KEY,
      {
        expiresIn:"50d"
      }
    )
  } catch (error) {
    console.error(error)
  }
}

const User = new mongoose.model("User", userChema);

module.exports = User;
