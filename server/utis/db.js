const mongoose = require("mongoose");

const URI = process.env.MONGODB_URL;

const connectDb = async () => {
  try {
    mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
