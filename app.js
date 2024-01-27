import express from "express";
import {} from "dotenv/config";
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import router from "./routes.js";

const app = express();

const PORT = process.env.PORT || 5000;
// const MongoDBclient = new MongoClient(`${process.env.DB_URL}`);

app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    // await MongoDBclient.connect();
    await mongoose.connect(process.env.DB_URL);
    console.log("Connection to DB good!");

    app.listen(PORT, () => {
      console.log(`App started on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();

// export default MongoDBclient;
