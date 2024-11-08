require("dotenv").config();
const express = require("express");
const authRouter = require("./router/auth.router");
const contectRouter = require("./router/contect.router");
const service = require("./router/service.router");
const adminRoute = require("./router/admin.route");
const cors = require("cors");
const app = express();
const connectDb = require("./utis/db");
const errorMiddleware = require("./middlewares/error.middlewar");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contectRouter);
app.use("/api/data", service);

app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(9000, () => {
    console.log("server is running");
  });
});
