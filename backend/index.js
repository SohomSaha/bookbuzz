import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

import cors from "cors";



const app = express();

app.use(cors({
  origin:"http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
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
app.use("/user", userRoute);

//deployment
if(process.env.NODE_ENV === 'production'){
  const dirPath=path.resolve();
  app.use(express.static("frontend/dist"));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"frontend","dist","index.html"));
  })
}



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
