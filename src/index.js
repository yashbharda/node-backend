// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import dns from "dns";
import app from './app.js'

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(` Server is running: ${process.env.PORT} `);
      
    })
  })
  .catch((err) => {
    console.log("Mongo DB Connction failed !!!", err);
  });

/*
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
