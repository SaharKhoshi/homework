import "dotenv/config"; // require("dotenv").config();
import express from "express";
import dbConnection from "./db/connectDB.js";
import userRouter from "./routes/members.route.js";


const app = express();
const port = process.env.APP_PORT || 3001;


app.use(express.json());

app.use("/users", userRouter);

await dbConnection();


app.listen(port, () => {
    console.log(`app is running on port ${port}`);
  });