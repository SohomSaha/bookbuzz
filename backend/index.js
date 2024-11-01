import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
const URI = process.env.MongoDbURI;

//connect to mongodb
try {
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to MongoDb");
} catch (error) {
  console.error("Error connecting to MongoDB", error);
}

//define routes
app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
