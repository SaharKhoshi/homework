import "dotenv/config"; // require("dotenv").config();
import express from "express";
import dbConnection from "./db/connection.js";
import userRouter from "./routes/user.route.js";
import blogRouter from "./routes/blog.route.js";

const app = express();
const port = process.env.APP_PORT || 3001;









app.listen(port, () => {
    console.log(`app is running on port ${port}`);
  });